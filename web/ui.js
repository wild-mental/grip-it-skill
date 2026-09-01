/* GRIP IT — 언어 전환 · 도메인 탭 · 설치 탭 · S1 순차 등장
   빌드 단계 없음. 이 파일은 그대로 브라우저가 읽는다. */
(function () {
  "use strict";

  var COPY = window.COPY || {};
  var INSTALL = window.INSTALL || {};
  var state = { lang: "ko", tool: "claude", scope: "user", domain: "biz" };

  /* ---------- 저장된 선택 ---------- */
  function remember(key, value) {
    try { localStorage.setItem("gripit." + key, value); } catch (e) { /* 저장 불가여도 동작에는 지장이 없다 */ }
  }
  function recall(key) {
    try { return localStorage.getItem("gripit." + key); } catch (e) { return null; }
  }

  /* ---------- 언어 ---------- */
  function applyLang(lang) {
    var dict = COPY[lang];
    if (!dict) return;
    state.lang = lang;
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "ko");

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      var text = dict[key];
      if (typeof text !== "string") continue;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) el.setAttribute(attr, text.replace(/<[^>]+>/g, ""));
      else el.innerHTML = text;
    }

    var btns = document.querySelectorAll("[data-lang-btn]");
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle("is-on", btns[j].getAttribute("data-lang-btn") === lang);
    }
    remember("lang", lang);
  }

  /* ---------- S7 도메인 탭 (좁은 화면에서만 의미가 있다) ---------- */
  function applyDomain(domain) {
    state.domain = domain;
    var cells = document.querySelectorAll(".domain-table [data-col]");
    for (var i = 0; i < cells.length; i++) {
      cells[i].classList.toggle("is-on", cells[i].getAttribute("data-col") === domain);
    }
    var tabs = document.querySelectorAll(".domain-tabs .tab");
    for (var j = 0; j < tabs.length; j++) {
      tabs[j].classList.toggle("is-on", tabs[j].getAttribute("data-domain") === domain);
    }
  }

  /* ---------- S9 설치 명령 ---------- */
  function applyInstall() {
    var block = document.getElementById("install-cmd");
    if (!block) return;
    var byTool = INSTALL[state.tool] || {};
    var cmd = byTool[state.scope];
    if (typeof cmd === "string") block.textContent = cmd;

    var tabs = document.querySelectorAll(".install-tabs .tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle("is-on", tabs[i].getAttribute("data-tool") === state.tool);
    }
    var chips = document.querySelectorAll(".install-scopes .chip");
    for (var j = 0; j < chips.length; j++) {
      chips[j].classList.toggle("is-on", chips[j].getAttribute("data-scope") === state.scope);
    }
  }

  /* ---------- 복사 ---------- */
  function copyText(text, btn) {
    var done = function () {
      var keep = btn.textContent;
      btn.classList.add("is-done");
      btn.textContent = state.lang === "en" ? "Copied" : "복사했습니다";
      setTimeout(function () { btn.classList.remove("is-done"); btn.textContent = keep; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  }
  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "readonly");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch (e) { /* 복사 실패 시 사용자가 직접 선택하면 된다 */ }
    document.body.removeChild(ta);
  }

  /* ---------- S1 네 장면 순차 등장 (위치 이동 없이 나타나는 정도로 절제) ---------- */
  function revealScenes() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) return;  /* 숨기지 않고 그대로 둔다 */

    var list = document.querySelector(".scenes");
    if (list) list.classList.add("is-armed");  /* 여기서부터 CSS가 네 장면을 숨긴다 */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var order = Array.prototype.indexOf.call(items, el);
        setTimeout(function () { el.classList.add("is-in"); }, Math.max(0, order) * 140);
        io.unobserve(el);
      });
    }, { threshold: 0.35 });
    for (var j = 0; j < items.length; j++) io.observe(items[j]);
  }

  /* ---------- 이벤트 ---------- */
  document.addEventListener("click", function (ev) {
    var t = ev.target;
    if (!t || !t.getAttribute) return;

    if (t.hasAttribute("data-lang-btn")) { applyLang(t.getAttribute("data-lang-btn")); return; }
    if (t.hasAttribute("data-domain")) { applyDomain(t.getAttribute("data-domain")); return; }
    if (t.hasAttribute("data-tool")) { state.tool = t.getAttribute("data-tool"); applyInstall(); return; }
    if (t.hasAttribute("data-scope")) { state.scope = t.getAttribute("data-scope"); applyInstall(); return; }

    if (t.hasAttribute("data-copy-target")) {
      var target = t.getAttribute("data-copy-target");
      var code = target === "install"
        ? document.getElementById("install-cmd")
        : t.closest(".install-preview").querySelector("code");
      if (code) copyText(code.textContent, t);
    }
  });

  /* ---------- 시작 ---------- */
  applyLang(recall("lang") === "en" ? "en" : "ko");
  applyDomain("biz");
  applyInstall();
  revealScenes();
})();
