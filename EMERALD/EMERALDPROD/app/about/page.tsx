import Image from "next/image";
import { SectionHeading } from "@/components/emerald/SectionHeading";

export const metadata = { title: "About" };

const values = [
  {
    title: "Value creation",
    description: "Investing and engaging across the business portfolio to uncover new opportunities and improve decision quality.",
  },
  {
    title: "Market efficiency",
    description: "Designing practical platforms and systems that reduce friction, remove waste, and strengthen operational performance.",
  },
  {
    title: "Capital optimization",
    description: "Ensuring technology structures support sustainable growth, resilience, and business continuity.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <SectionHeading
        eyebrow="About us"
        title="About company."
        description="We are a value-driven systems integrator focused on the strategic role of ICT in your business. We don’t just sell solutions; we carefully craft, tailor, and integrate them to meet your specific needs."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-sm">
          <Image
            src="/images/emerald-original/about/company-story.jpg"
            alt="Business professionals collaborating in a meeting"
            width={1440}
            height={1000}
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="h-[380px] w-full rounded-[22px] object-cover"
          />
        </div>

        <div className="space-y-6 text-base leading-8 text-slate-600">
          <h3 className="text-2xl font-semibold text-slate-900">From the cloud to customer we bring the answers</h3>
          <p>
            <strong className="font-semibold text-slate-900">Emerald Technologies and Services Limited</strong> was founded in March 2003 with a singular mission: to ensure our clients’ technology works as a profit-driving asset, not just a cost.
          </p>
          <ul className="ml-5 list-disc space-y-2 text-slate-700">
            <li>Excellence Engineering</li>
            <li>Simplify IT to multiply profits</li>
            <li>Committed to innovation</li>
            <li>Bring your ideas to life</li>
            <li>Help business and technology</li>
            <li>Ready for the future</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Our it expert member ready to provide service</h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          What we deliver: A crucial competitive edge through solutions that enhance service quality, strengthen security, and significantly improve efficiency and the end-user experience.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Image src="/images/emerald-original/about/about-67.webp" alt="Emerald technology professional" width={480} height={318} className="h-56 w-full rounded-2xl object-cover" />
          <Image src="/images/emerald-original/about/about-70.webp" alt="Professional at work in an office" width={480} height={320} className="h-56 w-full rounded-2xl object-cover" />
          <Image src="/images/emerald-original/about/about-69.webp" alt="Business professional in a modern workplace" width={480} height={320} className="h-56 w-full rounded-2xl object-cover" />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}