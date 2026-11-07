'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';

const galleryImages = [
  {
    src: '/digital-reports/pre-purchase-report.svg',
    title: 'Digital Pre-Purchase Vehicle Report',
  },
  {
    src: '/digital-reports/safety-analysis.svg',
    title: 'Digital Vehicle Safety Analysis',
  },
  {
    src: '/digital-reports/diagnostic-data.svg',
    title: 'Vehicle Diagnostic Data Analysis',
  },
  {
    src: '/digital-reports/mot-emissions-history.svg',
    title: 'MOT & Emissions History Report',
  },
  {
    src: '/digital-reports/caravan-motorhome-report.svg',
    title: 'Digital Vehicles Report',
  },
  {
    src: '/digital-reports/ev-hybrid-analysis.svg',
    title: 'EV & Hybrid Vehicle Analysis Report',
  },
];

export function GalleryCarousel() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCount = 3;

  const scrollNext = () => {
    setScrollIndex((prev) =>
      Math.min(prev + 1, galleryImages.length - visibleCount)
    );
  };

  const scrollPrev = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-14 sm:py-24 bg-navy overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <SectionHeading
            eyebrow="Digital Report Gallery"
            title="Explore Online Vehicle Analysis"
            description="Illustrations representing the digital report categories available for cars, motorcycles, vans, trucks, and leisure vehicles."
            align="left"
            light
            className="[&>span]:!text-xs [&>span]:!mb-2 [&>h2]:!text-2xl sm:[&>h2]:!text-4xl lg:[&>h2]:!text-5xl [&>p]:!text-sm [&>p]:!mt-2 sm:[&>p]:!mt-4"
          />
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              disabled={scrollIndex === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-primary hover:border-primary transition-colors disabled:opacity-30"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={scrollIndex >= galleryImages.length - visibleCount}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-primary hover:border-primary transition-colors disabled:opacity-30"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out px-4 sm:px-6 lg:px-8"
          style={{
            transform: `translateX(-${scrollIndex * (100 / visibleCount)}%)`,
          }}
        >
          {galleryImages.map((img) => (
            <div
              key={img.title}
              className="relative shrink-0 w-[88%] sm:w-1/2 lg:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-medium">
                  <FileText className="h-4 w-4 text-primary" />
                  {img.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
