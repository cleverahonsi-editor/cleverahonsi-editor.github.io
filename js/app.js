(function () {
  var works = window.WORKS, filters = window.FILTERS;
  var grid = document.getElementById("grid"), chips = document.getElementById("chips");
  var hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function fmt(s) { var m = Math.floor(s / 60), r = Math.round(s % 60); if (r === 60) { m++; r = 0; } return m + ":" + (r < 10 ? "0" : "") + r; }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function label(tag) { var f = filters.filter(function (x) { return x.id === tag; })[0]; return f ? f.name : tag; }

  /* ---------- Cards ---------- */
  function card(w) {
    var el = document.createElement("figure");
    el.className = "card";
    el.dataset.tags = w.tags.join(" ");
    el.innerHTML =
      '<button class="tile" type="button" aria-label="Play ' + esc(w.title) + '">' +
        '<img src="media/' + w.id + '.jpg" alt="" loading="lazy">' +
        (hasHover ? '<video muted loop playsinline preload="none" data-src="media/' + w.id + '-loop.mp4"></video>' : "") +
        '<span class="dur"><svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1 0l9 5-9 5z"/></svg>' + fmt(w.dur) + '</span>' +
      '</button>' +
      '<figcaption><h3>' + esc(w.title) + '</h3>' +
      '<p>' + esc(w.format) + (w.client ? ' · ' + esc(w.client) : '') + '</p>' +
      '<ul class="mini">' + w.tools.map(function (t) { return "<li>" + esc(t[0]) + "</li>"; }).join("") + '</ul></figcaption>';
    var tile = el.querySelector(".tile"), v = el.querySelector("video");
    tile.addEventListener("click", function () { openLb(w); });
    if (v) {
      tile.addEventListener("mouseenter", function () { if (!v.src) v.src = v.dataset.src; v.play().then(function () { tile.classList.add("is-playing"); }).catch(function () {}); });
      tile.addEventListener("mouseleave", function () { v.pause(); tile.classList.remove("is-playing"); });
    }
    return el;
  }
  works.forEach(function (w) { grid.appendChild(card(w)); });

  /* ---------- Filters ---------- */
  function count(id) { return id === "all" ? works.length : works.filter(function (w) { return w.tags.indexOf(id) > -1; }).length; }
  filters.forEach(function (f) {
    if (!count(f.id)) return;
    var li = document.createElement("li"), b = document.createElement("button");
    b.className = "chip"; b.type = "button"; b.dataset.f = f.id;
    b.setAttribute("aria-pressed", f.id === "all" ? "true" : "false");
    b.innerHTML = esc(f.name) + '<span class="c">' + count(f.id) + "</span>";
    b.addEventListener("click", function () { setFilter(f.id); });
    li.appendChild(b); chips.appendChild(li);
  });
  function setFilter(id) {
    Array.prototype.forEach.call(chips.querySelectorAll(".chip"), function (c) { c.setAttribute("aria-pressed", String(c.dataset.f === id)); });
    Array.prototype.forEach.call(grid.children, function (c) { c.hidden = !(id === "all" || c.dataset.tags.split(" ").indexOf(id) > -1); });
  }

  /* ---------- Hero reel ---------- */
  var reel = document.getElementById("reel");
  if (reel) {
    var rw = works[0];
    reel.innerHTML = '<img src="media/' + rw.id + '.jpg" alt=""><video muted loop playsinline autoplay src="media/' + rw.id + '-loop.mp4"></video>' +
      '<span class="dur"><svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1 0l9 5-9 5z"/></svg>Play ' + esc(rw.title) + '</span>';
    reel.addEventListener("click", function () { openLb(rw); });
    var rv = reel.querySelector("video");
    rv.addEventListener("playing", function () { reel.classList.add("is-playing"); });
  }

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById("lb"), stage = document.getElementById("lb-stage"), info = document.getElementById("lb-info");
  var cur = -1, opener = null;
  function openLb(w) {
    cur = works.indexOf(w); opener = document.activeElement;
    stage.innerHTML = "";
    var v = document.createElement("video");
    v.className = "lb-media"; v.controls = true; v.autoplay = true; v.playsInline = true;
    v.poster = "media/" + w.id + ".jpg"; v.src = "media/" + w.id + ".mp4";
    v.style.aspectRatio = w.vertical ? "9 / 16" : "16 / 9";
    stage.appendChild(v);
    info.innerHTML =
      '<div><h2>' + esc(w.title) + '</h2><p>' + esc(w.blurb) + '</p></div>' +
      '<div class="lb-tools"><span class="lb-meta">' + esc(w.role) + ' · ' + esc(w.format) + '</span>' +
      '<ul>' + w.tools.map(function (t) { return "<li><b>" + esc(t[0]) + "</b> " + esc(t[1]) + "</li>"; }).join("") + '</ul></div>';
    document.getElementById("lb-count").textContent = (cur + 1) + " / " + works.length;
    lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); document.body.classList.add("lb-open");
    document.getElementById("lb-close").focus();
  }
  function closeLb() {
    lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); document.body.classList.remove("lb-open");
    var v = stage.querySelector("video"); if (v) { v.pause(); v.removeAttribute("src"); v.load(); }
    stage.innerHTML = ""; if (opener && opener.focus) opener.focus();
  }
  function step(d) { openLb(works[(cur + d + works.length) % works.length]); }
  document.getElementById("lb-close").addEventListener("click", closeLb);
  document.getElementById("lb-prev").addEventListener("click", function () { step(-1); });
  document.getElementById("lb-next").addEventListener("click", function () { step(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target === stage) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });

  /* ---------- Header border on scroll + footer year ---------- */
  var top = document.querySelector(".top");
  function onScroll() { top.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  document.getElementById("year").textContent = new Date().getFullYear();
})();
