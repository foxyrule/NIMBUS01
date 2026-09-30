'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useSyncExternalStore } from 'react';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

function subscribeToMotionPreference(onChange: () => void) {
  const preference = window.matchMedia(reducedMotionQuery);
  preference.addEventListener('change', onChange);
  return () => preference.removeEventListener('change', onChange);
}

function getMotionPreference() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getServerMotionPreference() {
  return false;
}

const slides = [
  {
    title: 'Business support that keeps work moving.',
    category: 'Nimbus Technologies & Services',
    description: 'Nimbus brings together managed IT, healthcare records management, real estate services, fantasy sports, and talent scouting.',
    image: '/images/original/managed-it-banner.jpg',
    imageAlt: 'Business professionals reviewing work together',
    objectPosition: '76% center',
    href: '/services',
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
  const [playingOverride, setPlayingOverride] = useState<boolean | null>(null);
  const prefersReducedMotion = useSyncExternalStore(subscribeToMotionPreference, getMotionPreference, getServerMotionPreference);
  const isPlaying = playingOverride ?? !prefersReducedMotion;
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
    <section aria-label="Nimbus service highlights" className="container-shell pt-5 sm:pt-8">
      <div className="relative isolate flex flex-col overflow-hidden bg-[#0b1220] text-white md:block md:min-h-[580px]">
        <div className="relative order-2 aspect-[16/9] w-full md:absolute md:inset-y-0 md:right-0 md:order-none md:aspect-auto md:h-full md:w-[64%] lg:w-[58%]">
          <Image
            key={slide.image}
            src={slide.image}
            alt={slide.imageAlt}
            fill
            priority={activeSlide === 0}
            sizes="(max-width: 768px) 72vw, (max-width: 1024px) 64vw, 58vw"
            className="object-cover"
            style={{ objectPosition: slide.objectPosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/45 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 order-1 flex min-h-[500px] w-full flex-col justify-between bg-[#0b1220] p-5 sm:p-6 md:min-h-[580px] md:w-[36%] md:p-5 lg:w-[42%] lg:p-8 xl:p-10">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <p className="max-w-[13rem] text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-white/75">
              Nimbus Technologies &amp; Services
            </p>
            <p className="shrink-0 text-xs font-semibold tabular-nums text-white/75">
              0{activeSlide + 1} <span className="px-1 text-white/40">/</span> 0{slides.length}
            </p>
          </div>

          <div key={slide.title} className="w-full max-w-full animate-[hero-in_500ms_ease-out]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">{slide.category}</p>
            <h1 className="mt-4 w-full max-w-full break-words text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[2rem] lg:text-[2.5rem]">
              {slide.title}
            </h1>
            <p className="mt-4 w-full max-w-full break-words text-sm leading-6 text-white/80 sm:text-base sm:leading-7 md:text-sm md:leading-6 lg:text-base lg:leading-7">
              {slide.description}
            </p>
            <div className="mt-5 flex w-full flex-wrap items-center gap-x-4 gap-y-3 lg:mt-6">
              <Link href={slide.href} className="inline-flex min-h-11 items-center gap-3 rounded-sm bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500">
                Explore {activeSlide === 0 ? 'services' : 'this service'} <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="inline-flex min-h-11 items-center text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 transition hover:decoration-white">
                Contact Nimbus
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2" aria-label="Choose a service highlight">
              {slides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                  onClick={() => showSlide(index)}
                  className={`h-2.5 transition-all ${index === activeSlide ? 'w-9 bg-cyan-300' : 'w-2.5 bg-white/55 hover:bg-white'}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={isPlaying ? 'Pause service highlights' : 'Play service highlights'}
                onClick={() => setPlayingOverride(!isPlaying)}
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