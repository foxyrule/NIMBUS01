import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/emerald/ContactForm";
import { SectionHeading } from "@/components/emerald/SectionHeading";
import { siteConfig } from "@/lib/site";

const growthAreas = [
  { title: "Value Creation", description: "Investing and engaging across your business portfolio to find new opportunities." },
  { title: "Market Efficiency", description: "Designing and implementing platforms that eliminate waste and drive performance." },
  { title: "Capital Optimization", description: "Partnering with you to ensure your technology structure supports sustainable growth." },
];

const serviceDelivery = [
  { title: "Empower Users", description: "Bring cutting-edge technologies (from on-premise to cloud) into classrooms, offices, and businesses." },
  { title: "Blend Workflows", description: "Seamlessly integrate emerging technologies with existing, traditional processes." },
  { title: "Ensure ROI", description: "Deliver professional, cost-effective, and compliant technology services." },
];

const clients = [
  "Private entities",
  "Government entities",
  "SMEs",
  "Local and multinational organizations",
  "Charity organizations",
  "Private individuals",
];

const testimonials = [
  { quote: "The new PC setup was incredibly smooth. They handled everything—from installation to configuration—with complete professionalism. My system is running flawlessly.", name: "Jessica Doe", type: "Client" },
  { quote: "I wasn’t sure which computer to buy, but the purchase guidance helped me save money and get the perfect device. Setup was done the same day.", name: "Adebayo", type: "Business user" },
  { quote: "My laptop and desktop both were installed and configured smoothly. No hassle, no delays—just clean, efficient work and excellent support.", name: "Garuba", type: "Client" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Technology consulting & support
            </div>
            <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Emerald Technologies and Services Limited is a technology consulting company committed to generating
              exceptional value and positive, long-term impact for our clients. Since our founding, we have partnered
              with private and government entities to address market inefficiencies and optimize organizational
              strategy.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/about" className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3.5 font-medium text-white transition hover:bg-emerald-800">
                About Us
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-12 bottom-4 -z-10 h-20 rounded-full bg-emerald-100 blur-3xl" />
            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="overflow-hidden rounded-[24px] bg-slate-100">
                <Image
                  src="/images/emerald-original/home/hero-team-work.avif"
                  alt="A team collaborating around a table"
                  width={1440}
                  height={960}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[420px] w-full object-cover md:h-[560px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="overflow-hidden rounded-[22px]">
              <Image
                src="/images/emerald-original/home/hero-researchers.avif"
                alt="Researchers working together on technology solutions"
                width={1440}
                height={960}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="h-[320px] w-full object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About us"
              title="We build powerful, effective solutions by focusing on what really drives business value"
              description="We are a value-driven systems integrator focused on the strategic role of ICT in your business. We don’t just sell solutions; we carefully craft, tailor, and integrate them to meet your specific needs."
            />

            <div className="mt-8 grid gap-5">
              {growthAreas.map((item) => (
                <div key={item.title} className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Comprehensive Service Delivery"
            title="Technology solutions designed to improve performance and protect business continuity"
            description="We design and implement innovative technology solutions for organizations of all sizes, drawing on deep knowledge and advanced skill sets to:"
            align="center"
            titleClassName="text-slate-100"
            descriptionClassName="text-slate-300"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {serviceDelivery.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-slate-800 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Our Clients"
          title="Trusted support across public, private, and enterprise environments"
          description="We support a wide range of business entities spanning SMEs, local and multinational organizations, governmental institutions, charity organizations and private individuals."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {clients.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What They say about us" title="The kind of service people remember" />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 text-4xl leading-none text-emerald-700">“</div>
                <p className="text-base leading-8 text-slate-700">{item.quote}</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.type}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Let’s talk about your next technology decision"
              description="Whether you need robust on-premise digital technologies or scalable cloud solutions, we provide professional, cost-effective services tailored to your specific needs to unlock and accelerate growth potentials."
            />
            <div className="mt-8 space-y-5 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">Address:</span> {siteConfig.address.line1} {siteConfig.address.line2} {siteConfig.address.line3}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-emerald-700 hover:text-emerald-800">
                  {siteConfig.contactEmail}
                </a>
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}