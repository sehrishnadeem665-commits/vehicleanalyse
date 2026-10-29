'use client';

import { useEffect, useState } from 'react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  CreditCard,
  FileText,
  Mail,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const processSteps = [
  {
    icon: FileText,
    title: 'Select Your Plan',
    description:
      'Choose the inspection plan that suits your car, motorcycle, van, truck, caravan, campervan, or motorhome.',
  },
  {
    icon: ClipboardList,
    title: 'Enter Your Details',
    description: 'Fill in your contact and vehicle details to place your booking.',
  },
  {
    icon: CreditCard,
    title: 'Complete Payment',
    description: 'Pay securely to confirm your selected inspection plan.',
  },
  {
    icon: Mail,
    title: 'Get a Confirmation Email',
    description: 'We will send a confirmation email with your booking details.',
  },
  {
    icon: Check,
    title: 'Receive Your Digital Report',
    description:
      'Once your inspection is complete, your digital report will be sent to your email.',
  },
];

export function ProcessCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(processSteps.length);

  useEffect(() => {
    if (!api) return;

    const updateCarouselState = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };
    updateCarouselState();
    api.on('select', updateCarouselState);
    api.on('reInit', updateCarouselState);

    return () => {
      api.off('select', updateCarouselState);
      api.off('reInit', updateCarouselState);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => window.clearInterval(interval);
  }, [api]);

  return (
    <section id="process" className="py-14 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple, Transparent Process"
          description="From booking to receiving your Digital PDF Report, we have designed every step to be effortless and informative."
          className="[&>span]:!text-xs [&>span]:!mb-2 [&>h2]:!text-2xl sm:[&>h2]:!text-4xl lg:[&>h2]:!text-5xl [&>p]:!text-sm [&>p]:!mt-2 sm:[&>p]:!mt-4"
        />

        <Carousel
          setApi={setApi}
          opts={{ align: 'start', containScroll: 'trimSnaps', loop: true }}
          className="mt-10 sm:mt-16"
        >
          <CarouselContent className="items-stretch py-2">
            {processSteps.map((step, index) => (
              <CarouselItem
                key={step.title}
                className="flex basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Reveal delay={index * 100} className="h-full w-full">
                  <article className="group relative h-full min-h-56 sm:min-h-64 overflow-hidden rounded-2xl border border-border bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                        <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/30">
                          <step.icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                    </div>
                    <div
                          className="pointer-events-none absolute right-4 sm:right-5 top-3 text-4xl sm:text-5xl font-bold font-display text-primary/10"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </div>
                    <h3 className="mt-4 sm:mt-6 min-h-12 sm:min-h-14 text-base sm:text-lg font-bold font-display text-navy">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
              aria-label="Previous process step"
              className="h-11 w-11 rounded-full border-slate-200 text-navy hover:border-primary hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2" aria-label="Carousel position">
              {Array.from({ length: snapCount }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={selectedIndex === index ? 'step' : undefined}
                  className={`h-2.5 rounded-full transition-all ${
                    selectedIndex === index
                      ? 'w-7 bg-primary'
                      : 'w-2.5 bg-slate-300 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
              aria-label="Next process step"
              className="h-11 w-11 rounded-full border-slate-200 text-navy hover:border-primary hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
