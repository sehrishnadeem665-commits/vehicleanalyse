import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms and conditions for Vehicle Analyse vehicle inspections in the UK.',
  alternates: { canonical: '/terms-of-service' },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <article className="pt-32 pb-24 bg-white">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-display text-navy mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: 16 October 2026</p>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">1. About These Terms</h2>
            <p>
              These terms govern your use of Vehicle Analyse&apos;s website and inspections for
              cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. By booking or using our website,
              you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">2. Our Services</h2>
            <p>
              Vehicle Analyse provides inspections for cars, SUVs, motorcycles, vans, trucks,
              caravans, campervans, and motorhomes,
              including pre-purchase and safety checks, diagnostics for motorised vehicles,
              MOT and emissions testing where applicable, and habitation checks for
              motorhomes. Each booked check produces a report for the service selected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">3. What We Are Not</h2>
            <p>
              Vehicle Analyse is an independent check service. We are not a vehicle dealer,
              repair shop, or warranty provider. Our checks assess the condition of a
              selected vehicle at the time of inspection only. We do not
              guarantee the future condition, performance, or roadworthiness of any vehicle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">4. Bookings and Payment</h2>
            <p>
              When you book a check, you agree to pay the listed price for the selected
              package and any add-ons. Payment is collected at the time of booking or on the
              day of the check, as indicated during the booking process. Prices are in GBP
              and include applicable VAT.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">5. Cancellations and Refunds</h2>
            <p>
              You may cancel or reschedule your check up to 24 hours before the scheduled
              time at no charge. Cancellations made less than 24 hours before the appointment
              may be subject to a fee. See our Refund Policy page for full details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">6. Vehicle Access</h2>
            <p>
              You are responsible for ensuring the vehicle is accessible for
              checking at the agreed time and location. If the vehicle is not accessible, the
              check may be rescheduled and a call-out fee may apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">7. Digital PDF Reports</h2>
            <p>
              Our Digital Pdf reflect the condition of the selected vehicle at
              the time of checking based on visual checks, diagnostic scans, and measurements.
              They are provided for your information and do not constitute a guarantee, warranty,
              or certification of the vehicle&apos;s condition.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">8. Liability</h2>
            <p>
              Vehicle Analyse is not liable for any decisions you make based on our check
              reports, including purchase decisions, negotiations, or repair choices. Our
              liability is limited to the fee paid for the check service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">9. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design, is the
              property of Vehicle Analyse. You may not reproduce or distribute our content without
              written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
