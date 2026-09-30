import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Nimbus Technologies & Services LLC and its work across technology, healthcare records, real estate, sports, and talent services.',
};

const principles = [
  {
    title: 'Practical expertise',
    text: 'Nimbus is positioned around real-world business support, operational responsiveness, and solutions that keep work moving.',
  },
  {
    title: 'Flexible service mix',
    text: 'The business model spans technology, records operations, real estate support, and specialized program work without losing focus.',
  },
  {
    title: 'Professional accountability',
    text: 'Every engagement is managed with clear communication, dependable follow-through, and a business-first mindset.',
  },
];

export default function AboutPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="About"
        title="Nimbus brings multiple service disciplines together under one professional brand."
        description="The company operates as a modern business services organization with a clear focus on technology support, records and information workflows, property-related services, and specialized programs in sports and talent."
        level={1}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="surface-card">
          <p className="text-lg leading-8 text-slate-700">
            Nimbus is positioned around practical execution and collaborative problem-solving. The brand reflects a business that supports clients across technology operations, healthcare records management, real estate coordination, and service-driven initiatives that require consistency and professionalism.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            The focus remains clear: professional support, dependable communication, and flexible solutions that help businesses stay organized as they grow and adapt.
          </p>
        </div>

        <div className="surface-card bg-slate-950 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">Operating focus</p>
          <ul className="mt-6 space-y-4 text-sm text-slate-200">
            <li>Managed IT Services</li>
            <li>RALICARE / Healthcare Records Management</li>
            <li>Real Estate Services</li>
            <li>Fantasy Sports / Talent Scouting</li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow="Principles" title="What guides the Nimbus approach." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title} className="surface-card">
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
