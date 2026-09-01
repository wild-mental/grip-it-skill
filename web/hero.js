/* GRIP IT — 히어로 손 시퀀스
   스크롤 진행도를 20장 프레임에 매핑하고, 쥐는 순간(11~13프레임)에 빛을 터뜨린다.
   04번 §7-1·§7-6: 움직이는 곳은 히어로와 S1 두 군데뿐이다. */
(function () {
  "use strict";

  var TOTAL = 20;
  var GRIP_FROM = 11;   /* 빛이 시작되는 프레임 */
  var GRIP_PEAK = 12;   /* 빛이 가장 강한 프레임 */
  var GRIP_TO = 14;     /* 빛이 잦아드는 프레임 */

  var img = document.getElementById("hand-frame");
  var flash = document.getElementById("hand-flash");
  var hero = document.getElementById("s0");
  if (!img || !hero) return;

  function src(n) {
    return "assets/hand/hand-" + (n < 10 ? "0" + n : String(n)) + ".jpg";
  }

  /* 프레임 선행 로딩 — 스크롤 중에 빈 칸이 보이지 않게 한다 */
  var frames = [];
  for (var i = 1; i <= TOTAL; i++) {
    var pre = new Image();
    pre.src = src(i);
    frames.push(pre);
  }

  /* 화면이 좁으면 프레임을 솎아 쓴다 (04번 §7-1 반응형) */
  function step() {
    return window.innerWidth < 720 ? 2 : 1;
  }

  var current = 0;
  var ticking = false;

  function render() {
    ticking = false;

    var rect = hero.getBoundingClientRect();
    var span = rect.height - window.innerHeight;
    var progress = span > 0 ? (-rect.top) / span : (rect.top <= 0 ? 1 : 0);
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    var n = Math.round(progress * (TOTAL - 1)) + 1;
    var s = step();
    if (s > 1) n = Math.min(TOTAL, Math.round((n - 1) / s) * s + 1);

    if (n !== current) {
      current = n;
      img.src = src(n);
    }

    if (flash) {
      var glow = 0;
      if (n >= GRIP_FROM && n <= GRIP_TO) {
        glow = 1 - Math.abs(n - GRIP_PEAK) / (GRIP_TO - GRIP_FROM);
        if (glow < 0) glow = 0;
      }
      flash.style.opacity = String(glow);
    }
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(render);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  render();
})();
