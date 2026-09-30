import Link from 'next/link';
import Image from 'next/image';

import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Nimbus managed IT, RALICARE healthcare records management, real estate, fantasy sports, and talent scouting services.',
};

const services = [
  {
    href: '/services/managed-it',
    eyebrow: 'IT',
    name: 'Managed IT Services',
    summary: 'Reliable support and operational continuity for organizations that depend on stable technology systems.',
    image: '/images/original/managed-it-support.jpg',
    imageAlt: 'Server racks in a managed IT environment',
  },
  {
    href: '/services/ralicare',
    eyebrow: 'Healthcare',
    name: 'RALICARE / Healthcare Records Management',
    summary: 'Structured records and information workflows designed for healthcare-facing and regulated business environments.',
    image: '/images/original/health-records.png',
    imageAlt: 'Healthcare professional completing records on a digital tablet',
  },
  {
    href: '/services/real-estate',
    eyebrow: 'Real estate',
    name: 'Real Estate Services',
    summary: 'Practical property-centered support and service coordination that helps clients move with confidence.',
    image: '/images/original/real-estate.jpg',
    imageAlt: 'Apartment property from Nimbus real estate materials',
  },
  {
    href: '/services/sports-talent',
    eyebrow: 'Sports',
    name: 'Fantasy Sports / Talent Scouting',
    summary: 'Strategic support for talent-focused and sports-driven opportunities across emerging programs and initiatives.',
    image: '/images/original/adult-league.jpg',
    imageAlt: 'Soccer players in competition',
  },
];

export default function ServicesPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Services"
        title="Professional solutions built for real business demands."
        description="Nimbus supports multiple business functions through a consistent model that values trust, execution, and practical outcomes."
        level={1}
      />

      <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
        {services.map((service, index) => (
          <article key={service.name} className="grid items-center gap-6 py-7 md:grid-cols-[4rem_minmax(0,1fr)_minmax(17rem,0.8fr)] md:gap-8 md:py-8">
            <p className="font-mono text-sm text-brand-700">0{index + 1}</p>
            <div>
              <p className="section-kicker">{service.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-950">{service.name}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{service.summary}</p>
              <Link href={service.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline underline-offset-4">
                Explore service <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
              <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-slate-200 pt-8">
        <p className="section-kicker">Service approach</p>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          <div className="border-l-2 border-brand-500 pl-5">
            <h3 className="text-lg font-semibold text-slate-950">Adaptable support</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">A flexible service model that can support multiple business needs without losing focus.</p>
          </div>
          <div className="border-l-2 border-brand-500 pl-5">
            <h3 className="text-lg font-semibold text-slate-950">Operational clarity</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Service design that keeps teams aligned around practical priorities and reliable execution.</p>
          </div>
          <div className="border-l-2 border-brand-500 pl-5">
            <h3 className="text-lg font-semibold text-slate-950">Professional delivery</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">A business-focused approach centered on communication and follow-through.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
