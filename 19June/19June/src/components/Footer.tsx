
"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Condensed high-level ranges that link directly to product categories
  const macroRanges = [
    { name: "Architectural Finishes", slug: "Wall Finishes" },
    { name: "High-Performance Emulsions", slug: "Emulsion Paints" },
    { name: "Protective & Industrial", slug: "Protective Coatings" },
    { name: "Waterproofing & Primers", slug: "Waterproofing" },
  ];

  return (
    <footer className="bg-[#121212] text-white border-t border-white/[0.03] font-sans relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-gradient-to-bl from-gold/5 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* 1. UPPER NEWSLETTER SECTION */}
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-12">
        <div className="bg-gradient-to-r from-white/[0.02] to-transparent border border-white/[0.04] rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-1.5 bg-gold/10 text-[#F3E7C9] text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 border border-[#F3E7C9]/20">
              <Sparkles className="w-3 h-3 text-gold" /> Style Letters
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-white mb-2">
              Stay{" "}
              <span className="font-medium italic text-[#F3E7C9]">
                Inspired
              </span>
            </h3>
            <p className="text-sm text-gray-400 font-light max-w-md leading-relaxed">
              Curated design perspectives, lighting science tips, and premium
              finish reveals delivered straight to your portal.
            </p>
          </div>

          <div className="w-full lg:w-auto flex items-center max-w-md bg-white/[0.03] border border-white/[0.08] rounded-xl p-1.5 focus-within:border-gold/40 focus-within:bg-white/[0.05] transition-all duration-300">
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-transparent pl-4 pr-2 py-2 text-sm text-white placeholder-white/20 outline-none flex-1 min-w-[200px] font-light"
            />
            <button className="px-6 py-2.5 bg-[#F3E7C9] hover:bg-white text-[#121212] font-semibold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN DIRECTORY CANVAS */}
      <div className="max-w-[1280px] mx-auto px-6 pb-16 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Brand Intro Identity */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-12 rounded-xl flex items-center justify-center bg-white p-1.5 shadow-sm border border-white/10 shrink-0 transition-transform duration-500 group-hover:rotate-6">
                <Image
                  src="/Ara_Weather_Coat.png"
                  alt="Colorsome logo"
                  width={44}
                  height={48}
                  className="w-full h-full object-contain scale-[1.05]"
                />
              </div>
              <div className="flex flex-col justify-center leading-none tracking-tight">
                <span className="font-serif text-xl font-bold tracking-tight text-white uppercase">
                  COLORSOME
                </span>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                  Paints
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed font-light max-w-sm">
              Architectural surface media formulated for structural luxury.
              Merging relentless chemical defense with an advanced understanding
              of color aesthetics.
            </p>

            <div className="space-y-4 pt-4 text-xs md:text-sm text-gray-400 font-light max-w-sm border-t border-white/[0.04]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5 opacity-80" />
                <span className="leading-relaxed font-light">
                  C-403, Akshay Villa, Ram Nagari, Behind D-Mart, Mumbai-Pune
                  Bypass Road, Ambegaon Budruk, Katraj, Pune 411046
                </span>
              </div>
              <a
                href="tel:+917502000079"
                className="flex items-center gap-3 hover:text-white transition-colors w-fit group"
              >
                <Phone className="w-4 h-4 text-gold shrink-0 opacity-80" />
                <span className="font-mono tracking-wide group-hover:translate-x-0.5 transition-transform">
                  +91-7502-0000-79
                </span>
              </a>
              <a
                href="mailto:info@colorsomepaints.com"
                className="flex items-center gap-3 hover:text-white transition-colors w-fit group"
              >
                <Mail className="w-4 h-4 text-gold shrink-0 opacity-80" />
                <span className="group-hover:translate-x-0.5 transition-transform font-light">
                  info@colorsomepaints.com
                </span>
              </a>
            </div>
          </div>

          {/* Condensed System Catalog (Clean Single Column Footprint) */}
          <div className="col-span-2 lg:col-span-3 lg:ml-auto">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-500 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> System
              Catalog
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400 font-light">
              {macroRanges.map((range) => (
                <li key={range.name}>
                  {/* Optional query parsing can update your active filter state on the products page */}
                  <Link
                    href={`/products?category=${encodeURIComponent(range.slug)}`}
                    className="hover:text-[#F3E7C9] hover:translate-x-0.5 inline-block transition-all duration-200"
                  >
                    {range.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Matrix */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-500 mb-6">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              {[
                "Home Consultation",
                "Color Selection",
                "Project Planning",
                "About Us",
                "Contact Space",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item.includes("About")
                        ? "/about"
                        : item.includes("Contact")
                          ? "/contact"
                          : "/assistance"
                    }
                    className="hover:text-white transition-colors block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Directives Section */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <h4 className="font-serif text-base font-medium mb-5">
              Get Started
            </h4>

            <div className="flex flex-col gap-4">
              <Link
                href="/assistance"
                className="inline-flex items-center justify-center w-full min-h-[56px] rounded-xl px-6 py-3.5 text-sm font-semibold border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center w-full min-h-[56px] rounded-xl px-6 py-3.5 text-sm font-semibold border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                Browse Products
                <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BASELINE BOTTOM FLOOR */}
      {/* 3. BASELINE BOTTOM FLOOR */}
      <div className="bg-[#0D0D0D] py-6 border-t border-white/[0.01]">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left">
            <p>&copy; {currentYear} Colorsome Paints Pvt. Ltd. All rights reserved.</p>
            <span className="hidden sm:inline text-white/[0.08]">|</span>
            <p className="text-gray-400 font-light tracking-wide flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
              Designed & Developed by 
              {/* <span className="text-white/[0.15] text-[10px]">&amp;</span> */}
              <a 
                href="https://www.servexai.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold uppercase tracking-wider hover:opacity-80 transition-opacity inline-flex items-center gap-0.5"
              >
                SERVEXAI
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
