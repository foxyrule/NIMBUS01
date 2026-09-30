import Link from 'next/link';
import Image from 'next/image';

import { primaryNav } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="container-shell flex min-h-[76px] items-center justify-between gap-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="Nimbus home">
          <Image src="/brand/nimbus-symbol.svg" alt="" width={40} height={40} priority />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-700">Nimbus</p>
            <p className="text-sm font-semibold leading-5 text-slate-900 sm:text-base">Technologies &amp; Services</p>
          </div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm font-medium text-slate-700 transition hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-sm bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 lg:inline-flex"
        >
          Discuss a project
        </Link>
      </div>
    </header>
  );
}
