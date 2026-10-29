'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Loader2,
  Building2,
  Car,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@vehicleanalyse.com',
    subtitle: 'We reply within 24 hours',
    href: 'mailto:info@vehicleanalyse.com',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: '24 Meridian Way, London',
    subtitle: 'SW18 4QL',
    href: '#facility',
  },
  {
    icon: Clock,
    title: 'Hours',
    value: 'Open 24/7',
    subtitle: 'Available anytime',
    href: '#',
  },
];

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'submitting' | 'sent' | 'saved' | 'error'
  >('idle');
  const [submitError, setSubmitError] = useState('');
  const [deliveryStatus, setDeliveryStatus] = useState<{
    emailSent: boolean;
    confirmationSent: boolean;
  } | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setSubmitError('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          website: formData.get('website'),
        }),
      });
      const result: {
        error?: string;
        emailSent?: boolean;
        confirmationSent?: boolean;
      } = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'We could not send your message. Please try again.');
      }

      const delivery = {
        emailSent: result.emailSent === true,
        confirmationSent: result.confirmationSent === true,
      };
      setDeliveryStatus(delivery);
      setSubmissionStatus(
        delivery.emailSent && delivery.confirmationSent ? 'sent' : 'saved'
      );
    } catch (error) {
      setSubmissionStatus('error');
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'We could not send your message. Please try again.'
      );
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f4f1] pt-28 pb-12 sm:pt-36 sm:pb-20">
        <div className="pointer-events-none absolute -right-36 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-8">
          <div className="max-w-2xl">
            <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">
              Contact Vehicle Analyse
            </Badge>
            <h1 className="text-3xl font-bold font-display leading-tight text-navy sm:text-5xl lg:text-6xl">
              Let&apos;s talk about your next vehicle check.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              Questions about a car, motorcycle, van, truck, caravan, campervan,
              or motorhome? Tell us what you need and our UK team will help you
              find the right service.
            </p>
            <a
              href="mailto:info@vehicleanalyse.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 sm:mt-7"
            >
              <Mail className="h-4 w-4" />
              info@vehicleanalyse.com
            </a>
          </div>

          <div className="relative h-56 overflow-hidden rounded-3xl shadow-2xl shadow-navy/15 sm:h-80 lg:h-[390px]">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=90"
              alt="Car ready for a vehicle condition check"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
              <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
                Cars · Bikes · Vans · Trucks · Leisure vehicles
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="border-b border-border bg-white py-8 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {contactInfo.map((info, i) => (
              <Reveal key={info.title} delay={i * 100}>
                <a
                  href={info.href}
                  className="group block h-full rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:p-6"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 mb-3 sm:mb-4">
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-muted-foreground sm:text-base">{info.title}</h3>
                  <p className="break-words text-[13px] font-semibold text-navy sm:text-sm">{info.value}</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">{info.subtitle}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Facility */}
      <section className="bg-[#f7f4f1] py-12 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
            {/* Form */}
            <Reveal direction="left" className="h-full">
              <div className="relative h-full overflow-hidden rounded-2xl border border-white bg-white p-5 shadow-xl shadow-navy/5 sm:rounded-3xl sm:p-8 lg:p-10">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-primary/20" />
                {submissionStatus === 'sent' || submissionStatus === 'saved' ? (
                  <div className="text-center py-8 sm:py-12">
                    <div className="inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary/10 mb-4 sm:mb-6 animate-scale-in">
                      <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-navy mb-2 sm:mb-3">
                      {submissionStatus === 'sent'
                        ? 'Message Sent!'
                        : deliveryStatus?.emailSent
                          ? 'Message Received'
                          : 'Message Saved'}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                      {submissionStatus === 'sent'
                        ? `Thank you for reaching out, ${form.name}. We sent a confirmation to ${form.email} and will get back to you within 24 hours.`
                        : deliveryStatus?.emailSent && !deliveryStatus.confirmationSent
                          ? `Your message was received, but we could not send a confirmation to ${form.email}. Please check the address or your spam folder.`
                          : !deliveryStatus?.emailSent && deliveryStatus?.confirmationSent
                            ? `A confirmation was sent to ${form.email}, but we could not notify our team. Please call us if your enquiry is urgent.`
                            : `Thank you, ${form.name}. Your message was saved, but we could not deliver the email notification or confirmation. Please call us if your enquiry is urgent.`}
                    </p>
                    <Button
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => {
                        setSubmissionStatus('idle');
                        setSubmitError('');
                        setDeliveryStatus(null);
                        setForm({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10">
                        <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <p className="mb-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-primary">Get in touch</p>
                        <h2 className="text-lg sm:text-2xl font-bold font-display text-navy">Send a Message</h2>
                        <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Tell us what you need and our team will be in touch.</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <div
                        className="absolute -left-[9999px]"
                        aria-hidden="true"
                      >
                        <Label htmlFor="website">Leave this field empty</Label>
                        <Input
                          id="website"
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="name" className="text-xs sm:text-sm text-slate-700">Full Name *</Label>
                          <Input
                            id="name"
                            required
                            placeholder="John Doe"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="h-10 sm:h-11 rounded-xl border-slate-200 bg-slate-50/50 text-sm transition-colors focus-visible:bg-white focus-visible:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="email" className="text-xs sm:text-sm text-slate-700">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="h-10 sm:h-11 rounded-xl border-slate-200 bg-slate-50/50 text-sm transition-colors focus-visible:bg-white focus-visible:ring-primary/20"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="phone" className="text-xs sm:text-sm text-slate-700">Telephone</Label>
                          <Input
                            id="phone"
                            placeholder="020 7946 0958"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="h-10 sm:h-11 rounded-xl border-slate-200 bg-slate-50/50 text-sm transition-colors focus-visible:bg-white focus-visible:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="subject" className="text-xs sm:text-sm text-slate-700">Subject</Label>
                          <Input
                            id="subject"
                            required
                            maxLength={100}
                            placeholder="Enter a subject"
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            className="h-10 sm:h-11 rounded-xl border-slate-200 bg-slate-50/50 text-sm transition-colors focus-visible:bg-white focus-visible:ring-primary/20"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="message" className="text-xs sm:text-sm text-slate-700">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={4}
                          placeholder="Tell us how we can help you..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="min-h-28 sm:min-h-36 rounded-xl border-slate-200 bg-slate-50/50 text-sm transition-colors focus-visible:bg-white focus-visible:ring-primary/20"
                        />
                      </div>
                      {submissionStatus === 'error' && (
                        <p role="alert" className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                          {submitError}
                        </p>
                      )}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={submissionStatus === 'submitting'}
                        className="h-11 sm:h-12 w-full rounded-xl bg-primary text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                      >
                        {submissionStatus === 'submitting'
                          ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending your message...</>
                          : <><Send className="mr-2 h-4 w-4" />Send Message</>}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>

            {/* Facility Information */}
            <Reveal direction="right">
              <div id="facility">
                <div className="relative overflow-hidden rounded-2xl bg-navy p-5 sm:rounded-3xl sm:p-8">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white">Contact & Location</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                    <div className="flex items-start gap-3 text-white/70">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                      <span>24 Meridian Way, London<br />SW18 4QL</span>
                    </div>
                    <div className="flex items-start gap-3 text-white/70">
                      <Car className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                      <span>Free on-site parking and easy access from the A3 and South Circular. Contact us to confirm suitability for your vehicle.</span>
                    </div>
                    <div className="flex items-start gap-3 text-white/70">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Customer support:</strong> Available 24/7
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                      <div>
                      <div className="text-xl sm:text-2xl font-bold font-display text-primary">8</div>
                      <div className="text-[10px] sm:text-xs text-white/50">Vehicle Categories</div>
                      </div>
                      <div>
                      <div className="text-xl sm:text-2xl font-bold font-display text-primary">6</div>
                      <div className="text-[10px] sm:text-xs text-white/50">Inspection Services</div>
                      </div>
                      <div>
                      <div className="text-xl sm:text-2xl font-bold font-display text-primary">2</div>
                      <div className="text-[10px] sm:text-xs text-white/50">Ways to Inspect</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
