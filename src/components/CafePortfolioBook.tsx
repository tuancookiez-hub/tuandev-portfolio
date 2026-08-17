import { useEffect, useRef, useState } from "react";
import { PageFlip } from "page-flip";

const journey = [
  ["01", "Discover", "What the room feels like. Photos. Why anyone should care."],
  ["02", "Decide", "Menu, prices, dietary notes. Enough to pick something."],
  ["03", "Visit", "Hours, the walk, WhatsApp. The taps that get them there."],
  ["04", "Return", "Specials, nights, whatever makes a regular come back."],
] as const;

const concepts = [
  ["01", "Neighbourhood brunch", "Daylight, a few signature plates, hours and the map above the fold."],
  ["02", "Specialty coffee", "Beans on rotation, a short story, order-ahead if they already know."],
  ["03", "Bakery & takeaway", "What is in the case today. Pre-order. Pickup. Cakes when it matters."],
] as const;

const services = [
  ["01", "Café websites", "A homepage that answers the obvious questions and still looks like the place."],
  ["02", "Digital menus", "HTML, prices, notes. If the specials change, the page changes. No PDF."],
  ["03", "Local actions", "Hours, map, WhatsApp, order. One tap while they are already walking."],
  ["04", "Owner-friendly updates", "Specials, hours, events. You should not need me every week."],
] as const;

export default function CafePortfolioBook() {
  const host = useRef<HTMLDivElement>(null);
  const flip = useRef<PageFlip | null>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(6);
  const [portrait, setPortrait] = useState(false);

  useEffect(() => {
    const el = host.current;
    if (el === null) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const book = new PageFlip(el, {
      width: 430,
      height: 600,
      size: "stretch",
      minWidth: 260,
      maxWidth: 540,
      minHeight: 380,
      maxHeight: 720,
      drawShadow: true,
      flippingTime: reduced ? 300 : 950,
      usePortrait: true,
      showCover: false,
      autoSize: false,
      maxShadowOpacity: 0.62,
      mobileScrollSupport: true,
      swipeDistance: 24,
      clickEventForward: true,
      useMouseEvents: true,
      showPageCorners: true,
    });

    book.loadFromHTML(Array.from(el.children) as HTMLElement[]);
    book.on("flip", (event) => setPage(event.data as number));
    book.on("init", (event) => {
      setPages(book.getPageCount());
      const mode = (event.data as unknown as { mode?: string })?.mode;
      setPortrait(mode === "portrait");
    });
    book.on("changeOrientation", (event) => setPortrait(event.data === "portrait"));
    flip.current = book;

    return () => {
      book.destroy();
      flip.current = null;
    };
  }, []);

  const turn = (delta: number) => {
    const book = flip.current;
    if (book === null) return;
    if (delta > 0) {
      if (page >= pages - 1) return;
      book.flipNext("top");
    } else {
      if (page <= 0) return;
      book.flipPrev("top");
    }
  };

  const total = portrait ? pages : Math.max(1, Math.ceil(pages / 2));
  const current = portrait ? page + 1 : Math.min(total, Math.floor(page / 2) + 1);
  const atStart = page === 0;
  const atEnd = portrait ? page >= pages - 1 : page >= pages - 2;

  return (
    <section className="cafe-book-section" data-sync="portfolio" aria-labelledby="cafe-book-title">
      <div className="cafe-book-heading">
        <p>02 · Hospitality menu</p>
        <h2 id="cafe-book-title">The website is part of<br /><em>how you greet people.</em></h2>
        <span>From the first look to the walk over. I keep it clear enough to use and specific enough to feel like your place.</span>
      </div>

      <div className="cafe-book-wrap">
        <div className="cafe-book-flip" ref={host}>
          <article className="cafe-page cafe-page-cover" data-density="hard">
            <div className="cafe-cover-inner">
              <h3>Café websites<br /><em>people can actually use.</em></h3>
              <p>For cafés, bakeries, and neighbourhood food spots. I live in Kuala Lumpur.</p>
              <span className="cafe-cover-sticker">Can they<br />find you?</span>
            </div>
            <span className="cafe-page-number">Front</span>
          </article>

          <article className="cafe-page cafe-page-profile">
            <div className="cafe-page-head"><span>THE HOSPITALITY STANDARD</span><i>01 · Approach</i></div>
            <h3>Answer the boring questions. Keep the personality.</h3>
            <p className="cafe-book-bio">They found you on Google or Instagram. Menu, hours, how far the walk is. I put those first. The rest is why this café is worth the trip.</p>
            <dl className="cafe-book-details">
              <div><dt>First look</dt><dd>What the room feels like</dd></div>
              <div><dt>The menu</dt><dd>Enough to pick something</dd></div>
              <div><dt>Getting there</dt><dd>Map, WhatsApp, hours</dd></div>
              <div><dt>After launch</dt><dd>You can change it yourself</dd></div>
            </dl>
            <div className="cafe-book-note">
              <b>How I think about it</b>
              <p>Pretty is cheap. Useful and still looking like your place is the work.</p>
            </div>
          </article>

          <article className="cafe-page cafe-page-work">
            <div className="cafe-page-head"><span>THE CUSTOMER JOURNEY</span><i>02 · From browse to visit</i></div>
            <div className="cafe-book-projects">
              {journey.map(([number, title, text]) => (
                <div key={number}>
                  <span>{number}</span>
                  <div><small>{title}</small><h3>{text}</h3></div>
                  <b>↗</b>
                </div>
              ))}
            </div>
            <span className="cafe-book-archive">Discover → decide → visit → return</span>
          </article>

          <article className="cafe-page cafe-page-skills">
            <div className="cafe-page-head"><span>CONCEPT DIRECTIONS</span><i>03 · Different cafés</i></div>
            <div className="cafe-skills-list">
              {concepts.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><b>{title}</b><p>{text}</p></div>
                </article>
              ))}
            </div>
            <div className="cafe-book-note">
              <b>Same questions, different room</b>
              <p>Menu, hours, map stay easy to reach. The look changes with the business.</p>
            </div>
          </article>

          <article className="cafe-page cafe-page-contact">
            <div className="cafe-page-head"><span>WHAT I BUILD FOR HOSPITALITY</span><i>04 · Services</i></div>
            <div className="cafe-book-projects">
              {services.map(([number, title, text]) => (
                <div key={number}>
                  <span>{number}</span>
                  <div><small>{title}</small><p>{text}</p></div>
                  <b>↗</b>
                </div>
              ))}
            </div>
          </article>

          <article className="cafe-page cafe-page-back" data-density="hard">
            <div className="cafe-cover-inner">
              <h3>If they hunt for the map,<br /><em>they leave.</em></h3>
              <p>Menu first. Hours and WhatsApp close. Built around the decision to walk over.</p>
              <span className="cafe-cover-sticker">Write to<br />Tuan ↗</span>
            </div>
            <span className="cafe-page-number">Back</span>
          </article>
        </div>

        <div className="cafe-book-controls">
          <button type="button" onClick={() => turn(-1)} aria-label="Previous page" disabled={atStart}>←</button>
          <span>{current} / {total}</span>
          <button type="button" onClick={() => turn(1)} aria-label="Next page" disabled={atEnd}>→</button>
        </div>
      </div>
    </section>
  );
}
