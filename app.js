/*
  This file builds the page from content.js.
  You normally do not need to edit it. Change words in content.js instead.
*/
(function () {
  var S = SITE;
  var selectedId = null;
  var activeStrength = null;

  function $(id) { return document.getElementById(id); }

  // Small helper: make an element with optional class and text.
  function make(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function list(items) {
    var ul = make("ul");
    items.forEach(function (t) { ul.appendChild(make("li", "", t)); });
    return ul;
  }

  function column(title, content) {
    var d = make("div");
    d.appendChild(make("h4", "col-title", title));
    d.appendChild(content);
    return d;
  }

  function findStep(id) {
    return S.steps.filter(function (s) { return s.id === id; })[0];
  }

  /* ---------- Header ---------- */
  $("name").textContent = S.name;
  $("headline").textContent = S.headline;
  S.chips.forEach(function (c) { $("chips").appendChild(make("li", "", c)); });

  /* ---------- Roadmap ---------- */
  var buttons = {};
  S.steps.forEach(function (s) {
    var li = make("li", s.current ? "current" : "");
    var b = make("button", "step-btn");
    b.type = "button";
    b.setAttribute("aria-expanded", "false");
    b.setAttribute("aria-controls", "detail");
    b.appendChild(make("span", "step-num", "Step " + s.id));
    b.appendChild(make("span", "step-role", s.role));
    b.appendChild(make("span", "step-sum", s.summary));
    b.addEventListener("click", function () {
      select(selectedId === s.id ? null : s.id);
    });
    li.appendChild(b);
    $("roadmap").appendChild(li);
    buttons[s.id] = b;
  });

  /* ---------- Detail panel ---------- */
  function renderDetail() {
    var box = $("detail");
    box.textContent = "";

    if (selectedId === null) {
      box.appendChild(make("p", "hint", "Select a step to see skills, lessons, proof, and a story I can tell."));
      return;
    }

    var s = findStep(selectedId);
    var card = make("div", "card");

    var head = make("div", "card-head");
    var titleWrap = make("div");
    titleWrap.appendChild(make("span", "step-num", "Step " + s.id + (s.current ? " (Current Role)" : "")));
    titleWrap.appendChild(make("h3", "", s.role));
    head.appendChild(titleWrap);

    var nav = make("div", "card-nav");
    var prev = make("button", "btn", "Previous");
    prev.type = "button";
    prev.disabled = s.id === 1;
    prev.addEventListener("click", function () { select(s.id - 1); });
    var next = make("button", "btn", "Next");
    next.type = "button";
    next.disabled = s.id === S.steps.length;
    next.addEventListener("click", function () { select(s.id + 1); });
    var close = make("button", "btn", "Close");
    close.type = "button";
    close.addEventListener("click", function () { select(null); });
    nav.appendChild(prev);
    nav.appendChild(next);
    nav.appendChild(close);
    head.appendChild(nav);
    card.appendChild(head);

    var cols = make("div", "cols");
    cols.appendChild(column("Skills Gained", list(s.skills)));
    cols.appendChild(column("What It Taught Me", list(s.lessons)));
    cols.appendChild(column("Proof", make("p", "proof", s.proof)));
    card.appendChild(cols);

    var story = make("div", "story");
    story.appendChild(make("h4", "col-title", "A Story I Can Tell"));
    var dl = make("dl");
    [["Situation", s.story.situation], ["Action", s.story.action], ["Result", s.story.result]].forEach(function (row) {
      dl.appendChild(make("dt", "", row[0]));
      dl.appendChild(make("dd", "", row[1]));
    });
    story.appendChild(dl);
    card.appendChild(story);

    box.appendChild(card);
  }

  function select(id) {
    selectedId = id;
    S.steps.forEach(function (s) {
      buttons[s.id].setAttribute("aria-expanded", s.id === id ? "true" : "false");
    });
    renderDetail();
    try {
      if (id === null) {
        history.replaceState(null, "", location.pathname + location.search);
      } else {
        history.replaceState(null, "", "#step-" + id);
      }
    } catch (e) { /* ignore */ }
  }

  /* ---------- Strengths ---------- */
  var strengthButtons = [];
  S.strengths.forEach(function (st, i) {
    var b = make("button", "pill", st.label);
    b.type = "button";
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () {
      activeStrength = activeStrength === i ? null : i;
      renderStrengths();
    });
    $("strengths").appendChild(b);
    strengthButtons.push(b);
  });

  function renderStrengths() {
    strengthButtons.forEach(function (b, i) {
      b.setAttribute("aria-pressed", activeStrength === i ? "true" : "false");
    });
    S.steps.forEach(function (s) {
      var lit = activeStrength !== null && S.strengths[activeStrength].steps.indexOf(s.id) !== -1;
      buttons[s.id].classList.toggle("lit", lit);
    });
    $("strength-text").textContent =
      activeStrength === null
        ? "Pick a strength to see where it shows up on the roadmap."
        : S.strengths[activeStrength].text;
  }

  /* ---------- Banner and contact ---------- */
  var through = $("through");
  var colon = S.throughline.indexOf(":");
  if (colon > -1) {
    through.appendChild(make("strong", "", S.throughline.slice(0, colon + 1)));
    through.appendChild(document.createTextNode(S.throughline.slice(colon + 1)));
  } else {
    through.textContent = S.throughline;
  }

  S.contact.forEach(function (c) {
    if (c.button && c.href) {
      var btn = make("a", "contact-btn", c.text);
      btn.href = c.href;
      btn.target = "_blank";
      btn.rel = "noopener";
      $("contact").appendChild(btn);
      return;
    }
    var span = make("span");
    span.appendChild(make("b", "", c.label + ": "));
    if (c.href) {
      var a = make("a", "", c.text);
      a.href = c.href;
      span.appendChild(a);
    } else {
      span.appendChild(document.createTextNode(c.text));
    }
    $("contact").appendChild(span);
  });

  /* ---------- Start ---------- */
  var m = /^#step-(\d+)$/.exec(location.hash);
  select(m && findStep(parseInt(m[1], 10)) ? parseInt(m[1], 10) : null);
  renderStrengths();
})();
