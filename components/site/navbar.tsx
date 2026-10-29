'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandLogo } from '@/components/site/brand-logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const lightHeader = scrolled || pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-1 left-0 right-0 z-50 transition-all duration-300',
          lightHeader
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
            : 'bg-transparent py-4'
        )}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Vehicle Analyse home" className="shrink-0">
              <BrandLogo variant={lightHeader ? 'dark' : 'light'} />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    pathname === link.href
                      ? 'text-primary'
                      : lightHeader
                        ? 'text-navy hover:text-primary hover:bg-primary/5'
                        : 'text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">

              <Link href="/booking">
                <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                   Purchase a report
                </Button>
              </Link>
            </div>

            <button
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                lightHeader ? 'hover:bg-primary/5' : 'hover:bg-white/10'
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={cn('h-6 w-6', lightHeader ? 'text-navy' : 'text-white')} />
              ) : (
                <Menu className={cn('h-6 w-6', lightHeader ? 'text-navy' : 'text-white')} />
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl p-6 pt-24 animate-slide-in-right">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 text-base font-medium rounded-lg transition-colors',
                    pathname === link.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-navy hover:bg-primary/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">

                <Link href="/booking" className="block mt-2">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Purchase a report
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
