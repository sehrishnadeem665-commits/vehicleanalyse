import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Gauge,
  Cpu,
  CheckCircle2,
  Clock,
  Award,
  Users,
  Star,
  ArrowRight,
  Quote,
  Search,
  Zap,
  Home as HomeIcon,
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
    title: 'Pre-Purchase Vehicle Check',
    description:
      'A detailed pre-purchase vehicle check for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes, with clear findings in a Digital PDF Report.',
    features: ['200+ checkpoints', 'Photo documentation', 'Market value analysis'],
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Check',
    description:
      'Check key road-safety items on a car, SUV, motorcycle, van, truck, or motorhome, including brakes, tyres, lights, and visible structure.',
    features: ['Brake analysis', 'Tyre condition check', 'Safety compliance'],
    image:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=90',
  },
  {
    icon: Cpu,
    title: 'Computer Diagnostics',
    description:
      'Diagnostic scanning for compatible cars, motorcycles, vans, SUVs, trucks, campervans, and motorhomes helps identify stored fault codes and system concerns.',
    features: ['Full module scan', 'Live data analysis', 'Code clearing'],
    image:
      'https://images.pexels.com/photos/6870309/pexels-photo-6870309.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&q=90',
  },
  {
    icon: Gauge,
    title: 'MOT & Emissions Testing',
    description:
      'MOT and emissions checks for eligible motor vehicles, including cars, motorcycles, vans, SUVs, and trucks.',
    features: ['OBD-II test', 'Exhaust analysis', 'Digital PDF Report'],
    image:
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=90',
  },
  {
    icon: HomeIcon,
    title: 'Habitation Check',
    description:
      'For caravans, campervans, and motorhomes: assess habitation systems such as gas, electrics, water, damp, and living-area safety.',
    features: ['Gas & electrics', 'Damp detection', 'Water system test'],
    image:
      'https://images.pexels.com/photos/9354626/pexels-photo-9354626.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&q=90',
  },
  {
    icon: Zap,
    title: 'EV & Hybrid Vehicle Check',
    description:
      'A specialist check for compatible electric and hybrid cars, motorcycles, vans, and SUVs, including battery and charging-system diagnostics.',
    features: ['Battery health check', 'Charging system test', 'Inverter diagnostics'],
    image:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=90',
  },
];

const stats = [
  { icon: Users, value: 8, suffix: '', label: 'Vehicle Categories' },
  { icon: Award, value: 4, suffix: '', label: 'Check Categories' },
  { icon: Star, value: 6, suffix: '', label: 'Specialist Services' },
  { icon: ShieldCheck, value: 200, suffix: '+', label: 'Checkpoint Items' },
];

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Campervan Buyer',
    rating: 5,
    text: 'Vehicle Analyse saved me from buying a campervan with a hidden engine issue. Their 200-point check caught a head gasket problem the seller did not disclose. The Digital PDF Report was incredibly detailed with photos. Worth every penny.',
    image:
      'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&q=90',
  },
  {
    name: 'Sarah Williams',
    role: 'Fleet Van Manager',
    rating: 5,
    text: 'We use Vehicle Analyse for our entire fleet of 40 delivery vans. The fleet dashboard makes it easy to track check schedules and maintenance needs. Their team is professional, fast, and consistently thorough.',
    image:
      'https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&q=90',
  },
  {
    name: 'James Rodriguez',
    role: 'Motorhome Dealer',
    rating: 5,
    text: 'As a motorhome dealer, I need checks I can trust. Vehicle Analyse delivers same-day Digital PDF Reports that give my buyers confidence. The detailed photo documentation has helped me close more deals. Highly recommended.',
    image:
      'https://images.pexels.com/photos/20374423/pexels-photo-20374423.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&q=90',
  },
];

const faqs = [
  {
    question: 'Which vehicle types can I get checked?',
    answer:
      'We provide vehicle-specific checks for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes.',
  },
  {
    question: 'What is included in a vehicle check?',
    answer:
      'A vehicle check covers key areas to help identify potential issues and give you a clearer understanding of its overall condition. Findings are shared in a Digital PDF Report.',
  },
  {
    question: 'Can I book an on-site vehicle check?',
    answer:
      'Availability depends on the selected service and vehicle location. Please check the service details before placing your order.',
  },
  {
    question: 'How do I book a vehicle check?',
    answer:
      'Select a vehicle check, enter your vehicle details, and complete your order online. You will receive a confirmation with the relevant details.',
  },
  {
    question: 'Will I receive an order confirmation?',
    answer:
      'Yes. Once you have placed your order, you will receive a confirmation message confirming that your order has been received.',
  },
  {
    question: 'How soon will I receive my Digital PDF Report?',
    answer:
      'You will receive your Digital PDF Report within 1 hour of placing your order, so you can review the findings promptly.',
  },
  {
    question: 'What is included in the Digital PDF Report?',
    answer:
      'Your Digital PDF Report summarises the vehicle’s condition and highlights any issues found during the check.',
  },
  {
    question: 'Can I use the Digital PDF Report when discussing the price?',
    answer:
      'Yes. The Digital PDF Report can help you identify potential issues and support a discussion about the vehicle’s price.',
  },
  {
    question: 'Which vehicle check is right for me?',
    answer:
      'The right check depends on your vehicle type and what you need to know. Choose a service for your car, motorcycle, van, truck, caravan, campervan, or motorhome.',
  },
  {
    question: 'What is a habitation check?',
    answer:
      'A habitation check focuses on the living area of a caravan, campervan, or motorhome, including relevant systems and facilities.',
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
              { icon: ShieldCheck, title: 'Vehicle-Specific Checks', subtitle: 'Four specialist categories' },
              { icon: Clock, title: 'Digital Digital Pdf', subtitle: 'Photos & clear findings' },
              { icon: ShieldCheck, title: '200+ Points', subtitle: 'Comprehensive check' },
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
            title="UK Vehicle Checks for Every Category"
            description="Vehicle checks for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes—with clear findings in a Digital PDF Report."
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
                        Learn More <ArrowRight className="h-4 w-4" />
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
            title="The Right Vehicle Check for You"
            description="Choose from checks for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes."
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

      {/* Testimonials */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say"
            description="Stories from customers who booked checks across a wide range of vehicle types."
            className={homeSectionHeading}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {testimonials.map((testimonial, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="h-full rounded-2xl bg-gradient-to-b from-secondary/40 to-white border border-border p-5 sm:p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary/20 mb-3 sm:mb-4" />
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-navy leading-relaxed mb-5 sm:mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-xs sm:text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
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
            description="Find answers about vehicle checks, available vehicle categories, booking, and your Digital PDF Report."
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
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=2560&q=90"
            alt="Vehicle ready for a vehicle check"
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
            Vehicle Checks for Cars, Motorcycles, Vans & More
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
            From cars and SUVs to motorcycles, trucks, caravans, campervans, and
            motorhomes, choose a check tailored to your vehicle.
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
