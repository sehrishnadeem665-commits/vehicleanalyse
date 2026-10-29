import Link from 'next/link';
import {
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';
import { BrandLogo } from '@/components/site/brand-logo';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Purchase Now', href: '/booking' },
    { label: 'Contact', href: '/contact' },
  ],
  support: [
    { label: 'FAQs', href: '/#faq' },
    { label: 'How It Works', href: '/#process' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Vehicle Analyse home" className="mb-4 inline-flex">
              <BrandLogo variant="light" />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-sm">
              Vehicle condition, safety, diagnostic, and habitation checks for vans,
              campervans, and motorhomes, with clear findings in a Digital PDF Report.
            </p>
            <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 text-white/70">
              <Mail className="h-4 w-4 text-primary" />
                <span>info@vehicleanalyse.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-4 w-4 text-primary" />
                <span>24 Meridian Way, London, SW18 4QL</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Clock className="h-4 w-4 text-primary" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-6 flex items-center justify-center text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Vehicle Analyse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
