import { SectionHeading } from "@/components/emerald/SectionHeading";
import Image from "next/image";

const services = [
  {
    title: "Managed IT & Business Optimization",
    introduction:
      "We handle the complexity of your IT infrastructure so you can focus on your business goals. We provide proactive, secure, and cost-effective solutions for organizations of all sizes.",
    items: [
      { title: "Managed & Professional Services", description: "Comprehensive IT management ensuring high network security and systems uptime. We give you secured access to your data, whenever and wherever you need it." },
      { title: "Strategic Planning", description: "We translate your business priorities into a clear, implementable IT roadmap. We analyze your current environment and resources to plan a smooth, impactful technology transformation." },
      { title: "Cloud & Hybrid Solutions", description: "Coordinate your entire technology stack across complex environments. Our platforms ease the burden of security configuration, maintenance, and support." },
      { title: "Preventive Maintenance & Support", description: "Get reliable, customized technical support and constant equipment monitoring to proactively avoid service disruptions." },
    ],
  },
  {
    title: "Industry-Specific Digital Transformation",
    introduction: "We specialize in advanced solutions that drive efficiency in high-stakes environments.",
    items: [
      { title: "Oil & Gas Digitization", description: "We partner with global technology firms to deliver solutions that make operations safer, smarter, and more efficient. Leverage our professional skills to automate complex engineering challenges and stay competitive." },
      { title: "Telecommunications Solutions", description: "We provide technology and consulting services to help telecom companies optimize network infrastructure, enhance customer experience, and rapidly deploy new services. Our solutions drive efficiency in billing, provisioning, and network monitoring." },
      { title: "Manufacturing Technology", description: "We implement advanced solutions focused on industrial automation, supply chain optimization, and predictive maintenance. Our technology enhances quality control, improves throughput, and reduces operational downtime on the factory floor." },
      { title: "Electronic Document Management (EDMS)", description: "Transform paper-based processes into streamlined digital workflows. We help reduce overhead costs and boost productivity with efficient, cost-effective EDMS, including document scanning and digital storage." },
    ],
  },
  {
    title: "Data Integrity & Communication",
    introduction: "Secure your most valuable assets and modernize how your team connects.",
    items: [
      { title: "Data & Risk Management", description: "We provide background check and law enforcement record systems via our proprietary cloud solution. We deliver essential data services without collecting or storing sensitive personal information, ensuring compliance and trust." },
      { title: "Managed VoIP Phone Services", description: "Upgrade to a flexible, next-gen communication system. Our Voice over Internet Protocol (VoIP) systems leverage existing internet services to offer unlimited options for mobility, interoperability, and seamless network integration." },
    ],
  },
  {
    title: "Bespoke Development & Procurement",
    introduction: "When you need a custom tool or a difficult-to-source item, we act as your expert partner.",
    items: [
      { title: "Web & App Development", description: "We develop and support tailor-made applications to meet your exact needs. Our offerings utilize both commercial COTS tools and robust Open Source frameworks." },
      { title: "Brokerage & Procurement Services", description: "Act as your professional buyer to facilitate the secure purchase of goods and services, helping you acquire items that may require licenses your business doesn't possess." },
      { title: "Auction Services", description: "We partner with entities across Nigeria to run online auction platforms for properties, vehicles, goods, and repossessed items." },
    ],
  },
];

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Our Core Services"
        title="Strategic Technology for Growth"
        description="At Emerald Technologies and Services Limited, we deliver a full spectrum of technology solutions designed to turn your IT expenditure into a strategic investment. We offer customized expertise across four key areas."
      />

      <div className="mt-12 grid gap-6">
        {services.map((service) => (
          <section key={service.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{service.introduction}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {service.items.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <figure className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
          <Image src="/images/emerald-original/services/service-managed-it.webp" alt="Secure managed IT operations and document access" width={465} height={320} className="h-72 w-full object-cover" />
        </figure>
        <figure className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
          <Image src="/images/emerald-original/services/service-cloud.webp" alt="Online procurement and cloud-enabled business services" width={480} height={316} className="h-72 w-full object-cover" />
        </figure>
      </div>
    </div>
  );
}