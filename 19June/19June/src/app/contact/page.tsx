// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { MapPin, Phone, Mail, Clock, ArrowRight, Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Footer } from '@/src/components/Footer';

// const contactInfo = [
//   { icon: Phone, label: 'Phone', value: '+91-7502-0000-79', href: 'tel:+917502000079' },
//   { icon: Mail, label: 'Email', value: 'info@colorsomepaints.com', href: 'mailto:info@colorsomepaints.com' },
//   { icon: Clock, label: 'Hours', value: 'Mon — Sat: 9:00 AM — 7:00 PM', href: null },
// ];

// const offices = [
//   {
//     city: 'Pune Office',
//     address:
//       'C-403, Akshay Villa, Ram Nagari, Behind D-Mart, Mumbai-Pune Bypass Road, Ambegaon Budruk, Katraj, Pune 411046',
//     phone: '+91-7502-0000-79',
//   },
// ];

// export default function ContactPage() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     onScroll();

//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const navText = 'text-[#2D2D2D]';
//   const navMuted = 'text-[#6B6B6B]';
//   const navBg = scrolled
//     ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
//     : 'bg-white/95 backdrop-blur-md border-b border-gray-100';

//   return (
//     <div className="bg-warm-white min-h-screen pt-[72px]">
//       <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
//         <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
//     <Link href="/" className="flex items-center gap-4 flex-shrink-0 min-w-[260px]">
//       <div className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#E8E2D8] p-2 shrink-0">
//         <Image
//           src="/Ara_Weather_Coat.png"
//           alt="Colorsome logo"
//           width={62}
//           height={62}
//           className="w-full h-full object-contain scale-[1.08]"
//         />
//       </div>

//       <div className="flex flex-col justify-center leading-none">
//         <div className="flex items-start">
//           <span
//             className={`transition-colors duration-300 ${navText}`}
//             style={{
//               fontFamily: 'var(--font-cormorant)',
//               fontSize: '2rem',
//               lineHeight: '0.82',
//               fontWeight: 700,
//               letterSpacing: '-0.055em',
//               textTransform: 'uppercase',
//             }}
//           >
//             COLORSOME
//           </span>

//           <span
//             className={`transition-colors duration-300 ${navText}`}
//             style={{
//               fontFamily: 'var(--font-inter)',
//               fontSize: '0.48rem',
//               lineHeight: 1,
//               fontWeight: 700,
//               marginLeft: '0.18rem',
//               marginTop: '0.12rem',
//               letterSpacing: '0.04em',
//             }}
//           >
//             TM
//           </span>
//         </div>

//         {/* <span
//           className={`mt-1.5 transition-colors duration-300 ${navMuted}`}
//           style={{
//             fontFamily: 'var(--font-inter)',
//             fontSize: '0.82rem',
//             lineHeight: 1,
//             fontWeight: 700,
//             letterSpacing: '0.34em',
//             textTransform: 'uppercase',
//           }}
//         >
//           Paints
//         </span> */}
//       </div>
//     </Link>

//     <nav className="hidden md:flex items-center">
//   <div className="flex items-center gap-1 rounded-full border border-black/6 bg-white/72 backdrop-blur-md px-2 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
//     {[['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => {
//       const isActive = label === 'Contact';

//       return (
//         <Link
//           key={label}
//           href={href}
//           className={`relative rounded-full px-4 py-2.5 transition-all duration-200 ${
//             isActive
//               ? 'text-[#2D2D2D] bg-[#F3E7C9]'
//               : `${navMuted} hover:text-[#2D2D2D] hover:bg-black/[0.04]`
//           }`}
//           style={{
//             fontFamily: 'var(--font-inter)',
//             fontSize: '0.92rem',
//             fontWeight: isActive ? 600 : 500,
//             letterSpacing: '-0.01em',
//             lineHeight: 1,
//           }}
//         >
//           {label}
//         </Link>
//       );
//     })}
//   </div>
// </nav>

//     <div className="flex items-center gap-3">
//       <Link
//         href="/assistance"
//         className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 text-white flex-shrink-0"
//         style={{ background: '#2D2D2D' }}
//       >
//         <Phone className="w-4 h-4" /> Book Assistance
//       </Link>

//       <button
//         className={`md:hidden p-2 rounded-lg transition-colors ${navText}`}
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         aria-label="Menu"
//       >
//         {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//       </button>
//     </div>
//   </div>

//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -8 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -8 }}
//               className="md:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-4 space-y-3"
//             >
//               {[
//                 ['Home', '/'],
//                 ['Products', '/products'],
//                 ['Shades', '/shades'],
//                 ['Assistance', '/assistance'],
//                 ['About', '/about'],
//                 ['Contact', '/contact'],
//               ].map(([label, href]) => (
//                 <Link
//                   key={label}
//                   href={href}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="block text-sm font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-gray-50"
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       <section className="pt-16 md:pt-20 pb-10 md:pb-12 bg-white border-b border-warm-gray">
//         <div className="container-wide">
//           <div className="max-w-3xl">
//             <p className="section-label">Get in Touch</p>
//             <h1 className="hero-title mb-5">Contact Us</h1>
//             <p className="section-subtitle max-w-2xl">
//               Have questions about our products or services? Need expert advice for your painting
//               project? We&apos;re here to help.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 md:py-16">
//         <div className="container-wide">
//           <div className="grid lg:grid-cols-3 gap-6 mb-10 md:mb-12">
//             {contactInfo.map((c) => (
//               <div key={c.label} className="card-premium p-8 text-center">
//                 <div className="w-14 h-14 mx-auto rounded-xl bg-gold/10 flex items-center justify-center mb-5">
//                   <c.icon className="w-7 h-7 text-gold" />
//                 </div>
//                 <h3 className="card-title mb-2">{c.label}</h3>
//                 {c.href ? (
//                   <a href={c.href} className="text-charcoal-muted hover:text-gold transition-colors text-sm">
//                     {c.value}
//                   </a>
//                 ) : (
//                   <p className="text-charcoal-muted text-sm">{c.value}</p>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="text-center mb-8 md:mb-10">
//             <p className="section-label">Our Office</p>
//             <h2 className="section-title">Visit Us</h2>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             {offices.map((o) => (
//               <div key={o.city} className="card-premium p-6 md:p-8">
//                 <h3 className="card-title mb-4">{o.city}</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-3">
//                     <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
//                     <p className="text-sm text-charcoal-muted leading-relaxed">{o.address}</p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Phone className="w-4 h-4 text-gold shrink-0" />
//                     <a
//                       href={`tel:${o.phone}`}
//                       className="text-sm text-charcoal-muted hover:text-gold transition-colors"
//                     >
//                       {o.phone}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-12 md:py-16 bg-charcoal">
//         <div className="container-wide">
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Product Questions?',
//                 desc: 'Browse our catalog or ask for recommendations',
//                 link: '/products',
//                 label: 'View Products',
//               },
//               {
//                 title: 'Need Expert Help?',
//                 desc: 'Book a free consultation with our paint experts',
//                 link: '/assistance',
//                 label: 'Book Consultation',
//               },
//               {
//                 title: 'Looking for Inspiration?',
//                 desc: 'Explore our curated shade collections',
//                 link: '/shades',
//                 label: 'Browse Shades',
//               },
//             ].map((item) => (
//               <div key={item.title} className="text-center">
//                 <h3 className="card-title-light mb-3">{item.title}</h3>
//                 <p className="text-white/50 text-sm mb-4">{item.desc}</p>
//                 <Link href={item.link} className="inline-flex items-center gap-2 text-gold text-sm hover:underline">
//                   {item.label} <ArrowRight className="w-3 h-3" />
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer/>
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { MapPin, Phone, Mail, Clock, ArrowRight, Menu, X, Sparkles, Building2, ExternalLink } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Footer } from '@/src/components/Footer';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 25 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 }
//   }
// };

// const contactInfo = [
//   { icon: Phone, label: 'Phone Desk', value: '+91-7502-0000-79', sub: 'Mon — Sat, 9 AM — 7 PM', href: 'tel:+917502000079' },
//   { icon: Mail, label: 'Email Channels', value: 'info@colorsomepaints.com', sub: 'Response within 12 hours', href: 'mailto:info@colorsomepaints.com' },
//   { icon: Clock, label: 'Headquarters Hours', value: '09:00 AM — 07:00 PM', sub: 'Sunday: Closed desk', href: null },
// ];

// const offices = [
//   {
//     city: 'Pune Experience Center',
//     tagline: 'Flagship Studio & Corporate Office',
//     address: 'C-403, Akshay Villa, Ram Nagari, Behind D-Mart, Mumbai-Pune Bypass Road, Ambegaon Budruk, Katraj, Pune 411046',
//     phone: '+91-7502-0000-79',
//   },
// ];

// export default function ContactPage() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const navBg = scrolled
//     ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
//     : 'bg-white/95 backdrop-blur-md border-b border-gray-100';

//   return (
//     <div className="bg-warm-white min-h-screen pt-[72px] text-[#2D2D2D] overflow-x-hidden font-sans relative">
//       {/* Ambient glass blur spots */}
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-gold/10 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
//       <div className="absolute bottom-[200px] left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#F3E7C9]/30 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

//       {/* HEADER */}
//       <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
//         <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
//           <Link href="/" className="flex items-center gap-4 flex-shrink-0 min-w-[260px]">
//             <div className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center bg-white shadow-sm border border-[#E8E2D8] p-2 shrink-0">
//               <Image
//                 src="/Ara_Weather_Coat.png"
//                 alt="Colorsome logo"
//                 width={62}
//                 height={62}
//                 className="w-full h-full object-contain scale-[1.08]"
//               />
//             </div>
//             <div className="flex flex-col justify-center leading-none">
//               <div className="flex items-start tracking-tight">
//                 <span className="font-serif text-3xl font-bold uppercase tracking-tighter text-[#2D2D2D]">
//                   COLORSOME
//                 </span>
//                 <span className="text-[10px] font-bold ml-1 mt-1 text-[#2D2D2D]">
//                   TM
//                 </span>
//               </div>
//             </div>
//           </Link>

//           <nav className="hidden md:flex items-center">
//             <div className="flex items-center gap-1 rounded-full border border-black/5 bg-white/70 backdrop-blur-md px-2 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
//               {[['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => {
//                 const isActive = label === 'Contact';
//                 return (
//                   <Link
//                     key={label}
//                     href={href}
//                     className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
//                       isActive ? 'text-[#2D2D2D] bg-[#F3E7C9]' : 'text-[#6B6B6B] hover:text-[#2D2D2D] hover:bg-black/[0.04]'
//                     }`}
//                   >
//                     {label}
//                   </Link>
//                 );
//               })}
//             </div>
//           </nav>

//           <div className="flex items-center gap-3">
//             <Link href="/assistance" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 text-white flex-shrink-0 bg-[#2D2D2D] hover:bg-[#404040]">
//               <Phone className="w-4 h-4" /> Book Assistance
//             </Link>
//             <button className="md:hidden p-2 rounded-lg text-[#2D2D2D]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="md:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-4 space-y-3">
//               {[ ['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact'] ].map(([label, href]) => (
//                 <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#2D2D2D] hover:text-gold transition-colors py-2 border-b border-gray-50">
//                   {label}
//                 </Link>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* HERO TITLE SECTION */}
//       <section className="pt-20 pb-12 bg-gradient-to-b from-white to-transparent">
//         <div className="max-w-[1200px] mx-auto px-6">
//           <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeInUp}>
//             <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark font-semibold text-xs tracking-wider uppercase px-3 py-1 rounded-full mb-5">
//               <Sparkles className="w-3.5 h-3.5 text-gold" /> We're Responsive
//             </div>
//             <span className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Connect & Synchronize</span>
//             <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#2D2D2D] mb-6 leading-[1.1] font-light">
//               Let's Bring Your <br />
//               <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-700">Palettes to Life</span>
//             </h1>
//             <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl font-light">
//               Have nuanced architectural questions or need bespoke deployment coordination guidelines? Reach out directly to our central assistance desks below.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* INFO BLOCK CHANNELS */}
//       <section className="pb-20">
//         <div className="max-w-[1200px] mx-auto px-6">
//           <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
//             {contactInfo.map((c) => (
//               <motion.div key={c.label} variants={fadeInUp} className="bg-white/50 backdrop-blur-md rounded-3xl p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-white group">
//                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 shadow-inner border border-gold/10 text-gold group-hover:scale-105 transition-transform">
//                   <c.icon className="w-6 h-6" />
//                 </div>
//                 <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1.5">{c.label}</span>
//                 {c.href ? (
//                   <a href={c.href} className="font-serif text-xl font-medium text-[#2D2D2D] hover:text-gold transition-colors inline-flex items-center gap-1.5 break-all">
//                     {c.value} <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
//                   </a>
//                 ) : (
//                   <p className="font-serif text-xl font-medium text-[#2D2D2D]">{c.value}</p>
//                 )}
//                 <p className="text-xs text-[#6B6B6B] mt-2 font-light">{c.sub}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* VISIT / ASYMMETRIC MAP DIRECTORY */}
//       <section className="py-24 bg-[#F9F6F0] border-t border-b border-gray-100">
//         <div className="max-w-[1200px] mx-auto px-6">
//           <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
//             {/* Left Content Card */}
//             <motion.div className="lg:col-span-6 flex flex-col justify-center space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
//               <div>
//                 <span className="text-xs uppercase tracking-widest text-gold font-bold mb-2 block">Our Presence</span>
//                 <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#2D2D2D] tracking-tight leading-tight">Visit Our Flagship Experience Center</h2>
//               </div>

//               <div className="space-y-6">
//                 {offices.map((o) => (
//                   <div key={o.city} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group">
//                     <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
//                       <Building2 className="w-24 h-24 text-[#2D2D2D]" />
//                     </div>
//                     <div className="inline-flex items-center gap-1.5 bg-[#F3E7C9] text-[#2D2D2D] font-semibold text-xs px-3 py-1 rounded-full mb-4">
//                       <MapPin className="w-3.5 h-3.5" /> {o.city}
//                     </div>
//                     <h3 className="font-serif text-2xl font-semibold mb-2 text-[#2D2D2D]">{o.tagline}</h3>
//                     <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed mb-6 font-light">{o.address}</p>
                    
//                     <div className="pt-5 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
//                       <a href={`tel:${o.phone}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D2D2D] hover:text-gold transition-colors">
//                         <Phone className="w-4 h-4 text-gold" /> {o.phone}
//                       </a>
//                       <a 
//                         href="https://maps.google.com" 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         className="inline-flex items-center gap-1 text-xs text-gold uppercase font-bold tracking-wider hover:underline"
//                       >
//                         Open Map Directions <ArrowRight className="w-3 h-3" />
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Right Architectural Showcase Image Container */}
//             <motion.div 
//               className="lg:col-span-6 flex flex-col"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <div className="relative rounded-3xl shadow-xl overflow-hidden aspect-[4/3] md:aspect-auto h-full w-full group flex-1 min-h-[400px]">
//                 <Image
//                   src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
//                   alt="Minimalist design workspace interior building architecture view"
//                   fill
//                   sizes="(max-w-1024px) 100vw, 50vw"
//                   priority
//                   className="object-cover transition-transform duration-700 group-hover:scale-105"
//                   unoptimized
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
//                 {/* Overlay Badge Context element */}
//                 <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/70 text-white rounded-2xl p-5 border border-white/10 flex items-center justify-between z-10">
//                   <div>
//                     <p className="text-xs text-gray-300 font-light">Located in Ambegaon Budruk</p>
//                     <p className="font-serif text-sm font-medium tracking-wide">Right Behind D-Mart Exit</p>
//                   </div>
//                   <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center text-white shadow-md shrink-0">
//                     <MapPin className="w-5 h-5" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* MATRIX CONNECT NAVIGATION */}
//       <section className="py-24 bg-white">
//         <div className="max-w-[1200px] mx-auto px-6">
//           <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             {[
//               {
//                 title: 'Product Inquiries?',
//                 desc: 'Browse our complete catalog or ask our design lab for personalized suggestions.',
//                 link: '/products',
//                 label: 'View Master Catalog',
//               },
//               {
//                 title: 'Need Direct Art Direction?',
//                 desc: 'Secure a premium, fully customized timeline walkthrough consultation blueprint.',
//                 link: '/assistance',
//                 label: 'Book Free Consultation',
//               },
//               {
//                 title: 'Looking for Inspiration?',
//                 desc: 'Explore highly curated tone architectures inside our modern shade books.',
//                 link: '/shades',
//                 label: 'Browse Color Shades',
//               },
//             ].map((item) => (
//               <motion.div key={item.title} variants={fadeInUp} className="text-left bg-warm-white/30 rounded-2xl p-8 border border-gray-100/60 hover:bg-warm-white/60 transition-colors">
//                 <h3 className="font-serif text-xl font-medium text-[#2D2D2D] mb-3 tracking-tight">{item.title}</h3>
//                 <p className="text-[#6B6B6B] text-sm mb-6 leading-relaxed font-light">{item.desc}</p>
//                 <Link href={item.link} className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D2D2D] hover:text-gold transition-colors group">
//                   {item.label} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight, Menu, X, Sparkles, Building2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Footer } from '@/src/components/Footer';

// Consistent brand variables matching the Assistance layout
const BRAND = {
  pink: '#E91E63',
  orange: '#FF5722',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const contactInfo = [
  { icon: Phone, label: 'Phone Desk', value: '+91-7502-0000-79', sub: 'Mon — Sat, 9 AM — 7 PM', href: 'tel:+917502000079' },
  { icon: Mail, label: 'Email Channels', value: 'info@colorsomepaints.com', sub: 'Response within 12 hours', href: 'mailto:info@colorsomepaints.com' },
  { icon: Clock, label: 'Headquarters Hours', value: '09:00 AM — 07:00 PM', sub: 'Sunday: Closed desk', href: null },
];

const offices = [
  {
    city: 'Pune Experience Center',
    tagline: 'Flagship Studio & Corporate Office',
    address: 'C-403, Akshay Villa, Ram Nagari, Behind D-Mart, Mumbai-Pune Bypass Road, Ambegaon Budruk, Katraj, Pune 411046',
    phone: '+91-7502-0000-79',
  },
];

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navText = 'text-[#2D2D2D]';
  const navMuted = 'text-[#6B6B6B]';
  const navBg = scrolled
    ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#EDE6DA]/40'
    : 'bg-white/80 backdrop-blur-md border-b border-[#EDE6DA]/30';

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-[72px] text-[#2D2D2D] overflow-x-hidden font-sans relative selection:bg-[#F3E7C9]">
      {/* GLOBAL BACKGROUND AMBIENT GLOWS - Exactly matched to the new theme */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-[5%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px]" style={{ background: `radial-gradient(circle, ${BRAND.pink} 0%, transparent 70%)` }} />
        <div className="absolute top-[40%] -right-[10%] w-[45vw] h-[45vw] rounded-full blur-[120px]" style={{ background: `radial-gradient(circle, ${BRAND.orange} 0%, transparent 70%)` }} />
        <div className="absolute bottom-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full blur-[100px]" style={{ background: `radial-gradient(circle, ${BRAND.pink} 0%, transparent 70%)` }} />
      </div>

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-4 flex-shrink-0 min-w-[260px]">
            <div className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#EDE6DA] p-2 shrink-0">
              <Image
                src="/Ara_Weather_Coat.png"
                alt="Colorsome logo"
                width={62}
                height={62}
                className="w-full h-full object-contain scale-[1.08]"
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <div className="flex items-start tracking-tight">
                <span
                  className={`transition-colors duration-300 ${navText}`}
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2rem',
                    lineHeight: '0.82',
                    fontWeight: 700,
                    letterSpacing: '-0.055em',
                    textTransform: 'uppercase',
                  }}
                >
                  COLORSOME
                </span>
                <span
                  className={`transition-colors duration-300 ${navText}`}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.55rem',
                    lineHeight: 1,
                    fontWeight: 700,
                    marginLeft: '0.18rem',
                    marginTop: '0.12rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  R
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-1 rounded-full border border-[#EDE6DA]/50 bg-white/60 backdrop-blur-md px-2 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
              {[['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => {
                const isActive = label === 'Contact';
                return (
                  <Link
                    key={label}
                    href={href}
                    className={`relative rounded-full px-4 py-2.5 transition-all duration-200 ${
                      isActive
                        ? 'text-[#2D2D2D] bg-[#F3E7C9] font-semibold'
                        : `${navMuted} hover:text-[#2D2D2D] hover:bg-black/[0.03] font-medium`
                    }`}
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.92rem',
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

          <div className="flex items-center gap-3 font-inter">
            <Link href="/assistance" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs uppercase tracking-widest font-black transition-all duration-300 text-white shadow-md hover:shadow-lg bg-[#2D2D2D]">
              <Phone className="w-3.5 h-3.5" /> Book Assistance
            </Link>
            <button className="md:hidden p-2 rounded-lg text-[#2D2D2D]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#EDE6DA]/40 shadow-xl px-6 py-4 space-y-3">
              {[ ['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact'] ].map(([label, href]) => (
                <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-charcoal hover:text-orange-500 transition-colors py-2 border-b border-gray-50 font-inter">
                  {label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO TITLE SECTION */}
      <section className="pt-24 pb-16 bg-white/40 backdrop-blur-sm border-b border-[#EDE6DA]/50 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 bg-[#F3E7C9] text-charcoal font-black text-[10px] tracking-wider uppercase px-3 py-1 rounded-full mb-5 font-inter">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" /> We're Responsive
            </div>
            <span className="block text-xs uppercase tracking-widest font-black text-gray-400 mb-2 font-inter">Connect & Synchronize</span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal mb-6 leading-none">
              Let's Bring Your <br />
              <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">Palettes to Life</span>
            </h1>
            <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-2xl font-inter font-normal tracking-wide">
              Have nuanced architectural questions or need bespoke deployment coordination guidelines? Reach out directly to our central assistance desks below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INFO BLOCK CHANNELS */}
      <section className="py-20 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
            {contactInfo.map((c) => (
              <motion.div 
                key={c.label} 
                variants={fadeInUp} 
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-[#EDE6DA]/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-xl hover:bg-white hover:border-orange-200 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FDFBF7] border border-[#EDE6DA] flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 text-orange-500">
                  <c.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-2 font-inter">{c.label}</span>
                {c.href ? (
                  <a href={c.href} className="font-serif text-xl font-bold text-charcoal hover:text-orange-500 transition-colors inline-flex items-center gap-1.5 break-all">
                    {c.value} <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <p className="font-serif text-xl font-bold text-charcoal">{c.value}</p>
                )}
                <p className="text-xs text-charcoal-muted mt-2 font-inter leading-relaxed">{c.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VISIT / ASYMMETRIC MAP DIRECTORY */}
      <section className="py-24 bg-[#FDFBF7]/40 border-t border-b border-[#EDE6DA]/50 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Content Card */}
            <motion.div className="lg:col-span-6 flex flex-col justify-center space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-orange-500 font-black font-inter mb-2 block">Our Presence</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal tracking-tight leading-tight">Visit Our Flagship Experience Center</h2>
              </div>

              <div className="space-y-6">
                {offices.map((o) => (
                  <div key={o.city} className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white/60 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <Building2 className="w-24 h-24 text-charcoal" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-[#F3E7C9] text-charcoal font-semibold text-xs px-3 py-1 rounded-full mb-4 font-inter">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" /> {o.city}
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-3 text-charcoal">{o.tagline}</h3>
                    <p className="text-sm md:text-base text-charcoal-muted leading-relaxed mb-6 font-inter font-normal tracking-wide">{o.address}</p>
                    
                    <div className="pt-5 border-t border-[#EDE6DA]/60 flex items-center justify-between flex-wrap gap-4 font-inter">
                      <a href={`tel:${o.phone}`} className="inline-flex items-center gap-2 text-sm font-bold text-charcoal hover:text-orange-500 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-[#FDFBF7] border border-[#EDE6DA] flex items-center justify-center shadow-sm">
                          <Phone className="w-4 h-4 text-orange-500" />
                        </div>
                        {o.phone}
                      </a>
                      <a 
                        href="https://google.com/maps" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 text-xs text-orange-500 uppercase font-black tracking-widest hover:text-pink-600 transition-colors group"
                      >
                        Open Map Directions <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Architectural Showcase Image Container */}
            <motion.div 
              className="lg:col-span-6 flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-3xl shadow-2xl border border-white/60 overflow-hidden aspect-[4/3] md:aspect-auto h-full w-full group flex-1 min-h-[440px]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Minimalist design workspace interior building architecture view"
                  fill
                  sizes="(max-w-1024px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay Glass Badge Element */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/70 text-white rounded-2xl p-5 border border-white/10 flex items-center justify-between z-10 font-inter">
                  <div>
                    <p className="text-xs text-gray-300 font-normal">Located in Ambegaon Budruk</p>
                    <p className="font-serif text-sm font-bold tracking-wide mt-0.5">Right Behind D-Mart Exit</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white shadow-md shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MATRIX CONNECT NAVIGATION */}
      <section className="py-24 bg-white/40 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              {
                title: 'Product Inquiries?',
                desc: 'Browse our complete catalog or ask our design lab for personalized suggestions.',
                link: '/products',
                label: 'View Master Catalog',
              },
              {
                title: 'Need Direct Art Direction?',
                desc: 'Secure a premium, fully customized timeline walkthrough consultation blueprint.',
                link: '/assistance',
                label: 'Book Free Consultation',
              },
              {
                title: 'Looking for Inspiration?',
                desc: 'Explore highly curated tone architectures inside our modern shade books.',
                link: '/shades',
                label: 'Browse Color Shades',
              },
            ].map((item) => (
              <motion.div 
                key={item.title} 
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="text-left bg-white/80 backdrop-blur-sm border border-[#EDE6DA]/60 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-xl hover:bg-white hover:border-orange-200/50 transition-all duration-300"
              >
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3 tracking-tight">{item.title}</h3>
                <p className="text-charcoal-muted text-sm mb-6 leading-relaxed font-inter font-normal tracking-wide">{item.desc}</p>
                <Link href={item.link} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-charcoal hover:text-orange-500 transition-colors group font-inter">
                  {item.label} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}