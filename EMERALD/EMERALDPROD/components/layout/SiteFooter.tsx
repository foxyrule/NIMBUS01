import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.8fr_1.3fr]">
          <div>
            <div className="mb-5 flex items-center text-white">
              <div className="relative overflow-hidden rounded-lg bg-white/5 p-1">
                <Image
                  src="/images/emerald/emerald-logo-light.svg"
                  alt="Emerald Technologies and Services Limited logo"
                  width={220}
                  height={64}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              We help organizations modernize operations, improve technology resilience, and unlock sustainable business value through practical, technology-first solutions.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Navigate</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Solutions</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Computer Sales &amp; Setup</li>
              <li>IT Support &amp; Maintenance</li>
              <li>System Security</li>
              <li>Business Technology Support</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>{siteConfig.address.line1}</li>
              <li>{siteConfig.address.line2}</li>
              <li>{siteConfig.address.line3}</li>
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="transition hover:text-white">
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          <p className="italic text-slate-400">© 2025 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}