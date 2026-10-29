'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  Star,
  ArrowRight,
  ShieldCheck,
  Zap,
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
    period: 'per check',
    description: 'Essential inspection',
    icon: ShieldCheck,
    badge: 'Best for budget',
    features: [
      'Vehicle-specific safety checks',
      'Brake and tyre condition',
      'Lights & signals test',
      '20+ inspection photos',
      'Basic Digital PDF Report',
      '1 vehicle per order',
      'Report within 1 hour',
    ],
    excluded: [],
    cta: 'Purchase Basic',
    popular: false,
  },
  {
    name: 'Standard',
    price: 50,
    period: 'per check',
    description: 'Detailed inspection',
    icon: Sparkles,
    badge: 'Most popular',
    features: [
      '150+ point inspection',
      'Full safety checks',
      'OBD-II diagnostics',
      '60+ high-resolution photos',
      'Detailed Digital PDF Report',
      'Repair cost estimates',
      'Market value assessment',
      'Report within 1 hour',
    ],
    excluded: [],
    cta: 'Purchase Standard',
    popular: true,
  },
  {
    name: 'Premium',
    price: 60,
    period: 'per check',
    description: 'Comprehensive inspection',
    icon: Award,
    badge: 'Complete package',
    features: [
      'Full 200+ point inspection',
      'Everything in Standard',
      'Engine compression test',
      'Leak-down test',
      '60+ high-resolution photos',
      'Fluid analysis',
      'Battery & charging system test',
      'Undercarriage inspection',
      'Habitation check option for motorhomes',
      'Phone consultation',
      'Digital PDF Report within 1 hour',
    ],
    excluded: [],
    cta: 'Purchase Premium',
    popular: false,
  },
];

const addOns = [
  { name: 'Mobile Service (We Come to You)', price: '£39' },
  { name: 'EV Van Battery Health Digital PDF Report', price: '£49' },
  { name: 'Motorhome Habitation Check', price: '£119' },
  { name: 'Pre-Purchase Market Value Analysis', price: '£29' },
  { name: 'Extended Warranty Check', price: '£59' },
];

const comparison = [
  { feature: 'Inspection Scope', basic: 'Safety-focused', standard: '150+ points', premium: '200+ points' },
  { feature: 'Vehicle-Specific Safety Check', basic: true, standard: true, premium: true },
  { feature: 'Brake & Tyre Condition Check', basic: true, standard: true, premium: true },
  { feature: 'Lights & Signals Test', basic: true, standard: true, premium: true },
  { feature: 'OBD-II Computer Diagnostics', basic: false, standard: true, premium: true },
  { feature: 'Inspection Photos', basic: '20+', standard: '60+', premium: '60+' },
  { feature: 'Digital PDF Report', basic: 'Basic, within 1 hour', standard: 'Detailed, within 1 hour', premium: 'Within 1 hour' },
  { feature: 'Repair Cost Estimates', basic: false, standard: true, premium: true },
  { feature: 'Market Value Assessment', basic: false, standard: true, premium: true },
  { feature: 'Vehicles per Order', basic: '1 vehicle', standard: false, premium: false },
  { feature: 'Engine Compression Test', basic: false, standard: false, premium: true },
  { feature: 'Leak-Down Test', basic: false, standard: false, premium: true },
  { feature: 'Fluid Analysis', basic: false, standard: false, premium: true },
  { feature: 'Battery & Charging System Test', basic: false, standard: false, premium: true },
  { feature: 'Underchassis Check', basic: false, standard: false, premium: true },
  { feature: 'Motorhome Habitation Check', basic: '£119 add-on', standard: '£119 add-on', premium: '£119 add-on' },
  { feature: 'Phone Consultation', basic: false, standard: false, premium: true },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2560&q=90"
            alt="SUV representing vehicle inspection services"
            fill
            sizes="100vw"
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/60 to-navy/35" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge className="mb-3 sm:mb-4 bg-primary/20 text-primary border-primary/30">
            Transparent Pricing
          </Badge>
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-white mb-3 sm:mb-6 text-balance">
            Simple, Honest Pricing
          </h1>
          <p className="text-sm sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            No hidden fees. Choose the inspection that fits your van, campervan,
            or motorhome. Mechanical checks apply to motorised vehicles;
            habitation inspections cover the motorhome living area.
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
                        What is Included
                      </div>
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-navy">
                          <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0 mt-0.5" />
                          {feature}
                        </div>
                      ))}
                      {plan.excluded.map((feature) => (
                        <div key={feature} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground line-through opacity-60">
                          <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 mt-0.5" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Add-ons */}
          <Reveal>
            <div className="max-w-4xl mx-auto mt-10 sm:mt-16 rounded-2xl bg-navy p-5 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">Optional Add-Ons</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {addOns.map((addon) => (
                  <div
                    key={addon.name}
                    className="flex items-center justify-between gap-3 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                  >
                    <span className="text-xs sm:text-sm text-white/80">{addon.name}</span>
                    <span className="text-xs sm:text-sm font-bold text-primary">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Compare Plans"
            title="Detailed Feature Comparison"
            description="See exactly what is included in each check package."
            className="[&>span]:!text-xs [&>span]:!mb-2 [&>h2]:!text-xl sm:[&>h2]:!text-4xl lg:[&>h2]:!text-5xl [&>p]:!text-sm [&>p]:!mt-2 sm:[&>p]:!mt-4"
          />

          <Reveal>
            <div className="mt-8 sm:mt-12 overflow-x-auto rounded-2xl border border-border shadow-lg">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="bg-navy">
                    <th className="text-left p-2.5 sm:p-5 text-white font-semibold text-xs sm:text-sm">Feature</th>
                    <th className="text-center p-2.5 sm:p-5 text-white font-semibold text-xs sm:text-sm">Basic</th>
                    <th className="text-center p-2.5 sm:p-5 text-white font-semibold text-xs sm:text-sm bg-primary/30">Standard</th>
                    <th className="text-center p-2.5 sm:p-5 text-white font-semibold text-xs sm:text-sm">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={cn(
                        'border-t border-border',
                        i % 2 === 0 ? 'bg-secondary/20' : 'bg-white'
                      )}
                    >
                      <td className="text-left p-2.5 sm:p-5 text-xs sm:text-sm font-medium text-navy">{row.feature}</td>
                      <td className="text-center p-2.5 sm:p-5 text-xs sm:text-sm text-muted-foreground">
                        <CompareCell value={row.basic} />
                      </td>
                      <td className="text-center p-2.5 sm:p-5 text-xs sm:text-sm text-muted-foreground bg-primary/5">
                        <CompareCell value={row.standard} />
                      </td>
                      <td className="text-center p-2.5 sm:p-5 text-xs sm:text-sm text-muted-foreground">
                        <CompareCell value={row.premium} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-navy">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-4xl font-bold font-display text-white mb-3 sm:mb-4 text-balance">
            Still Not Sure Which Plan is Right?
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-8">
            Not sure which inspection fits your vehicle? Our team can help you choose a check for your car, motorcycle, van, truck, caravan, campervan, or motorhome.
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
