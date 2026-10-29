'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Users,
  Target,
  Eye,
  HeartHandshake,
  Lightbulb,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  Camera,
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
    title: 'Independent & Unbiased',
    description:
      'We work for you, not the seller. Our assessments are completely independent — we have no ties to any dealership or repair shop.',
  },
  {
    icon: Search,
    title: 'Vehicle-Specific Assessments',
    description:
      'Our inspections are matched to the vehicle, covering mechanical systems on cars, SUVs, motorcycles, vans, and trucks, plus habitation systems on caravans, campervans, and motorhomes.',
  },
  {
    icon: Camera,
    title: 'Photo-Documented Findings',
    description:
      'Every issue we find is photographed and documented with clear severity ratings, so you can see exactly what we see.',
  },
  {
    icon: Clock,
    title: 'Clear Digital Reports',
    description:
      'Your report records findings and photos relevant to the inspection selected, with recommendations presented clearly.',
  },
  {
    icon: Award,
    title: 'Specialist Inspection Services',
    description:
      'Choose from pre-purchase, road-safety, diagnostic, and habitation checks, with findings recorded for the service selected.',
  },
  {
    icon: FileText,
    title: 'Repair Cost Estimates',
    description:
      'Each finding includes a fair-market repair cost estimate, giving you the leverage to negotiate or plan your budget.',
  },
];

const values = [
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'We believe in complete honesty. Every finding is documented with photos and clear explanations — no jargon, no hidden agendas.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We use inspection areas relevant to the vehicle, from mechanical and safety systems to motorhome habitation equipment.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer First',
    description:
      'Your peace of mind is our priority. We work for you, not the seller or dealer. Our Digital PDF Reports give you the facts to make confident decisions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We continuously invest in the latest diagnostic technology and training to stay ahead of rapidly evolving vehicle technology.',
  },
];

const milestones = [
  { year: 'Cars, SUVs & Motorcycles', title: 'Mechanical & Safety Checks', description: 'Pre-purchase, road-safety, diagnostic, and eligible MOT or emissions checks for a range of everyday vehicles.' },
  { year: 'Vans & Trucks', title: 'Commercial Vehicle Checks', description: 'Vehicle-specific assessments for commercial vehicles, with findings matched to their type and intended use.' },
  { year: 'Caravans & Motorhomes', title: 'Vehicle & Habitation Checks', description: 'Checks for motorised leisure vehicles and separate habitation assessments for caravans, campervans, and motorhomes.' },
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
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2560&q=90"
            alt="Truck on the road, representing commercial vehicle inspections"
            fill
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
              Vehicle Analyse provides inspections for cars, SUVs, motorcycles, vans,
              trucks, caravans, campervans, and motorhomes. Our service options are designed around the different
              mechanical, road-safety, and habitation needs of each vehicle type.
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
                    src="https://images.pexels.com/photos/8985452/pexels-photo-8985452.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&q=90"
                    alt="Technician inspecting a van engine"
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
                  From a Single Garage to a National Standard
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Vehicle Analyse focuses on inspections for cars, SUVs, motorcycles, vans,
                    trucks, caravans, campervans, and motorhomes. Each vehicle type has different mechanical, road-safety, and
                    living-area needs, so the right inspection depends on what you own or plan to buy.
                  </p>
                  <p>
                    Motorised vehicles can receive mechanical, safety, diagnostic, and eligible
                    MOT or emissions checks.
                  </p>
                  <p>
                    Habitation checks are available for caravans, campervans, and motorhomes, covering the
                    living-area systems included in that service. Findings are recorded in a
                    clear report to help you make an informed decision.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                  {[
                    { icon: ShieldCheck, label: 'Vehicle-Specific Checks' },
                    { icon: Award, label: 'Clear Digital Pdf' },
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
              { icon: ShieldCheck, value: 4, suffix: '', label: 'Inspection Categories' },
              { icon: Award, value: 200, suffix: '+', label: 'Checkpoints in Full Checks' },
              { icon: Star, value: 1, suffix: '', label: 'Clear Report per Inspection' },
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
            description="The principles that guide every check we perform and every interaction we have."
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
            title="The Right Check for Each Vehicle"
            description="Our inspection scope changes with the vehicle, from powered vehicle systems to motorhome living areas."
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
            description="Independent findings, vehicle-specific checks, and clear reports for the vehicle you need inspected."
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
            Experience the Vehicle Analyse Difference
          </h2>
          <p className="text-sm sm:text-lg text-white/80 mb-5 sm:mb-8">
            Get a clearer picture of your car, motorcycle, van, truck, caravan, campervan, or motorhome before making your next decision.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl px-10">
              Book Your Check <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
