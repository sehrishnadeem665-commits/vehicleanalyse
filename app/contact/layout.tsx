import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Vehicle Analyse | UK Vehicle Check Support',
  description:
    'Contact Vehicle Analyse for help with vehicle checks for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. Email info@vehicleanalyse.com or visit our London location.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Vehicle Analyse | Vehicle Check Support',
    description:
      'Call 020 7946 0958 or email info@vehicleanalyse.com. Visit our London facility at 24 Meridian Way, SW18 4QL. Open Mon–Sat.',
    url: 'https://vehicleanalyse.com/contact',
    images: ['/opengraph-image?version=vehicle-analyse-2026-10-29'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
