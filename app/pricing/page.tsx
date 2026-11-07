'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  Star,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { TiltCard } from '@/components/site/tilt-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const pricingPlans = [
  {
    name: 'Basic',
    price: 40,
    period: 'Per Report',
    description: 'Essential Digital Vehicle Report:',
    icon: ShieldCheck,
    badge: 'Best for budget',
    features: [
      'Vehicle identification details',
      'Available MOT history',
      'Mileage history (where available)',
      'Tax and road status',
      'Basic vehicle history summary',
      'Digital PDF report',
    ],
    cta: 'Purchase Basic',
    popular: false,
  },
  {
    name: 'Standard',
    price: 50,
    period: 'Per Report',
    description: 'Detailed Digital Vehicle Report',
    icon: Sparkles,
    badge: 'Most popular',
    features: [
      'Everything in Basic',
      'Outstanding finance check',
      'Write-off history',
      'Stolen vehicle status',
      'Mileage discrepancy analysis',
      'Vehicle specification details',
      'Market value assessment',
      'Detailed PDF report',
    ],
    cta: 'Purchase Standard',
    popular: true,
  },
  {
    name: 'Premium',
    price: 60,
    period: 'Per Report',
    description: 'Comprehensive Digital Vehicle Report',
    icon: Award,
    badge: 'Complete package',
    features: [
      'Everything in Standard',
      'Extended vehicle history analysis',
      'Previous keeper information',
      'Import/export history',
      'Vehicle risk assessment',
      'Comprehensive vehicle insights',
      'Premium PDF report',
    ],
    cta: 'Purchase Premium',
    popular: false,
  },
];

const comparison = [
  { feature: 'Digital report level', basic: 'Essential', standard: 'Detailed', premium: 'Comprehensive' },
  { feature: 'Vehicle identification details', basic: true, standard: true, premium: true },
  { feature: 'Online checkout', basic: true, standard: true, premium: true },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pricing.jpg"
            alt="Illustration of a digital vehicle report"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/60 to-navy/35" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge className="mb-3 sm:mb-4 bg-primary/20 text-primary border-primary/30">
            Digital Report Pricing
          </Badge>
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-white mb-3 sm:mb-6 text-balance">
            Simple Pricing for Digital Reports
          </h1>
          <p className="text-sm sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            No hidden fees. Choose an essential, detailed, or comprehensive digital vehicle report package and purchase online.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <TiltCard intensity={5} className="h-full">
                  <div
                    className={cn(
                      'relative h-full rounded-2xl border-2 p-5 sm:p-8 transition-all duration-300',
                      plan.popular
                        ? 'border-primary bg-white shadow-2xl shadow-primary/20 lg:scale-105'
                        : 'border-border bg-white hover:shadow-xl hover:shadow-primary/5'
                    )}
                  >
                    {plan.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-white border-0 shadow-lg px-3 py-1 text-[10px] sm:px-4 sm:py-1.5 sm:text-sm">
                          {plan.popular && <Star className="h-3 w-3 mr-1 fill-current" />}
                          {plan.badge}
                        </Badge>
                      </div>
                    )}

                    <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                      <div
                        className={cn(
                          'flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl',
                          plan.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                        )}
                      >
                        <plan.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-navy">{plan.name}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="mb-4 sm:mb-6">
                      <span className="text-4xl sm:text-5xl font-bold font-display text-navy">
                        £{plan.price}
                      </span>
                      <span className="text-xs sm:text-sm text-muted-foreground ml-2">{plan.period}</span>
                    </div>

                    <Link href={`/booking?package=${plan.name.toLowerCase()}`} className="block mb-6 sm:mb-8">
                      <Button
                        className={cn(
                          'h-10 sm:h-11 w-full text-sm',
                          plan.popular
                            ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20'
                            : 'bg-navy hover:bg-navy/90'
                        )}
                      >
                        {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>

                    <div className="space-y-2 sm:space-y-3">
                      <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Package Includes
                      </div>
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-navy">
                          <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0 mt-0.5" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-navy">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-4xl font-bold font-display text-white mb-3 sm:mb-4 text-balance">
            Still Not Sure Which Plan is Right?
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-8">
            Need to confirm which vehicle information is available? Contact us before purchasing so we can clarify the report coverage for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact">
              <Button size="lg" className="h-10 sm:h-11 bg-primary hover:bg-primary/90 px-8 sm:px-10 text-sm sm:text-base">
                Talk to Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/booking">
              <Button
                size="lg"
                variant="outline"
                className="h-10 sm:h-11 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 sm:px-10 text-sm sm:text-base"
              >
                Purchase Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CompareCell({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-primary mx-auto" />;
  }
  if (value === false) {
    return <span className="text-muted-foreground/40">—</span>;
  }
  return <span className="font-medium text-navy">{value}</span>;
}
