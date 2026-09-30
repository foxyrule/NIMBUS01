'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Managed IT Services',
    category: 'Technology',
    description: 'Strategic business operations and responsive technology support for organizations that depend on reliable systems.',
    image: '/images/original/managed-it-banner.jpg',
    imageAlt: 'Professionals working together at a computer in a technology environment',
    objectPosition: '72% center',
    href: '/services/managed-it',
  },
  {
    title: 'RALICARE / Healthcare Records',
    category: 'Healthcare',
    description: 'A records management system for assisted living and group homes, supporting care documentation and daily workflows.',
    image: '/images/original/health-records.png',
    imageAlt: 'Healthcare professional completing records on a digital tablet',
    objectPosition: 'center',
    href: '/services/ralicare',
  },
  {
    title: 'Real Estate Services',
    category: 'Property',
    description: 'Nimbus invests in apartments, commercial properties, and townhomes, with a focus on well-maintained places and community stability.',
    image: '/images/original/real-estate.jpg',
    imageAlt: 'Apartment property represented in Nimbus real estate materials',
    objectPosition: 'center',
    href: '/services/real-estate',
  },
  {
    title: 'Fantasy League',
    category: 'Sports',
    description: 'Weekly fantasy soccer competition where players build teams and compete using professional match performance.',
    image: '/images/original/adult-league.jpg',
    imageAlt: 'Soccer players competing in a match',
    objectPosition: 'center',
    href: '/services/sports-talent',
  },
  {
    title: 'Talent Scouting',
    category: 'Sports',
    description: 'Sports-focused talent evaluation and player information for schools and professional sports organizations.',
    image: '/images/original/adult-league.jpg',
    imageAlt: 'Soccer match imagery used by Nimbus for its sports and scouting service area',
    objectPosition: 'center',
    href: '/services/sports-talent',
  },
];

export function HeroRotator() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slide = slides[activeSlide];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  function showSlide(index: number) {
    setActiveSlide((index + slides.length) % slides.length);
  }

  return (
    <section aria-label="Nimbus service highlights" className="container-shell py-6 sm:py-8">
      <div className="relative isolate min-h-[520px] overflow-hidden bg-slate-950 text-white sm:min-h-[540px]">
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority={activeSlide === 0}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="-z-20 object-cover"
          style={{ objectPosition: slide.objectPosition }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />
        <div className="flex min-h-[520px] flex-col justify-between p-6 sm:min-h-[540px] sm:p-10 lg:p-14">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              Nimbus Technologies &amp; Services
            </p>
            <p className="shrink-0 text-xs font-semibold tabular-nums text-white/75">
              0{activeSlide + 1} <span className="px-1 text-white/40">/</span> 0{slides.length}
            </p>
          </div>

          <div key={slide.title} className="max-w-2xl animate-[hero-in_500ms_ease-out]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">{slide.category}</p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              {slide.description}
            </p>
            <Link
              href={slide.href}
              className="mt-7 inline-flex items-center gap-3 border-b border-emerald-300 pb-2 text-sm font-semibold text-white transition hover:text-emerald-200"
            >
              Explore this service <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2" aria-label="Choose a service highlight">
              {slides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                  onClick={() => showSlide(index)}
                  className={`h-2.5 transition-all ${index === activeSlide ? 'w-9 bg-emerald-300' : 'w-2.5 bg-white/55 hover:bg-white'}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={isPlaying ? 'Pause service highlights' : 'Play service highlights'}
                onClick={() => setIsPlaying((playing) => !playing)}
                className="flex h-10 w-10 items-center justify-center border border-white/35 text-sm text-white transition hover:bg-white/10"
              >
                {isPlaying ? 'Ⅱ' : '▶'}
              </button>
              <button
                type="button"
                aria-label="Previous service highlight"
                onClick={() => showSlide(activeSlide - 1)}
                className="flex h-10 w-10 items-center justify-center border border-white/35 text-lg text-white transition hover:bg-white/10"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next service highlight"
                onClick={() => showSlide(activeSlide + 1)}
                className="flex h-10 w-10 items-center justify-center border border-white/35 text-lg text-white transition hover:bg-white/10"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}