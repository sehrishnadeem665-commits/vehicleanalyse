'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Users,
  Eye,
  HeartHandshake,
  Lightbulb,
  ArrowRight,
  Star,
  Clock,
  FileText,
  Search,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { TiltCard } from '@/components/site/tilt-card';
import { Counter } from '@/components/site/counter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'Digital-Only Service',
    description:
      'Vehicle Analyse provides online reports and digital analysis. We do not visit, test, or physically inspect vehicles.',
  },
  {
    icon: Search,
    title: 'Vehicle-Specific Reports',
    description:
      'Choose from digital report services for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes.',
  },
  {
    icon: FileText,
    title: 'Online Vehicle Information',
    description:
      'Available vehicle information is presented digitally for review. Report content depends on the selected service and information available.',
  },
  {
    icon: Clock,
    title: 'Clear Digital Reports',
    description:
      'Your selected report is delivered digitally. No appointment, vehicle access, or workshop visit is required.',
  },
  {
    icon: Award,
    title: 'Six Report Services',
    description:
      'Choose pre-purchase, safety, diagnostic data, MOT and emissions history, caravan and motorhome, or EV and hybrid analysis.',
  },
  {
    icon: FileText,
    title: 'Digital Delivery',
    description:
      'Order online and receive a digital report by email. The service does not include physical testing or an assessment of vehicle condition.',
  },
];

const values = [
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'We make it clear that our service is digital and that no physical vehicle inspection is carried out.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We present vehicle-related information in digital reports shaped around the selected report service.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer First',
    description:
      'Our online reports are designed to help customers review available information when making vehicle decisions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Digital delivery gives customers a convenient way to access vehicle analysis without arranging an in-person appointment.',
  },
];

const milestones = [
  { year: 'Cars, SUVs & Motorcycles', title: 'Digital Vehicle Reports', description: 'Online pre-purchase, safety, diagnostic data, and MOT or emissions history reports.' },
  { year: 'Vans & Trucks', title: 'Digital Vehicle Analysis', description: 'Vehicle-related information presented in a digital report for online review.' },
  { year: 'Caravans & Motorhomes', title: 'Leisure Vehicle Reports', description: 'Digital vehicle and habitation information reports for caravans, campervans, and motorhomes, with no site inspection.' },
];

const mobileSectionHeading =
  '[&>span]:!text-xs [&>span]:!mb-2 [&>h2]:!text-xl sm:[&>h2]:!text-4xl lg:[&>h2]:!text-5xl [&>p]:!text-sm [&>p]:!mt-2 sm:[&>p]:!mt-4';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about.jpg"
            alt="Illustration of digital vehicle analysis on a laptop"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/60 to-navy/35" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-3 sm:mb-4 bg-primary/20 text-primary border-primary/30">
              About Us
            </Badge>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-white mb-3 sm:mb-6 text-balance">
              Driven by Transparency, Built on Trust
            </h1>
            <p className="text-sm sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              Vehicle Analyse provides 100% digital vehicle analysis and report services for cars, SUVs, motorcycles, vans,
              trucks, caravans, campervans, and motorhomes. No physical vehicle inspection is required or provided.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <Reveal direction="left">
              <div className="relative">
                <TiltCard intensity={8} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/digital-reports/pre-purchase-report.svg"
                    alt="Illustration of a digital vehicle report"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </TiltCard>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-2xl shadow-primary/30 hidden sm:block">
                  <div className="text-4xl font-bold font-display">
                    <Counter end={8} />
                  </div>
                  <div className="text-sm text-white/80">Vehicle Categories</div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
                  Our Story
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-display leading-tight text-navy mb-3 sm:mb-6 text-balance">
                  Digital Reports for Confident Decisions
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Vehicle Analyse provides online vehicle reports for cars, SUVs, motorcycles, vans,
                    trucks, caravans, campervans, and motorhomes. Select a digital service to review the information relevant to your vehicle.
                  </p>
                  <p>
                    Available services include digital pre-purchase, safety, diagnostic data, and MOT or emissions history reports.
                  </p>
                  <p>
                    Digital caravan and motorhome reports and EV or hybrid analysis reports are also available. Our service does not involve a physical vehicle, battery, or habitation inspection.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                  {[
                    { icon: ShieldCheck, label: '100% Digital Reports' },
                    { icon: Award, label: 'No Physical Inspection' },
                    { icon: Users, label: 'Eight Vehicle Categories' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-navy">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 sm:py-20 bg-navy">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-7 sm:gap-8">
            {[
              { icon: Users, value: 8, suffix: '', label: 'Vehicle Categories' },
              { icon: ShieldCheck, value: 6, suffix: '', label: 'Digital Report Services' },
              { icon: Award, value: 100, suffix: '%', label: 'Digital Service' },
              { icon: Star, value: 0, suffix: '', label: 'Physical Inspections' },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 mb-4">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white mb-1">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[0.65rem] sm:text-xs text-white/60 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            description="The principles behind our digital reports and online customer experience."
            className={mobileSectionHeading}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white border border-border p-6 sm:p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 mb-4 sm:mb-5">
                    <value.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-navy mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Digital Reports for Different Vehicles"
            description="Choose online reports for vehicle history, safety, diagnostic data, MOT history, leisure vehicles, and EV or hybrid information."
            className={mobileSectionHeading}
          />
          <div className="relative mt-10 sm:mt-16">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2" />
            <div className="space-y-6 sm:space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`relative flex items-center gap-3 sm:gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg z-10 ring-4 ring-white">
                      <div className="h-3 w-3 rounded-full bg-white" />
                    </div>
                    <div className={`flex-1 pl-12 sm:pl-0 ${i % 2 === 0 ? 'sm:text-right sm:pr-12' : 'sm:pl-12'}`}>
                      <div className="rounded-2xl bg-white border border-border p-3 sm:p-6 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-shadow">
                        <Badge className="mb-1.5 bg-primary/10 px-2 py-0.5 text-[10px] text-primary border-0 sm:mb-2 sm:text-sm">
                          {m.year}
                        </Badge>
                        <h3 className="mb-1.5 text-sm font-bold font-display leading-snug text-navy sm:mb-2 sm:text-lg">{m.title}</h3>
                        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{m.description}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block flex-1" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 sm:py-24 bg-navy">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Vehicle Analyse"
            title="Why Customers Choose Us"
            description="Vehicle-specific digital reports, delivered online without a physical inspection or workshop visit."
            light
            className={mobileSectionHeading}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-navy-light border border-white/10 p-6 sm:p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary/20 mb-4 sm:mb-5">
                    <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-primary">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-4xl font-bold font-display leading-tight text-white mb-3 sm:mb-4 text-balance">
            Smart Digital Vehicle Reports for Confident Decisions
          </h2>
          <p className="text-sm sm:text-lg text-white/80 mb-5 sm:mb-8">
            Get detailed vehicle insights, history checks and digital analysis reports online. Make informed vehicle decisions with comprehensive information delivered digitally.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl px-10">
              Purchase Your Digital Report <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
