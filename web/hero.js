/* GRIP IT — 손 시퀀스 배경 연출
   04번 §7-1: 히어로에서 시작해 데모 영역까지 이어지는 하나의 연출.
     1단계 양쪽에서 손이 들어온다      → 페이지 상단
     2단계 가운데서 만나 움켜쥔다      → 스크롤 중반
     3단계 쥐는 순간 빛이 터진다        → 프레임 11~13
     4단계 하단으로 내려가 받침이 된다  → S6 진입 직전
     5단계 그 받침 위에서 S6 4컷이 흐른다
   데모가 끝나면 배경을 걷어 S7 이후는 평면으로 둔다. */
(function () {
  "use strict";

  var TOTAL = 20;
  var GRIP_FROM = 11;   /* 빛이 시작되는 프레임 */
  var GRIP_PEAK = 12;   /* 빛이 가장 강한 프레임 */
  var GRIP_TO = 14;     /* 빛이 잦아드는 프레임 */

  var SCRIM_MIN = 0.12;   /* 히어로 — 손이 또렷하게 보인다 */
  var SCRIM_MAX = 0.80;   /* 산문 구간 — 글자가 배경과 다투지 않는다 */

  var stage = document.getElementById("hand-stage");
  var img = document.getElementById("hand-frame");
  var flash = document.getElementById("hand-flash");
  var scrim = document.querySelector(".hand-scrim");
  var demo = document.querySelector("#s6 .demo");
  if (!stage || !img) return;

  function src(n) {
    return "assets/hand/hand-" + (n < 10 ? "0" + n : String(n)) + ".jpg";
  }

  /* 프레임 선행 로딩 — 스크롤 중에 빈 칸이 보이지 않게 한다 */
  for (var i = 1; i <= TOTAL; i++) {
    var pre = new Image();
    pre.src = src(i);
  }

  /* 화면이 좁으면 프레임을 솎아 쓴다 (04번 §7-1 반응형) */
  function step() {
    return window.innerWidth < 720 ? 2 : 1;
  }

  function clamp01(v) {
    return v < 0 ? 0 : (v > 1 ? 1 : v);
  }

  function docTop(el) {
    return el.getBoundingClientRect().top + window.pageYOffset;
  }

  var current = 0;
  var ticking = false;

  function render() {
    ticking = false;

    var y = window.pageYOffset;
    var vh = window.innerHeight;

    /* 프레임 진행 구간: 페이지 최상단 → 데모가 화면에 들어오기 직전.
       그 지점에서 손은 이미 받침(20프레임)이 되어 있어야 한다. */
    var demoTop = demo ? docTop(demo) : vh * 4;
    var span = Math.max(vh, demoTop - vh * 0.55);
    var progress = clamp01(y / span);

    var n = Math.round(progress * (TOTAL - 1)) + 1;
    var s = step();
    if (s > 1) n = Math.min(TOTAL, Math.round((n - 1) / s) * s + 1);

    if (n !== current) {
      current = n;
      img.src = src(n);
    }

    /* 쥐는 순간의 빛 */
    if (flash) {
      var glow = 0;
      if (n >= GRIP_FROM && n <= GRIP_TO) {
        glow = 1 - Math.abs(n - GRIP_PEAK) / (GRIP_TO - GRIP_FROM);
        if (glow < 0) glow = 0;
      }
      flash.style.opacity = String(glow);
    }

    /* 막의 농도 — 히어로를 지나 산문이 시작되면 짙어진다 */
    if (scrim) {
      var dense = clamp01((y - vh * 0.35) / (vh * 0.75));
      scrim.style.setProperty("--scrim", String(SCRIM_MIN + (SCRIM_MAX - SCRIM_MIN) * dense));
    }

    /* 데모가 끝나면 배경을 걷는다 — S7 이후 본문은 평면으로 읽힌다 */
    var fade = 0;
    if (demo) {
      var demoBottom = docTop(demo) + demo.offsetHeight;
      fade = clamp01((y + vh - demoBottom) / (vh * 0.6));
    }
    stage.style.opacity = String(1 - fade);
    stage.style.visibility = fade >= 1 ? "hidden" : "visible";
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(render);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  window.addEventListener("load", render);
  render();
})();
