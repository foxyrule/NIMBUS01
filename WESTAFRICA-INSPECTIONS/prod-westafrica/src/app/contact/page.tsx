import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails } from "@/lib/wais-content";

export const metadata = {
  title: "Contact Us | West Africa Inspection Services Limited",
  description: "Contact West Africa Inspection Services Limited by phone, email or contact form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">Contact Us</p>
          <h1>Connect with Us</h1>
        </div>
      </section>

      <section className="section site-container contact-layout">
        <div className="contact-details">
          <SectionHeading eyebrow="West Africa Inspection Services Limited" title="Contact Us" />
          <div className="contact-detail-group">
            <h2>Phone</h2>
            <ul>
              {contactDetails.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-detail-group">
            <h2>Email</h2>
            <ul>
              {contactDetails.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-detail-group">
            <h2>Address</h2>
            <address>{contactDetails.address}</address>
          </div>
        </div>
        <div className="form-panel">
          <SectionHeading eyebrow="Connect with Us" title="Send us a message" />
          <p className="form-intro">Contact Us form maximum of 400 words.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
