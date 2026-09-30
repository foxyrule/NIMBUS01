import Link from 'next/link';
import Image from 'next/image';

import { company, primaryNav } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Nimbus home">
          <Image src="/brand/nimbus-symbol.svg" alt="" width={44} height={44} priority />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Nimbus</p>
            <p className="text-base font-semibold tracking-tight text-slate-900">Technologies & Services</p>
          </div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="text-sm font-medium text-slate-700 hover:text-slate-950">
            {company.phone}
          </a>
          <a
            href="tel:+16124607639"
            className="inline-flex rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-900"
          >
            Call now
          </a>
        </div>
      </div>
    </header>
  );
}
