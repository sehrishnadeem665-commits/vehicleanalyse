import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vehicle Analyse — Digital Vehicle Reports',
  description:
    'Learn about Vehicle Analyse digital reports for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. No physical inspections.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Vehicle Analyse — UK Digital Vehicle Reports',
    description:
      '100% digital vehicle analysis and reports across the UK, with no physical inspection required.',
    url: 'https://vehicleanalyse.com/about',
    images: ['/opengraph-image?version=vehicle-analyse-2026-10-29'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
