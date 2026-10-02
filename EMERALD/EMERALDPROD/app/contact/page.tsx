import Image from "next/image";
import { ContactForm } from "@/components/emerald/ContactForm";
import { SectionHeading } from "@/components/emerald/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Contact us"
        title="Contact With Us"
        description="Emerald Technologies and Services Limited is ready to help with practical, reliable, and business-focused technology support."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-slate-50">
            <Image
              src="/images/emerald-original/contact/contact-portrait.webp.png"
              alt="Emerald contact team portrait"
              width={900}
              height={1100}
              className="h-[260px] w-full object-cover sm:h-[320px]"
            />
          </div>
          <h2 className="mt-6 text-xl font-semibold text-slate-900">Emerald Technologies and Services Limited</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <p>{siteConfig.address.line1}</p>
            <p>{siteConfig.address.line2}</p>
            <p>{siteConfig.address.line3}</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}