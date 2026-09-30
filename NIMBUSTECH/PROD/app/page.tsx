import Link from 'next/link';

import { HeroRotator } from '@/components/ui/HeroRotator';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { company } from '@/lib/site';

const serviceHighlights = [
  {
    href: '/services/managed-it',
    eyebrow: 'Technology',
    title: 'Managed IT Services',
    description: 'Reliable operations, responsive support, and a practical technology foundation to keep growing businesses moving.',
    image: '/images/original/managed-it-support.jpg',
    imageAlt: 'Server racks in a managed IT environment',
  },
  {
    href: '/services/ralicare',
    eyebrow: 'Healthcare',
    title: 'RALICARE / Records Management',
    description: 'Structured, organized records workflows and operational support designed for healthcare and regulated environments.',
    image: '/images/original/health-records.png',
    imageAlt: 'Healthcare professional entering records on a digital tablet',
  },
  {
    href: '/services/real-estate',
    eyebrow: 'Property',
    title: 'Real Estate Services',
    description: 'Property-centered support, coordination, and execution built around smooth client experience and operational confidence.',
    image: '/images/original/real-estate.jpg',
    imageAlt: 'Apartment property from Nimbus real estate materials',
  },
  {
    href: '/services/sports-talent',
    eyebrow: 'Sports',
    title: 'Fantasy Sports / Talent Scouting',
    description: 'Strategic support across sports-driven programs and emerging talent opportunities, from planning to execution.',
    image: '/images/original/adult-league.jpg',
    imageAlt: 'Soccer players in competition',
  },
];

const differencePillars = [
  {
    title: 'Trusted execution',
    text: 'Nimbus focuses on dependable systems, clear communication, and practical support across multiple service lines.',
  },
  {
    title: 'Business-first approach',
    text: 'Every service is designed around operational continuity, practical outcomes, and measurable business value.',
  },
  {
    title: 'Cross-functional versatility',
    text: 'The company blends technology, records operations, property support, and specialized program work under one umbrella.',
  },
];

const processSteps = [
  'Clarify the challenge or opportunity.',
  'Map the right operational strategy and service fit.',
  'Deliver consistent support and measurable progress.',
];

export default function HomePage() {
  return (
    <div className="pb-16">
      <HeroRotator />

      <section className="container-shell py-12">
        <SectionHeading
          eyebrow="What Nimbus delivers"
          title="A professional, cross-functional service model."
          description="The company combines practical technology support with business-facing services that help clients stay organized, responsive, and ready for growth."
        />
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Service lines"
            title="Built around the work that matters most."
            dark
            description="From managed IT support to healthcare records and specialized business programs, Nimbus continues to work across the service areas that define its real-world scope."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceHighlights.map((service) => (
              <ServiceCard
                key={service.href}
                eyebrow={service.eyebrow}
                title={service.title}
                description={service.description}
                href={service.href}
                image={service.image}
                imageAlt={service.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionHeading
          eyebrow="Why Nimbus"
          title="Trustworthy support for complex, operational work."
          description="The company’s strength is not a single service line—it is the blend of practical execution, communication, and adaptability across multiple business demands."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {differencePillars.map((item, index) => (
            <div key={item.title} className="surface-card">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-sm font-bold text-brand-700">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-4 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How it works"
            title="A clear and practical engagement model."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step} className="surface-card bg-white">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-lg font-medium text-slate-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="rounded-[2rem] bg-gradient-to-r from-brand-700 via-brand-900 to-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,35,70,0.24)] sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">Ready to connect?</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let’s discuss the right support model for your business.</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                Contact Nimbus
              </Link>
              <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
