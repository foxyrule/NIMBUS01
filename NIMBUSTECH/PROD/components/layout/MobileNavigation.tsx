'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { primaryNav } from '@/lib/site';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="border-t border-slate-100 bg-white lg:hidden">
      <div className="container-shell flex items-center justify-end py-2">
        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex min-h-10 items-center gap-2 rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:border-brand-700 hover:text-brand-700"
        >
          <span aria-hidden="true" className="text-lg leading-none">{isOpen ? '×' : '☰'}</span>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav id="mobile-navigation-menu" aria-label="Mobile navigation" hidden={!isOpen} className="container-shell pb-3">
          <ul className="overflow-hidden border-y border-slate-200 bg-white text-sm text-slate-700">
            {primaryNav.map((item) => (
              <li key={item.href} className="border-b border-slate-200 last:border-b-0">
                <Link href={item.href} onClick={() => setIsOpen(false)} aria-current={pathname === item.href ? 'page' : undefined} className={`block px-4 py-3 font-medium transition hover:text-brand-700 ${pathname === item.href ? 'bg-brand-50 text-brand-900' : ''}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
      </nav>
    </div>
  );
}
