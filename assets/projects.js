/* ============================================================
 *  Project content injector — replaces project cards in the
 *  live React tree at runtime (no bundle rebuild).
 *
 *  Lineup (locked 2026-06-13):
 *    - Featured #1: HyAtlas-HyMemory-for-Hermes
 *    - Featured #2: Facade of Jade   (cloned, injected below)
 *    - Small 02-05: GitHub CTA cards
 *
 *  Card detection reuses the same selectors as tilt.js
 *  ([class*="group"][class*="cursor-default"][class*="overflow-hidden"])
 *  so it works on whichever cards tilt.js already attached to.
 * ============================================================ */
(function () {
  'use strict';

  // ----- DATA (categorized so the clone gets the right featured card) -----
  var PROJECTS = {
    featured: [
      {
        // COLLAPSED state matches the concept design exactly:
        //   image left, title+❖, dotted gold tags, short description, "> CLICK TO EXPAND"
        title: 'HyAtlas',
        titleOrnament: '&#x2756;',          // ❖ (hidden if the React h3 has no room for it)
        desc: 'A Hermes Agent memory provider with a self-improving plugin and dashboard for session intelligence.',
        tagsDotted: 'PYTHON &middot; PLUGIN &middot; MEMORY &middot; DASHBOARD',
        img: 'project-nous.jpg',
        link: 'https://github.com/tuancookiez-hub/HyAtlas-HyMemory-for-Hermes',
        // EXPANDED state: React's built-in bullets + GitHub link
        expanded: 'Drops into Hermes as a memory provider plugin. Lets the agent persist and recall context across sessions, with a dashboard view for inspecting what it has learned.',
        bullets: [
          'Hy-Memory backend wired into Hermes agent loop',
          'Cross-session memory persistence',
          'Dashboard for inspecting recalled context',
          'MIT licensed, drop-in install for any Hermes setup',
        ],
      },
      {
        // Same collapsed format as HyAtlas (concept design)
        title: 'Facade of Jade',
        titleOrnament: '&#x2756;',
        desc: 'A Façade-inspired playable AI Wuxia drama where your words shape trust, mood, tension, and the ending.',
        tagsDotted: 'PYTHON &middot; GRADIO &middot; MODAL &middot; LLAMA.CPP &middot; LORA',
        img: 'facade-of-jade.png',
        link: 'https://github.com/tuancookiez-hub/facade-of-jade',
        // EXPANDED state: editorial case-study details
        expanded: 'Built for the Build Small Hackathon. Combines a Gradio browser-game UI, a Modal-hosted llama.cpp backend, a custom drama manager (beats, hot-buttons, path pressure), and a trained LoRA adapter for Master Liang\'s voice.',
        bullets: [
          'Discourse-act classification on every player turn',
          'Visible drama engine: trust, mood, tension, beat goals, hot-buttons',
          'Qwen3-4B GGUF via llama.cpp on Modal',
          'Trained LoRA adapter for Master Liang\'s voice',
        ],
      },
    ],
    small: [
      { num: '02', label: 'Open Source',    img: 'eye-gold.jpg',    link: 'https://github.com/tuancookiez-hub' },
      { num: '03', label: 'Full Archive',   img: 'globe-warm.jpg',  link: 'https://github.com/tuancookiez-hub' },
      { num: '04', label: 'Star on GitHub', img: 'hero-statue.jpg', link: 'https://github.com/tuancookiez-hub' },
      { num: '05', label: 'All Projects',   img: 'hero-figure.jpg', link: 'https://github.com/tuancookiez-hub' },
    ],
  };

  // ----- HELPERS -----
  function findFeatured() {
    var h = Array.from(document.querySelectorAll('h3')).find(function (x) {
      return x.textContent.indexOf('Nous-Branding-MultiModel') !== -1;
    });
    return h ? (h.closest('[class*="cursor-pointer"]') || h.closest('[class*="group"]') || h.parentElement) : null;
  }
  function findSmall() {
    return Array.from(document.querySelectorAll(
      '[class*="group"][class*="cursor-default"][class*="overflow-hidden"]'
    )).filter(function (el) {
      return el.closest('section') && !el.closest('aside');
    });
  }

  function setImgSrc(img, name) {
    if (!img) return;
    // Use a relative path so the same code works both on the local preview
    // (localhost:5000) and the live github.io site, regardless of which
    // files have actually been pushed yet.
    img.src = './' + name;
    var s = img.getAttribute('src');
    if (s) img.setAttribute('src', s);
  }

  // ----- CLONE THE EXISTING FEATURED TO MAKE A SECOND ONE -----
  // The React tree only renders 1 featured card. We clone the existing one
  // and insert it right after, so we get 2 featured cards without touching
  // the React bundle. We mark the original so we never clone it (only clones
  // of clones get cloned otherwise — infinite recursion).
  var ORIGINAL_FEATURED_MARK = 'data-is-original-featured';
  function addSecondFeatured() {
    // If any clone already exists, bail
    if (document.querySelector('[' + ORIGINAL_FEATURED_MARK + '="true"] + [data-second-featured], [data-second-featured]')) return;
    // The original is the one marked as original (set after first clone)
    var original = document.querySelector('[' + ORIGINAL_FEATURED_MARK + '="true"]');
    if (!original) {
      // First time: find the actual original featured (the one with h3, processed by tilt.js)
      var all = document.querySelectorAll('[data-tilt-applied]');
      for (var i = 0; i < all.length; i++) {
        if (all[i].querySelector('h3') && !all[i].hasAttribute('data-second-featured')) {
          original = all[i];
          break;
        }
      }
      if (!original) return;
      // Mark it as the original so we never confuse it with clones
      original.setAttribute(ORIGINAL_FEATURED_MARK, 'true');
    }

    var clone = original.cloneNode(true);
    clone.setAttribute('data-second-featured', 'true');
    clone.removeAttribute(ORIGINAL_FEATURED_MARK);  // clones are NOT originals
    // Strip ONLY the data attrs that came from the original (tilt / projects injection),
    // not the markers we just set on the clone itself.
    ['data-tilt-applied', 'data-tilt-parallax', 'data-projects-injected', 'data-projects-cta', 'data-projects-click-bound', 'data-is-original-featured'].forEach(function (n) {
      clone.removeAttribute(n);
    });
    // Strip inline styles
    clone.removeAttribute('style');
    Array.from(clone.querySelectorAll('[style]')).forEach(function (el) {
      el.removeAttribute('style');
    });

    original.parentNode.insertBefore(clone, original.nextSibling);

    // Add visual breathing room between the two featured cards
    clone.style.marginTop = '40px';

    // Build the collapsible layout for the Facade of Jade clone
    makeCollapsibleFeatured(clone, PROJECTS.featured[1]);
  }

  // ----- COLLAPSIBLE FEATURED CARD (used for BOTH HyAtlas + Facade of Jade) -----
  // Replaces the card's innerHTML with a uniform two-column layout (collapsed
  // matches the concept design; click-to-expand reveals the editorial details).
  // Both cards get the same structure so they stay the same size. The image is
  // a normal-flow element (100% of its column) with overflow: hidden on the
  // column, so the image tilts WITH the card and only shifts a tiny amount
  // (4% parallax) for a subtle depth hint — not a separate floating layer.
  function makeCollapsibleFeatured(card, data) {
    if (!card || !data || card.dataset.collapsibleBuilt) return;
    card.dataset.collapsibleBuilt = 'true';

    // Kill any click handlers (React's on the original, none on the clone)
    card.onclick = null;
    card.removeAttribute('onclick');

    // Build the structure
    card.innerHTML = [
      // ---- WRAPPER (handles the click-to-pop-up effect independently of the
      // tilt.js rotation on the card). When popped: scale + lift + deep shadow
      // + higher z-index, like the flutter_tilt multiple-tilt example. ----
      '<div class="cf-wrapper" style="display:block;position:relative;transform:scale(1) translateY(0);box-shadow:0 0 0 rgba(0,0,0,0);z-index:1;background:#0e0e10;border:1px solid rgba(255,255,255,0.05);border-radius:2px;transition:transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.45s ease, z-index 0s 0.45s;">',
      // ---- COLLAPSED state (matches the concept design) ----
      // Grid: 2fr 3fr = image takes 40% width, text takes 60%. Both columns
      // stretch to the same card height (set by min-height + content), so the
      // image and text are always aligned and the same size in both cards.
      '<div class="cf-collapsed" style="display:grid;grid-template-columns:2fr 3fr;gap:0;align-items:stretch;min-height:360px;">',
        // Image column — overflow:hidden clips the small parallax shift so
        // the image never looks detached. Image is normal flow (not absolute).
        // Both images are 1.79:1 (HyAtlas original + Facade of Jade cropped),
        // so they render at the same proportions in this container.
        // NO PARALLAX: the image is now part of the card (one entity). It
        // moves with the card's tilt and the wrapper's pop-up, no separate
        // transform of its own.
        '<div class="cf-image-col" style="position:relative;overflow:hidden;z-index:0;isolation:isolate;background:#0a0a0a;">',
          '<img src="./' + data.img + '" alt="' + data.title + '" class="cf-image" style="width:100%;height:100%;object-fit:cover;display:block;" />',
        '</div>',
        // Text column
        '<div class="cf-text-col" style="padding:36px 44px;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:2;">',
          '<h3 class="cf-title" style="font-family:\'DM Serif Display\',\'Cormorant\',Georgia,serif;font-size:36px;font-weight:400;line-height:1.05;color:#E6E1D8;margin:0 0 12px 0;display:flex;align-items:center;gap:12px;">',
            data.title,
            '<span class="cf-ornament" style="font-size:16px;color:rgba(184,156,104,0.75);font-weight:400;line-height:1;transform:translateY(-1px);">&#x2756;</span>',
          '</h3>',
          '<div class="cf-tags" style="font-family:\'IBM Plex Mono\',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.18em;color:rgba(184,156,104,0.85);margin-bottom:14px;">',
            data.tagsDotted,
          '</div>',
          '<p class="cf-description" style="font-style:italic;font-family:\'Cormorant\',Georgia,serif;font-size:16px;line-height:1.55;color:rgba(230,225,216,0.82);margin:0 0 18px 0;">',
            data.desc,
          '</p>',
          '<div class="cf-expand-link" style="font-family:\'IBM Plex Mono\',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.18em;color:rgba(184,156,104,0.9);cursor:pointer;user-select:none;">',
            '&gt; CLICK TO EXPAND',
          '</div>',
        '</div>',
      '</div>',

      // ---- EXPANDED state (editorial details, hidden by default) ----
      '<div class="cf-expanded" style="max-height:0;overflow:hidden;transition:max-height 0.55s cubic-bezier(0.4, 0.0, 0.2, 1);">',
        '<div class="cf-expanded-content" style="padding:28px 36px 36px 36px;border-top:1px solid rgba(184,156,104,0.12);">',
          '<p class="cf-expanded-body" style="font-style:italic;font-family:\'Cormorant\',Georgia,serif;font-size:17px;line-height:1.65;color:rgba(230,225,216,0.88);margin:0 0 22px 0;"></p>',
          '<div class="cf-features-label" style="font-family:\'IBM Plex Mono\',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.24em;color:rgba(184,156,104,0.7);margin:0 0 10px 0;">',
            '&#x2014; Key Features &#x2014;',
          '</div>',
          '<ul class="cf-bullets" style="list-style:none;padding:0;margin:0 0 24px 0;font-family:\'IBM Plex Mono\',monospace;font-size:11px;line-height:1.9;color:rgba(230,225,216,0.72);"></ul>',
          '<a class="cf-cta" href="' + data.link + '" target="_blank" rel="noopener" style="display:inline-block;padding:10px 22px;border:1px solid rgba(184,156,104,0.5);color:rgba(184,156,104,1);text-decoration:none;font-family:\'IBM Plex Mono\',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;background:transparent;">',
            'View on GitHub &#x2192;',
          '</a>',
        '</div>',
      '</div>',

      '</div>',  // close .cf-wrapper
    ].join('\n');

    // Populate dynamic content
    var body = card.querySelector('.cf-expanded-body');
    if (body && data.expanded) body.textContent = data.expanded;
    var ul = card.querySelector('.cf-bullets');
    if (ul && data.bullets) {
      data.bullets.forEach(function (b) {
        var li = document.createElement('li');
        li.innerHTML = '&#x25B8; ' + b;
        ul.appendChild(li);
      });
    }

    // ---- NO PARALLAX on the image ----
    // The image is part of the card (one entity). It moves with the card's
    // tilt and the wrapper's pop-up, but has no transform of its own. This
    // keeps the image and the card on a single visual layer.
    //
    // The tilt.js's animate() still does the rotation, and the wrapper's
    // click handler does the pop-up. Both compose with the image naturally
    // (the image is a child of the card and the wrapper).

    // NO manual tilt-glare here — tilt.js already adds one in attachTilt().
    // A second one would create a DOUBLE radial-gradient overlay that makes
    // the card look hazy/blurry on hover.

    // ---- CLICK-TO-EXPAND + CLICK-TO-POP-UP ----
    // The wrapper handles the pop-up (scale + lift + deep shadow + z-index).
    // Independent of the card's tilt rotation, so both effects compose cleanly.
    // Helper: find the OTHER collapsible card (the sibling, not this one)
    function getOtherCard() {
      var all = document.querySelectorAll('[data-collapsible-built="true"]');
      for (var i = 0; i < all.length; i++) if (all[i] !== card) return all[i];
      return null;
    }
    // Helper: blur/dim the other card (behind the popped one) — flutter_tilt
    // multiple-tilt feel: focus on the popped card, blur the rest.
    function setOtherBlur(blurred) {
      var other = getOtherCard();
      if (!other) return;
      if (blurred) {
        other.style.filter = 'brightness(0.6)';
        other.style.opacity = '0.55';
        other.style.transition = 'filter 0.45s ease, opacity 0.45s ease';
        other.style.pointerEvents = 'none';
      } else {
        other.style.filter = '';
        other.style.opacity = '';
        other.style.pointerEvents = '';
      }
    }

    card.addEventListener('click', function () {
      var expanded = card.querySelector('.cf-expanded');
      var link = card.querySelector('.cf-expand-link');
      var wrapper = card.querySelector('.cf-wrapper');
      if (!expanded) return;
      if (card.classList.contains('is-expanded')) {
        // Collapse: undo pop + collapse content + unblur the other card
        expanded.style.maxHeight = '0px';
        card.classList.remove('is-expanded');
        if (wrapper) {
          wrapper.style.transform = 'scale(1) translateY(0)';
          wrapper.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
          wrapper.style.zIndex = '1';
        }
        setOtherBlur(false);
        if (link) link.innerHTML = '&gt; CLICK TO EXPAND';
      } else {
        // Expand + pop up (flutter_tilt multiple-tilt feel)
        expanded.style.maxHeight = expanded.scrollHeight + 'px';
        card.classList.add('is-expanded');
        if (wrapper) {
          wrapper.style.transform = 'scale(1.05) translateY(-18px)';
          wrapper.style.boxShadow = '0 4px 0 rgba(184, 156, 104, 0.18), 0 0 0 1px rgba(184, 156, 104, 0.45)'; wrapper.style.borderColor = 'rgba(184, 156, 104, 0.45)';
          wrapper.style.zIndex = '10';
        }
        setOtherBlur(true);
        if (link) link.innerHTML = '&gt; CLICK TO COLLAPSE';
      }
    });

    // Mark as injected
    card.dataset.projectsInjected = 'collapsible:' + data.title;
  }

  function replaceFeatured(card, data) {
    if (!card || !data) return;
    var h3 = card.querySelector('h3');
    if (h3) {
      var svg = h3.querySelector('svg');
      // Use the dotted tags string as the title decoration if data has it
      var titleText = data.title;
      if (data.titleOrnament) {
        titleText = data.title + ' ' + data.titleOrnament;
      }
      h3.innerHTML = titleText;
      if (svg) h3.appendChild(svg);
    }
    // For tagged pills, replace the FIRST tag span with the dotted string
    // and hide the other tag spans (they're box-pills from the React component).
    // This matches the concept design (PYTHON • PLUGIN • MEMORY • DASHBOARD).
    var tagSpans = Array.from(card.querySelectorAll('span')).filter(function (s) {
      var t = s.textContent.trim();
      return t === 'Python' || t === 'PIL' || t === 'OpenAI API' || t === 'Stability AI' || t === 'Pillow' || t === 'Gradio' || t === 'Modal' || t === 'llama.cpp' || t === 'LoRA';
    });
    if (tagSpans.length && data.tagsDotted) {
      tagSpans[0].innerHTML = data.tagsDotted;
      // Strip the box-pill styling from the first tag span
      tagSpans[0].style.padding = '0';
      tagSpans[0].style.background = 'transparent';
      tagSpans[0].style.border = 'none';
      tagSpans[0].style.borderRadius = '0';
      tagSpans[0].style.color = 'rgba(184,156,104,0.85)';
      // Hide the other tag spans
      for (var t = 1; t < tagSpans.length; t++) {
        if (tagSpans[t]) tagSpans[t].style.display = 'none';
      }
    }
    var ps = card.querySelectorAll('p');
    if (ps[0]) ps[0].textContent = data.desc;
    if (ps[1] && data.expanded) ps[1].textContent = data.expanded;
    if (data.bullets && data.bullets.length) {
      var lis = card.querySelectorAll('li');
      data.bullets.slice(0, lis.length).forEach(function (bullet, i) {
        if (lis[i]) lis[i].textContent = '\u25B8 ' + bullet;
      });
    }
    // Images — first is the big one, second is the small overlay
    var imgs = card.querySelectorAll('img');
    if (imgs[0]) setImgSrc(imgs[0], data.img);
    // Hide the small floating globe decoration (second image) — it creates
    // weird horizontal empty space and is the source of the awkward layout
    if (imgs[1]) imgs[1].style.display = 'none';
    var links = card.querySelectorAll('a');
    links.forEach(function (a) {
      if (a.href && a.href.indexOf('github.com') !== -1) a.href = data.link;
    });

    // Find the React-rendered "▸ Click to expand" span and update to concept design format
    var expandSpans = Array.from(card.querySelectorAll('span')).filter(function (s) {
      var t = s.textContent.trim().toLowerCase();
      return t === '▸ click to expand' || t === '▸ click to collapse' || t === 'click to expand' || t.indexOf('click to expand') !== -1;
    });
    if (expandSpans[0]) {
      expandSpans[0].textContent = '> CLICK TO EXPAND';
      expandSpans[0].style.color = 'rgba(184,156,104,0.9)';
    }
    // Z-INDEX FIX — image stays in the back so the text on top is readable
    imgs.forEach(function (img) {
      if (!img) return;
      img.style.zIndex = '0';
      var p = img.parentElement;
      if (p) { p.style.position = 'relative'; p.style.zIndex = '0'; p.style.isolation = 'isolate'; }
      var gp = p ? p.parentElement : null;
      if (gp) { gp.style.position = 'relative'; gp.style.zIndex = '1'; }
    });
    [h3].concat(Array.from(ps), tagSpans, Array.from(lis)).forEach(function (el) {
      if (!el) return;
      el.style.position = 'relative';
      el.style.zIndex = '10';
      el.style.opacity = '1';
    });

    card.dataset.projectsInjected = 'featured:' + data.title;
  }

  function replaceSmall(card, data) {
    if (!card || !data) return;
    var spans = card.querySelectorAll('span');
    if (spans[0]) spans[0].textContent = data.num;
    if (spans[1]) spans[1].textContent = data.label;
    var img = card.querySelector('img');
    setImgSrc(img, data.img);
    card.dataset.projectsCta = data.link;
    card.dataset.projectsInjected = 'small:' + data.label;
  }

  // ----- APPLY (idempotent, RAF-batched) -----
  var applying = false;
  function applyAll() {
    if (applying) return;
    applying = true;
    requestAnimationFrame(function () {
      // Update the About Me section to reflect current work (not the
      // outdated Nous-Branding focus from the Kimi-generated copy)
      updateAboutMe();

      // Inject a second featured card if it doesn't exist yet
      addSecondFeatured();

      // Featured cards (categorized — order within category matches DOM order)
      var featuredCards = Array.from(document.querySelectorAll('[data-tilt-applied]'))
        .filter(function (c) { return c.querySelector('h3'); });
      featuredCards.forEach(function (card, i) {
        if (card.dataset.projectsInjected) return;
        // Both featured cards use the same collapsible structure (so they look
        // identical and stay the same size)
        if (i < PROJECTS.featured.length) {
          makeCollapsibleFeatured(card, PROJECTS.featured[i]);
        }
      });

      // Small cards
      var smallCards = findSmall();
      smallCards.forEach(function (card, i) {
        if (card.dataset.projectsInjected) return;
        var data = PROJECTS.small[i];
        if (data) replaceSmall(card, data);
      });

      // Click handlers for CTA cards
      document.querySelectorAll('[data-projects-cta]:not([data-projects-click-bound])').forEach(function (el) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', function () {
          window.open(el.dataset.projectsCta, '_blank', 'noopener');
        });
        el.dataset.projectsClickBound = 'true';
      });

      applying = false;
    });
  }

  // ----- UPDATE ABOUT ME -----
  // The React-rendered about section is generated by Kimi and references
  // the old Nous-Branding pipeline. We swap the 3 paragraphs for current
  // copy that reflects the actual focus: Hermes Agent plugins + AI drama.
  function updateAboutMe() {
    if (document.body.dataset.aboutInjected) return;
    var aboutSection = Array.from(document.querySelectorAll('section')).find(function (s) {
      return s.textContent.indexOf('Computer & Communication Engineer') !== -1;
    });
    if (!aboutSection) return;
    var paragraphs = aboutSection.querySelectorAll('p');
    if (paragraphs.length < 3) return;

    var NEW_ABOUT = [
      'Computer & Communication Engineer. Full-stack developer based in Malaysia.',
      'I build AI agent tooling and interactive AI drama. My work spans Hermes Agent plugins, multi-agent memory, and narrative games that respond to your words in real time.',
      'Recent work: HyAtlas (a Hy-Memory provider plugin for Hermes Agent) and Facade of Jade (a Façade-inspired playable AI Wuxia drama, Build Small Hackathon).',
    ];

    paragraphs[0].textContent = NEW_ABOUT[0];
    paragraphs[1].textContent = NEW_ABOUT[1];
    paragraphs[2].textContent = NEW_ABOUT[2];
    document.body.dataset.aboutInjected = 'true';
  }

  // ----- INJECT ONE-TIME CSS (hides the tilt-glare on our cards) -----
  // The tilt.js adds a radial-gradient overlay (.tilt-glare) that becomes
  // visible on hover. On a dark, busy project card this looks like a "blur"
  // or "haze" rather than a clean glare. The user wants sharp cards, so
  // we hide it for our custom cards.
  function injectCardCSS() {
    if (document.getElementById('cf-card-css')) return;
    var style = document.createElement('style');
    style.id = 'cf-card-css';
    style.textContent = '[data-collapsible-built="true"] .tilt-glare { opacity: 0 !important; }';
    document.head.appendChild(style);
  }

  // ----- REMOVE "04 PHILOSOPHY" NAV ITEM -----
  // The sidebar nav is rendered by the minified React bundle (src/App.tsx).
  // We can't edit the bundle, so we strip the Philosophy button at runtime.
  // The button's structure: <button><span/><span>04</span><span>Philosophy</span></button>
  // inside the <nav> that holds 01 About, 02 Projects, 03 Experience, 04 Philosophy, 05 Contact.
  function removePhilosophyNav() {
    if (document.body.dataset.philosophyNavRemoved === 'true') {
      // Re-check on first run after the flag is set, then bail.
      var stillThere = false;
      var btns = document.querySelectorAll('button');
      for (var i = 0; i < btns.length; i++) {
        if (/philosophy/i.test(btns[i].textContent || '')) { stillThere = true; break; }
      }
      if (!stillThere) return;
    }
    var btns = document.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      var t = (b.textContent || '').trim();
      // Match "04Philosophy" / "04 Philosophy" (the number span + label span have no gap)
      if (/^0?4\s*philosophy$/i.test(t) || /^philosophy$/i.test(t)) {
        b.remove();
        document.body.dataset.philosophyNavRemoved = 'true';
      }
    }
  }

  // ----- UPDATE CURRENT EXPERIENCE ENTRY -----
  // Replace the existing "Software Engineer @ Deep Tech" entry with the
  // current role: software developer at an electrical company, building
  // dashboards for inspection systems. Company name is intentionally generic
  // to avoid leaking the real employer.
  function updateCurrentExperience() {
    var entries = document.querySelectorAll('div.py-6.transition-all');
    if (!entries.length) return;
    var entry = entries[0];
    if (entry.dataset.expUpdated === 'true') return;
    if (!entry.querySelector('p')) return;

    // 1) Title row (children[0]): replace the H3 + date with a fresh H3 + date SPAN
    var titleRow = entry.children[0];
    if (titleRow) {
      // Find existing date SPAN (matches any font-mono text-[11px] — the date)
      var dateSpan = null;
      for (var i = 0; i < titleRow.children.length; i++) {
        if (titleRow.children[i].tagName === 'SPAN') { dateSpan = titleRow.children[i]; break; }
      }
      titleRow.innerHTML = '';
      var h3 = document.createElement('h3');
      h3.className = 'font-display text-[22px]';
      h3.textContent = 'Software Developer';
      titleRow.appendChild(h3);
      if (dateSpan) titleRow.appendChild(dateSpan);
      else {
        var d = document.createElement('span');
        d.className = 'font-mono text-[11px]';
        d.textContent = '2022 — Present';
        titleRow.appendChild(d);
      }
    }

    // 2) Company: Deep Tech · Malaysia → An electrical company · Malaysia
    var companyP = entry.querySelectorAll('p')[0];
    if (companyP) companyP.textContent = 'An electrical company · Malaysia';

    // 3) Description: swap to inspection-systems framing
    var descP = entry.querySelectorAll('p')[1];
    if (descP) {
      descP.textContent = 'Building dashboards for inspection systems and operational tooling for electrical infrastructure. Working with field teams to surface equipment health, fault data, and asset history in a clear, usable interface.';
    }

    // 4) Tags row = LAST child of entry (not the title row)
    var tagRow = entry.children[entry.children.length - 1];
    if (tagRow) {
      var newTags = ['JavaScript', 'TypeScript', 'Python', 'Grafana', 'SQL'];
      tagRow.innerHTML = '';
      newTags.forEach(function (t) {
        var s = document.createElement('span');
        s.className = 'font-mono text-[10px] uppercase tracking-wider px-3 py-1';
        s.style.cssText = 'border:1px solid rgba(230,225,216,0.18);border-radius:9999px;color:rgba(230,225,216,0.75);';
        s.textContent = t;
        tagRow.appendChild(s);
      });
    }

    entry.dataset.expUpdated = 'true';
  }

  // ----- BOOTSTRAP -----
  function init() {
    injectCardCSS();
    applyAll();
    removePhilosophyNav();
    updateCurrentExperience();
    var observer = new MutationObserver(function () {
      if (!applying) applyAll();
      removePhilosophyNav();
      updateCurrentExperience();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 200); });
  } else {
    setTimeout(init, 200);
  }
  setTimeout(applyAll, 1800);
  setTimeout(updateCurrentExperience, 1800);
})();

