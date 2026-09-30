import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/ui/ContactForm';
import { company } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Nimbus Technologies & Services LLC about managed IT, healthcare records, real estate, fantasy sports, or talent scouting.',
};

export default function ContactPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Send us a message."
        description="Tell Nimbus what you need help with. The team will follow up by email."
        level={1}
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(17rem,0.8fr)]">
        <ContactForm />
        <aside className="border-t border-slate-200 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="section-kicker">Contact Nimbus</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Start with a note.</h2>
          <p className="mt-3 text-slate-600">Share the service area and the kind of support you are looking for. The team can follow up by email.</p>
          <a href="mailto:contactus@nimbustechllc.com" className="mt-6 inline-block break-all font-semibold text-brand-700 underline decoration-brand-200 underline-offset-4 hover:text-brand-900">
            {company.email}
          </a>
        </aside>
      </div>
    </div>
  );
}
