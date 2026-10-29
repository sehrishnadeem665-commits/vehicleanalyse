import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Vehicle Analyse collects, uses, and protects personal data when you book a vehicle inspection.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="pt-32 pb-24 bg-white">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-display text-navy mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: 16 October 2026</p>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">1. Who We Are</h2>
            <p>
              Vehicle Analyse provides inspections for cars, SUVs, motorcycles, vans, trucks,
              caravans, campervans, and motorhomes
              to individuals, dealerships, and fleet operators across the United
              Kingdom. You can contact us at info@vehicleanalyse.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">2. Information We Collect</h2>
            <p>We collect the following types of personal information when you use our services:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong className="text-navy">Booking details:</strong> your name, email address, phone number, vehicle type, make, model, year, and VIN or chassis number.</li>
              <li><strong className="text-navy">Location data:</strong> the address where you request a mobile check.</li>
              <li><strong className="text-navy">Payment information:</strong> processed securely through our payment provider. We do not store full card details.</li>
              <li><strong className="text-navy">Correspondence:</strong> messages you send us through our contact form, email, or phone.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To schedule and perform your vehicle inspection.</li>
              <li>To deliver your Digital PDF Report by email.</li>
              <li>To communicate with you about your booking and answer your questions.</li>
              <li>To improve our services and website based on your feedback.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">4. How We Share Your Information</h2>
            <p>
              We do not sell your personal data. We share information only with the technician
              assigned to your check and our payment processor. We may disclose information
              if required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">5. Data Retention</h2>
            <p>
              We retain your booking and check records for as long as necessary to provide
              our services and comply with legal obligations. You may request deletion of your
              personal data at any time, subject to legal retention requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">6. Your Rights</h2>
            <p>
              Under the UK General Data Protection Regulation (UK GDPR), you have the right to
              access, correct, or delete your personal data, and to object to or restrict certain
              processing. To exercise these rights, contact us at info@vehicleanalyse.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">7. Cookies</h2>
            <p>
              Our website uses essential cookies to function properly. We do not use tracking
              cookies for advertising. Any analytics cookies are used solely to understand how
              visitors use our site so we can improve it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">8. Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect your personal
              data, including encrypted transmission and access controls. No method of
              transmission over the internet is completely secure, but we strive to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. We will post any changes on this page
              and update the date at the top.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
