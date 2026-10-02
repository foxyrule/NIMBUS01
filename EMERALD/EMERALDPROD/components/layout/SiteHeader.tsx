"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="Emerald home">
          <Image
            src="/images/emerald/emerald-logo.svg"
            alt="Emerald Technologies and Services Limited logo"
            width={246}
            height={68}
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link className="transition hover:text-emerald-700" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800"
          >
            Talk to Emerald
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle mobile navigation"
          aria-expanded={mobileOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span className="sr-only">Open navigation</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M3 6H21M3 12H21M3 18H21" />
          </svg>
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-sm font-medium text-slate-700">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 transition hover:bg-slate-50 hover:text-emerald-700"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-700 px-4 py-2.5 text-white"
              onClick={() => setMobileOpen(false)}
            >
              Talk to Emerald
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}