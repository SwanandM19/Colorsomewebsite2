'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Shades', href: '/shades' },
  { label: 'Assistance', href: '/assistance' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navText = 'text-[#2D2D2D]';
  // Changed from grey to darker color for better visibility
  const navMuted = 'text-[#1A1A1A]';
  // Removed borders completely
  const navBg = scrolled
    ? 'bg-transparent backdrop-blur-sm'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${navBg}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-xl sm:rounded-2xl flex items-center justify-center bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#EDE6DA] p-1.5 sm:p-2 shrink-0">
            <Image
              src="/Ara_Weather_Coat.png"
              alt="Colorsome logo"
              width={52}
              height={52}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center leading-none">
            <div className="flex items-start">
              <span
                className={`transition-colors duration-300 ${navText}`}
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.35rem, 4vw, 2rem)',
                  lineHeight: '0.82',
                  fontWeight: 700,
                  letterSpacing: '-0.05em',
                  textTransform: 'uppercase',
                }}
              >
                COLORSOME
              </span>
              <span
                className={`transition-colors duration-300 ${navText}`}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.48rem',
                  lineHeight: 1,
                  fontWeight: 700,
                  marginLeft: '0.15rem',
                  marginTop: '0.1rem',
                  letterSpacing: '0.04em',
                }}
              >
                R
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-1 rounded-full border border-[#EDE6DA]/50 bg-white/20 backdrop-blur-md px-2 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`nav-underline rounded-full px-3 lg:px-4 py-2.5 transition-all duration-200 ${
                    isActive
                      ? 'text-[#2D2D2D] bg-[#F3E7C9] font-semibold'
                      : `${navMuted} hover:text-[#2D2D2D] hover:bg-black/[0.05] font-medium`
                  }`}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.88rem',
                    letterSpacing: '-0.01em',
                    lineHeight: 1,
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
         <Link
  href="/assistance"
  className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-[4px] text-[10px] uppercase tracking-widest font-medium transition-all duration-300 text-white shadow-md hover:shadow-lg bg-[#2D2D2D]"
>
  <Phone className="w-3.5 h-3.5" /> Book Assistance
</Link>
          <button
            className="md:hidden p-2 rounded-lg text-[#2D2D2D]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#EDE6DA]/40 shadow-xl px-6 py-4 space-y-1"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-semibold transition-colors py-2.5 border-b border-gray-100 last:border-0 ${
                  pathname === href ? 'text-orange-500' : 'text-[#2D2D2D] hover:text-orange-500'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
  href="/assistance"
  onClick={() => setMobileMenuOpen(false)}
  className="flex items-center justify-center gap-2 w-full py-3 rounded-[4px] text-[10px] uppercase tracking-widest font-medium text-white bg-[#2D2D2D]"
>
  <Phone className="w-3.5 h-3.5" /> Book Assistance
</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}