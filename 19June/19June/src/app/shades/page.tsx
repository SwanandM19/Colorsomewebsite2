// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Palette, Loader, ArrowRight, Phone, Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { getShades } from '../../lib/supabase';
// import type { Shade } from '../../lib/supabase';
// import { ShadeCard } from '../../components/ShadeCard';
// import Image from 'next/image';
// // import { getContrastColor } from '../../lib/utils';
// import { Footer } from '@/src/components/Footer';

// const collectionTypes = [
//   { name: 'All Shades', slug: null },
//   { name: 'Classic Neutrals', slug: 'Classic Neutrals' },
//   { name: 'Ocean Collection', slug: 'Ocean Collection' },
//   { name: 'Nature Palette', slug: 'Nature Palette' },
//   { name: 'Rich Accents', slug: 'Rich Accents' },
//   { name: 'Pastel Dreams', slug: 'Pastel Dreams' },
//   { name: 'Sunlight Series', slug: 'Sunlight Series' },
//   { name: 'Urban Modern', slug: 'Urban Modern' },
//   { name: 'Pure Collection', slug: 'Pure Collection' },
// ];

// const browseBySpace = [
//   {
//     space: 'Living Room',
//     desc: 'Warm neutrals and soft blues for inviting spaces',
//     shades: ['#D4B896', '#D1C7BD', '#6B8FA3', '#FFFFF0'],
//     image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     space: 'Bedroom',
//     desc: 'Calming pastels and muted tones for peaceful retreat',
//     shades: ['#E6E6FA', '#9DC183', '#EBF2F2', '#D1C7BD'],
//     image: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     space: 'Kitchen',
//     desc: 'Fresh whites and subtle colours for any style',
//     shades: ['#FFFFFF', '#EBF2F2', '#FFDB58', '#D4B896'],
//     image: 'https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     space: 'Exterior',
//     desc: 'Weather-resistant shades for lasting curb appeal',
//     shades: ['#FFFFF0', '#36454F', '#E2725B', '#228B22'],
//     image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
// ];

// const inspirationGallery = [
//   { image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Modern Minimalist' },
//   { image: 'https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Warm Contemporary' },
//   { image: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Serene Bedroom' },
//   { image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Classic Exterior' },
// ];

// export default function ShadesPage() {
//   const [shades, setShades] = useState<Shade[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//   async function fetchShades() {
//     try {
//       const data = await getShades(selectedCollection || undefined);
//       setShades(data);
//     } catch (err) {
//       console.error('Error fetching shades:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   fetchShades();

//   const onScroll = () => setScrolled(window.scrollY > 40);
//   window.addEventListener('scroll', onScroll, { passive: true });
//   onScroll();

//   return () => window.removeEventListener('scroll', onScroll);
// }, [selectedCollection]);

// const navText = 'text-[#2D2D2D]';
// const navMuted = 'text-[#6B6B6B]';
// const navBg = scrolled
//   ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
//   : 'bg-white/95 backdrop-blur-md border-b border-gray-100';

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-warm-white">
//         <Loader className="w-8 h-8 text-gold animate-spin" />
//       </div>
//     );
//   }

//   return (
//     // <div className="bg-warm-white min-h-screen pt-24">
//     <div className="bg-warm-white min-h-screen pt-[72px]">
//       {/* Header */}
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
//       const isActive = label === 'Shades';

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

// <section className="pt-16 pb-12 bg-white border-b border-warm-gray">
//   <div className="container-wide">
//     <div className="max-w-3xl">
//       <p className="section-label">Shade Collections</p>
//       <h1 className="font-serif text-5xl md:text-6xl font-medium text-charcoal mb-6">
//         Find Your Perfect Colour
//       </h1>
//       <p className="text-lg text-charcoal-muted leading-relaxed">
//         Explore our curated shade collections. From timeless neutrals to bold accents,
//         discover colours that transform your space and reflect your style.
//       </p>
//     </div>
//   </div>
// </section>

//       {/* Collection filters — sticky */}
//       {/* <section className="bg-charcoal py-3 sticky top-20 z-40"> */}
//       <section className="bg-charcoal py-3 sticky top-[72px] z-40">
//         <div className="container-wide">
//           <div className="flex items-center overflow-x-auto gap-2 scrollbar-hide">
//             {collectionTypes.map((c) => (
//               <button
//                 key={c.name}
//                 onClick={() => setSelectedCollection(c.slug)}
//                 className={`px-4 py-2 rounded text-xs font-medium tracking-wide whitespace-nowrap transition-colors ${
//                   selectedCollection === c.slug
//                     ? 'bg-gold text-white'
//                     : 'bg-white/8 text-white/60 hover:bg-white/15 hover:text-white'
//                 }`}
//               >
//                 {c.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Shades grid */}
//       <section className="section-padding">
//         <div className="container-wide">
//           <div className="flex items-center justify-between mb-8">
//             <p className="text-sm text-charcoal-muted">{shades.length} shade{shades.length !== 1 ? 's' : ''}</p>
//             <Link href="/assistance" className="text-xs text-gold hover:underline flex items-center gap-1.5">
//               <Palette className="w-3.5 h-3.5" /> Need help choosing?
//             </Link>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
//             {shades.map((shade) => (
//               <ShadeCard key={shade.id} shade={shade} size="md" />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Visual Inspiration Gallery */}
//       <section className="section-padding bg-white border-t border-warm-gray">
//         <div className="container-wide">
//           <div className="text-center mb-14">
//             <p className="section-label">Inspiration</p>
//             <h2 className="section-title mb-4">Visual Inspiration</h2>
//             <p className="section-subtitle mx-auto">See how colour transforms real spaces</p>
//           </div>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//             {inspirationGallery.map((item) => (
//               <div key={item.label} className="card-premium group overflow-hidden relative h-72">
//                 <img
//                   src={item.image}
//                   alt={item.label}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
//                 <div className="absolute bottom-0 left-0 right-0 p-5">
//                   <p className="font-serif text-base font-medium text-white">{item.label}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Browse by Space */}
//       <section className="section-padding bg-warm-gray">
//         <div className="container-wide">
//           <div className="text-center mb-14">
//             <p className="section-label">By Space</p>
//             <h2 className="section-title mb-4">Colours for Every Room</h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {browseBySpace.map((s) => (
//               <div key={s.space} className="card-premium overflow-hidden">
//                 <div className="relative h-40">
//                   <img src={s.image} alt={s.space} className="w-full h-full object-cover" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
//                   <div className="absolute bottom-3 left-4">
//                     <p className="font-serif text-lg font-medium text-white">{s.space}</p>
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <p className="text-sm text-charcoal-muted mb-4">{s.desc}</p>
//                   <div className="flex gap-2">
//                     {s.shades.map((color, i) => (
//                       <div
//                         key={i}
//                         className="w-8 h-8 rounded-lg border-2 border-white shadow-sm"
//                         style={{ backgroundColor: color }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       {/* <section className="section-padding bg-charcoal">
//         <div className="container-wide text-center">
//           <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
//             Can't Decide? Let Us Help
//           </h2>
//           <p className="text-white/50 max-w-lg mx-auto mb-8">
//             Our experts can show you samples on your walls and help you choose the perfect
//             shades for your project.
//           </p>
//           <Link href="/assistance" className="btn-gold">
//             Book Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
//           </Link>
//         </div>
//       </section> */}
//       <Footer/>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Palette, Loader, ArrowRight, Phone, Menu, X, Sparkles, SlidersHorizontal } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { getShades } from '../../lib/supabase';
// import type { Shade } from '../../lib/supabase';
// import { ShadeCard } from '../../components/ShadeCard';
// import Image from 'next/image';
// import { Footer } from '@/src/components/Footer';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 25 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } }
// };

// const collectionTypes = [
//   { name: 'All Shades', slug: null },
//   { name: 'Classic Neutrals', slug: 'Classic Neutrals' },
//   { name: 'Ocean Collection', slug: 'Ocean Collection' },
//   { name: 'Nature Palette', slug: 'Nature Palette' },
//   { name: 'Rich Accents', slug: 'Rich Accents' },
//   { name: 'Pastel Dreams', slug: 'Pastel Dreams' },
//   { name: 'Sunlight Series', slug: 'Sunlight Series' },
//   { name: 'Urban Modern', slug: 'Urban Modern' },
//   { name: 'Pure Collection', slug: 'Pure Collection' },
// ];

// const browseBySpace = [
//   {
//     space: 'Living Room',
//     desc: 'Warm neutrals and soft blues for inviting spaces',
//     shades: ['#D4B896', '#D1C7BD', '#6B8FA3', '#FFFFF0'],
//     image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     space: 'Bedroom',
//     desc: 'Calming pastels and muted tones for peaceful retreat',
//     shades: ['#E6E6FA', '#9DC183', '#EBF2F2', '#D1C7BD'],
//     image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     space: 'Kitchen',
//     desc: 'Fresh whites and subtle colours for any style',
//     shades: ['#FFFFFF', '#EBF2F2', '#FFDB58', '#D4B896'],
//     image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     space: 'Exterior',
//     desc: 'Weather-resistant shades for lasting curb appeal',
//     shades: ['#FFFFF0', '#36454F', '#E2725B', '#228B22'],
//     image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
//   },
// ];

// const inspirationGallery = [
//   { image: '/modernmini.png', label: 'Modern Minimalist' },
//   { image: '/warmcontempoary.png', label: 'Warm Contemporary' },
//   { image: '/serenebedroom.png', label: 'Serene Bedroom' },
//   { image: '/classicinterior.png', label: 'Classic Exterior' },
// ];

// export default function ShadesPage() {
//   const [shades, setShades] = useState<Shade[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     async function fetchShades() {
//       try {
//         setIsLoading(true);
//         const data = await getShades(selectedCollection || undefined);
//         setShades(data);
//       } catch (err) {
//         console.error('Error fetching shades:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchShades();
//   }, [selectedCollection]);

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
//     <div className="bg-warm-white min-h-screen pt-[72px] text-[#2D2D2D] font-sans overflow-x-hidden relative">
//       {/* Decorative Blur Spots */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold/5 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

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
//                 const isActive = label === 'Shades';
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

//       {/* HERO TITLE BLOCK - Split Layout with Product Render */}
//       <section className="pt-12 pb-16 bg-gradient-to-b from-white to-[#F9F6F0]/30 relative overflow-hidden">
//         <div className="max-w-[1280px] mx-auto px-6">
//           <div className="grid lg:grid-cols-12 gap-12 items-center">
            
//             {/* Left Content Column */}
//             <motion.div className="lg:col-span-7" initial="hidden" animate="visible" variants={fadeInUp}>
//               <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark font-semibold text-xs tracking-wider uppercase px-3 py-1 rounded-full mb-5">
//                 <Sparkles className="w-3.5 h-3.5 text-gold" /> Master Swatches
//               </div>
//               <span className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Architectural Palettes</span>
              
//               {/* FIXED TEXT BUG: Removed transparent bg-clip-text that washed out on white backgrounds */}
//               <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#2D2D2D] mb-6 leading-[1.1] font-light">
//                 Find Your Perfect <br />
//                 <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-gold to-amber-900 drop-shadow-sm">
//                   Architectural Tone
//                 </span>
//               </h1>
              
//               <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed max-w-xl font-light">
//                 Explore our curated collections. From highly sophisticated neutrals to dramatic, modern statement accents, uncover tones precisely formulated to command lighting.
//               </p>
//             </motion.div>

//             {/* Right Column: Your Premium Colorsome Paint Cans Render */}
//             <motion.div 
//               className="lg:col-span-5 relative flex justify-center"
//               initial={{ opacity: 0, scale: 0.95, y: 15 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
//             >
//               {/* Artistic geometric backdrop frame to highlight the luxury cans */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-[#F3E7C9]/40 via-transparent to-transparent rounded-3xl blur-2xl -z-10 transform scale-90" />
              
//               <div className="relative rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#E8E2D8] overflow-hidden aspect-square w-full max-w-[440px] bg-[#1A1A1A] group">
//                 <Image
//                   src="/shadesImg.png" // Move this image into your public/ directory with this exact name!
//                   alt="Colorsome premium paint can lineup showcase"
//                   fill
//                   priority
//                   sizes="(max-w-1024px) 100vw, 40vw"
//                   className="object-cover transition-transform duration-700 group-hover:scale-103"
//                   unoptimized
//                 />
//                 {/* Micro premium vignette lighting layer */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* STICKY COLLECTION FILTERS */}
//       <section className="bg-[#2D2D2D] py-4 sticky top-[72px] z-40 shadow-md">
//         <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-4">
//           <div className="text-white/40 border-r border-white/10 pr-3 hidden sm:flex items-center gap-1.5 shrink-0">
//             <SlidersHorizontal className="w-4 h-4" />
//             <span className="text-xs uppercase font-bold tracking-wider">Filters</span>
//           </div>
//           <div className="flex items-center overflow-x-auto gap-2 scrollbar-hide flex-1 py-0.5">
//             {collectionTypes.map((c) => {
//               const isSelected = selectedCollection === c.slug;
//               return (
//                 <button
//                   key={c.name}
//                   onClick={() => setSelectedCollection(c.slug)}
//                   className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
//                     isSelected
//                       ? 'bg-[#F3E7C9] text-[#2D2D2D] shadow-sm scale-[1.02]'
//                       : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
//                   }`}
//                 >
//                   {c.name}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* SHADES INTERACTIVE ENGINE GRID */}
//       <section className="py-16">
//         <div className="max-w-[1200px] mx-auto px-6">
//           <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-100">
//             <p className="text-sm font-medium text-[#6B6B6B]">
//               Showing <span className="text-[#2D2D2D] font-bold">{shades.length}</span> signature shade{shades.length !== 1 ? 's' : ''}
//             </p>
//             <Link href="/assistance" className="text-xs font-bold text-gold uppercase tracking-wider hover:underline flex items-center gap-1.5 group">
//               <Palette className="w-4 h-4" /> Need matching advice? <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
//             </Link>
//           </div>

//           <AnimatePresence mode="popLayout">
//             {isLoading ? (
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="py-20 flex flex-col items-center justify-center w-full gap-3"
//               >
//                 <Loader className="w-8 h-8 text-gold animate-spin" />
//                 <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Loading tonal spectrum...</p>
//               </motion.div>
//             ) : shades.length === 0 ? (
//               <motion.div 
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="py-20 text-center max-w-md mx-auto"
//               >
//                 <Palette className="w-10 h-10 text-gray-300 mx-auto mb-4" />
//                 <h3 className="font-serif text-xl font-medium mb-1">No Swatches Found</h3>
//                 <p className="text-sm text-[#6B6B6B] font-light">We couldn't locate active shades matching this database filter. Try switching back to All Shades.</p>
//               </motion.div>
//             ) : (
//               <motion.div 
//                 layout
//                 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
//               >
//                 {shades.map((shade) => (
//                   <motion.div
//                     layout
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     transition={{ duration: 0.3 }}
//                     key={shade.id}
//                   >
//                     <ShadeCard shade={shade} size="md" />
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* SPACE INTERACTIVE SWATCH MAPPER */}
//       <section className="py-24 bg-[#F9F6F0] border-t border-b border-gray-100">
//         <div className="max-w-[1200px] mx-auto px-6">
//           <div className="text-center mb-16">
//             <span className="text-xs uppercase tracking-widest text-gold font-bold mb-2 block">By Space Architecture</span>
//             <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#2D2D2D] tracking-tight">Formulated Tones for Every Room</h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {browseBySpace.map((s) => (
//               <div key={s.space} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
//                 <div className="relative h-48 w-full overflow-hidden shrink-0">
//                   <Image 
//                     src={s.image} 
//                     alt={s.space} 
//                     fill 
//                     sizes="(max-w-768px) 100vw, 25vw"
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                     unoptimized
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
//                   <div className="absolute bottom-4 left-5">
//                     <p className="font-serif text-2xl font-medium text-white tracking-wide">{s.space}</p>
//                   </div>
//                 </div>
//                 <div className="p-6 flex-1 flex flex-col justify-between">
//                   <p className="text-xs md:text-sm text-[#6B6B6B] mb-6 leading-relaxed font-light">{s.desc}</p>
//                   <div>
//                     <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Recommended Swatches</span>
//                     <div className="flex gap-2.5">
//                       {s.shades.map((color, i) => (
//                         <motion.div
//                           key={i}
//                           whileHover={{ y: -4, scale: 1.05 }}
//                           title={`Hex: ${color}`}
//                           className="w-8 h-8 rounded-xl border border-black/5 shadow-sm cursor-help relative group/swatch shrink-0"
//                           style={{ backgroundColor: color }}
//                         >
//                           <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#2D2D2D] text-white text-[9px] rounded font-mono opacity-0 group-hover/swatch:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md z-10">
//                             {color}
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CURATED INSPIRATION IMAGERY GALLERY */}
//       <section className="py-24 bg-white">
//         <div className="max-w-[1200px] mx-auto px-6">
//           <div className="text-center mb-16">
//             <span className="text-xs uppercase tracking-widest text-gold font-bold mb-2 block">Atmosphere Inspiration</span>
//             <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#2D2D2D]">Real Space Transformation Maps</h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {inspirationGallery.map((item) => (
//               <div key={item.label} className="rounded-3xl overflow-hidden relative aspect-[4/5] group shadow-sm hover:shadow-2xl transition-shadow duration-500">
//                 <Image
//                   src={item.image}
//                   alt={item.label}
//                   fill
//                   sizes="(max-w-768px) 100vw, 25vw"
//                   className="object-cover transition-transform duration-700 group-hover:scale-105"
//                   unoptimized
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
//                 <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
//                   <p className="font-serif text-lg font-medium text-white tracking-wide">{item.label}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA INTERACTIVE BLUEPRINT PANEL */}
//       <motion.section 
//         className="py-16 bg-[#F9F6F0]"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="max-w-[900px] mx-auto px-6 text-center bg-[#2D2D2D] rounded-3xl p-12 md:p-16 shadow-xl relative overflow-hidden">
//           <p className="text-xs uppercase tracking-widest text-gold font-bold mb-3">Color Architecture Assistance</p>
//           <h2 className="font-serif text-4xl font-medium text-white mb-4 leading-tight">Can't Decide on Tone Swatches?</h2>
//           <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-8 font-light leading-relaxed">
//             Skip guessing layouts. Our design masters can overlay high-performance physical coat swatches directly onto your properties under exact lighting frameworks.
//           </p>
//           <Link href="/assistance" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F3E7C9] text-[#2D2D2D] rounded-xl font-semibold transition-all hover:scale-[1.02] shadow-md text-sm group">
//             Book Free Color Art Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
//           </Link>
//         </div>
//       </motion.section>

//       <Footer />
//     </div>
//   );
// }


'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Palette, ArrowRight, Phone, Menu, X, Sparkles, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Shade } from '../../lib/supabase';
import { ShadeCard } from '../../components/ShadeCard';
import Image from 'next/image';
import { Footer } from '@/src/components/Footer';

// Consistent brand color maps matching your global design tokens
const BRAND = {
  pink: '#E91E63',
  orange: '#FF5722',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const } }
};

const collectionTypes = [
  { name: 'All Shades', slug: null },
  { name: 'Classic Neutrals', slug: 'Classic Neutrals' },
  { name: 'Ocean Collection', slug: 'Ocean Collection' },
  { name: 'Nature Palette', slug: 'Nature Palette' },
  { name: 'Rich Accents', slug: 'Rich Accents' },
  { name: 'Pastel Dreams', slug: 'Pastel Dreams' },
  { name: 'Sunlight Series', slug: 'Sunlight Series' },
  { name: 'Urban Modern', slug: 'Urban Modern' },
  { name: 'Pure Collection', slug: 'Pure Collection' },
];

const STATIC_SHADES: Shade[] = [
  { id: '1', name: 'Ivory Silk', hex_code: '#FFFFF0', collection: 'Neutrals', collection_type: 'Classic Neutrals', image_url: null, featured: true, display_order: 1, created_at: '' },
  { id: '2', name: 'Warm Sand', hex_code: '#D4B896', collection: 'Neutrals', collection_type: 'Classic Neutrals', image_url: null, featured: true, display_order: 2, created_at: '' },
  { id: '3', name: 'Soft Cashmere', hex_code: '#D1C7BD', collection: 'Neutrals', collection_type: 'Classic Neutrals', image_url: null, featured: true, display_order: 3, created_at: '' },
  { id: '4', name: 'Coastal Blue', hex_code: '#6B8FA3', collection: 'Blues', collection_type: 'Ocean Collection', image_url: null, featured: true, display_order: 4, created_at: '' },
  { id: '5', name: 'Lagoon Teal', hex_code: '#008080', collection: 'Blues', collection_type: 'Ocean Collection', image_url: null, featured: true, display_order: 5, created_at: '' },
  { id: '6', name: 'Evening Sky', hex_code: '#4A5568', collection: 'Blues', collection_type: 'Ocean Collection', image_url: null, featured: false, display_order: 6, created_at: '' },
  { id: '7', name: 'Forest Green', hex_code: '#228B22', collection: 'Greens', collection_type: 'Nature Palette', image_url: null, featured: true, display_order: 7, created_at: '' },
  { id: '8', name: 'Sage Mist', hex_code: '#9DC183', collection: 'Greens', collection_type: 'Nature Palette', image_url: null, featured: false, display_order: 8, created_at: '' },
  { id: '9', name: 'Olive Grove', hex_code: '#808000', collection: 'Greens', collection_type: 'Nature Palette', image_url: null, featured: false, display_order: 9, created_at: '' },
  { id: '10', name: 'Burgundy Wine', hex_code: '#722F37', collection: 'Reds', collection_type: 'Rich Accents', image_url: null, featured: true, display_order: 10, created_at: '' },
  { id: '11', name: 'Terracotta', hex_code: '#E2725B', collection: 'Reds', collection_type: 'Rich Accents', image_url: null, featured: false, display_order: 11, created_at: '' },
  { id: '12', name: 'Coral Sunset', hex_code: '#FF6F61', collection: 'Reds', collection_type: 'Rich Accents', image_url: null, featured: false, display_order: 12, created_at: '' },
  { id: '13', name: 'Lavender Mist', hex_code: '#E6E6FA', collection: 'Purples', collection_type: 'Pastel Dreams', image_url: null, featured: false, display_order: 13, created_at: '' },
  { id: '14', name: 'Muted Plum', hex_code: '#614051', collection: 'Purples', collection_type: 'Pastel Dreams', image_url: null, featured: false, display_order: 14, created_at: '' },
  { id: '15', name: 'Mustard Gold', hex_code: '#FFDB58', collection: 'Yellows', collection_type: 'Sunlight Series', image_url: null, featured: false, display_order: 15, created_at: '' },
  { id: '16', name: 'Soft Peach', hex_code: '#FFDAB9', collection: 'Yellows', collection_type: 'Sunlight Series', image_url: null, featured: false, display_order: 16, created_at: '' },
  { id: '17', name: 'Charcoal Grey', hex_code: '#36454F', collection: 'Greys', collection_type: 'Urban Modern', image_url: null, featured: true, display_order: 17, created_at: '' },
  { id: '18', name: 'Slate Blue', hex_code: '#6A5ACD', collection: 'Greys', collection_type: 'Urban Modern', image_url: null, featured: false, display_order: 18, created_at: '' },
  { id: '19', name: 'Pure White', hex_code: '#FFFFFF', collection: 'Whites', collection_type: 'Pure Collection', image_url: null, featured: true, display_order: 19, created_at: '' },
  { id: '20', name: 'Soft Pearl', hex_code: '#EBF2F2', collection: 'Whites', collection_type: 'Pure Collection', image_url: null, featured: false, display_order: 20, created_at: '' },
];

const browseBySpace = [
  {
    space: 'Living Room',
    desc: 'Warm neutrals and soft blues for inviting spaces',
    shades: ['#D4B896', '#D1C7BD', '#6B8FA3', '#FFFFF0'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
  {
    space: 'Bedroom',
    desc: 'Calming pastels and muted tones for peaceful retreat',
    shades: ['#E6E6FA', '#9DC183', '#EBF2F2', '#D1C7BD'],
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
  },
  {
    space: 'Kitchen',
    desc: 'Fresh whites and subtle colours for any style',
    shades: ['#FFFFFF', '#EBF2F2', '#FFDB58', '#D4B896'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    space: 'Exterior',
    desc: 'Weather-resistant shades for lasting curb appeal',
    shades: ['#FFFFF0', '#36454F', '#E2725B', '#228B22'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
  },
];

const inspirationGallery = [
  { image: '/modernmini.png', label: 'Modern Minimalist' },
  { image: '/warmcontempoary.png', label: 'Warm Contemporary' },
  { image: '/serenebedroom.png', label: 'Serene Bedroom' },
  { image: '/classicinterior.png', label: 'Classic Exterior' },
];

export default function ShadesPage() {
  // const [shades, setShades] = useState<Shade[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const shades = useMemo(() => {
  const filtered = selectedCollection
    ? STATIC_SHADES.filter((shade) => shade.collection_type === selectedCollection)
    : STATIC_SHADES;

  return [...filtered].sort(
    (a, b) => (a.display_order ?? 0) - (b.display_order ?? 0)
  );
}, [selectedCollection]);

  // useEffect(() => {
  //   async function fetchShades() {
  //     try {
  //       setIsLoading(true);
  //       const data = await getShades(selectedCollection || undefined);
  //       setShades(data);
  //     } catch (err) {
  //       console.error('Error fetching shades:', err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchShades();
  // }, [selectedCollection]);

  

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
    <div className="bg-[#FDFBF7] min-h-screen pt-[72px] text-[#2D2D2D] font-sans overflow-x-hidden relative selection:bg-[#F3E7C9]">
      
      {/* GLOBAL BACKGROUND AMBIENT GLOWS */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[5%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px]" style={{ background: `radial-gradient(circle, ${BRAND.pink} 0%, transparent 70%)` }} />
        <div className="absolute top-[40%] -right-[10%] w-[45vw] h-[45vw] rounded-full blur-[120px]" style={{ background: `radial-gradient(circle, ${BRAND.orange} 0%, transparent 70%)` }} />
        <div className="absolute bottom-[20%] left-[5%] w-[40vw] h-[40vw] rounded-full blur-[100px]" style={{ background: `radial-gradient(circle, ${BRAND.pink} 0%, transparent 70%)` }} />
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
                <span className={`transition-colors duration-300 ${navText}`} style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', lineHeight: '0.82', fontWeight: 700, letterSpacing: '-0.055em', textTransform: 'uppercase' }}>
                  COLORSOME
                </span>
                <span className={`transition-colors duration-300 ${navText}`} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.55rem', lineHeight: 1, fontWeight: 700, marginLeft: '0.18rem', marginTop: '0.12rem', letterSpacing: '0.04em' }}>
                  R
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-1 rounded-full border border-[#EDE6DA]/50 bg-white/60 backdrop-blur-md px-2 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
              {[['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => {
                const isActive = label === 'Shades';
                return (
                  <Link
                    key={label}
                    href={href}
                    className={`relative rounded-full px-4 py-2.5 transition-all duration-200 ${isActive ? 'text-[#2D2D2D] bg-[#F3E7C9] font-semibold' : `${navMuted} hover:text-[#2D2D2D] hover:bg-black/[0.03] font-medium`}`}
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', letterSpacing: '-0.01em', lineHeight: 1 }}
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
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#EDE6DA]/40 shadow-xl px-6 py-4 space-y-3 font-inter">
              {[ ['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact'] ].map(([label, href]) => (
                <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-charcoal hover:text-orange-500 transition-colors py-2 border-b border-gray-50 font-inter">
                  {label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO TITLE BLOCK - Split Layout with Product Render */}
      <section className="py-20 bg-white/40 backdrop-blur-sm border-b border-[#EDE6DA]/50 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div className="lg:col-span-7" initial="hidden" animate="visible" variants={fadeInUp}>
               <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark font-semibold text-xs tracking-wider uppercase px-3 py-1 rounded-full mb-5">
                 <Sparkles className="w-3.5 h-3.5 text-gold" /> Master Swatches
               </div>
               <span className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Architectural Palettes</span>
              
               {/* FIXED TEXT BUG: Removed transparent bg-clip-text that washed out on white backgrounds */}
               {/* <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#2D2D2D] mb-6 leading-[1.1] font-light"> */}
               <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal mb-6 leading-none tracking-tight">
                 Find Your Perfect <br />
                 {/* <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-gold to-amber-900 drop-shadow-sm"> */}
                 <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                   Architectural Tone
                 </span>
               </h1>
              
               <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed max-w-xl font-light">
                 Explore our curated collections. From highly sophisticated neutrals to dramatic, modern statement accents, uncover tones precisely formulated to command lighting.
               </p>
             </motion.div>

            {/* Right Column: Premium Paint Cans Render */}
            <motion.div 
              className="lg:col-span-5 relative flex justify-center"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F3E7C9]/40 via-transparent to-transparent rounded-3xl blur-2xl -z-10 transform scale-90" />
              
              <div className="relative rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#EDE6DA] overflow-hidden aspect-square w-full max-w-[440px] bg-white group">
                <Image
                  src="/shadesImg.png"
                  alt="Colorsome premium paint can lineup showcase"
                  fill
                  priority
                  sizes="(max-w-1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STICKY COLLECTION FILTERS */}
      <section className="bg-[#2D2D2D] py-4 sticky top-[72px] z-40 shadow-lg border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center gap-4">
          <div className="text-white/40 border-r border-white/10 pr-3 hidden sm:flex items-center gap-1.5 shrink-0 font-inter">
            <SlidersHorizontal className="w-4 h-4 text-orange-400" />
            <span className="text-[10px] uppercase font-black tracking-widest text-gray-300">Filters</span>
          </div>
          <div className="flex items-center overflow-x-auto gap-2 scrollbar-hide flex-1 py-0.5 font-inter">
            {collectionTypes.map((c) => {
              const isSelected = selectedCollection === c.slug;
              return (
                <button
                  key={c.name}
                  onClick={() => setSelectedCollection(c.slug)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#F3E7C9] text-[#2D2D2D] shadow-sm scale-[1.02]'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {c.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SHADES INTERACTIVE ENGINE GRID */}
      <section className="py-16 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#EDE6DA]/60 font-inter">
            <p className="text-sm font-medium text-charcoal-muted">
              Showing <span className="text-charcoal font-bold">{shades.length}</span> signature shade{shades.length !== 1 ? 's' : ''}
            </p>
            <Link href="/assistance" className="text-xs font-black text-orange-500 uppercase tracking-widest hover:text-pink-600 flex items-center gap-1.5 group transition-colors">
              <Palette className="w-4 h-4" /> Need matching advice? <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* <AnimatePresence mode="popLayout">
            {isLoading ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-32 flex flex-col items-center justify-center w-full gap-3 font-inter"
              >
                <Loader className="w-6 h-6 text-orange-500 animate-spin" />
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Loading tonal spectrum...</p>
              </motion.div>
            ) : shades.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-32 text-center max-w-md mx-auto font-inter"
              >
                <Palette className="w-10 h-10 text-gray-300 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-1 text-charcoal">No Swatches Found</h3>
                <p className="text-xs text-charcoal-muted leading-relaxed font-normal">We couldn't locate active shades matching this database filter. Try switching back to All Shades.</p>
              </motion.div>
            ) : (
              <motion.div 
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {shades.map((shade) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={shade.id}
                  >
                    <ShadeCard shade={shade} size="md" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence> */}
          <AnimatePresence mode="popLayout">
  {shades.length === 0 ? (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-32 text-center max-w-md mx-auto font-inter"
    >
      <Palette className="w-10 h-10 text-gray-300 mx-auto mb-4" />
      <h3 className="font-serif text-2xl font-bold mb-1 text-charcoal">No Swatches Found</h3>
      <p className="text-xs text-charcoal-muted leading-relaxed font-normal">
        No shades match this collection right now. Try switching back to All Shades.
      </p>
    </motion.div>
  ) : (
    <motion.div
      layout
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
    >
      {shades.map((shade) => (
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          key={shade.id}
        >
          <ShadeCard shade={shade} size="md" />
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>
        </div>
      </section>

      {/* SPACE INTERACTIVE SWATCH MAPPER */}
      <section className="py-24 bg-[#FDFBF7]/40 border-t border-b border-[#EDE6DA]/50 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-pink-600 font-black font-inter mb-2 block">By Space Architecture</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal tracking-tight">Formulated Tones for Every Room</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {browseBySpace.map((s) => (
              <div key={s.space} className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#EDE6DA]/60 flex flex-col justify-between group hover:shadow-xl hover:border-orange-200/60 hover:bg-white transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden shrink-0">
                  <Image 
                    src={s.image} 
                    alt={s.space} 
                    fill 
                    sizes="(max-w-768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-5">
                    <p className="font-serif text-2xl font-bold text-white tracking-wide">{s.space}</p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between font-inter">
                  <p className="text-xs sm:text-sm text-charcoal-muted mb-6 leading-relaxed font-normal tracking-wide">{s.desc}</p>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-2.5">Recommended Swatches</span>
                    <div className="flex gap-2.5">
                      {s.shades.map((color, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -4, scale: 1.05 }}
                          title={`Hex: ${color}`}
                          className="w-8 h-8 rounded-xl border border-black/5 shadow-sm cursor-help relative group/swatch shrink-0"
                          style={{ backgroundColor: color }}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#2D2D2D] text-white text-[9px] rounded font-mono opacity-0 group-hover/swatch:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md z-10">
                            {color}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURATED INSPIRATION IMAGERY GALLERY */}
      <section className="py-24 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-orange-500 font-black font-inter mb-2 block">Atmosphere Inspiration</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal tracking-tight">Real Space Transformation Maps</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspirationGallery.map((item) => (
              <div key={item.label} className="rounded-3xl overflow-hidden border border-[#EDE6DA]/40 relative aspect-[4/5] group shadow-sm hover:shadow-2xl transition-all duration-500">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-w-768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <p className="font-serif text-lg font-bold text-white tracking-wide">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERACTIVE BLUEPRINT PANEL */}
      <section className="py-12 max-w-[1280px] mx-auto px-6">
        <motion.div 
          className="max-w-[1000px] mx-auto text-center bg-[#2D2D2D] rounded-3xl p-12 sm:p-16 shadow-2xl relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Embedded accent glows mapping the background elements */}
          <div className="absolute inset-0 -z-0 opacity-10 pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[80px]" style={{ background: BRAND.pink }} />
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[80px]" style={{ background: BRAND.orange }} />
          </div>

          <p className="text-[10px] uppercase tracking-[0.25em] text-orange-400 font-black font-inter mb-3 relative z-10">Color Architecture Assistance</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-none max-w-2xl mx-auto relative z-10">Can't Decide on Tone Swatches?</h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed font-inter font-normal tracking-wide relative z-10">
            Skip guessing layouts. Our design masters can overlay high-performance physical coat swatches directly onto your properties under exact lighting frameworks.
          </p>
          
          <div className="relative z-10 max-w-md mx-auto font-inter">
            <Link href="/assistance" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F3E7C9] text-[#2D2D2D] rounded-xl text-xs uppercase tracking-widest font-black transition-all shadow-md hover:shadow-xl hover:bg-[#ebdcb4] group">
              Book Free Color Art Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}