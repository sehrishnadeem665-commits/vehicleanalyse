import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK Vehicle Check Prices | Vehicle Analyse',
  description:
    'Clear pricing for vehicle inspections in the UK, including cars, motorcycles, vans, trucks, caravans, campervans, and motorhomes. Select a check to suit your vehicle.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — Van, Campervan & Motorhome Checks | Vehicle Analyse',
    description:
      'Compare vehicle inspection prices for cars, motorcycles, SUVs, vans, trucks, caravans, campervans, and motorhomes.',
    url: 'https://vehicleanalyse.com/pricing',
    images: ['/opengraph-image?version=vehicle-analyse-2026-10-29'],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
