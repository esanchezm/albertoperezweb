/* ============================================
   Alberto Pérez — Director de Fotografía
   Portfolio JS — Vanilla, no frameworks
   ============================================ */

(function () {
  'use strict';

  /* --- Scroll Reveal via IntersectionObserver --- */
  function initScrollReveal() {
    var revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Apply staggered delay based on data-delay attribute
          var delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, parseInt(delay, 10));
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- Mobile Menu Toggle --- */
  function initMobileMenu() {
    var menuBtn = document.querySelector('.mobile-menu-btn');
    var mobileNav = document.querySelector('.mobile-nav');
    if (!menuBtn || !mobileNav) return;

    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when a nav link is clicked
    var navLinks = mobileNav.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Smooth Scroll for anchor links --- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* --- Init on DOM Ready --- */
  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initMobileMenu();
    initSmoothScroll();
  });
})();
