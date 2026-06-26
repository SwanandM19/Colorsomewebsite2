// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Award, Shield, Users, Target, Leaf, Droplets, ArrowRight, CheckCircle, Phone, Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Footer } from '@/src/components/Footer';

// const values = [
//   { icon: Award, title: 'Quality First', desc: 'Every product undergoes rigorous testing for finish, durability, and colour consistency.' },
//   { icon: Shield, title: 'Trust & Transparency', desc: 'Clear pricing, honest recommendations, and genuine products every time.' },
//   { icon: Users, title: 'Customer Focus', desc: 'Your satisfaction guides everything we do, from formulation to service.' },
//   { icon: Target, title: 'Innovation', desc: 'Continuous research for better finishes and eco-friendly formulations.' },
//   { icon: Droplets, title: 'Craftsmanship', desc: 'Respect for the painting craft and the professionals who bring colour to life.' },
//   { icon: Leaf, title: 'Sustainability', desc: 'Committed to environmentally responsible products and practices.' },
// ];

// const milestones = [
//   { year: '2010', event: 'Colorsome Paints founded in Mumbai with a vision for premium quality' },
//   { year: '2014', event: 'Launched flagship Luxe Interior range to critical acclaim' },
//   { year: '2017', event: 'Introduced Weather Guard exterior protection technology' },
//   { year: '2020', event: 'Expanded to 50+ cities across India with dealer network' },
//   { year: '2023', event: 'Introduced eco-friendly low-VOC product line' },
//   { year: '2025', event: 'Reached 100,000+ homes transformed nationwide' },
// ];

// const commitments = [
//   'Low-VOC formulations for healthier homes',
//   'Rigorous quality testing at every stage',
//   'Expert consultation at no cost',
//   'Genuine products with full warranty',
//   'Professional execution support',
//   'Transparent pricing always',
// ];

// export default function AboutPage() {
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
//     // <div className="bg-warm-white min-h-screen pt-24">
//     <div className="bg-warm-white min-h-screen pt-[72px]">
//       {/* Hero */}
//       <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
//   <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
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
//       const isActive = label === 'About';

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

//   <AnimatePresence>
//     {mobileMenuOpen && (
//       <motion.div
//         initial={{ opacity: 0, y: -8 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -8 }}
//         className="md:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-4 space-y-3"
//       >
//         {[
//           ['Home', '/'],
//           ['Products', '/products'],
//           ['Shades', '/shades'],
//           ['Assistance', '/assistance'],
//           ['About', '/about'],
//           ['Contact', '/contact'],
//         ].map(([label, href]) => (
//           <Link
//             key={label}
//             href={href}
//             onClick={() => setMobileMenuOpen(false)}
//             className="block text-sm font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-gray-50"
//           >
//             {label}
//           </Link>
//         ))}
//       </motion.div>
//     )}
//   </AnimatePresence>
// </header>

// <section className="section-padding bg-white border-b border-warm-gray">
//   <div className="container-wide">
//     <div className="grid lg:grid-cols-2 gap-12 items-center">
//       <div>
//         <p className="section-label">Our Story</p>
//         <h1 className="font-serif text-5xl md:text-6xl font-medium text-charcoal mb-6">
//           Crafting Colours That<br />
//           <span className="text-gold">Transform Spaces</span>
//         </h1>
//         <p className="text-lg text-charcoal-muted leading-relaxed">
//           Founded in 2010, Colorsome Paints began with a simple vision: to bring
//           world-class paint quality to Indian homes. Today, we serve over 100,000
//           homeowners with premium products, expert guidance, and a commitment to
//           quality that shows in every finish.
//         </p>
//       </div>

//       <div className="relative rounded-2xl shadow-xl overflow-hidden w-full h-96">
//         <Image
//           src="https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&w=800"
//           alt="Beautiful painted interior"
//           fill
//           className="object-cover"
//           unoptimized
//         />
//       </div>
//     </div>
//   </div>
// </section>

//       {/* Mission */}
//       <section className="section-padding bg-charcoal text-white">
//         <div className="container-wide">
//           <div className="max-w-4xl mx-auto text-center">
//             <p className="section-label">Our Mission</p>
//             <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Why We Exist</h2>
//             <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
//               To be the most trusted paint brand for Indian homeowners, delivering exceptional
//               quality, beautiful colours, and expert guidance that makes every painting project
//               a satisfying experience. We believe every wall tells a story, and we help you
//               make it beautiful.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="section-padding">
//         <div className="container-wide">
//           <div className="text-center mb-16">
//             <p className="section-label">What We Stand For</p>
//             <h2 className="section-title">Our Values</h2>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {values.map((v) => (
//               <div key={v.title} className="card-premium p-8">
//                 <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
//                   <v.icon className="w-7 h-7 text-gold" />
//                 </div>
//                 <h3 className="font-serif text-xl font-medium text-charcoal mb-3">{v.title}</h3>
//                 <p className="text-charcoal-muted text-sm leading-relaxed">{v.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Commitments */}
//       <section className="py-16 bg-warm-gray">
//         <div className="container-wide">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <p className="section-label">Our Commitment</p>
//               <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal mb-6">
//                 What We Promise
//               </h2>
//               <p className="text-charcoal-muted leading-relaxed mb-8">
//                 From product quality to customer experience, we hold ourselves to the
//                 highest standards. These aren't just words — they're the foundation of
//                 everything we do.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {commitments.map((c) => (
//                 <div key={c} className="flex items-start gap-3 bg-white p-4 rounded-xl">
//                   <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
//                   <p className="text-sm text-charcoal">{c}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Milestones */}
//       <section className="section-padding bg-white border-t border-warm-gray">
//         <div className="container-wide">
//           <div className="text-center mb-16">
//             <p className="section-label">Our Journey</p>
//             <h2 className="section-title">Milestones</h2>
//           </div>
//           <div className="max-w-3xl mx-auto">
//             {milestones.map((m, i) => (
//               <div key={m.year} className="flex gap-6 mb-8 last:mb-0">
//                 <div className="flex flex-col items-center">
//                   <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
//                     <span className="font-serif text-sm font-medium text-gold">{m.year}</span>
//                   </div>
//                   {i < milestones.length - 1 && <div className="w-px flex-1 bg-gold/15 mt-2" />}
//                 </div>
//                 <div className="pt-3 pb-8">
//                   <p className="font-medium text-charcoal">{m.event}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="section-padding bg-warm-gray">
//         <div className="container-wide">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <img
//               src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
//               alt="Our team at work"
//               className="rounded-2xl shadow-xl w-full h-80 object-cover"
//             />
//             <div>
//               <p className="section-label">People</p>
//               <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal mb-6">
//                 People Behind the Paint
//               </h2>
//               <p className="text-charcoal-muted leading-relaxed mb-4">
//                 Colorsome is powered by a team of passionate chemists, colour experts, service
//                 professionals, and painting enthusiasts. We understand that painting is more than
//                 just a project — it's transforming the place you call home.
//               </p>
//               <p className="text-charcoal-muted leading-relaxed">
//                 Our consultants bring years of experience and genuine passion for helping
//                 customers find the perfect colours. Our formulations are tested in real Indian
//                 conditions, ensuring they stand up to diverse weather and usage patterns.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       {/* <section className="section-padding bg-charcoal">
//         <div className="container-wide text-center">
//           <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
//             Ready to Experience Colorsome?
//           </h2>
//           <p className="text-white/50 max-w-xl mx-auto mb-8">
//             Discover our products or book a consultation with our paint experts.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/products" className="btn-gold">Explore Products</Link>
//             <Link href="/assistance" className="btn-outline-gold">Book Consultation</Link>
//           </div>
//         </div>
//       </section> */}
//       <Footer/>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Award, Shield, Users, Target, Leaf, Droplets, CheckCircle, Phone, Menu, X, Sparkles, Zap, MapPin, Building } from 'lucide-react';
// import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
// import { Footer } from '@/src/components/Footer';

// // Motion variants for consistent animations
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     }
//   }
// };

// const values = [
//   { icon: Award, title: 'Quality First', desc: 'Every product undergoes rigorous testing for finish, durability, and colour consistency.' },
//   { icon: Shield, title: 'Trust & Transparency', desc: 'Clear pricing, honest recommendations, and genuine products every time.' },
//   { icon: Users, title: 'Customer Focus', desc: 'Your satisfaction guides everything we do, from formulation to service.' },
//   { icon: Target, title: 'Innovation', desc: 'Continuous research for better finishes and eco-friendly formulations.' },
//   { icon: Droplets, title: 'Craftsmanship', desc: 'Respect for the painting craft and the professionals who bring colour to life.' },
//   { icon: Leaf, title: 'Sustainability', desc: 'Committed to environmentally responsible products and practices.' },
// ];

// const milestones = [
//   { year: '2010', event: 'Colorsome Paints founded in Mumbai with a vision for premium quality', icon: Building },
//   { year: '2014', event: 'Launched flagship Luxe Interior range to critical acclaim', icon: Sparkles },
//   { year: '2017', event: 'Introduced Weather Guard exterior protection technology', icon: Shield },
//   { year: '2020', event: 'Expanded to 50+ cities across India with dealer network', icon: MapPin },
//   { year: '2023', event: 'Introduced eco-friendly low-VOC product line', icon: Leaf },
//   { year: '2025', event: 'Reached 100,000+ homes transformed nationwide', icon: Zap },
// ];

// const commitments = [
//   'Low-VOC formulations for healthier homes',
//   'Rigorous quality testing at every stage',
//   'Expert consultation at no cost',
//   'Genuine products with full warranty',
//   'Professional execution support',
//   'Transparent pricing always',
// ];

// export default function AboutPage() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Timeline animation hook
//   const timelineRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: timelineRef,
//     offset: ["start end", "end center"]
//   });
//   const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


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
//     <div className="bg-warm-white min-h-screen pt-[72px] text-charcoal overflow-x-hidden">
      
//       {/* HEADER */}
//       <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
//         <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
//           <Link href="/" className="flex items-center gap-4 flex-shrink-0 min-w-[260px]">
//             <div className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#E8E2D8] p-2 shrink-0">
//               <Image
//                 src="/Ara_Weather_Coat.png"
//                 alt="Colorsome logo"
//                 width={62}
//                 height={62}
//                 className="w-full h-full object-contain scale-[1.08]"
//               />
//             </div>
//             <div className="flex flex-col justify-center leading-none">
//               <div className="flex items-start">
//                 <span className={`transition-colors duration-300 ${navText}`} style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', lineHeight: '0.82', fontWeight: 700, letterSpacing: '-0.055em', textTransform: 'uppercase' }}>
//                   COLORSOME
//                 </span>
//                 <span className={`transition-colors duration-300 ${navText}`} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.48rem', lineHeight: 1, fontWeight: 700, marginLeft: '0.18rem', marginTop: '0.12rem', letterSpacing: '0.04em' }}>
//                   TM
//                 </span>
//               </div>
//             </div>
//           </Link>

//           <nav className="hidden md:flex items-center">
//             <div className="flex items-center gap-1 rounded-full border border-black/5 bg-white/70 backdrop-blur-md px-2 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
//               {[['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => {
//                 const isActive = label === 'About';
//                 return (
//                   <Link
//                     key={label}
//                     href={href}
//                     className={`relative rounded-full px-4 py-2.5 transition-all duration-200 ${isActive ? 'text-[#2D2D2D] bg-[#F3E7C9]' : `${navMuted} hover:text-[#2D2D2D] hover:bg-black/[0.04]`}`}
//                     style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', fontWeight: isActive ? 600 : 500, letterSpacing: '-0.01em', lineHeight: 1 }}
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
//             <button className={`md:hidden p-2 rounded-lg transition-colors ${navText}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="md:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-4 space-y-3">
//               {[ ['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact'] ].map(([label, href]) => (
//                 <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-gray-50">
//                   {label}
//                 </Link>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>


//       {/* HERO / STORY - Refined layout and imagery */}
//       <section className="pt-20 pb-24 bg-gradient-to-b from-white to-warm-white">
//         <div className="container-wide max-w-[1200px] mx-auto px-6">
//           <div className="grid lg:grid-cols-12 gap-12 items-center">
            
//             <motion.div 
//               className="lg:col-span-7"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={fadeInUp}
//             >
//               <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark font-medium text-xs tracking-wider uppercase px-3 py-1 rounded-full mb-6">
//                 <Sparkles className="w-3.5 h-3.5 text-gold" /> Established 2026
//               </div>
//               <p className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Heritage & Vision</p>
//               <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-charcoal mb-8 leading-[1.1]">
//                 Crafting Colours That <br />
//                 <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-700">Transform Spaces</span>
//               </h1>
//               <p className="text-xl text-charcoal-muted leading-relaxed max-w-2xl">
//                 Founded in Mumbai, Colorsome Paints began with a simple yet profound vision: to bring world-class paint quality and sophisticated finishes to Indian homes. Today, we stand proud, having served over 100,000 homeowners with premium products and expert craftsmanship.
//               </p>
//             </motion.div>

//             <motion.div 
//               className="lg:col-span-5 relative"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//             >
//               {/* Premium texture close-up image */}
//               <div className="relative rounded-3xl shadow-2xl overflow-hidden aspect-[1/1] group">
//                 <Image
//                   src="https://images.pexels.com/photos/7174391/pexels-photo-7174391.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="Close-up of premium textured paint application"
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-105"
//                   unoptimized
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//               </div>
              
//               {/* Floating aesthetic card */}
//               <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[200px]">
//                 <Droplets className="w-7 h-7 text-gold mb-3"/>
//                 <p className="font-serif text-3xl font-bold text-charcoal leading-none">100k+</p>
//                 <p className="text-xs tracking-wider uppercase font-semibold text-charcoal-muted">Homes Styled</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* MISSION - Dark mode break */}
//       <motion.section 
//         className="py-28 bg-[#1A1A1A] text-white relative overflow-hidden"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="absolute inset-0 w-full h-full bg-[url('/textures/fine_stucco.png')] opacity-10" />
//         <div className="container-wide max-w-[1200px] mx-auto px-6 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <p className="text-xs uppercase tracking-widest text-gold font-bold mb-3">Our Core Philosophy</p>
//             <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 leading-tight">Why We Exist</h2>
//             <motion.p 
//               className="font-serif text-2xl md:text-3xl text-white/90 leading-relaxed font-light px-6 border-l-2 border-gold/40"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={fadeInUp}
//             >
//               "To be the most trusted paint partner for Indian homeowners, delivering exceptional quality, vibrant palettes, and seamless expert guidance that makes every space true reflection of its owner."
//             </motion.p>
//           </div>
//         </div>
//       </motion.section>

//       {/* VALUES - Improved cards */}
//       <section className="py-24 bg-warm-white">
//         <div className="container-wide max-w-[1200px] mx-auto px-6">
//           <div className="text-center mb-20">
//             <p className="text-xs uppercase tracking-widest text-gold font-bold mb-2">Our Pillars</p>
//             <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal">What We Stand For</h2>
//           </div>
          
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//             variants={staggerContainer}
//           >
//             {values.map((v) => (
//               <motion.div 
//                 key={v.title} 
//                 variants={fadeInUp}
//                 className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 relative overflow-hidden group"
//               >
//                 <div className="absolute bottom-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-3xl pointer-events-none group-hover:bg-gold/10 transition-colors" />
//                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-8 shadow-inner border border-gold/10">
//                   <v.icon className="w-8 h-8 text-gold" />
//                 </div>
//                 <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4 tracking-tight">{v.title}</h3>
//                 <p className="text-charcoal-muted leading-relaxed text-sm">{v.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* COMMITMENTS - Split layout */}
//       <section className="py-24 bg-white border-t border-gray-100 relative">
//         <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F9F6F0]" />
//         <div className="container-wide max-w-[1200px] mx-auto px-6 relative z-10">
//           <div className="grid lg:grid-cols-12 gap-16 items-start">
//             <motion.div 
//               className="lg:col-span-6 lg:py-10"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//             >
//               <p className="text-xs uppercase tracking-widest text-gold font-bold mb-2">The Colorsome Guarantee</p>
//               <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-8 leading-tight">What We Promise</h2>
//               <p className="text-lg text-charcoal-muted leading-relaxed mb-10 max-w-xl">
//                 From structural product testing to final execution walkthroughs, we hold ourselves to absolute standards. Our commitment isn't just wordplay—it's the foundation of every client partnership.
//               </p>
              
//               <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
//                  <Image
//                     src="https://images.pexels.com/photos/10313176/pexels-photo-10313176.jpeg?auto=compress&cs=tinysrgb&w=600"
//                     alt="Precision paint mixing tool in a high-tech facility"
//                     fill
//                     className="object-cover"
//                     unoptimized
//                  />
//               </div>
//             </motion.div>
            
//             <motion.div 
//               className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerContainer}
//             >
//               {commitments.map((c) => (
//                 <motion.div 
//                   key={c} 
//                   variants={fadeInUp}
//                   className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
//                 >
//                   <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
//                   <p className="text-sm md:text-base font-medium text-charcoal leading-snug">{c}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* MILESTONES - Animating Timeline */}
//       <section className="py-24 bg-warm-white border-t border-gray-100">
//         <div className="container-wide max-w-[1200px] mx-auto px-6">
//           <div className="text-center mb-20">
//             <p className="text-xs uppercase tracking-widest text-gold font-bold mb-2">Chronology</p>
//             <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal">Our Dynamic Journey</h2>
//           </div>
          
//           <div className="max-w-3xl mx-auto relative pl-10 md:pl-0" ref={timelineRef}>
//             {/* Background Line */}
//             <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2" />
            
//             {/* Animating Line */}
//             <motion.div 
//               style={{ height: lineHeight }}
//               className="absolute left-6 md:left-1/2 top-0 w-px bg-gold transform md:-translate-x-1/2 origin-top"
//             />

//             {milestones.map((m, i) => {
//               const isEven = i % 2 === 0;
//               return (
//                 <motion.div 
//                   key={m.year} 
//                   className={`relative flex items-center mb-16 last:mb-0 md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, amount: 0.8 }}
//                   variants={fadeInUp}
//                 >
//                   {/* Timeline Dot & Icon */}
//                   <div className="absolute -left-10 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
//                     <motion.div 
//                         whileHover={{ scale: 1.15 }}
//                         className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-4 border-gold shadow-lg"
//                     >
//                         <m.icon className="w-7 h-7 text-gold"/>
//                     </motion.div>
//                   </div>
                  
//                   {/* Content Card */}
//                   <motion.div 
//                     className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-sm w-full md:w-[42%] relative transition-all hover:shadow-lg ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
//                     whileHover={{ y: -3 }}
//                   >
//                     <span className="font-serif text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold to-amber-700 block mb-3">{m.year}</span>
//                     <p className="font-medium text-charcoal leading-relaxed">{m.event}</p>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* TEAM - Refined Layout & Image */}
//       <section className="py-24 bg-white">
//         <div className="container-wide max-w-[1200px] mx-auto px-6">
//           <div className="grid lg:grid-cols-12 gap-16 items-center">
//             <motion.div 
//                 className="lg:col-span-6 relative aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl"
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7 }}
//             >
//                {/* Image changed to show color studio setting */}
//                <Image
//                  src="https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?auto=compress&cs=tinysrgb&w=800"
//                  alt="Professional color consultant working with swatch books in a studio"
//                  fill
//                  className="object-cover"
//                  unoptimized
//                />
//                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//             </motion.div>
            
//             <motion.div 
//               className="lg:col-span-6"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.4 }}
//               variants={fadeInUp}
//             >
//               <p className="text-xs uppercase tracking-widest text-gold font-bold mb-2">The Colorsome People</p>
//               <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-8 leading-tight">
//                 Vibrant Minds Behind the Paint
//               </h2>
//               <p className="text-lg text-charcoal-muted leading-relaxed mb-6">
//                 Colorsome is powered by a synthesis of passionate chemists, aesthetic colour experts, logistical masters, and dedicated service professionals. We understand that painting isn't just maintenance—it's a high-stakes transformation of your sanctuary.
//               </p>
//               <p className="text-sm text-charcoal-muted/90 leading-relaxed font-light border-l-2 border-gray-100 pl-6">
//                 Our consultants bring years of deep experience, guiding you beyond simple shade selection to visualizing textures in Indian lighting conditions. Our formulations are relentlessly stress-tested, ensuring they stand up to diverse climates across the nation.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA - Repositioned and stylized */}
//       <motion.section 
//         className="py-20 bg-[#F9F6F0]"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="container-wide max-w-[900px] mx-auto px-6 text-center bg-[#2D2D2D] rounded-3xl p-16 shadow-2xl relative overflow-hidden">
//           <div className="absolute inset-0 bg-[url('/textures/soft_canvas.png')] opacity-5 pointer-events-none" />
//           <p className="text-xs uppercase tracking-widest text-gold font-bold mb-3">Get Started</p>
//           <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
//             Ready to Experience the Colorsome Difference?
//           </h2>
//           <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed font-light">
//             Skip the generic. Discover high-performance products or book a personalized consultation with our paint architects today.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-5 justify-center">
//             <Link href="/products" className="px-10 py-4 bg-[#F3E7C9] text-[#2D2D2D] rounded-full font-semibold transition-all hover:scale-[1.03] shadow-lg">Explore Master Palettes</Link>
//             <Link href="/assistance" className="px-10 py-4 bg-transparent text-white border-2 border-white/20 rounded-full font-medium transition-all hover:border-gold hover:text-gold hover:bg-gold/5">Request Art Direction</Link>
//           </div>
//         </div>
//       </motion.section>

//       <Footer />
//     </div>
//   );
// }

'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Shield, Users, Target, Leaf, Droplets, CheckCircle, Phone, Menu, X, Sparkles, Zap, MapPin, Building } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Footer } from '@/src/components/Footer';

const BRAND = {
  pink: '#E91E63',
  orange: '#FF5722',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const values = [
  { icon: Award,    title: 'Quality First',       desc: 'Every product undergoes rigorous testing for finish, durability, and colour consistency.' },
  { icon: Shield,   title: 'Trust & Transparency', desc: 'Clear pricing, honest recommendations, and genuine products every time.' },
  { icon: Users,    title: 'Customer Focus',       desc: 'Your satisfaction guides everything we do, from formulation to service.' },
  { icon: Target,   title: 'Innovation',           desc: 'Continuous research for better finishes and eco-friendly formulations.' },
  { icon: Droplets, title: 'Craftsmanship',        desc: 'Respect for the painting craft and the professionals who bring colour to life.' },
  { icon: Leaf,     title: 'Sustainability',       desc: 'Committed to environmentally responsible products and practices.' },
];

const milestones = [
  { year: '2010', event: 'Colorsome Paints founded in Mumbai with a vision for premium quality',  icon: Building },
  { year: '2014', event: 'Launched flagship Luxe Interior range to critical acclaim',              icon: Sparkles },
  { year: '2017', event: 'Introduced Weather Guard exterior protection technology',                icon: Shield   },
  { year: '2020', event: 'Expanded to 50+ cities across India with dealer network',               icon: MapPin   },
  { year: '2023', event: 'Introduced eco-friendly low-VOC product line',                          icon: Leaf     },
  { year: '2025', event: 'Reached 100,000+ homes transformed nationwide',                         icon: Zap      },
];

const commitments = [
  'Low-VOC formulations for healthier homes',
  'Rigorous quality testing at every stage',
  'Expert consultation at no cost',
  'Genuine products with full warranty',
  'Professional execution support',
  'Transparent pricing always',
];

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled]             = useState(false);

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navMuted = 'text-[#6B6B6B]';
  const navText  = 'text-[#2D2D2D]';
  const navBg    = scrolled
    ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#EDE6DA]/40'
    : 'bg-white/80 backdrop-blur-md border-b border-[#EDE6DA]/30';

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-[72px] text-charcoal overflow-x-hidden font-sans relative selection:bg-[#F3E7C9]">

      {/* ── AMBIENT GLOWS ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[5%]  -left-[10%]  w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] rounded-full blur-[120px]" style={{ background: `radial-gradient(circle, ${BRAND.pink} 0%, transparent 70%)` }} />
        <div className="absolute top-[35%] -right-[10%] w-[70vw] h-[70vw] sm:w-[45vw] sm:h-[45vw] rounded-full blur-[120px]" style={{ background: `radial-gradient(circle, ${BRAND.orange} 0%, transparent 70%)` }} />
        <div className="absolute bottom-[20%] left-[5%] w-[60vw] h-[60vw] sm:w-[40vw] sm:h-[40vw] rounded-full blur-[100px]" style={{ background: `radial-gradient(circle, ${BRAND.pink} 0%, transparent 70%)` }} />
      </div>

      {/* ── HEADER ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-xl sm:rounded-2xl flex items-center justify-center bg-white shadow border border-[#EDE6DA] p-1.5 shrink-0">
              <Image src="/Ara_Weather_Coat.png" alt="Colorsome logo" width={52} height={52} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <div className="flex items-start">
                <span className={`transition-colors duration-300 ${navText}`}
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.15rem, 3.5vw, 1.9rem)', lineHeight: '0.85', fontWeight: 700, letterSpacing: '-0.055em', textTransform: 'uppercase' }}>
                  COLORSOME
                </span>
                <span className={`transition-colors duration-300 ${navText}`}
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.5rem', lineHeight: 1, fontWeight: 700, marginLeft: '0.1rem', marginTop: '0.05rem' }}>
                  ®
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-1 rounded-full border border-[#EDE6DA]/50 bg-white/60 backdrop-blur-md px-2 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
              {[['Home','/'],['Products','/products'],['Shades','/shades'],['Assistance','/assistance'],['About','/about'],['Contact','/contact']].map(([label,href]) => {
                const isActive = label === 'About';
                return (
                  <Link key={label} href={href}
                    className={`relative rounded-full px-4 py-2.5 transition-all duration-200 ${isActive ? 'text-[#2D2D2D] bg-[#F3E7C9] font-semibold' : `${navMuted} hover:text-[#2D2D2D] hover:bg-black/[0.03] font-medium`}`}
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', letterSpacing: '-0.01em', lineHeight: 1 }}>
                    {label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/assistance" className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs uppercase tracking-widest font-black text-white bg-[#2D2D2D] shadow hover:shadow-lg transition-all">
              <Phone className="w-3.5 h-3.5" /> Book Assistance
            </Link>
            <button className={`p-2 rounded-lg md:hidden transition-colors ${navText}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="absolute left-0 right-0 top-[72px] bg-white/95 backdrop-blur-md border-t border-[#EDE6DA]/40 shadow-xl px-5 py-4 space-y-1">
              {[['Home','/'],['Products','/products'],['Shades','/shades'],['Assistance','/assistance'],['About','/about'],['Contact','/contact']].map(([label,href]) => (
                <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-charcoal hover:text-orange-500 transition-colors py-2.5 border-b border-gray-50 last:border-0 font-inter">
                  {label}
                </Link>
              ))}
              <div className="pt-3">
                <Link href="/assistance" onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-xs uppercase tracking-widest font-black text-white bg-[#2D2D2D] shadow">
                  <Phone className="w-3.5 h-3.5" /> Book Assistance
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO / STORY ── */}
      <section className="py-10 sm:py-16 md:py-24 bg-white/40 backdrop-blur-sm border-b border-[#EDE6DA]/50 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">

            {/* Left: text */}
            <motion.div className="lg:col-span-7 order-2 lg:order-1"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-[#F3E7C9] text-charcoal font-black text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full mb-5 font-inter">
                <Sparkles className="w-3 h-3 text-orange-500" /> Established 2010
              </div>
              <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-2 font-inter">Heritage &amp; Vision</p>
              <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tight text-charcoal mb-5 leading-[1.08]">
                Crafting Colours That{' '}
                <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Transform Spaces
                </span>
              </h1>
              <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed max-w-xl font-inter">
                Founded in Mumbai, Colorsome Paints began with a simple yet profound vision: to bring world-class paint quality and sophisticated finishes to Indian homes. Today, we have served over 100,000 homeowners with premium products and expert craftsmanship.
              </p>
            </motion.div>

            {/* Right: image */}
            <motion.div className="lg:col-span-5 order-1 lg:order-2 relative"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="relative rounded-2xl sm:rounded-3xl shadow-2xl border border-white/60 overflow-hidden aspect-square group max-w-[340px] mx-auto lg:max-w-none">
                <Image
                  src="https://images.pexels.com/photos/7174391/pexels-photo-7174391.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Premium textured paint application"
                  fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-3 left-3 sm:-bottom-5 sm:-left-4 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#EDE6DA] shadow-xl p-3 sm:p-4 font-inter">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center shadow mb-2">
                  <Droplets className="w-3.5 h-3.5 text-white"/>
                </div>
                <p className="font-serif text-xl sm:text-2xl font-bold text-charcoal leading-none">100k+</p>
                <p className="text-[9px] tracking-wider uppercase font-black text-charcoal-muted mt-1">Onsite Projects</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <motion.section
        className="py-14 sm:py-20 md:py-28 bg-[#1A1A1A] text-white relative overflow-hidden"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="absolute inset-0 -z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[200px] sm:w-[380px] h-[200px] sm:h-[380px] rounded-full blur-[100px]" style={{ background: BRAND.pink }} />
          <div className="absolute top-1/3 right-1/4 w-[200px] sm:w-[380px] h-[200px] sm:h-[380px] rounded-full blur-[100px]" style={{ background: BRAND.orange }} />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-orange-400 font-black font-inter mb-3">Our Core Philosophy</p>
            <h2 className="font-serif text-[clamp(1.8rem,5vw,3rem)] font-bold mb-6 sm:mb-8 leading-tight">Why We Exist</h2>
            <motion.p
              className="font-serif text-[clamp(1rem,2.5vw,1.5rem)] text-white/85 leading-relaxed font-light px-4 sm:px-8 border-l-2 border-orange-500/40 text-left sm:text-center"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeInUp}>
              "To be the most trusted paint partner for Indian homeowners, delivering exceptional quality, vibrant palettes, and seamless expert guidance that makes every space a true reflection of its owner."
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* ── VALUES ── */}
      <section className="py-14 sm:py-20 md:py-28 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[10px] uppercase tracking-[0.25em] text-pink-600 font-black font-inter mb-2">Our Pillars</p>
            <h2 className="font-serif text-[clamp(1.8rem,5vw,3rem)] font-bold text-charcoal">What We Stand For</h2>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={staggerContainer}>
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeInUp} whileHover={{ y: -4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#EDE6DA]/60 shadow-sm hover:shadow-xl hover:bg-white hover:border-orange-200 transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#FDFBF7] border border-[#EDE6DA] flex items-center justify-center mb-5 sm:mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 text-orange-500">
                  <v.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal mb-2 tracking-tight">{v.title}</h3>
                <p className="text-charcoal-muted leading-relaxed text-xs sm:text-sm font-inter">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COMMITMENTS ── */}
      <section className="py-14 sm:py-20 md:py-28 bg-[#FDFBF7]/40 border-t border-b border-[#EDE6DA]/50 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">

            {/* Left */}
            <motion.div className="lg:col-span-6 lg:py-4"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-orange-500 font-black font-inter mb-2">The Colorsome Guarantee</p>
              <h2 className="font-serif text-[clamp(1.8rem,5vw,3rem)] font-bold text-charcoal mb-5 leading-tight">What We Promise</h2>
              <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed mb-6 font-inter">
                From structural product testing to final execution walkthroughs, we hold ourselves to absolute standards. Our commitment isn't just wordplay — it's the foundation of every client partnership.
              </p>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/60 group">
                <Image src="/aboutpage.png" alt="Paint mixing facility" fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
              </div>
            </motion.div>

            {/* Right: commitment cards */}
            <motion.div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:pt-20"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              {commitments.map((c) => (
                <motion.div key={c} variants={fadeInUp} whileHover={{ y: -2 }}
                  className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#EDE6DA]/60 shadow-sm hover:shadow-md hover:bg-white transition-all duration-200">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-bold text-charcoal tracking-wide font-inter leading-relaxed">{c}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MILESTONES / TIMELINE ── */}
      <section className="py-14 sm:py-20 md:py-28 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] uppercase tracking-[0.25em] text-pink-600 font-black font-inter mb-2">Chronology</p>
            <h2 className="font-serif text-[clamp(1.8rem,5vw,3rem)] font-bold text-charcoal">Our Journey</h2>
          </div>

          {/* ── MOBILE: vertical stacked cards (no absolute positioning) ── */}
          <div className="md:hidden flex flex-col gap-0 relative pl-10" ref={timelineRef}>
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[#EDE6DA]" />
            <motion.div style={{ height: lineHeight }}
              className="absolute left-4 top-0 w-px bg-gradient-to-b from-pink-500 to-orange-500 origin-top" />
            {milestones.map((m, i) => (
              <motion.div key={m.year} className="relative mb-8 last:mb-0 flex items-start gap-4"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={fadeInUp}>
                {/* dot */}
                <div className="absolute -left-10 top-3 w-8 h-8 rounded-full bg-white border-2 border-orange-400 shadow flex items-center justify-center shrink-0 z-10">
                  <m.icon className="w-3.5 h-3.5 text-orange-500" />
                </div>
                {/* card */}
                <div className="bg-white/90 rounded-2xl p-4 border border-[#EDE6DA]/70 shadow-sm w-full">
                  <span className="font-serif text-xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent block mb-1">{m.year}</span>
                  <p className="text-xs font-bold tracking-wide font-inter text-charcoal leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── DESKTOP: alternating timeline ── */}
          <div className="hidden md:block max-w-3xl mx-auto relative" ref={timelineRef}>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#EDE6DA] -translate-x-1/2" />
            <motion.div style={{ height: lineHeight }}
              className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-pink-500 to-orange-500 -translate-x-1/2 origin-top" />
            {milestones.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div key={m.year}
                  className={`relative flex items-center mb-14 last:mb-0 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} variants={fadeInUp}>
                  {/* dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-white border-4 border-[#FDFBF7] shadow-xl ring-2 ring-orange-400/50 flex items-center justify-center">
                      <m.icon className="w-4 h-4 text-orange-500" />
                    </motion.div>
                  </div>
                  {/* card */}
                  <motion.div whileHover={{ y: -4 }}
                    className={`bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#EDE6DA]/70 shadow-sm w-[44%] hover:shadow-xl hover:border-orange-200/60 transition-all duration-300 ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                    <span className="font-serif text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent block mb-2">{m.year}</span>
                    <p className="text-xs sm:text-sm font-bold tracking-wide font-inter text-charcoal leading-relaxed">{m.event}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-14 sm:py-20 md:py-28 bg-white/40 backdrop-blur-sm border-t border-b border-[#EDE6DA]/50 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">

            {/* Image */}
            <motion.div className="lg:col-span-6 relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[5/4] shadow-2xl border border-white/60 group max-w-[400px] mx-auto lg:max-w-none w-full"
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Image
                src="https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Colour consultant with swatch books" fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Text */}
            <motion.div className="lg:col-span-6"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-pink-600 font-black font-inter mb-2">The Colorsome People</p>
              <h2 className="font-serif text-[clamp(1.8rem,5vw,3rem)] font-bold text-charcoal mb-5 leading-tight">
                Vibrant Minds Behind the Paint
              </h2>
              <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed mb-5 font-inter">
                Colorsome is powered by passionate chemists, aesthetic colour experts, logistics masters, and dedicated service professionals. We understand that painting isn't just maintenance — it's a high-stakes transformation of your sanctuary.
              </p>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-inter border-l-2 border-[#EDE6DA] pl-4 sm:pl-5">
                Our consultants bring years of experience, guiding you beyond shade selection to visualizing textures in Indian lighting conditions. Our formulations are relentlessly stress-tested across diverse climates.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 sm:py-20 md:py-24 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-[960px] mx-auto text-center bg-[#2D2D2D] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="absolute inset-0 -z-0 opacity-10 pointer-events-none">
              <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[80px]" style={{ background: BRAND.pink }} />
              <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[80px]" style={{ background: BRAND.orange }} />
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-orange-400 font-black font-inter mb-3 relative z-10">Get Started</p>
            <h2 className="font-serif text-[clamp(1.6rem,5vw,3rem)] font-bold text-white mb-5 leading-tight max-w-2xl mx-auto relative z-10">
              Ready to Experience the Colorsome Difference?
            </h2>
            <p className="text-sm text-gray-300 max-w-md mx-auto mb-8 leading-relaxed font-inter relative z-10">
              Discover high-performance products or book a personalized consultation with our paint architects today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center font-inter relative z-10 max-w-xs sm:max-w-none mx-auto">
              <Link href="/products"
                className="px-6 sm:px-8 py-3.5 bg-[#F3E7C9] text-[#2D2D2D] rounded-xl text-xs uppercase tracking-widest font-black shadow hover:shadow-xl hover:bg-[#ebdcb4] transition-all text-center">
                Explore Master Palettes
              </Link>
              <Link href="/assistance"
                className="px-6 sm:px-8 py-3.5 bg-transparent text-white border-2 border-white/20 rounded-xl text-xs uppercase tracking-widest font-black hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/5 transition-all text-center">
                Request Art Direction
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}