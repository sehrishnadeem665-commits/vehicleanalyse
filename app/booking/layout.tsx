import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order a Digital Vehicle Report — Vehicle Analyse UK',
  description:
    'Order a digital vehicle analysis report for your car, SUV, motorcycle, van, truck, caravan, campervan, or motorhome. No physical inspection is required.',
  alternates: { canonical: '/booking' },
  openGraph: {
    title: 'Order a Digital Vehicle Report | Vehicle Analyse',
    description:
      'Order a digital vehicle report for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. No physical inspection is required.',
    url: 'https://vehicleanalyse.com/booking',
    images: ['/opengraph-image?version=vehicle-analyse-2026-10-29'],
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
