'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { primaryNav } from '@/lib/site';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="border-t border-slate-200 bg-white md:hidden">
      <div className="container-shell flex items-center justify-end py-3">
        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800"
        >
          <span aria-hidden="true" className="text-lg leading-none">{isOpen ? '×' : '☰'}</span>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isOpen ? (
        <nav id="mobile-navigation-menu" aria-label="Mobile navigation" className="container-shell pb-4">
          <ul className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-700">
            {primaryNav.map((item) => (
              <li key={item.href} className="border-b border-slate-200 last:border-b-0">
                <Link href={item.href} onClick={() => setIsOpen(false)} aria-current={pathname === item.href ? 'page' : undefined} className={`block px-4 py-3 font-medium transition hover:text-slate-950 ${pathname === item.href ? 'bg-brand-50 text-brand-800' : ''}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
