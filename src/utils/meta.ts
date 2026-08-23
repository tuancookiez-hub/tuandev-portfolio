const BASE = "https://tuancookiez-hub.github.io/tuandev-portfolio/";

type Meta = {
  title: string;
  description: string;
  url: string;
};

const MAP: Record<string, Meta> = {
  landing: {
    title: "Tuan \u2014 Product Engineer & Creative Technologist",
    description: "Tuan \u2014 product engineer and creative technologist building AI systems, data-heavy interfaces, and interactive web experiences from Kuala Lumpur.",
    url: BASE,
  },
  hospitality: {
    title: "Tuan \u2014 Hospitality Web Design",
    description: "Websites for cafes and neighbourhood places: menu, hours, directions, and a reason to visit.",
    url: `${BASE}?world=hospitality`,
  },
  systems: {
    title: "Tuan \u2014 AI Systems & Operations Interfaces",
    description: "AI gateways, observability, routing, and interfaces that stay readable under load.",
    url: `${BASE}?world=systems`,
  },
  creative: {
    title: "Tuan \u2014 Creative Coding & WebGL",
    description: "A procedural black hole and scroll-driven experiments built in code.",
    url: `${BASE}?world=creative`,
  },
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

export function applyMeta(world: string | null) {
  const key = world && MAP[world] ? world : "landing";
  const m = MAP[key];
  document.title = m.title;
  setMeta("description", m.description, "name");
  setMeta("og:title", m.title, "property");
  setMeta("og:description", m.description, "property");
  setMeta("og:url", m.url, "property");
  setMeta("twitter:title", m.title, "name");
  setMeta("twitter:description", m.description, "name");
  setCanonical(m.url);
}

export const meta = { MAP, applyMeta };
