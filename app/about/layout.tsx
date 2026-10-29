import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vehicle Analyse — 15 Years of Trusted Van & Leisure Vehicle Checks',
  description:
    'Learn about Vehicle Analyse inspections for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes, including pre-purchase, safety, diagnostic, and habitation checks.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Vehicle Analyse — Trusted UK Van & Leisure Vehicle Experts',
    description:
      'Vehicle-specific inspections for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes across the UK.',
    url: 'https://checkmyvan.com/about',
    images: ['/opengraph-image?version=vehicle-analyse-2026-10-29'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
