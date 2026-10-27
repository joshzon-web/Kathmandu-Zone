/* Kathmandu Zone interactions: header state, mobile nav, reveals,
   line-art drawing, gentle parallax, lazy video playback, menu rendering. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var header = document.querySelector('.site-header');
  var callBar = document.querySelector('.call-bar');
  var hero = document.querySelector('.hero, .page-hero');

  /* Header + mobile call bar react to scroll */
  function onScroll() {
    var y = window.scrollY;
    var limit = hero ? hero.offsetHeight * 0.6 : 40;
    header.classList.toggle('scrolled', y > 40);
    if (callBar) callBar.classList.toggle('show', y > limit);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile nav */
  var toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    var setOpen = function (open) {
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', function () { setOpen(!document.body.classList.contains('nav-open')); });
    document.querySelectorAll('.nav a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  /* Line-art skyline: measure each stroke so it can draw itself */
  document.querySelectorAll('.skyline .draw').forEach(function (p) {
    try { p.style.setProperty('--len', Math.ceil(p.getTotalLength()) + 1); } catch (e) {}
  });

  /* Reveal on scroll */
  var revealables = document.querySelectorAll('.reveal, .reveal-img, .skyline');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add(en.target.classList.contains('skyline') ? 'drawn' : 'in');
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('in', 'drawn'); });
  }

  /* Videos: play only while on screen (saves battery, keeps things calm) */
  var vids = document.querySelectorAll('video[data-autoplay], .hero-media video');
  if ('IntersectionObserver' in window) {
    var vo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting && !reduce) { v.muted = true; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else v.pause();
      });
    }, { threshold: 0.15 });
    vids.forEach(function (v) { vo.observe(v); });
  }
  /* Slower playback where asked (data-rate) */
  document.querySelectorAll('video[data-rate]').forEach(function (v) {
    var rate = parseFloat(v.getAttribute('data-rate'));
    var apply = function () { v.defaultPlaybackRate = rate; v.playbackRate = rate; };
    apply();
    v.addEventListener('loadedmetadata', apply);
    v.addEventListener('play', apply);
  });

    /* Some clips end on a contact card: loop them before it (data-end, in seconds) */
  document.querySelectorAll('video[data-end]').forEach(function (v) {
    var end = parseFloat(v.getAttribute('data-end'));
    v.addEventListener('timeupdate', function () { if (v.currentTime >= end) v.currentTime = 0; });
  });
  if (reduce) vids.forEach(function (v) { v.removeAttribute('autoplay'); v.pause(); });

  /* Gentle parallax on marked images */
  var px = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  if (px.length && !reduce) {
    var ticking = false;
    var update = function () {
      var vh = window.innerHeight;
      px.forEach(function (img) {
        var r = img.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        var t = (r.top + r.height / 2 - vh / 2) / vh; // -1 … 1
        img.style.transform = 'translate3d(0,' + (t * -6).toFixed(2) + '%,0)';
      });
      ticking = false;
    };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* Reviews widget renders in its own shadow DOM: restyle its cards to sit on
     the tan testimonials band (white text, no boxes), once it has loaded. */
  var emr = document.querySelector('emr-simple-carousel');
  if (emr) {
    var emrCss = [
      ':host{font-family:"EB Garamond",Georgia,serif!important}',
      '.title,.subtitle{display:none!important}',
      '.slider{width:340px!important;min-width:340px!important;min-height:210px!important}',
      '.slider-container{background:transparent!important;border:0!important;box-shadow:none!important;padding:1.25rem 1.75rem 4rem!important;text-align:center;border-left:1px solid rgba(255,255,255,.45)!important}',
      '.review-message{color:#fff!important;font-family:"EB Garamond",Georgia,serif!important;font-size:18px!important;line-height:1.5!important;-webkit-line-clamp:4!important;max-height:calc(1.5em * 4)!important}',
      '.review-stars{justify-content:center}.review-stars>svg{color:#fff!important}',
      '.review-card-stars-and-source{justify-content:center!important}',
      '.review-author-info-wrapper{justify-content:center}',
      '.review-author-name-wrapper{flex:0 1 auto!important}',
      '.review-author,.review-author *{color:#fff!important;font-family:"EB Garamond",Georgia,serif!important;letter-spacing:.12em;text-transform:uppercase;font-size:13px!important}',
      '.emr-w-simple-list-review-time{color:rgba(255,255,255,.75)!important;font-family:"EB Garamond",Georgia,serif!important}'
    ].join('');
    var styleEmr = function () {
      var root = emr.shadowRoot;
      if (!root) return false;
      if (!root.querySelector('style[data-kz]')) {
        var st = document.createElement('style');
        st.setAttribute('data-kz', '');
        st.textContent = emrCss;
        root.appendChild(st);
      }
      return true;
    };
    var tries = 0;
    // keep checking for a while in case the widget re-renders and drops the style
    var poll = setInterval(function () { styleEmr(); if (++tries > 80) clearInterval(poll); }, 250);
  }

  /* Footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Menu page ---------- */
  var menuRoot = document.getElementById('menu-root');
  if (menuRoot && window.KZ_MENU) {
    var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var tagLabel = { v: 'V', new: 'New', sig: 'Chef’s pick' };
    var itemHTML = function (it) {
      var tags = (it.tags || []).map(function (t) { return '<span class="tag ' + t + '">' + tagLabel[t] + '</span>'; }).join('');
      return '<div class="item"><div class="item-top"><span class="item-name">' + esc(it.name) + tags + '</span>' +
        '<span class="item-price">' + esc(it.price) + '</span></div>' +
        (it.desc ? '<p class="item-desc">' + esc(it.desc) + '</p>' : '') + '</div>';
    };
    var listHTML = function (items) { return '<div class="menu-list">' + items.map(itemHTML).join('') + '</div>'; };

    var tabs = document.querySelector('.menu-tabs ul');
    menuRoot.innerHTML = window.KZ_MENU.map(function (sec) {
      tabs.insertAdjacentHTML('beforeend', '<li><a href="#' + sec.id + '">' + esc(sec.title) + '</a></li>');
      var body = sec.groups
        ? sec.groups.map(function (g) { return '<div class="menu-group reveal"><h3>' + esc(g.title) + '</h3>' + listHTML(g.items) + '</div>'; }).join('')
        : '<div class="menu-group reveal">' + listHTML(sec.items) + '</div>';
      return '<section class="menu-section" id="' + sec.id + '"><div class="container">' +
        '<div class="menu-head reveal"><h2>' + esc(sec.title) + '</h2>' +
        (sec.note ? '<p class="note">' + esc(sec.note) + '</p>' : '') + '</div>' + body + '</div></section>';
    }).join('');

    var newReveals = menuRoot.querySelectorAll('.reveal');
    if (typeof io !== 'undefined') newReveals.forEach(function (el) { io.observe(el); });
    else newReveals.forEach(function (el) { el.classList.add('in'); });

    /* scroll-spy for the category bar */
    var links = Array.prototype.slice.call(tabs.querySelectorAll('a'));
    var last = null;
    var spy = function () {
      var y = window.scrollY + window.innerHeight * 0.3, current = links[0];
      links.forEach(function (a) {
        var s = document.getElementById(a.hash.slice(1));
        if (s && s.offsetTop <= y) current = a;
      });
      if (current === last) return;
      last = current;
      links.forEach(function (a) { a.classList.toggle('active', a === current); });
      if (current && tabs.scrollWidth > tabs.clientWidth) {
        var l = current.offsetLeft - tabs.clientWidth / 2 + current.offsetWidth / 2;
        tabs.scrollTo({ left: l, behavior: 'smooth' });
      }
    };
    var spyTick = false;
    window.addEventListener('scroll', function () { if (!spyTick) { spyTick = true; requestAnimationFrame(function () { spy(); spyTick = false; }); } }, { passive: true });
    spy();
    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(function () { t.scrollIntoView(); }, 50); }
  }
})();
