import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Gauge,
  Cpu,
  CheckCircle2,
  Award,
  Users,
  ArrowRight,
  Search,
  Zap,
  Home as HomeIcon,
  Laptop,
  FileText,
} from 'lucide-react';
import { HeroCarousel } from '@/components/site/hero-carousel';
import { GalleryCarousel } from '@/components/site/gallery-carousel';
import { ProcessCarousel } from '@/components/site/process-carousel';
import { HomeServiceExplorer } from '@/components/site/home-service-explorer';
import { SectionHeading } from '@/components/site/section-heading';
import { Counter } from '@/components/site/counter';
import { Reveal } from '@/components/site/reveal';
import { TiltCard } from '@/components/site/tilt-card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { StructuredData } from '@/components/site/structured-data';

const services = [
  {
    icon: Search,
    title: 'Digital Pre-Purchase Vehicle Report',
    description:
      'A digital report that brings together relevant vehicle history and information to support your review before buying. No physical vehicle inspection is carried out.',
    features: ['Vehicle history information', 'Purchase-focused report', 'Digital delivery'],
    image: '/digital-reports/pre-purchase-report.svg',
  },
  {
    icon: ShieldCheck,
    title: 'Digital Vehicle Safety Analysis',
    description:
      'An online summary of available safety-related vehicle information, presented to help you review important details without physical testing.',
    features: ['Safety-related information', 'Clear digital summary', 'No physical testing'],
    image: '/digital-reports/safety-analysis.svg',
  },
  {
    icon: Cpu,
    title: 'Vehicle Diagnostic Data Analysis',
    description:
      'A digital analysis of compatible diagnostic data supplied for the vehicle, organizing available fault and system information in a report.',
    features: ['Analysis of supplied data', 'Fault information where available', 'Online report'],
    image: '/digital-reports/diagnostic-data.svg',
  },
  {
    icon: Gauge,
    title: 'MOT & Emissions History Report',
    description:
      'A digital report focused on available MOT and emissions history information, organized for convenient online review rather than a physical test.',
    features: ['MOT & emissions history', 'Information organized for review', 'Digital report'],
    image: '/digital-reports/mot-emissions-history.svg',
  },
  {
    icon: HomeIcon,
    title: 'Digital Vehicles Report',
    description:
      'A digital report for relevant vehicle and habitation information. It does not include an on-site or physical systems inspection.',
    features: ['Vehicles information', 'Habitation details where available', 'Online report'],
    image: '/digital-reports/caravan-motorhome-report.svg',
  },
  {
    icon: Zap,
    title: 'EV & Hybrid Vehicle Analysis Report',
    description:
      'Digital analysis focused on available EV or hybrid battery and charging information. No physical battery test or vehicle inspection is performed.',
    features: ['Battery information where available', 'Charging data review', 'Digital report'],
    image: '/digital-reports/ev-hybrid-analysis.svg',
  },
];

const stats = [
  { icon: Users, value: 8, suffix: '', label: 'Vehicle Categories' },
  { icon: Award, value: 6, suffix: '', label: 'Digital Report Services' },
  { icon: Laptop, value: 100, suffix: '%', label: 'Digital Service' },
  { icon: ShieldCheck, value: 0, suffix: '', label: 'Physical Inspections' },
];

const digitalBenefits = [
  {
    icon: Laptop,
    title: 'Order Online',
    description:
      'Choose a report, provide your vehicle details, and complete your purchase online.',
  },
  {
    icon: FileText,
    title: 'Digital Reporting',
    description:
      'Vehicle information is presented in a digital report for you to review.',
  },
  {
    icon: ShieldCheck,
    title: 'No Physical Inspection',
    description:
      'Our service is online only. We do not visit, test, or physically inspect vehicles.',
  },
];

const faqs = [
  {
    question: 'What kind of service does Vehicle Analyse provide?',
    answer:
      'Vehicle Analyse provides 100% digital vehicle analysis and report services. We do not carry out physical vehicle inspections.',
  },
  {
    question: 'Which vehicle types are covered?',
    answer:
      'Available digital reports cover cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. The information available depends on the selected report and vehicle.',
  },
  {
    question: 'Do you physically inspect or test vehicles?',
    answer:
      'No. The service is 100% digital. There is no vehicle visit, workshop appointment, hands-on inspection, or physical testing.',
  },
  {
    question: 'How do I order a digital report?',
    answer:
      'Choose a report package, enter your contact and vehicle details, and complete your order online. A confirmation is sent after your order is submitted.',
  },
  {
    question: 'How will I receive my report?',
    answer:
      'Your selected digital report is delivered by email. The applicable report details and delivery information are provided with your order.',
  },
  {
    question: 'What information is included?',
    answer:
      'The report content depends on the service selected and the information available for the vehicle. It is a digital analysis, not a physical condition assessment.',
  },
  {
    question: 'Does the report certify a vehicle’s condition?',
    answer:
      'No. A digital report is provided for information and does not certify the physical condition, safety, or roadworthiness of a vehicle.',
  },
  {
    question: 'Can I use the report when considering a purchase?',
    answer:
      'The report may help you review available vehicle information as part of your decision. It does not replace a physical inspection or professional advice.',
  },
  {
    question: 'Which digital report should I choose?',
    answer:
      'Choose from the available pre-purchase, safety, diagnostic data, MOT and emissions history, caravan and motorhome, or EV and hybrid report options.',
  },

];

const homeSectionHeading =
  '[&>span]:!text-xs [&>span]:!mb-2 [&>h2]:!text-2xl sm:[&>h2]:!text-4xl lg:[&>h2]:!text-5xl [&>p]:!text-sm sm:[&>p]:!text-lg [&>p]:!mt-2 sm:[&>p]:!mt-4';

export default function Home() {
  return (
    <>
      <StructuredData />
      <HeroCarousel />

      {/* Trust Bar */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 sm:gap-8">
            {[
              { icon: Laptop, title: '100% Digital Service', subtitle: 'Order and review online' },
              { icon: FileText, title: 'Digital Reports', subtitle: 'Delivered by email' },
              { icon: ShieldCheck, title: 'No Physical Inspection', subtitle: 'No workshop or visit' },
              { icon: Search, title: 'Eight Vehicle Categories', subtitle: 'Cars to motorhomes' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-xs sm:text-sm">{item.title}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">{item.subtitle}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 sm:py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Digital Vehicle Reports for Every Category"
            description="Choose online vehicle analysis for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes."
            className={homeSectionHeading}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 100}>
                <TiltCard className="h-full" intensity={6}>
                  <div className="group relative h-full rounded-2xl bg-white border border-border overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300">
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-primary text-white shadow-lg">
                        <service.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold font-display text-navy mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-navy">
                            <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/pricing"
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary hover:gap-2 transition-all"
                      >
                        View Digital Report Details <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="relative py-14 sm:py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
          style={{ transform: 'translate(30%, -30%)' }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="By The Numbers"
            title="Digital Insights for Informed Decisions"
            description="Explore six digital report services across eight vehicle categories, with no physical inspection required."
            light
            className={homeSectionHeading}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-7 sm:gap-8 mt-10 sm:mt-16">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-sm mb-3 sm:mb-4">
                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-1 sm:mb-2">
                    <Counter
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-[10px] sm:text-sm text-white/60 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessCarousel />

      <HomeServiceExplorer />
      <GalleryCarousel />

      {/* Digital Service Benefits */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="A Digital-First Service"
            description="From choosing a report to receiving your information, the service is online from start to finish."
            className={homeSectionHeading}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {digitalBenefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-gradient-to-b from-secondary/40 to-white border border-border p-5 sm:p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-5">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 sm:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers about digital vehicle reports, online orders, available information, and what the service does not include."
            className={homeSectionHeading}
          />

          <div className="mt-8 sm:mt-12">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-border bg-white px-4 sm:px-6 shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-navy hover:no-underline py-4 sm:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4 sm:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 sm:py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/digital-reports/ev-hybrid-analysis.svg"
            alt="Illustration of digital vehicle analysis and battery data"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge className="mb-4 sm:mb-6 bg-primary/20 text-primary border-primary/30">
            Ready When You Are
          </Badge>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-3 sm:mb-6 text-balance">
            Smart Digital Vehicle Reports for Confident Decisions
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get detailed vehicle insights, history checks and digital analysis reports online. Make informed vehicle decisions with comprehensive information delivered digitally.
          </p>
          <p className="text-sm sm:text-base font-semibold text-white mb-6 sm:mb-8">
            100% Digital Service – No Physical Inspection Required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/booking">
              <Button size="lg" className="h-10 sm:h-11 bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 px-8 sm:px-10 text-sm sm:text-base">
                Purchase Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
