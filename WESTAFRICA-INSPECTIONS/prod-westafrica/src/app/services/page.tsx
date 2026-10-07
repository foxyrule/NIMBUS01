import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { serviceDetails, servedOrganizations } from "@/lib/wais-content";

export const metadata = {
  title: "Services | West Africa Inspection Services Limited",
  description:
    "Marine survey, cargo inspection, claims support and vessel condition services from West Africa Inspection Services Limited.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">Services</p>
          <h1>Expert Marine Survey and Inspection Services</h1>
          <p>
            We work with Charterers, Ship-owners, Stevedores, P&amp;I clubs, Hull &amp; Machinery,
            Underwriters, Insurance Companies, Port operators and other organizations directly related to the global
            supply chain.
          </p>
        </div>
      </section>

      <section className="section site-container">
        <SectionHeading
          eyebrow="Our services"
          title="Inspection, verification and survey work"
        />
        <div className="service-detail-list">
          {serviceDetails.map((service, index) => (
            <article className="service-detail" key={service.title}>
              <div className="service-detail-heading">
                <span className="service-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h2>{service.title}</h2>
              </div>
              <div className="service-detail-copy">
                {service.paragraphs.map((paragraph) => (
                  <p className="body-copy" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="audience-section">
        <div className="site-container audience-grid">
          <div>
            <p className="eyebrow">Organizations served</p>
            <h2>Directly related to the global supply chain</h2>
          </div>
          <ul className="organization-list">
            {servedOrganizations.map((organization) => (
              <li key={organization}>{organization}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-cta">
        <div className="site-container page-cta-inner">
          <div>
            <p className="eyebrow">West Africa Inspection Services Limited</p>
            <h2>Contact Us</h2>
          </div>
          <Link className="button button-light" href="/contact">
            Connect with Us <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
