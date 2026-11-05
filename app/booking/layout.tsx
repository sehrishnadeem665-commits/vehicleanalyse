import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Van or Leisure Vehicle Check Online — Vehicle Analyse UK',
  description:
    'Order a digital PDF vehicle report for your car, SUV, motorcycle, van, truck, caravan, campervan, or motorhome. Your report is sent by email.',
  alternates: { canonical: '/booking' },
  openGraph: {
    title: 'Book Your Van or Leisure Vehicle Check Online | Vehicle Analyse',
    description:
      'Order a digital PDF vehicle report for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes, delivered by email.',
    url: 'https://vehicleanalyse.com/booking',
    images: ['/opengraph-image?version=vehicle-analyse-2026-10-29'],
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
