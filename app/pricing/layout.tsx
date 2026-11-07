import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Vehicle Report Prices | Vehicle Analyse UK',
  description:
    'Clear pricing for digital vehicle reports for cars, motorcycles, vans, trucks, caravans, campervans, and motorhomes. No physical inspection required.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — Digital Vehicle Reports | Vehicle Analyse',
    description:
      'Compare prices for digital vehicle reports for cars, motorcycles, SUVs, vans, trucks, caravans, campervans, and motorhomes.',
    url: 'https://vehicleanalyse.com/pricing',
    images: ['/opengraph-image?version=vehicle-analyse-2026-10-29'],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
