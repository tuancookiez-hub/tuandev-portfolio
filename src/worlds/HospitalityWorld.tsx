import { motion } from "motion/react";
import DevicePreview, { usePreviewReceiver } from "../components/DevicePreview";
import CafePortfolioBook from "../components/CafePortfolioBook";

const features = [
  { number: "01", title: "A menu people can read on a phone", text: "HTML, prices, dietary notes. If the specials change, the page changes. No PDF." },
  { number: "02", title: "Hours, maps, WhatsApp", text: "The stuff someone checks on the walk over. One tap, not a hunt." },
  { number: "03", title: "Looks like that café, not a template", text: "Photos, type, and colour from the place itself. I do not drop a stock theme on it." },
  { number: "04", title: "Owners can edit it", text: "Specials, hours, events. You should not need me every time the menu moves." },
];

const concepts = [
  { number: "01", label: "Neighbourhood brunch", color: "green", text: "Daylight, a few signature plates, hours and the map above the fold." },
  { number: "02", label: "Specialty coffee", color: "blue", text: "Beans on rotation, a short story, order-ahead if they already know what they drink." },
  { number: "03", label: "Bakery & takeaway", color: "orange", text: "What is in the case today, pre-order, pickup. Cakes when someone is celebrating." },
];

/* HospitalityWorld: the full cafe page. Used both as the gateway peek
   (scaled inside the Hospitality card) and as the entered page (full
   viewport). The wrapping HospitalityPortal handles the scale/position
   animation; this component just renders the cafe content with no portal
   cover or "Main menu" auto-hide complexity — the wrapper itself decides
   when to show the return button (showReturn). */
export default function HospitalityWorld({
  embed = false,
  shared = true,
  showReturn = false,
  onClose,
}: {
  embed?: boolean;
  shared?: boolean;
  showReturn?: boolean;
  onClose?: () => void;
}) {
  usePreviewReceiver(embed);

  return (
    <motion.div
      className="cafe"
      initial={{ opacity: shared ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ opacity: { duration: 0.25 } }}
    >
      {showReturn && (
        <button type="button" className="world-return" onClick={onClose}>
          <i aria-hidden="true">←</i> Main menu
        </button>
      )}
      <div className="cafe-utility" data-sync="utility">
        <span><i /> Open for selected projects</span>
        <span>Kuala Lumpur · Remote</span>
        <a href="mailto:tuancookiez@gmail.com">Say hello ↗</a>
      </div>

      <header className="cafe-nav" data-sync="nav">
        <a className="cafe-brand" href="#cafe-top" onClick={(event) => { if (onClose) { event.preventDefault(); onClose(); } }}>
          <b>Tuan</b><span>Café websites</span>
        </a>
        <nav aria-label="Café portfolio">
          <a href="#cafe-work">Work</a>
          <a href="#cafe-services">Services</a>
          <a href="#cafe-process">Process</a>
        </nav>
        <a className="cafe-project" href="#cafe-contact">Start a project</a>
      </header>

      <main id="cafe-top">
        <section className="cafe-hero" data-sync="hero">
          <img src="./assets/cafe/hero.webp" alt="Bright independent neighbourhood café demonstrating Tuan's café website direction" />
          <div className="cafe-hero-tint" />
          <motion.div className="cafe-hero-copy" initial={{ y: "calc(-50% + 28px)", opacity: 0 }} animate={{ y: "-50%", opacity: 1 }} transition={{ delay: 0.35, duration: 0.75 }}>
            <p>Café websites from Kuala Lumpur</p>
            <h1>Can they find you,<br /><em>and do they want to come?</em></h1>
            <span>I build sites for small cafés, bakeries, and neighbourhood places. Menu, hours, WhatsApp. Then whatever makes that room feel like itself.</span>
            <div className="cafe-actions">
              <a href="#cafe-work">See café directions</a>
              <a href="#cafe-services">What I can build ↓</a>
            </div>
          </motion.div>
          <div className="cafe-sticker">Small cafés.<br />A site that works.</div>
        </section>

        <section className="cafe-fast-strip" data-sync="quick">
          <span>START HERE</span>
          <a href="#cafe-services"><b>Menu</b><small>Readable on a phone</small><i>↗</i></a>
          <a href="#cafe-process"><b>Hours</b><small>Whether you are open</small><i>↗</i></a>
          <a href="#cafe-contact"><b>Contact</b><small>Map and WhatsApp</small><i>↗</i></a>
        </section>

        <section className="cafe-intro" data-sync="approach">
          <div className="cafe-section-tag">01 · The standard</div>
          <div>
            <h2>Answer the boring questions. <em>Keep the personality.</em></h2>
            <p>Someone found you on Google or Instagram. They want the menu, whether you are open, and how far the walk is. I put those first. The rest of the page is about why this café is worth the trip.</p>
          </div>
          <aside>
            <b>Menu</b><b>Hours</b><b>Directions</b><b>WhatsApp</b>
          </aside>
        </section>

        <CafePortfolioBook />

        <section className="cafe-services" id="cafe-services" data-sync="services">
          <div className="cafe-services-title">
            <p>03 · What I build</p>
            <h2>Useful first.<br />Then it should look<br /><em>like your place.</em></h2>
            <a href="#cafe-contact">Tell me about the café ↗</a>
          </div>
          <div className="cafe-feature-list">
            {features.map((feature) => (
              <article key={feature.number}>
                <span>{feature.number}</span>
                <div><h3>{feature.title}</h3><p>{feature.text}</p></div>
                <i>↗</i>
              </article>
            ))}
          </div>
        </section>

        <section className="cafe-showcase" data-sync="showcase">
          <div className="cafe-showcase-image"><img src="./assets/cafe/menu.webp" alt="Bright café menu photography with drinks and pastries" /></div>
          <div className="cafe-showcase-copy">
            <p>Menu experience</p>
            <h2>Show the food they came for.</h2>
            <p>A strip of bestsellers gives the room a face. An HTML menu gives the details. Both should load on a phone and change when the kitchen does.</p>
            <div className="cafe-menu-demo">
              <span><b>Pandan iced latte</b><small>Coconut · espresso · pandan</small></span><em>14</em>
              <span><b>Butter croissant</b><small>Daily bake · cultured butter</small></span><em>10</em>
              <span><b>Brunch toast</b><small>Egg · herbs · seasonal greens</small></span><em>22</em>
            </div>
          </div>
        </section>

        <section className="cafe-directions" id="cafe-work" data-sync="work">
          <div className="cafe-directions-head">
            <p>04 · Concept directions</p>
            <h2>Different cafés need different rooms.</h2>
            <span>Same bones: menu, hours, map. The look changes with the place. These are studies, not live clients.</span>
          </div>
          <div className="cafe-direction-grid">
            {concepts.map((concept) => (
              <article key={concept.number} data-color={concept.color}>
                <span>{concept.number}</span>
                <i aria-hidden="true" />
                <h3>{concept.label}</h3>
                <p>{concept.text}</p>
                <strong>Concept direction</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="cafe-local" data-sync="local">
          <div className="cafe-local-photo"><img src="./assets/cafe/exterior.webp" alt="Friendly small neighbourhood café exterior in Kuala Lumpur" /></div>
          <div className="cafe-local-copy">
            <p>Local-business UX</p>
            <h2>If they have to hunt for the map, they leave.</h2>
            <p>Hours, walking notes, phone, WhatsApp. Especially on a phone, in the rain, while deciding whether to come over.</p>
            <div className="cafe-location-demo">
              <div><span>Open today</span><b>8:00 AM — 7:00 PM</b></div>
              <a href="#cafe-contact">Get directions ↗</a>
              <a href="#cafe-contact">WhatsApp ↗</a>
            </div>
          </div>
        </section>

        <section className="cafe-process" id="cafe-process" data-sync="process">
          <div><p>05 · Working together</p><h2>A small process. No agency theatre.</h2><span>You already have a menu, photos, a story, a corner of the street. I turn that into a site you can keep.</span></div>
          <ol>
            <li><b>01</b><span>Direction</span><p>Who comes, what they ask, what you care about.</p></li>
            <li><b>02</b><span>Design</span><p>Homepage, menu, the taps that matter on a phone.</p></li>
            <li><b>03</b><span>Build</span><p>The live site. Fast enough. Easy to change.</p></li>
            <li><b>04</b><span>Launch</span><p>Final copy, a pass on a real phone, then it is yours.</p></li>
          </ol>
        </section>

        <section className="cafe-contact" id="cafe-contact" data-sync="contact">
          <span>Got a small place people already like?</span>
          <h2>I can give it a website<br />that does not get in the way.</h2>
          <a href="mailto:tuancookiez@gmail.com">Write to Tuan ↗</a>
        </section>
      </main>

      <footer className="cafe-footer" data-sync="footer">
        <b>TUAN DEV · CAFÉ WEBSITES</b><span>Kuala Lumpur · Malaysia</span><span>Portfolio · GitHub · Contact</span>
      </footer>
      {!embed && showReturn && <DevicePreview world="hospitality" />}
    </motion.div>
  );
}