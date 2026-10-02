import { SectionHeading } from "@/components/emerald/SectionHeading";
import Image from "next/image";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Our Core Services"
        title="Strategic Technology for Growth"
        description="At Emerald Technologies and Services Limited, we deliver a full spectrum of technology solutions designed to turn your IT expenditure into a strategic investment. We offer customized expertise across four key areas."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Managed IT &amp; Business Optimization</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We handle the complexity of your IT infrastructure so you can focus on your business goals. We provide proactive, secure, and cost-effective solutions for organizations of all sizes.
          </p>
          <div className="mt-6 space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Managed &amp; Professional Services</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Comprehensive IT management ensuring high network security and systems uptime. We give you secured access to your data, whenever and wherever you need it.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Strategic Planning</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">We translate your business priorities into a clear, implementable IT roadmap. We analyze your current environment and resources to plan a smooth, impactful technology transformation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Cloud &amp; Hybrid Solutions</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Coordinate your entire technology stack across complex environments. Our platforms ease the burden of security configuration, maintenance, and support.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Preventive Maintenance &amp; Support</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Get reliable, customized technical support and constant equipment monitoring to proactively avoid service disruptions.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">What we deliver</h2>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
            <li><span className="font-semibold text-slate-900">Empower Users:</span> Bring cutting-edge technologies (from on-premise to cloud) into classrooms, offices, and businesses.</li>
            <li><span className="font-semibold text-slate-900">Blend Workflows:</span> Seamlessly integrate emerging technologies with existing, traditional processes.</li>
            <li><span className="font-semibold text-slate-900">Ensure ROI:</span> Deliver professional, cost-effective, and compliant technology services.</li>
          </ul>
          <p className="mt-6 text-base leading-8 text-slate-600">We specialize in advanced solutions that drive efficiency in high-stakes environments.</p>
        </div>
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