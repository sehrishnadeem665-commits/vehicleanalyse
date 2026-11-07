'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Battery,
  Cpu,
  FileSearch,
  Gauge,
  Home,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const reportServices = [
  {
    icon: FileSearch,
    label: 'Digital Pre-Purchase Vehicle Report',
    image: '/digital-reports/pre-purchase-report.svg',
    alt: 'Illustration of a digital pre-purchase vehicle report',
    title: 'Vehicle History for Purchase Decisions',
    description:
      'A digital report that brings together relevant vehicle history and information to support your review before buying. No physical vehicle inspection is carried out.',
  },
  {
    icon: ShieldCheck,
    label: 'Digital Vehicle Safety Analysis',
    image: '/digital-reports/safety-analysis.svg',
    alt: 'Illustration of a digital vehicle safety analysis report',
    title: 'Safety Information, Presented Digitally',
    description:
      'An online summary of available safety-related vehicle information, presented to help you review important details without physical testing.',
  },
  {
    icon: Cpu,
    label: 'Vehicle Diagnostic Data Analysis',
    image: '/digital-reports/diagnostic-data.svg',
    alt: 'Illustration of vehicle diagnostic data displayed digitally',
    title: 'Diagnostic Information Review',
    description:
      'A digital analysis of compatible diagnostic data supplied for the vehicle, organizing available fault and system information in a report.',
  },
  {
    icon: Gauge,
    label: 'MOT & Emissions History Report',
    image: '/digital-reports/mot-emissions-history.svg',
    alt: 'Illustration of MOT and emissions history in a digital report',
    title: 'MOT & Emissions History',
    description:
      'A digital report focused on available MOT and emissions history information, organized for convenient online review rather than a physical test.',
  },
  {
    icon: Home,
    label: 'Digital Vehicles Report',
    image: '/digital-reports/caravan-motorhome-report.svg',
    alt: 'Illustration of a caravan and motorhome digital report',
    title: 'Vehicles Information',
    description:
      'A digital report for relevant vehicle and habitation information. It does not include an on-site or physical systems inspection.',
  },
  {
    icon: Battery,
    label: 'EV & Hybrid Vehicle Analysis Report',
    image: '/digital-reports/ev-hybrid-analysis.svg',
    alt: 'Illustration of EV battery and charging data in a digital report',
    title: 'EV & Hybrid Data Analysis',
    description:
      'Digital analysis focused on available EV or hybrid battery and charging information. No physical battery test or vehicle inspection is performed.',
  },
];

export function HomeServiceExplorer() {
  const [activeService, setActiveService] = useState(0);
  const activeArea = reportServices[activeService];

  return (
    <section className="py-14 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Digital Report Services"
          title="Explore Our Online Vehicle Reports"
          description="Choose digital vehicle history, safety, diagnostic data, MOT, leisure vehicle, or EV and hybrid analysis. No physical inspection is required."
          className="[&>span]:!text-xs [&>span]:!mb-2 [&>h2]:!text-2xl sm:[&>h2]:!text-4xl lg:[&>h2]:!text-5xl [&>p]:!text-sm [&>p]:!mt-2 sm:[&>p]:!mt-4"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 mt-10 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 sm:gap-2">
            {reportServices.map((area, index) => {
              const AreaIcon = area.icon;

              return (
                <button
                  key={area.label}
                  onClick={() => setActiveService(index)}
                  className={cn(
                    'w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl text-left transition-all duration-300',
                    activeService === index
                      ? 'bg-white shadow-lg shadow-primary/10 border-l-4 border-primary'
                      : 'hover:bg-white/60'
                  )}
                >
                  <div
                    className={cn(
                      'flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg transition-colors',
                      activeService === index
                        ? 'bg-primary text-white'
                        : 'bg-primary/10 text-primary'
                    )}
                  >
                    <AreaIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-navy text-xs sm:text-sm">
                      {area.label}
                    </div>
                  </div>
                  <Badge
                    className="px-2 py-0.5 text-[10px] sm:px-2.5 sm:py-0.5 sm:text-xs"
                    variant={activeService === index ? 'default' : 'secondary'}
                  >
                    Digital
                  </Badge>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-2">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden h-full min-h-[320px] sm:min-h-[400px] bg-navy">
                <Image
                  src={activeArea.image}
                  alt={activeArea.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
                <div className="relative z-10 p-5 sm:p-8 lg:p-10 flex flex-col justify-end h-full">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white mb-3 sm:mb-4">
                    {activeArea.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6">
                    {activeArea.description}
                  </p>
                  <Link href="/booking">
                    <Button className="w-fit bg-primary hover:bg-primary/90">
                      Purchase a Digital Report <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
