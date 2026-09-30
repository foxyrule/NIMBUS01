import Link from 'next/link';
import Image from 'next/image';

import { SectionHeading } from '@/components/ui/SectionHeading';

const pillars = [
  'Operational technology support for daily business continuity',
  'Responsive issue resolution and reliable systems oversight',
  'Practical guidance for growing organizations with evolving technology needs',
];

const managedServices = [
  {
    title: 'Microsoft Office 365',
    copy: 'Migration, consolidation, and support for Microsoft 365 and SharePoint environments.',
    image: '/images/original/microsoft-365.webp',
    imageAlt: 'Microsoft 365 brand mark',
  },
  {
    title: 'Electronic Document Management',
    copy: 'Digital document workflows, enterprise content management, and organized records processes.',
    image: '/images/original/health-records.png',
    imageAlt: 'Digital document workflow on a tablet',
  },
  {
    title: 'Responsive Support',
    copy: 'A service focus on timely responses to customer questions and technology issues.',
    image: '/images/original/responsive-support.jpg',
    imageAlt: 'Business professionals reviewing work together',
  },
  {
    title: 'Strategic Planning',
    copy: 'Technology planning that connects architecture and topology to a phased project approach.',
    image: '/images/original/it-services.jpg',
    imageAlt: 'Professionals reviewing plans around a table',
  },
  {
    title: 'Preventive Maintenance',
    copy: 'Regular inspection and upkeep of systems and equipment to help maintain reliable operations.',
    image: '/images/original/maintenance.jpg',
    imageAlt: 'IT infrastructure equipment in a data center',
  },
  {
    title: 'Cyber Risk Mitigation',
    copy: 'Network security services including security reviews, multi-factor authentication, and Microsoft Defender.',
    image: '/images/original/cyber-risk.png',
    imageAlt: 'Original Nimbus cybersecurity network icon',
  },
  {
    title: 'Cloud Based Solutions',
    copy: 'Cloud-based services selected to suit operational requirements and support efficient access to systems.',
    image: '/images/original/managed-it-support.jpg',
    imageAlt: 'Server infrastructure supporting cloud services',
  },
];

export default function ManagedItPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Managed IT Services"
        title="Dependable technology support for businesses that need steady operations."
        description="Nimbus focuses on keeping clients supported, connected, and prepared for day-to-day technology demands without overcomplicating the process."
      />

      <div className="relative mt-10 aspect-[16/7] overflow-hidden bg-slate-900">
        <Image src="/images/original/managed-it-banner.jpg" alt="Professionals working together at a computer in a technology environment" fill priority sizes="(max-width: 768px) 100vw, 1200px" className="object-cover object-[72%_center]" />
      </div>

      <section className="mt-12" aria-labelledby="managed-service-list">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Managed IT Services</p>
            <h2 id="managed-service-list" className="mt-2 text-3xl font-semibold text-slate-950">Support across the technology lifecycle</h2>
          </div>
          <p className="max-w-xl text-slate-600">Service areas retained from Nimbus’s original site and presented with their corresponding published imagery.</p>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {managedServices.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-md border border-slate-200 bg-white">
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized={service.image.endsWith('.webp') || service.title === 'Cyber Risk Mitigation'}
                  className={service.title === 'Microsoft Office 365' || service.title === 'Cyber Risk Mitigation' ? 'object-contain p-8' : 'object-cover'}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pillars.map((item) => (
          <div key={item} className="surface-card">
            <h3 className="text-xl font-semibold text-slate-950">Service focus</h3>
            <p className="mt-4 text-slate-600">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_14px_32px_rgba(15,23,42,0.05)]">
        <p className="section-kicker">Why it matters</p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Managed IT support is a core component of a resilient business operation. It helps organizations reduce friction, maintain continuity, and move forward with confidence in the systems that keep everyday work running.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/contact" className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
          Talk with Nimbus
        </Link>
        <Link href="/services" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400">
          Back to services
        </Link>
      </div>
    </div>
  );
}
