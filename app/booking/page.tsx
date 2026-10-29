'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Car as CarIcon, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const paymentLinks = {
  basic: 'https://buy.stripe.com/cNidRae595TabYo1no0Fi00',
  standard: 'https://buy.stripe.com/5kQdRa1in95md2s1no0Fi01',
  premium: 'https://buy.stripe.com/dRmcN6e591CU3rSfee0Fi02',
};

export default function BookingPage() {
  const [form, setForm] = useState({
    clientName: '',
    email: '',
    phoneNumber: '',
    packageType: '',
    vehicleType: '',
    vinPlateNumber: '',
    instruction: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const packageType = new URLSearchParams(window.location.search).get('package')?.toLowerCase();
    if (packageType && ['basic', 'standard', 'premium'].includes(packageType)) {
      setForm((prev) => ({ ...prev, packageType }));
    }
  }, []);

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submit = async () => {
    if (isSubmitting) return;

    if (
      form.packageType !== 'basic' &&
      form.packageType !== 'standard' &&
      form.packageType !== 'premium'
    ) {
      alert('Please select a package before continuing.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website: '' }),
      });

      if (!response.ok) {
        throw new Error('Booking request failed');
      }

      window.location.assign(paymentLinks[form.packageType]);
    } catch (error) {
      console.error('Booking submit failed:', error);
      alert('Your booking could not be sent right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-12 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2560&q=90"
            alt="SUV prepared for a vehicle inspection"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Digital Report
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-4">
            Book Your Report
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tell us which vehicle you need inspected, from cars and motorcycles to trucks and motorhomes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-secondary/30 min-h-[60vh]">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-border shadow-xl p-8 lg:p-10">
            <form
              className="animate-fade-in-up"
              onSubmit={(event) => {
                event.preventDefault();
                submit();
              }}
            >
              <h2 className="text-2xl font-bold font-display text-navy mb-2">Vehicle Information</h2>
              <p className="text-muted-foreground text-sm mb-6">Enter your contact and vehicle details.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="clientName">Name *</Label>
                  <Input
                    id="clientName"
                    autoComplete="name"
                    required
                    placeholder="e.g., Jane Smith"
                    value={form.clientName}
                    onChange={(e) => update('clientName', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="e.g., jane@example.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="e.g., 07123 456789"
                    value={form.phoneNumber}
                    onChange={(e) => update('phoneNumber', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="packageType">Package *</Label>
                  <Select
                    name="packageType"
                    required
                    value={form.packageType}
                    onValueChange={(value) => update('packageType', value)}
                  >
                    <SelectTrigger
                      id="packageType"
                      className="mt-1.5 h-11 rounded-lg border-slate-200 bg-white text-slate-900 shadow-sm transition-colors hover:border-primary/50 focus:ring-2 focus:ring-primary/20 data-[placeholder]:text-slate-500"
                    >
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      sideOffset={6}
                      className="rounded-xl border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10"
                    >
                      <SelectItem
                        value="basic"
                      >
                        Basic — £40
                      </SelectItem>
                      <SelectItem
                        value="standard"
                      >
                        Standard — £50
                      </SelectItem>
                      <SelectItem
                        value="premium"
                      >
                        Premium — £60
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="vehicleType">Vehicle Type *</Label>
                  <Select
                    name="vehicleType"
                    required
                    value={form.vehicleType}
                    onValueChange={(value) => update('vehicleType', value)}
                  >
                    <SelectTrigger
                      id="vehicleType"
                      className="mt-1.5 h-11 rounded-lg border-slate-200 bg-white text-slate-900 shadow-sm transition-colors hover:border-primary/50 focus:ring-2 focus:ring-primary/20 data-[placeholder]:text-slate-500"
                    >
                      <SelectValue placeholder="Select a vehicle type" />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      sideOffset={6}
                      className="rounded-xl border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10"
                    >
                      <SelectItem
                        value="Van"
                      >
                        Van
                      </SelectItem>
                      <SelectItem
                        value="Campervan"
                      >
                        Campervan
                      </SelectItem>
                      <SelectItem
                        value="Motorhome"
                      >
                        Motorhome
                      </SelectItem>
                      <SelectItem value="Car">Car</SelectItem>
                      <SelectItem value="SUV">SUV</SelectItem>
                      <SelectItem value="Motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="Truck">Truck</SelectItem>
                      <SelectItem value="Caravan">Caravan</SelectItem>
                      <SelectItem value="Other">Other vehicle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="vinPlateNumber">VIN/Plate Number</Label>
                  <Input
                    id="vinPlateNumber"
                    placeholder="Enter your vehicle VIN or registration plate"
                    value={form.vinPlateNumber}
                    onChange={(e) => update('vinPlateNumber', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="instruction">Instruction</Label>
                  <Textarea
                    id="instruction"
                    placeholder="Add any instructions or details we should know"
                    value={form.instruction}
                    onChange={(e) => update('instruction', e.target.value)}
                    className="mt-1.5"
                    rows={4}
                  />
                </div>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  aria-live="polite"
                  className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                      Processing...
                    </>
                  ) : (
                    'Continue to Payment'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
