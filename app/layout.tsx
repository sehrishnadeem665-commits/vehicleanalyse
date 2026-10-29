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
    default: 'Vehicle Analyse | UK Vehicle Checks for Cars, Vans & More',
    template: '%s | Vehicle Analyse',
  },
  description:
    'UK vehicle checks for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. Get clear findings in a Digital PDF Report.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Vehicle Analyse',
    title: 'Vehicle Analyse | UK Vehicle Checks for Cars, Vans & More',
    description:
      'UK vehicle checks for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. Get clear findings in a Digital PDF Report.',
    url: 'https://vehicleanalyse.com',
    images: [
      {
        url: '/opengraph-image?version=vehicle-analyse-2026-10-29',
        width: 1200,
        height: 630,
        alt: 'Vehicle Analyse UK vehicle checks with clear findings in a Digital PDF Report',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vehicle Analyse | UK Vehicle Checks for Cars, Vans & More',
    description:
      'UK vehicle checks for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. Get clear findings in a Digital PDF Report.',
    images: [
      {
        url: '/opengraph-image?version=vehicle-analyse-2026-10-29',
        alt: 'Vehicle Analyse UK vehicle checks with clear findings in a Digital PDF Report',
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
