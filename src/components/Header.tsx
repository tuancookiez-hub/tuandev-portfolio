const LINKS = [
  { label: "About", href: "#about" },
  { label: "All Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Header() {
  return (
    <header className="header">
      <a id="top" className="header-wordmark" href="#top">
        TUAN DEV PORTFOLIO
      </a>
      <nav className="header-nav" aria-label="Portfolio">
        <ul>
          {LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
