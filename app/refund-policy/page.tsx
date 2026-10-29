import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    'Cancellation, rescheduling, and refund terms for vehicle inspection bookings with Vehicle Analyse.',
  alternates: { canonical: '/refund-policy' },
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
  return (
    <article className="pt-32 pb-24 bg-white">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-display text-navy mb-4">Refund Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: 16 October 2026</p>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">1. Cancellation by You</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-navy">More than 24 hours before:</strong> Full refund or free rescheduling.</li>
              <li><strong className="text-navy">Less than 24 hours before:</strong> 50% refund. The remainder covers the technician&apos;s allocated time and travel costs.</li>
              <li><strong className="text-navy">No-show or vehicle not accessible:</strong> No refund. A new booking may be made at full price.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">2. Cancellation by Us</h2>
            <p>
              If we cancel your check for any reason, you will receive a full refund or a
              free rescheduled appointment, whichever you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">3. Completed Checks</h2>
            <p>
              Once a check has been completed and the Digital PDF Report has been
              delivered, the service is considered fulfilled and is non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">4. How to Request a Refund</h2>
            <p>
              To request a refund or reschedule, contact us at info@vehicleanalyse.com or call
              020 7946 0958 during business hours. Approved refunds are processed within 5–7
              working days to the original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">5. Add-On Services</h2>
            <p>
              Refunds for add-on services (such as mobile service or EV battery reports) follow
              the same cancellation terms as the main check package.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
