import Link from 'next/link';
import Image from 'next/image';

import { SectionHeading } from '@/components/ui/SectionHeading';

const focusAreas = [
  'Support for sports-driven initiatives and strategic opportunities',
  'Talent-focused engagement with a practical, professional approach',
  'Program coordination rooted in communication, adaptability, and execution',
];

export default function SportsTalentPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Fantasy Sports / Talent Scouting"
        title="A specialized service area built around opportunity, evaluation, and execution."
        description="Nimbus incorporates this domain as part of its broader business portfolio, bringing a disciplined and professional approach to sports-focused and talent-driven programs."
      />

      <div className="relative mt-10 aspect-[16/8] overflow-hidden bg-slate-900">
        <Image src="/images/original/adult-league.jpg" alt="Soccer players competing in a match" fill priority sizes="(max-width: 768px) 100vw, 1200px" className="object-cover" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {focusAreas.map((item) => (
          <div key={item} className="surface-card">
            <h3 className="text-xl font-semibold text-slate-950">Program value</h3>
            <p className="mt-4 text-slate-600">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_14px_32px_rgba(15,23,42,0.05)]">
        <p className="section-kicker">Strategic lens</p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          This part of the Nimbus portfolio reflects a focused, opportunity-driven model that requires both insight and execution. It fits within the broader company mission of delivering practical business value across multiple service lines.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/contact" className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
          Start a conversation
        </Link>
        <Link href="/services" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400">
          Back to services
        </Link>
      </div>
    </div>
  );
}
