import Link from 'next/link';
import Image from 'next/image';

import { company, primaryNav } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-[#0b1220] text-slate-200">
      <div className="container-shell grid gap-9 py-12 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Nimbus home">
            <Image src="/brand/nimbus-symbol-white.svg" alt="" width={38} height={38} />
            <span className="text-sm font-semibold text-white">{company.name}</span>
          </Link>

          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Nimbus Technologies and Services LLC is a specialized consultancy services company with a focus on Managed IT Services, Healthcare Record Management System and Real Estate Services.
          </p>

          <a
            href="mailto:contactus@nimbustechllc.com"
            className="mt-2 inline-block text-sm text-slate-300 transition hover:text-white hover:underline underline-offset-4"
          >
            {company.email}
          </a>
        </div>

        <div className="border-white/15 md:border-l md:pl-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
            Navigation
          </h3>

          <ul className="mt-3 space-y-2 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-300 transition hover:text-white hover:underline underline-offset-4 focus-visible:outline-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-white/15 md:border-l md:pl-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
            Business focus
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Managed IT Services</li>
            <li>RALICARE / Healthcare Records</li>
            <li>Real Estate Services</li>
            <li>Fantasy Sports / Talent Scouting</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell py-4 text-xs text-slate-400">© {new Date().getFullYear()} {company.name}</div>
      </div>
    </footer>
  );
}