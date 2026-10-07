import Link from "next/link";
import Image from "next/image";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link className="company-name" href="/" aria-label="West Africa Inspection Services Limited home">
          <Image
            className="brand-logo"
            src="/West%20africa%20inspection%20services%20limited.png"
            alt="West Africa Inspection Services Limited"
            width={194}
            height={60}
            unoptimized
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {pageLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="mobile-navigation">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
          </summary>
          <nav className="mobile-nav-panel" aria-label="Mobile navigation">
            {pageLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-main">
        <div className="footer-company">
          <Link className="footer-logo-link" href="/" aria-label="West Africa Inspection Services Limited home">
            <Image
              className="footer-logo"
              src="/West%20africa%20inspection%20services%20limited.png"
              alt="West Africa Inspection Services Limited"
              width={194}
              height={60}
              unoptimized
            />
          </Link>
          <p className="eyebrow">West Africa Inspection Services Limited</p>
          <address>
            5th Floor, Wesley House, 21/22 Marina Lagos Nigeria
            <br />
            <a href="mailto:mail@westafrica-inspections.com">mail@westafrica-inspections.com</a>
          </address>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {pageLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="site-container footer-bottom">
        <span>West Africa Inspection Services Limited</span>
        <a href="mailto:westafrica-inspections@hyperia.com">westafrica-inspections@hyperia.com</a>
      </div>
    </footer>
  );
}
