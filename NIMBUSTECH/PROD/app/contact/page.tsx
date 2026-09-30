import Link from 'next/link';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { company } from '@/lib/site';

export default function ContactPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk about your next business support need."
        description="Nimbus works with organizations that need dependable execution across technology, records operations, real estate support, and specialized service programs."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-card">
          <p className="text-2xl font-semibold tracking-tight text-slate-950">{company.name}</p>
          <div className="mt-6 space-y-5 text-slate-700">
            <p className="whitespace-pre-line leading-7">{company.address}</p>
            <p>
              Phone:{' '}
              <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="font-medium text-brand-700 hover:text-brand-900">
                {company.phone}
              </a>
            </p>
            <p>
              Email:{' '}
              <a href={`mailto:${company.email}`} className="font-medium text-brand-700 hover:text-brand-900">
                {company.email}
              </a>
            </p>
            <p>Hours: {company.hours}</p>
          </div>
        </div>

        <div className="surface-card bg-slate-950 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">Quick actions</p>
          <div className="mt-6 space-y-4">
            <a href="tel:+16124607639" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <span>Call Nimbus</span>
              <span aria-hidden="true">→</span>
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <span>Email the team</span>
              <span aria-hidden="true">→</span>
            </a>
            <Link href="/services" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <span>Explore services</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
