/* Local JunkMan — main.js (multi-page, iOS Safari safe) */
(function() {
  'use strict';

  // ── Burger / mobile nav ──
  var burger   = document.querySelector('.burger');
  var mobNav   = document.querySelector('.mobile-nav');
  var mobClose = document.querySelector('.mob-close-btn');

  function openNav() {
    if (!mobNav) return;
    mobNav.classList.add('is-open');
    if (burger) burger.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    if (!mobNav) return;
    mobNav.classList.remove('is-open');
    if (burger) burger.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (burger) {
    burger.addEventListener('click', function() {
      mobNav && mobNav.classList.contains('is-open') ? closeNav() : openNav();
    });
  }
  if (mobClose) mobClose.addEventListener('click', closeNav);
  if (mobNav) {
    mobNav.addEventListener('click', function(e) {
      if (e.target === mobNav) closeNav();
    });
  }

  // ── Mark active nav link based on current URL ──
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.main-nav a').forEach(function(a) {
    var href = (a.getAttribute('href') || '').replace(/\/$/, '') || '/';
    if (href === path || (href !== '' && href !== '/' && path.indexOf(href) === 0)) {
      a.classList.add('active');
    }
  });

  // ── FAQ accordion ──
  document.querySelectorAll('.faq-item').forEach(function(faq) {
    faq.addEventListener('toggle', function() {
      if (this.open) {
        document.querySelectorAll('.faq-item').forEach(function(other) {
          if (other !== faq) other.open = false;
        });
      }
    });
  });

  // ── Ticker pause on hover ──
  var ticker = document.querySelector('.ticker');
  if (ticker && ticker.parentElement) {
    ticker.parentElement.addEventListener('mouseenter', function() {
      ticker.style.animationPlayState = 'paused';
    });
    ticker.parentElement.addEventListener('mouseleave', function() {
      ticker.style.animationPlayState = 'running';
    });
  }

  // ── Contact form ──
  // Real submissions are handled by the form action in contact/index.html.
  // Do not preventDefault here, or the email submission will not send.
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function() {
      var btn = this.querySelector('button[type="submit"]');
      if (!btn) return;
      btn.textContent = 'Sending request...';
      btn.disabled = true;
    });
  }

})();
