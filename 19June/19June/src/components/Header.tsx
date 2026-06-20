'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Droplets } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Shades', path: '/shades' },
  { name: 'Assistance', path: '/assistance' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-white/97 backdrop-blur-premium shadow-premium'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isScrolled || !isHome
                    ? 'bg-charcoal group-hover:bg-gold'
                    : 'bg-charcoal/80 group-hover:bg-gold'
                }`}
              >
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-tight text-charcoal">
                  Colorsome
                </span>
                <span className="text-[9px] font-semibold tracking-[0.25em] uppercase -mt-0.5 text-charcoal-muted">
                  Paints
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-[13px] font-medium tracking-wide transition-colors duration-300 link-hover ${
                    pathname === link.path
                      ? 'text-gold'
                      : 'text-charcoal hover:text-gold'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/assistance"
                className="text-[13px] font-medium tracking-wide px-6 py-3 rounded transition-all duration-300 bg-charcoal text-white hover:bg-charcoal-light hover:shadow-lg"
              >
                Book Assistance
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -mr-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40 animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl animate-slide-right overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-10">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-charcoal flex items-center justify-center">
                    <Droplets className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-serif text-lg font-semibold">Colorsome</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-charcoal hover:text-gold"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`block py-3 px-4 rounded text-base font-medium transition-colors ${
                      pathname === link.path
                        ? 'bg-warm-gray text-gold'
                        : 'text-charcoal hover:bg-warm-gray'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-warm-gray">
                <Link
                  href="/assistance"
                  className="btn-primary w-full justify-center"
                >
                  Book Assistance
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
