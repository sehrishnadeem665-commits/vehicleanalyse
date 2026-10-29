import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Van or Leisure Vehicle Check Online — Vehicle Analyse UK',
  description:
    'Book a vehicle check for your car, SUV, motorcycle, van, truck, caravan, campervan, or motorhome. Select a service and enter your details online.',
  alternates: { canonical: '/booking' },
  openGraph: {
    title: 'Book Your Van or Leisure Vehicle Check Online | Vehicle Analyse',
    description:
      'Book an inspection for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes.',
    url: 'https://checkmyvan.com/booking',
    images: ['/opengraph-image'],
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
