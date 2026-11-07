'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    image: '/cars.jpg',
      alt: 'Illustration of a digital pre-purchase vehicle report on a laptop',
      eyebrow: 'Digital Service',
      title: 'Smart Digital Vehicle Reports for Confident Decisions',
      description:
        'Get comprehensive digital Vehicles analysis and reports online to make informed decisions.',
    },
    {
      image: '/bike.jpg',
      alt: 'Illustration of a digital vehicle safety analysis report',
      eyebrow: 'Digital Vehicle Safety Analysis',
      title: 'Review Vehicle Safety Information Online',
      description:
        'Explore safety-related vehicle information in a digital report. No workshop visit or physical testing is involved.',
    },
    {
      image: '/truck.jpg',
      alt: 'Illustration of a digital vehicle diagnostic data dashboard',
      eyebrow: 'Vehicle Diagnostic Data Analysis',
      title: 'Make Sense of Available Vehicle Data',
      description:
        'Review compatible diagnostic information through a digital report, without an in-person scan or physical vehicle examination.',
    },
    {
      image: '/van.jpg',
      alt: 'Illustration of EV battery and charging data in a digital report',
      eyebrow: 'EV & Hybrid Vehicle Reports',
      title: 'Digital Insights for Your Next Decision',
      description:
        'Explore available vehicle history and analysis reports online for cars, vans, leisure vehicles, EVs, hybrids, and more.',
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <div
      className="relative w-full h-[min(120vw,460px)] min-h-[420px] max-h-[460px] sm:h-[100svh] sm:min-h-[600px] sm:max-h-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/20" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center py-16 sm:py-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn(
                  'transition-all duration-700',
                  index === current
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute pointer-events-none'
                )}
              >
                {index === current && (
                  <>
                    <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-navy/70 backdrop-blur-sm border border-white/25 text-[10px] sm:text-sm font-semibold text-white mb-3 sm:mb-6 animate-fade-in-up">
                      {slide.eyebrow}
                    </span>
                    <h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-white leading-[1.1] text-balance animate-fade-in-up">
                      {slide.title}
                    </h1>
                    <p className="mt-3 sm:mt-6 text-xs sm:text-xl text-white/70 leading-relaxed max-w-xl animate-fade-in-up">
                      {slide.description}
                    </p>
                  </>
                )}
              </div>
            ))}

            <div className="mt-5 sm:mt-10 flex flex-row gap-2 sm:gap-4 animate-fade-in-up">
              <a
                href="/booking"
                className="inline-flex flex-1 items-center justify-center px-2 py-2.5 sm:flex-none sm:px-8 sm:py-4 rounded-xl bg-primary text-white font-semibold text-xs sm:text-base shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
              >
                Buy Now
              </a>
              <a
                href="/pricing"
                className="inline-flex flex-1 items-center justify-center px-2 py-2.5 sm:flex-none sm:px-8 sm:py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-xs sm:text-base hover:bg-white/20 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary transition-all duration-300 hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary transition-all duration-300 hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              index === current
                ? 'w-10 bg-primary'
                : 'w-2 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-20 hidden lg:flex items-center gap-3 text-white/60 text-sm font-medium">
        <span className="text-2xl font-bold text-white font-display">
          {String(current + 1).padStart(2, '0')}
        </span>
        <span className="text-white/40">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}
