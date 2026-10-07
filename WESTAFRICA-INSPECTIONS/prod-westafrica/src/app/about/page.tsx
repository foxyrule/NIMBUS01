import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { aboutContent, waisIntroduction } from "@/lib/wais-content";

export const metadata = {
  title: "About Us | West Africa Inspection Services Limited",
  description:
    "Learn about West Africa Inspection Services Limited and its inspection, supervision, testing and certification work in the Gulf of Guinea.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">About Us</p>
          <h1>West Africa Inspection Services Limited</h1>
          <p>{waisIntroduction}</p>
        </div>
      </section>

      <section className="section site-container about-focus">
        <div className="about-side-label">
          <span className="eyebrow">Our work</span>
          <span className="vertical-rule" aria-hidden="true" />
          <span className="side-note">Gulf of Guinea</span>
        </div>
        <div className="about-main">
          <SectionHeading
            eyebrow="Who we serve"
            title="Specialist loss control measures in the logistics chain"
          />
          <p className="body-copy">{aboutContent.served}</p>
          <p className="body-copy">{aboutContent.reports}</p>
          <div className="verification-callout">
            <p className="eyebrow">Due diligence</p>
            <h2>HOW, WHEN &amp; WHY</h2>
            <p>{aboutContent.dueDiligence}</p>
          </div>
        </div>
      </section>

      <section className="appointment-section">
        <div className="site-container appointment-grid">
          <div>
            <p className="eyebrow">Appointments</p>
            <h2>CESAM &amp; A.I.M.U.</h2>
          </div>
          <p>{aboutContent.appointments}</p>
        </div>
      </section>

      <section className="section site-container history-section">
        <div className="history-marker" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div>
          <SectionHeading eyebrow="Our history" title="A company with established roots" />
          <p className="body-copy">{aboutContent.history}</p>
        </div>
      </section>

      <section className="page-cta">
        <div className="site-container page-cta-inner">
          <div>
            <p className="eyebrow">Connect with Us</p>
            <h2>West Africa Inspection Services Limited</h2>
          </div>
          <Link className="button button-light" href="/contact">
            Contact Us <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
