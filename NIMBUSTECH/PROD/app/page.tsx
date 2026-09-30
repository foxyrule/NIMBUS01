import Link from 'next/link';
import Image from 'next/image';

import { HeroRotator } from '@/components/ui/HeroRotator';
import { SectionHeading } from '@/components/ui/SectionHeading';

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
  { title: 'Understand the need', text: 'Clarify the challenge, operating context, and service area.' },
  { title: 'Define the approach', text: 'Map the right support model and practical next steps.' },
  { title: 'Deliver the work', text: 'Stay accountable to the plan with consistent communication.' },
];

export default function HomePage() {
  return (
    <div className="pb-16">
      <HeroRotator />

      <section className="container-shell grid gap-8 py-16 md:grid-cols-[0.7fr_1.3fr] md:py-20">
        <p className="section-kicker">Nimbus at a glance</p>
        <div>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">One company. A considered mix of technology and business services.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Nimbus Technologies &amp; Services LLC works across managed IT, healthcare records management, real estate, fantasy sports, and talent scouting. Each service is presented with a practical focus on reliable operations and clear communication.</p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Service lines"
            title="Focused capabilities, grounded in real work."
            description="Explore the established service areas in the Nimbus portfolio."
          />

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {serviceHighlights.map((service, index) => (
              <article key={service.title} className="grid items-center gap-6 py-7 md:grid-cols-[5rem_minmax(0,0.9fr)_minmax(16rem,0.8fr)] md:gap-9 md:py-8">
                <p className="font-mono text-sm text-brand-700">0{index + 1}</p>
                <div>
                  <p className="section-kicker">{service.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-slate-950">{service.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{service.description}</p>
                  <Link href={service.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline underline-offset-4">
                    View service <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image src={service.image} alt={service.imageAlt} fill loading={index === 1 ? 'eager' : 'lazy'} sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] py-16 text-white sm:py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How Nimbus works"
            title="A straightforward way to move from need to delivery."
            dark
          />

          <div className="mt-10 grid gap-8 border-t border-white/20 pt-7 md:grid-cols-3 md:gap-10">
            {processSteps.map((step, index) => (
              <div key={step.title}>
                <p className="font-mono text-sm text-cyan-300">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-6 py-16 sm:grid-cols-[1fr_auto] sm:items-center sm:py-20">
        <div>
          <p className="section-kicker">Start a conversation</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-slate-950">Let’s discuss the right support for your organization.</h2>
        </div>
        <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
          Contact Nimbus <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
