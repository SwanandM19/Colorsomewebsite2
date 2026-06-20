import Link from 'next/link';
// import { Droplets, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Newsletter band */}
      <div className="border-b border-white/8">
        <div className="container-wide py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-2">
                Stay Inspired
              </h3>
              <p className="text-white/50 text-sm max-w-md">
                Get colour trends, expert tips, and new product launches delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-l text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
              />
              <button className="px-6 py-3 bg-gold text-white text-sm font-medium rounded-r hover:bg-gold-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#F7F6F2] shadow-[0_8px_30px_rgba(0,0,0,0.18)] p-2 border border-white/10 shrink-0">
  <img
    src="/Ara_Weather_Coat.png"
    alt="Colorsome logo"
    className="w-full h-full object-contain"
  />
</div>
<div className="flex flex-col">
  <span className="brand-wordmark text-white">Colorsome</span>
  <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-white/50 mt-1">
    Paints
  </span>
</div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
  Premium quality paints for beautiful homes with expert colour guidance, lasting durability, and exceptional finish for every space.
</p>
            <div className="space-y-4">
  <div className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
    <MapPin className="w-4 h-4 mt-1 shrink-0 text-gold" />
    <span>
      C-403, Akshay Villa, Ram Nagari, Behind D-Mart,<br />
      Mumbai-Pune Bypass Road, Ambegaon Budruk,<br />
      Katraj, Pune 411046
    </span>
  </div>

  <a
    href="tel:+917502000079"
    className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors"
  >
    <Phone className="w-4 h-4 text-gold" />
    +91-7502-0000-79
  </a>

  <a
    href="mailto:info@colorsomepaints.com"
    className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors"
  >
    <Mail className="w-4 h-4 text-gold" />
info@colorsomepaints.com
  </a>
</div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-medium mb-5">Products</h4>
            <ul className="space-y-3">
              {['Interior Paints', 'Exterior Paints', 'Primers & Putty', 'Waterproofing', 'Textures', 'Wood Coatings'].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-sm text-white/50 hover:text-gold transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-medium mb-5">Services</h4>
            <ul className="space-y-3">
              {['Home Consultation', 'Color Selection', 'Project Planning', 'Paint Calculator', 'Expert Guidance'].map((item) => (
                <li key={item}>
                  <Link href="/assistance" className="text-sm text-white/50 hover:text-gold transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-medium mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Shade Inspiration', path: '/shades' },
                { name: 'Careers', path: '/about' },
                { name: 'Dealers', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-sm text-white/50 hover:text-gold transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2">
  <h4 className="font-serif text-base font-medium mb-5">Get Started</h4>

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
    </Link>
  </div>
</div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">{year} Colorsome Paints Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Use</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
