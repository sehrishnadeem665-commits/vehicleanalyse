import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { ScrollProgress } from '@/components/site/scroll-progress';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vehicleanalyse.com'),
  title: {
    default: 'Vehicle Analyse | Smart Digital Vehicle Reports',
    template: '%s | Vehicle Analyse',
  },
  description:
    '100% digital vehicle analysis and reports for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. No physical inspection required.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Vehicle Analyse',
    title: 'Vehicle Analyse | Smart Digital Vehicle Reports',
    description:
      '100% digital vehicle analysis and reports for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. No physical inspection required.',
    url: 'https://vehicleanalyse.com',
    images: [
      {
        url: '/opengraph-image?version=vehicle-analyse-2026-10-29',
        width: 1200,
        height: 630,
        alt: 'Vehicle Analyse digital vehicle reports for confident decisions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vehicle Analyse | Smart Digital Vehicle Reports',
    description:
      '100% digital vehicle analysis and reports for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. No physical inspection required.',
    images: [
      {
        url: '/opengraph-image?version=vehicle-analyse-2026-10-29',
        alt: 'Vehicle Analyse digital vehicle reports for confident decisions',
      },
    ],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
