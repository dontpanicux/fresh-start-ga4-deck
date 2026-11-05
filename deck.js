(function () {
  'use strict';

  var root = document.documentElement;
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var ids = slides.map(function (s) { return s.dataset.id; });
  var current = -1;

  var countNow = document.getElementById('count-now');
  var countTot = document.getElementById('count-tot');
  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');
  var fsBtn = document.getElementById('fullscreen');
  var notesPanel = document.getElementById('notes-panel');
  var notesBody = document.getElementById('notes-body');
  var notesId = document.getElementById('notes-id');

  countTot.textContent = slides.length;

  // ---------- Entrance stagger ----------
  // Order per slide: eyebrow, title, lead, then each block of content (cards and columns one by one).
  var STEP = 50, MAX_STEPS = 6;
  slides.forEach(function (slide) {
    var units = [];
    Array.prototype.forEach.call(slide.children, function (el) {
      if (el.matches('.notes, .ref-tag')) return;
      if (el.matches('.slide-head, .title-wrap')) {
        units.push.apply(units, el.children);
      } else if (el.matches('.slide-body') && !el.matches('.overlap') && el.children.length > 1) {
        units.push.apply(units, el.children);
      } else {
        units.push(el);
      }
    });
    units.forEach(function (el, n) {
      el.setAttribute('data-anim', '');
      el.style.setProperty('--d', Math.min(n, MAX_STEPS) * STEP + 'ms');
    });
  });

  // ---------- Scaling ----------
  var CANVAS_W = 1440, CANVAS_H = 810, PHONE_MAX = 760;

  function fit() {
    var w = window.innerWidth, h = window.innerHeight;
    var phone = w < PHONE_MAX;
    root.classList.toggle('is-phone', phone);
    if (!phone) {
      root.style.setProperty('--scale', Math.min(w / CANVAS_W, h / CANVAS_H));
    }
  }
  window.addEventListener('resize', fit);
  fit();

  // ---------- Routing ----------
  function indexFromHash() {
    var id = decodeURIComponent(location.hash.replace(/^#/, ''));
    var i = ids.indexOf(id);
    return i === -1 ? 0 : i;
  }

  function go(i, fromHash) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    if (i === current) return;
    if (current >= 0) slides[current].classList.remove('is-active');
    current = i;
    var slide = slides[i];
    slide.classList.add('is-active');
    slide.scrollTop = 0;
    root.dataset.slide = ids[i];

    countNow.textContent = i + 1;
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === slides.length - 1;

    preload(i + 1); preload(i + 2); preload(i - 1);

    if (!fromHash && location.hash !== '#' + ids[i]) {
      history.replaceState(null, '', '#' + ids[i]);
    }
    renderNotes();
  }

  // Lazy images in hidden slides wait until shown, which flashes empty frames live.
  // Load the neighbors as soon as a slide opens, and the rest once the page is idle.
  function preload(i) {
    if (i < 0 || i >= slides.length) return;
    slides[i].querySelectorAll('img[loading="lazy"]').forEach(function (img) { img.loading = 'eager'; });
  }
  window.addEventListener('load', function () {
    setTimeout(function () { for (var k = 0; k < slides.length; k++) preload(k); }, 1500);
  });

  function next() { go(current + 1); }
  function prev() { go(current - 1); }

  window.addEventListener('hashchange', function () { go(indexFromHash(), true); });
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // ---------- Keyboard ----------
  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;

    switch (e.key) {
      case 'ArrowRight': case 'PageDown':
        e.preventDefault(); next(); break;
      case 'ArrowLeft': case 'PageUp':
        e.preventDefault(); prev(); break;
      case ' ': case 'Spacebar':
        e.preventDefault(); e.shiftKey ? prev() : next(); break;
      case 'Home':
        e.preventDefault(); go(0); break;
      case 'End':
        e.preventDefault(); go(slides.length - 1); break;
      case 'n': case 'N':
        toggleNotes(); break;
    }
  });

  // ---------- Swipe ----------
  var tx = 0, ty = 0, tracking = false;
  document.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) { tracking = false; return; }
    tracking = true; tx = e.touches[0].clientX; ty = e.touches[0].clientY;
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (!tracking) return;
    tracking = false;
    var dx = e.changedTouches[0].clientX - tx;
    var dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      dx < 0 ? next() : prev();
    }
  }, { passive: true });

  // ---------- Fullscreen ----------
  fsBtn.addEventListener('click', function () {
    var el = document.documentElement;
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    } else if (el.requestFullscreen || el.webkitRequestFullscreen) {
      (el.requestFullscreen || el.webkitRequestFullscreen).call(el);
    }
  });

  // ---------- Presenter notes ----------
  function renderNotes() {
    if (notesPanel.hidden) return;
    var notes = slides[current].querySelector('.notes');
    notesId.textContent = ids[current];
    notesBody.innerHTML = notes ? notes.innerHTML : '<p class="notes-empty">No notes for this slide.</p>';
  }
  function toggleNotes() {
    notesPanel.hidden = !notesPanel.hidden;
    renderNotes();
  }

  // ---------- Missing screenshots ----------
  // If a file isn't in /screenshots yet, show a labeled placeholder with its exact filename.
  // Dropping the file in later makes the real image load with no code change.
  function markMissing(img) {
    var shot = img.closest('.shot');
    if (!shot || shot.classList.contains('is-missing')) return;
    shot.classList.add('is-missing');
    var label = document.createElement('div');
    label.className = 'missing-label';
    var file = img.getAttribute('src').split('/').pop();
    label.innerHTML = (shot.dataset.label ? '<strong></strong>' : '') + '<code></code>';
    if (shot.dataset.label) label.querySelector('strong').textContent = shot.dataset.label;
    label.querySelector('code').textContent = file;
    shot.appendChild(label);
  }
  document.querySelectorAll('.shot img').forEach(function (img) {
    img.addEventListener('error', function () { markMissing(img); });
    if (img.complete && img.naturalWidth === 0 && img.getAttribute('loading') !== 'lazy') markMissing(img);
  });

  // ---------- Copy buttons ----------
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = btn.parentElement.querySelector('code');
      var text = code.textContent;
      var done = function (ok) {
        btn.textContent = ok ? 'Copied' : 'Press ⌘C';
        btn.classList.toggle('copied', ok);
        clearTimeout(btn._t);
        btn._t = setTimeout(function () { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1800);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(fallbackCopy(text)); });
      } else {
        done(fallbackCopy(text));
      }
      btn.blur();
    });
  });

  go(indexFromHash(), true);
})();
