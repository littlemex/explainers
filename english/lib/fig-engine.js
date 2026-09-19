/* 前置詞シリーズ共通エンジン
   図の描き方の約束: 緑 = 基準になるもの (ground)、オレンジ = 主役 (figure)、破線 = 接触なしか見えない境界。
   prep-data.js が DATA / COMPARE を定義し、各ページが renderPage("<page>") を呼ぶ。 */

var GREEN = "#15704a", GLIGHT = "#d3ece0", ORANGE = "#e07a3f", SUB = "#4a5d54";

function head(x, y, ang, s, c) {
  s = s || 10; c = c || ORANGE;
  var w = 0.42;
  var ax = x - s * Math.cos(ang - w), ay = y - s * Math.sin(ang - w);
  var bx = x - s * Math.cos(ang + w), by = y - s * Math.sin(ang + w);
  return '<path d="M' + x + ' ' + y + ' L' + ax + ' ' + ay + ' L' + bx + ' ' + by + ' Z" fill="' + c + '"/>';
}
function arrow(x1, y1, x2, y2, o) {
  o = o || {}; var c = o.color || ORANGE, sw = o.w || 3.5;
  var d = o.dash ? ' stroke-dasharray="7 6"' : '';
  var ang = Math.atan2(y2 - y1, x2 - x1);
  var ex = x2 - 8 * Math.cos(ang), ey = y2 - 8 * Math.sin(ang);
  return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + ex + '" y2="' + ey + '" stroke="' + c +
    '" stroke-width="' + sw + '" stroke-linecap="round"' + d + '/>' +
    (o.noHead ? '' : head(x2, y2, ang, o.hs || 10, c));
}
function qarrow(x1, y1, cx, cy, x2, y2, o) {
  o = o || {}; var c = o.color || ORANGE, sw = o.w || 3.5;
  var d = o.dash ? ' stroke-dasharray="7 6"' : '';
  var ang = Math.atan2(y2 - cy, x2 - cx);
  var ex = x2 - 7 * Math.cos(ang), ey = y2 - 7 * Math.sin(ang);
  return '<path d="M' + x1 + ' ' + y1 + ' Q' + cx + ' ' + cy + ' ' + ex + ' ' + ey + '" fill="none" stroke="' + c +
    '" stroke-width="' + sw + '" stroke-linecap="round"' + d + '/>' +
    (o.noHead ? '' : head(x2, y2, ang, o.hs || 10, c));
}
function t(x, y, s, o) {
  o = o || {};
  return '<text x="' + x + '" y="' + y + '" font-size="' + (o.size || 13) + '" fill="' + (o.c || SUB) +
    '" font-weight="700" text-anchor="' + (o.a || 'middle') + '">' + s + '</text>';
}
function ground(y, o) {
  o = o || {}; y = y || 110;
  return '<line x1="' + (o.x1 || 14) + '" y1="' + y + '" x2="' + (o.x2 || 206) + '" y2="' + y +
    '" stroke="' + GREEN + '" stroke-width="4" stroke-linecap="round"/>';
}
function dot(x, y, r, c) {
  return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 9) + '" fill="' + (c || ORANGE) + '"/>';
}
function gbox(x, y, w, h, o) {
  o = o || {};
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (o.r || 8) +
    '" fill="' + (o.fill || GLIGHT) + '" stroke="' + GREEN + '" stroke-width="' + (o.w || 3) + '"' +
    (o.dash ? ' stroke-dasharray="7 6"' : '') + '/>';
}
function obox(x, y, w, h, o) {
  o = o || {};
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (o.r || 8) +
    '" fill="' + ORANGE + '" opacity="' + (o.op || .9) + '"/>';
}
function timeline(y, label) {
  y = y || 96;
  return arrow(16, y, 204, y, { color: SUB, w: 2.5, hs: 8 }) +
    t(196, y + 20, label || "時間", { a: "end", size: 12 });
}
function wall(x, y1, y2) {
  var s = '<line x1="' + x + '" y1="' + y1 + '" x2="' + x + '" y2="' + y2 +
    '" stroke="' + GREEN + '" stroke-width="5" stroke-linecap="round"/>';
  for (var y = y1 + 6; y < y2; y += 12) {
    s += '<line x1="' + (x + 2) + '" y1="' + y + '" x2="' + (x + 13) + '" y2="' + (y - 9) +
      '" stroke="' + GREEN + '" stroke-width="2" opacity=".45"/>';
  }
  return s;
}
function scale(x, y, n, w, fillIdx) {
  var s = '', cw = w / n;
  for (var i = 0; i < n; i++) {
    s += '<rect x="' + (x + i * cw) + '" y="' + y + '" width="' + cw + '" height="34" rx="4" fill="' +
      (i === fillIdx ? ORANGE : '#f6faf8') + '" stroke="' + GREEN + '" stroke-width="2.5"/>';
  }
  return s;
}

var PAGE = null, filter = "all", query = "";

function svgWrap(inner) { return '<svg viewBox="0 0 220 148" role="img">' + inner + '</svg>'; }

function cardHtml(d) {
  var ex = d.ex.map(function (e) {
    return '<p class="ex"><b>' + e[0] + '</b><i>' + e[1] + '</i></p>';
  }).join("");
  return '<div class="card">' + svgWrap(d.svg) +
    '<p class="w">' + d.w + (d.also ? '<small>' + d.also + '</small>' : '') +
    (d.sense ? '<span class="sense">' + d.sense + '</span>' : '') + '</p>' +
    '<p class="core">' + d.core + '</p>' + ex +
    (d.note ? '<p class="note">' + d.note + '</p>' : '') + '</div>';
}

function pageCards() { return DATA.filter(function (d) { return d.page === PAGE; }); }
function pageCats() {
  var seen = [], rows = pageCards();
  rows.forEach(function (d) { if (seen.indexOf(d.cat) < 0) seen.push(d.cat); });
  return seen;
}

function renderCards() {
  var cats = pageCats();
  var hit = pageCards().filter(function (d) {
    if (filter !== "all" && d.cat !== filter) return false;
    if (!query) return true;
    var hay = d.w + " " + (d.also || "") + " " + (d.sense || "") + " " + d.core + " " + (d.note || "") + " " +
      d.ex.map(function (e) { return e.join(" "); }).join(" ");
    return hay.toLowerCase().indexOf(query) >= 0;
  });
  var out = document.getElementById("out");
  if (!hit.length) { out.innerHTML = '<p class="empty">見つかりませんでした。別の言葉で試してください。</p>'; return; }
  var h = "";
  cats.forEach(function (c) {
    var rows = hit.filter(function (d) { return d.cat === c; });
    if (!rows.length) return;
    h += '<h2 class="sec">' + c + (CAT_NOTE[c] ? '<span>' + CAT_NOTE[c] + '</span>' : '') + '</h2>' +
      '<div class="grid">' + rows.map(cardHtml).join("") + '</div>';
  });
  out.innerHTML = h;
}

function renderTools() {
  var tools = document.getElementById("tools");
  if (!tools) return;
  var cats = pageCats(), n = pageCards().length;
  var h = '<button class="chip on" data-c="all">すべて (' + n + ')</button>';
  cats.forEach(function (c) {
    var k = pageCards().filter(function (d) { return d.cat === c; }).length;
    h += '<button class="chip" data-c="' + c + '">' + c + ' (' + k + ')</button>';
  });
  h += '<input type="search" id="q" placeholder="語や日本語で検索 (for, 囲む, 越える …)">';
  tools.innerHTML = h;
  tools.addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    filter = b.dataset.c;
    tools.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("on", c === b); });
    renderCards();
  });
  document.getElementById("q").addEventListener("input", function (e) {
    query = e.target.value.trim().toLowerCase(); renderCards();
  });
}

function renderCompare() {
  var el = document.getElementById("cmp");
  if (!el) return;
  var rows = (typeof COMPARE === "undefined" ? [] : COMPARE).filter(function (c) { return c.page === PAGE; });
  if (!rows.length) { var s = el.previousElementSibling; if (s) s.style.display = "none"; return; }
  el.innerHTML = rows.map(function (c) {
    return '<div class="cmp"><h3>' + c.q + '</h3>' +
      c.rows.map(function (r) { return '<p><span class="pair">' + r[0] + '</span> &nbsp;' + r[1] + '</p>'; }).join("") +
      '</div>';
  }).join("");
}

function renderPage(page) {
  PAGE = page; filter = "all"; query = "";
  renderTools(); renderCards(); renderCompare();
}
