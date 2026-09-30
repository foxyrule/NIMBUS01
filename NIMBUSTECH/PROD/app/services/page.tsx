import Link from 'next/link';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';

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
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.href}
            eyebrow={service.eyebrow}
            title={service.name}
            description={service.summary}
            href={service.href}
            image={service.image}
            imageAlt={service.imageAlt}
          />
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_14px_32px_rgba(15,23,42,0.05)]">
        <p className="section-kicker">Why clients choose Nimbus</p>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-950">Adaptable support</h3>
            <p className="mt-3 text-slate-600">A flexible service model that can support multiple business needs without losing focus.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-950">Operational clarity</h3>
            <p className="mt-3 text-slate-600">Service design that keeps teams aligned around practical priorities and reliable execution.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-950">Professional delivery</h3>
            <p className="mt-3 text-slate-600">A premium presentation designed to build confidence with clients, partners, and prospects.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
