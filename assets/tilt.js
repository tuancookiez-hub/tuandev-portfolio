/* ============================================================
 *  Tilt hover effect — vanilla JS, zero dependencies
 *  Auto-discovers project cards + click-to-enter landing,
 *  attaches the damped-spring tilt + glare + parallax,
 *  survives React re-renders via MutationObserver.
 *
 *  Card discovery selectors (verified from live DOM):
 *    - 4 small image cards:  [class*="group"][class*="cursor-default"][class*="overflow-hidden"]
 *    - Featured card:        parent of h3 containing "Nous-Branding-MultiModel"
 *    - Entry screen:         h1 with "Tuan Dev" not in <aside>/<main>
 * ============================================================ */
(function () {
  'use strict';

  // ----- CONFIG (intensity per element type) -----
  const CONFIGS = {
    card:     { maxTilt:  6, scale: 1.02,  glare: 0.12, parallax: 0.15 },
    featured: { maxTilt:  5, scale: 1.015, glare: 0.10, parallax: 0.15 },
    entry:    { maxTilt:  0, scale: 1.00,  glare: 0.10, parallax: 0   },  // static — only glare follows cursor
  };

  // ----- CSS INJECTION (once) -----
  function injectCSS() {
    if (document.getElementById('tilt-js-css')) return;
    const style = document.createElement('style');
    style.id = 'tilt-js-css';
    style.textContent = `
      [data-tilt-applied] {
        transform-style: preserve-3d;
        will-change: transform;
        transition: transform 0.18s ease-out, box-shadow 0.18s ease-out;
      }
      [data-tilt-applied].is-hot {
        box-shadow: 0 0 0 1px rgba(184,156,104,0.25), 0 50px 80px -30px rgba(184,156,104,0.25);
      }
      [data-tilt-applied] > .tilt-glare {
        position: absolute; inset: 0; pointer-events: none;
        background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%),
          rgba(255,255,255,var(--glare-opacity, 0.25)),
          rgba(255,255,255,0) 55%);
        mix-blend-mode: screen;
        opacity: 0;
        transition: opacity 0.2s ease-out;
        z-index: 1;
      }
      [data-tilt-applied].is-hot > .tilt-glare { opacity: 1; }
      .tilt-parallax {
        position: absolute !important;
        inset: -8% !important;
        width: 110% !important;
        height: 110% !important;
        object-fit: cover;
        transform: translate(var(--px, 0%), var(--py, 0%)) !important;
        transition: transform 0.18s ease-out;
      }
    `;
    document.head.appendChild(style);
  }

  // ----- TILT PHYSICS (damped spring, drop-the-plate bounce) -----
  function attachTilt(card, config) {
    if (!card || card.dataset.tiltApplied) return;
    card.dataset.tiltApplied = 'true';
    card.style.setProperty('--glare-opacity', String(config.glare));

    let rx = 0, ry = 0;        // target
    let cx = 0, cy = 0;        // current
    let vx = 0, vy = 0;        // velocity
    const k   = 0.025;         // spring stiffness
    const dOn = 0.78;          // damping while hovered
    const dOff= 0.93;          // damping while leaving (bouncier)
    const settlePos = 0.01;
    const settleVel = 0.004;
    let active = false;
    let raf;

    function animate() {
      const damping = active ? dOn : dOff;
      const ax = (rx - cx) * k;
      const ay = (ry - cy) * k;
      vx = (vx + ax) * damping;
      vy = (vy + ay) * damping;
      cx += vx;
      cy += vy;
      card.style.transform =
        'perspective(1200px) ' +
        'rotateX(' + cx.toFixed(2) + 'deg) ' +
        'rotateY(' + (-cy).toFixed(2) + 'deg) ' +
        'scale(' + (active ? config.scale : 1) + ')';
      if (parallax) {
        parallax.style.setProperty('--px', (cy * -0.4).toFixed(2) + '%');
        parallax.style.setProperty('--py', (cx *  0.4).toFixed(2) + '%');
      }
      if (
        Math.abs(rx - cx) > settlePos ||
        Math.abs(ry - cy) > settlePos ||
        Math.abs(vx)      > settleVel ||
        Math.abs(vy)      > settleVel ||
        active
      ) {
        raf = requestAnimationFrame(animate);
      } else {
        raf = null;
      }
    }

    function onMove(e) {
      const r = card.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top)  / r.height;
      ry = (px - 0.5) *  2 * config.maxTilt;
      rx = (py - 0.5) * -2 * config.maxTilt;
      card.style.setProperty('--gx', (px * 100) + '%');
      card.style.setProperty('--gy', (py * 100) + '%');
      if (!raf) raf = requestAnimationFrame(animate);
    }
    function onEnter() {
      active = true;
      card.classList.add('is-hot');
      if (!raf) raf = requestAnimationFrame(animate);
    }
    function onLeave() {
      active = false;
      card.classList.remove('is-hot');
      rx = 0; ry = 0;
    }

    // Initial transform (so the first frame is correct)
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)';

    // Parallax target: first <img> in the card (only if config enables it)
    const parallax = config.parallax > 0 ? card.querySelector('img') : null;
    if (parallax) {
      parallax.classList.add('tilt-parallax');
      card.dataset.tiltParallax = 'true';
    } else {
      card.dataset.tiltParallax = 'false';
    }

    // Glare overlay: insert as first child so it sits BEHIND the content
    const glare = document.createElement('div');
    glare.className = 'tilt-glare';
    card.insertBefore(glare, card.firstChild);

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mouseleave', onLeave);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseenter', onEnter);
    }
  }

  // ----- AUTO-DISCOVERY -----
  function findProjectCards() {
    const cards = new Set();
    // 4 small image cards in the projects grid
    document.querySelectorAll('[class*="group"][class*="cursor-default"][class*="overflow-hidden"]').forEach(function (el) {
      if (el.closest('section') && !el.closest('aside')) cards.add(el);
    });
    // Custom collapsible featured cards (HyAtlas + Facade of Jade — both built
    // by projects.js's makeCollapsibleFeatured, which sets this attribute)
    document.querySelectorAll('[data-collapsible-built="true"]').forEach(function (el) {
      cards.add(el);
    });
    // Legacy featured card (React-rendered Nous-Branding fallback)
    const featuredH = Array.from(document.querySelectorAll('h3')).find(function (h) {
      return h.textContent.indexOf('Nous-Branding-MultiModel') !== -1;
    });
    if (featuredH) {
      const featured = featuredH.closest('[class*="cursor-pointer"]')
                    || featuredH.closest('[class*="group"]')
                    || featuredH.parentElement;
      if (featured) cards.add(featured);
    }
    return Array.from(cards);
  }

  function findEntryScreen() {
    // h1 "Tuan Dev" that's the click-to-enter landing, not the sidebar/main
    const h1 = Array.from(document.querySelectorAll('h1')).find(function (h) {
      return h.textContent.trim() === 'Tuan Dev'
          && !h.closest('aside')
          && !h.closest('main');
    });
    if (!h1) return null;
    // Walk up to find the entry container (fixed/absolute positioned)
    let el = h1.parentElement;
    while (el && el !== document.body) {
      var pos = (el.style && el.style.position) || '';
      if (pos === 'fixed' || pos === 'absolute') return el;
      el = el.parentElement;
    }
    return h1.parentElement ? h1.parentElement.parentElement || h1.parentElement : null;
  }

  function classify(card) {
    if (card.dataset.collapsibleBuilt) return 'featured';
    return card.textContent.indexOf('Nous-Branding-MultiModel') !== -1 ? 'featured' : 'card';
  }

  // ----- APPLY (idempotent, RAF-batched) -----
  let applying = false;
  function applyAll() {
    if (applying) return;
    applying = true;
    requestAnimationFrame(function () {
      findProjectCards().forEach(function (card) {
        attachTilt(card, CONFIGS[classify(card)]);
      });
      var entry = findEntryScreen();
      if (entry) attachTilt(entry, CONFIGS.entry);
      applying = false;
    });
  }

  // ----- BOOTSTRAP -----
  function init() {
    injectCSS();
    applyAll();
    var observer = new MutationObserver(function () {
      if (!applying) applyAll();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 100); });
  } else {
    setTimeout(init, 100);
  }
  // Re-apply after a longer delay in case React is still mounting
  setTimeout(applyAll, 1500);
})();
