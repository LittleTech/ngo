/**
 * THECCODA - Professional Scroll Animation & Interaction Engine
 * Features:
 * 1. Precision IntersectionObserver-based staggered reveal system
 * 2. Top viewport reading scroll progress bar (60fps GPU-accelerated)
 * 3. Dynamic Back-to-Top button with live circular SVG progress gauge
 * 4. Harmonic easeOutExpo number rollup for impact metrics
 * 5. Full accessibility & reduced-motion compliance (Zero FOIC)
 */

(function () {
  'use strict';

  // Check user motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Initialize Top Reading Progress Bar
   */
  function initScrollProgressBar() {
    let progressBar = document.getElementById('scrollProgressBar');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.id = 'scrollProgressBar';
      progressBar.className = 'scroll-progress-bar';
      progressBar.innerHTML = '<div class="scroll-progress-fill" id="scrollProgressFill"></div>';
      document.body.prepend(progressBar);
    }

    const fill = document.getElementById('scrollProgressFill');
    if (!fill) return;

    let ticking = false;

    function updateProgress() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      
      fill.style.transform = `scaleX(${progress})`;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }, { passive: true });

    updateProgress();
  }

  /**
   * Initialize Back-to-Top Button with Circular SVG Progress Ring
   */
  function initBackToTop() {
    let btn = document.getElementById('backToTopBtn');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'backToTopBtn';
      btn.className = 'back-to-top-btn';
      btn.setAttribute('aria-label', 'Scroll back to top');
      btn.setAttribute('title', 'Back to top');
      btn.innerHTML = `
        <svg class="back-to-top-ring" viewBox="0 0 44 44" width="44" height="44">
          <circle class="ring-bg" cx="22" cy="22" r="18" />
          <circle class="ring-progress" id="backToTopCircle" cx="22" cy="22" r="18" />
        </svg>
        <span class="back-to-top-arrow">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </span>
      `;
      document.body.appendChild(btn);
    }

    const circle = document.getElementById('backToTopCircle');
    const radius = 18;
    const circumference = 2 * Math.PI * radius;

    if (circle) {
      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;
    }

    let ticking = false;

    function updateBackToTop() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;

      // Show/Hide threshold: 350px
      if (scrollTop > 350) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }

      // Update circular gauge
      if (circle) {
        const offset = circumference - (progress * circumference);
        circle.style.strokeDashoffset = `${offset}`;
      }

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateBackToTop);
        ticking = true;
      }
    }, { passive: true });

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      btn.blur();
    });

    updateBackToTop();
  }

  /**
   * Eased Exponential Number Counter for Metrics (easeOutExpo)
   */
  function animateCounter(el) {
    if (el.dataset.counterAnimated === 'true') return;
    el.dataset.counterAnimated = 'true';

    const targetText = el.getAttribute('data-target') || el.innerText.trim();
    const match = targetText.match(/^([^\d]*)(\d+[\d,.]*)(.*)$/);
    if (!match) return;

    const prefix = match[1] || '';
    const rawNumberStr = match[2].replace(/,/g, '');
    const isFloat = rawNumberStr.includes('.');
    const endVal = isFloat ? parseFloat(rawNumberStr) : parseInt(rawNumberStr, 10);
    const suffix = match[3] || '';

    if (isNaN(endVal)) return;

    const duration = 1600; // ms
    const startTime = performance.now();

    function easeOutExpo(x) {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const current = endVal * easedProgress;

      const formatted = isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString();
      el.innerText = `${prefix}${formatted}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.innerText = targetText; // Ensure exact final string
      }
    }

    requestAnimationFrame(step);
  }

  /**
   * Reveal Progress Bars (e.g., funding meters, metrics)
   */
  function animateProgressBar(bar) {
    if (bar.dataset.progressAnimated === 'true') return;
    bar.dataset.progressAnimated = 'true';
    const targetWidth = bar.getAttribute('data-progress') || bar.getAttribute('aria-valuenow');
    if (targetWidth) {
      bar.style.width = '0%';
      requestAnimationFrame(() => {
        bar.style.transition = 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
        bar.style.width = targetWidth.endsWith('%') ? targetWidth : `${targetWidth}%`;
      });
    }
  }

  /**
   * Orchestrate Sibling Staggers & Directional Auto-Enhancements
   */
  function prepareRevealElements() {
    // 1. Explicit reveal targets
    const explicit = document.querySelectorAll('.reveal-on-scroll, [data-reveal]');
    explicit.forEach(el => {
      if (!el.classList.contains('reveal-on-scroll')) el.classList.add('reveal-on-scroll');
    });

    // 2. Auto-enhance Card Grids with Stagger Delays
    const gridContainers = document.querySelectorAll(
      '.grid, .grid-2, .grid-3, .grid-4, .impact-strip-grid, .editorial-grid, .team-grid, .stories-grid, .news-grid, .partners-grid, .values-grid, .pillars-grid'
    );

    gridContainers.forEach(container => {
      const children = Array.from(container.children);
      children.forEach((child, index) => {
        // Skip hidden children
        if (child.offsetParent === null && child.offsetWidth === 0) return;
        
        if (!child.classList.contains('reveal-on-scroll')) {
          child.classList.add('reveal-on-scroll');
          
          // Determine animation variant based on context
          if (container.classList.contains('editorial-grid')) {
            if (index % 2 === 0) {
              child.classList.add('reveal-left');
            } else {
              child.classList.add('reveal-right');
            }
          } else {
            child.classList.add('reveal-up');
          }

          // Stagger delays (60ms step, capped at 360ms per cycle)
          const delayMs = (index % 4) * 75;
          child.style.setProperty('--reveal-delay', `${delayMs}ms`);
        }
      });
    });

    // 3. Auto-enhance Section Headers, Callouts, Cards, Stat Blocks
    const individualTargets = document.querySelectorAll(
      '.section-header, .section-title, .editorial-kicker, .hero-trust-badge, .hero-title, .hero-subtitle, .hero-actions, .hero-stats-preview, .cta-banner, .impact-stat-item, .card, .project-card, .impact-card, .news-card, .pillar-card, .accordion-item, .timeline-item, .testimonial-card'
    );

    individualTargets.forEach(el => {
      if (!el.classList.contains('reveal-on-scroll')) {
        el.classList.add('reveal-on-scroll');
        el.classList.add('reveal-up');
      }
    });

    // 4. Special visual depth for featured image stacks and quote badges
    document.querySelectorAll('.editorial-img-stack, .hero-badge-pill, .featured-image-wrapper').forEach(el => {
      el.classList.add('reveal-scale');
    });
  }

  /**
   * Main Scroll Animation Initializer
   */
  window.initScrollAnimations = function () {
    // If reduced motion is preferred, reveal everything immediately and exit
    if (prefersReducedMotion) {
      document.querySelectorAll('.count-up').forEach(animateCounter);
      return;
    }

    // Initialize progress bar & back-to-top dial
    initScrollProgressBar();
    initBackToTop();

    // Prepare DOM elements
    prepareRevealElements();

    // Enable CSS transitions safely (Prevents Flash Of Invisible Content)
    document.documentElement.classList.add('js-scroll-ready');

    // Create IntersectionObserver with comfortable reading threshold & margin
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: [0, 0.1, 0.2]
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // Reveal element
          el.classList.add('is-revealed');

          // Trigger internal count-ups if any
          el.querySelectorAll('.count-up').forEach(counter => {
            animateCounter(counter);
          });
          if (el.classList.contains('count-up')) {
            animateCounter(el);
          }

          // Trigger internal progress bars
          el.querySelectorAll('[data-progress], .metric-bar-fill').forEach(bar => {
            animateProgressBar(bar);
          });

          // Unobserve to maintain high performance
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    const elementsToObserve = document.querySelectorAll('.reveal-on-scroll');
    elementsToObserve.forEach(el => {
      // Check if already in viewport on page load (e.g. above the fold)
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        // Stagger initial above-the-fold reveals smoothly
        setTimeout(() => {
          el.classList.add('is-revealed');
          el.querySelectorAll('.count-up').forEach(animateCounter);
          if (el.classList.contains('count-up')) animateCounter(el);
          el.querySelectorAll('[data-progress], .metric-bar-fill').forEach(animateProgressBar);
        }, 60);
      } else {
        revealObserver.observe(el);
      }
    });

    // Fallback: Also listen for any dynamically added .count-up elements
    document.querySelectorAll('.count-up').forEach(counter => {
      const parentReveal = counter.closest('.reveal-on-scroll');
      if (!parentReveal) {
        const counterObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        counterObserver.observe(counter);
      }
    });
  };

  // Self-execute when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initScrollAnimations);
  } else {
    window.initScrollAnimations();
  }
})();
