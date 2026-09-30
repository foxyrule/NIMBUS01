import Link from 'next/link';
import Image from 'next/image';

import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RALICARE Healthcare Records Management',
  description: 'Learn about Nimbus RALICARE healthcare records management and its focus on structured documentation workflows.',
};

const points = [
  'Highly organized records and information management workflows',
  'Operational support built for documentation accuracy and consistency',
  'A professional, structured approach for healthcare-facing environments',
];

export default function RalicarePage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="RALICARE / Healthcare Records Management"
        title="Structured records support for high-stakes operational environments."
        description="This service area reflects Nimbus’s focus on record integrity, clear documentation, and business processes that require a disciplined and dependable approach."
        level={1}
      />

      <div className="relative mt-10 aspect-[16/8] overflow-hidden bg-slate-900">
        <Image src="/images/original/health-records.png" alt="Healthcare professional documenting records on a digital tablet" fill priority sizes="(max-width: 768px) 100vw, 1200px" className="object-cover" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {points.map((item) => (
          <div key={item} className="surface-card">
            <h3 className="text-xl font-semibold text-slate-950">Operational priority</h3>
            <p className="mt-4 text-slate-600">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-slate-200 py-8">
        <p className="section-kicker">What this supports</p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          The RALICARE service line aligns with professional records management principles, workflow clarity, and a structured operating model that helps organizations manage information responsibly and consistently.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/contact" className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
          Discuss this service
        </Link>
        <Link href="/services" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400">
          Back to services
        </Link>
      </div>
    </div>
  );
}
