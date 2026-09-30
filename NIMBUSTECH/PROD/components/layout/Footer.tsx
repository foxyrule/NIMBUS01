import Link from 'next/link';

import { company, primaryNav } from '@/lib/site';

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-slate-700 bg-slate-950 text-slate-200">
      <div className="absolute inset-0 -z-20 bg-black 200 bg-cover bg-center" />
      <div className="absolute inset-0 -z-10 bg-slate-950/90" />

      <div className="container-shell grid gap-8 py-14 lg:grid-cols-[1.4fr_1fr_1fr]">

        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold text-white">
            {company.name}
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Nimbus Technologies and Services LLC is a specialized consultancy services company with a focus on Managed IT Services, Healthcare Record Management System and Real Estate Services.
          </p>

          <p className="mt-4 max-w-md whitespace-pre-line text-sm leading-7 text-slate-300">
            {company.address}
          </p>

          <p className="mt-3 text-sm text-slate-300">
            {company.phone}
          </p>

          <a
            href={`mailto:${company.email}`}
            className="mt-2 inline-block text-sm text-slate-300 transition hover:text-white hover:underline underline-offset-4"
          >
            {company.email}
          </a>
        </div>

        {/* Navigation */}
        <div className="border-l-0 md:border-l border-white/10 md:pl-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
            Navigation
          </h3>

          <ul className="mt-3 space-y-2 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-300 transition hover:text-white hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Focus */}
        <div className="border-l-0 md:border-l border-white/10 md:pl-6">
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
    </footer>
  );
}