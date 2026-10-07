import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { serviceSummaries, servedOrganizations, waisIntroduction } from "@/lib/wais-content";

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">West Africa Inspection Services Limited</p>
            <h1>Trusted services to the energy, marine &amp; insurance world</h1>
            <p className="hero-subtitle">Expert Marine Survey and Inspection Services</p>
            <p className="hero-description">{waisIntroduction}</p>
            <Link className="button button-light" href="/contact">
              Contact Us <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-orbit visual-orbit-outer" />
            <div className="visual-orbit visual-orbit-inner" />
            <div className="visual-crosshair visual-crosshair-one" />
            <div className="visual-crosshair visual-crosshair-two" />
            <div className="visual-coordinate">GULF OF GUINEA</div>
            <div className="visual-caption">
              <span className="visual-caption-rule" />
              Marine · Inspection · Assurance
            </div>
          </div>
        </div>
        <div className="hero-edge" aria-hidden="true" />
      </section>

      <section className="section site-container">
        <SectionHeading
          eyebrow="What we do"
          title="Inspection services grounded in careful verification"
          description="A broad spectrum of inspection, supervision, testing and occasional certification work."
        />
        <div className="service-grid">
          {serviceSummaries.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-index" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{service.title}</h3>
              <Link className="text-link" href="/services">
                Explore services <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="audience-section">
        <div className="site-container audience-grid">
          <div>
            <p className="eyebrow">Who we work with</p>
            <h2>Supporting those connected to the global supply chain</h2>
          </div>
          <ul className="organization-list">
            {servedOrganizations.map((organization) => (
              <li key={organization}>{organization}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="closing-cta site-container">
        <div>
          <p className="eyebrow">West Africa Inspection Services Limited</p>
          <h2>Connect with Us</h2>
        </div>
        <p className="closing-copy">{waisIntroduction}</p>
        <Link className="button button-dark" href="/contact">
          Contact Us <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
