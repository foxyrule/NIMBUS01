import Link from 'next/link';
import Image from 'next/image';

import { SectionHeading } from '@/components/ui/SectionHeading';

const areas = [
  'Property-centered operational coordination and communication',
  'Responsive service support that helps keep transactions and workflows organized',
  'A professional, client-focused experience built around trust and clarity',
];

export default function RealEstatePage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Real Estate Services"
        title="Professional support in a service area that depends on clarity and trust."
        description="Nimbus’s real estate work reflects a practical, client-first approach that values accuracy, communication, and smooth coordination across property-focused needs."
      />

      <div className="relative mt-10 aspect-[16/8] overflow-hidden bg-slate-900">
        <Image src="/images/original/real-estate.jpg" alt="Apartment property represented in Nimbus real estate materials" fill priority sizes="(max-width: 768px) 100vw, 1200px" className="object-cover" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {areas.map((item) => (
          <div key={item} className="surface-card">
            <h3 className="text-xl font-semibold text-slate-950">Service value</h3>
            <p className="mt-4 text-slate-600">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_14px_32px_rgba(15,23,42,0.05)]">
        <p className="section-kicker">Purpose</p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Real estate services benefit from a business model that keeps clients informed, organized, and supported at every stage. Nimbus approaches this work with the same professionalism and emphasis on execution that defines the broader company.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/contact" className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
          Reach out
        </Link>
        <Link href="/services" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400">
          Back to services
        </Link>
      </div>
    </div>
  );
}
