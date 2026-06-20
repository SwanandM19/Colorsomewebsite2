// "use client";

// import React, { useEffect } from 'react';
// // import { Icon } from '@iconify-icon/react';
// import { ArrowRight, CheckCircle } from "lucide-react";
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound, useParams } from 'next/navigation';

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   fullDescription: string;
//   status: string;
//   image: string;
//   category: string;
//   features: string[];
//   applications: string[];
//   slug: string;
//   technicalSpecs?: {
//     coverage?: string;
//     dryingTime?: string;
//     finish?: string;
//     application?: string;
//   };
// }

// // This would ideally come from a database or API
// const productsData: Product[] = [
//   {
//     id: "01",
//     name: "Axis Weather Coat",
//     description: "Precision-engineered protective coating for extreme environmental conditions.",
//     fullDescription: "Axis Weather Coat is a premium protective coating engineered to withstand extreme weather conditions, UV radiation, and chemical exposure. Ideal for industrial and marine applications.",
//     status: "Active",
//     image: "/Axis_Weather_Coat.png",
//     category: "Protective Coatings",
//     features: ["UV Resistant", "Chemical Resistant", "Weather Proof", "Long-lasting Durability"],
//     applications: ["Industrial Equipment", "Marine Vessels", "Outdoor Structures", "Pipeline Protection"],
//     slug: "axis-weather-coat"
//   },
//   {
//     id: "02",
//     name: "Ara Weather Coat",
//     description: "Advanced reactive armor system designed for durability and performance.",
//     fullDescription: "Ara Weather Coat features advanced reactive technology that adapts to environmental conditions, providing superior protection against corrosion and wear.",
//     status: "Active",
//     image: "/Ara_Weather_Coat.png",
//     category: "Protective Coatings",
//     features: ["Self-healing Properties", "Anti-corrosion", "Temperature Resistant", "Flexible Application"],
//     applications: ["Automotive", "Aerospace", "Heavy Machinery", "Infrastructure"],
//     slug: "ara-weather-coat"
//   },
//   {
//     id: "03",
//     name: "Tough Tex",
//     description: "Industrial-grade textile technology for maximum resilience and flexibility.",
//     fullDescription: "Tough Tex is an industrial-grade textile coating that combines maximum resilience with flexibility, perfect for high-wear applications.",
//     status: "Active",
//     image: "/Tough_Tex.png",
//     category: "Industrial Textiles",
//     features: ["Tear Resistant", "Waterproof", "Breathable", "High Tensile Strength"],
//     applications: ["Protective Gear", "Industrial Covers", "Tarpaulins", "Tents"],
//     slug: "tough-tex"
//   },
//   {
//     id: "04",
//     name: "CRUX SUPRA Fine Finish Wall Putty",
//     description: "Premium fine finish wall putty for smooth, flawless surfaces.",
//     fullDescription: "CRUX SUPRA Fine Finish Wall Putty provides an ultra-smooth base for premium paints, ensuring perfect wall finishing with superior adhesion.",
//     status: "Active",
//     image: "/CRUX_SUPRA_Fine_Finish_Wall_Putty.png",
//     category: "Wall Finishes",
//     features: ["Smooth Finish", "Excellent Adhesion", "Crack Resistant", "Easy Application"],
//     applications: ["Interior Walls", "Exterior Walls", "Commercial Spaces", "Residential Projects"],
//     slug: "crux-supra-fine-finish"
//   },
//   {
//     id: "05",
//     name: "CRUX Coarse Finish Wall Putty",
//     description: "Rugged wall putty for textured finishes and surface leveling.",
//     fullDescription: "CRUX Coarse Finish Wall Putty is designed for surface leveling and creating textured finishes on both interior and exterior walls.",
//     status: "Active",
//     image: "/CRUX_Coarse_Finish_Wall_Putty.png",
//     category: "Wall Finishes",
//     features: ["Excellent Coverage", "Surface Leveling", "Textured Finish", "Durable"],
//     applications: ["Exterior Walls", "Textured Finishes", "Repair Work", "Surface Preparation"],
//     slug: "crux-coarse-finish"
//   },
//   {
//     id: "06",
//     name: "Buildwell Ready-Mix Plaster",
//     description: "Pre-mixed plaster solution for efficient construction.",
//     fullDescription: "Buildwell Ready-Mix Plaster is a factory-mixed plaster that ensures consistent quality and reduces on-site labor requirements.",
//     status: "Active",
//     image: "/Buildwell_Reay-Mix_Plaster.png",
//     category: "Construction Materials",
//     features: ["Consistent Quality", "Time Saving", "Reduced Waste", "Superior Bonding"],
//     applications: ["Interior Walls", "Exterior Walls", "Ceilings", "Renovation Projects"],
//     slug: "buildwell-ready-mix-plaster"
//   },
//   {
//     id: "07",
//     name: "Glossmate Enamel Paint",
//     description: "High-gloss enamel paint for brilliant, long-lasting finish.",
//     fullDescription: "Glossmate Enamel Paint delivers a brilliant, high-gloss finish that resists yellowing and maintains its shine for years.",
//     status: "Active",
//     image: "/Glossmate_Enamel_Paint.png",
//     category: "Decorative Paints",
//     features: ["High Gloss Finish", "Scratch Resistant", "Easy Cleaning", "Weather Resistant"],
//     applications: ["Metal Surfaces", "Wood Work", "Furniture", "Doors & Windows"],
//     slug: "glossmate-enamel"
//   },
//   {
//     id: "08",
//     name: "Uniprime Ext",
//     description: "Premium exterior primer for superior paint adhesion.",
//     fullDescription: "Uniprime Ext is a high-performance exterior primer that ensures superior paint adhesion and protects against weathering.",
//     status: "Active",
//     image: "/Uniprime_Ext.png",
//     category: "Primers",
//     features: ["Superior Adhesion", "Alkali Resistant", "Weather Protection", "Seals Surfaces"],
//     applications: ["Exterior Walls", "Concrete Surfaces", "Plastered Walls", "Masonry"],
//     slug: "uniprime-ext"
//   },
//   {
//     id: "09",
//     name: "Uniprime",
//     description: "Versatile primer for interior and exterior applications.",
//     fullDescription: "Uniprime is a versatile all-purpose primer that prepares surfaces for optimal paint adhesion and uniform finish.",
//     status: "Active",
//     image: "/Uniprime.png",
//     category: "Primers",
//     features: ["All-purpose", "Quick Drying", "Excellent Adhesion", "Seals Porous Surfaces"],
//     applications: ["Interior Walls", "Exterior Walls", "Wood", "Metal"],
//     slug: "uniprime"
//   },
//   {
//     id: "10",
//     name: "Jet Emulsion",
//     description: "Smooth emulsion paint for elegant interior finishes.",
//     fullDescription: "Jet Emulsion provides a smooth, elegant finish for interior walls with excellent washability and color retention.",
//     status: "Active",
//     image: "/Jet_Emulsion.png",
//     category: "Emulsion Paints",
//     features: ["Smooth Finish", "Washable", "Color Retention", "Low VOC"],
//     applications: ["Living Rooms", "Bedrooms", "Offices", "Hotels"],
//     slug: "jet-emulsion"
//   },
//   {
//     id: "11",
//     name: "Metalock Yellow Pro",
//     description: "Professional grade yellow metal coating for industrial use.",
//     fullDescription: "Metalock Yellow Pro is a professional-grade coating specifically formulated for metal surfaces requiring high visibility and protection.",
//     status: "Active",
//     image: "/Metalock_Yellow_Pro.png",
//     category: "Industrial Coatings",
//     features: ["High Visibility", "Corrosion Resistant", "UV Stable", "Industrial Grade"],
//     applications: ["Safety Equipment", "Industrial Machinery", "Markings", "Heavy Equipment"],
//     slug: "metalock-yellow-pro"
//   },
//   {
//     id: "12",
//     name: "Metalock Yellow",
//     description: "Standard yellow metal coating for general applications.",
//     fullDescription: "Metalock Yellow provides reliable protection and high-visibility finish for general metal coating applications.",
//     status: "Active",
//     image: "/Metalock_Yellow.png",
//     category: "Industrial Coatings",
//     features: ["Durable Finish", "Good Coverage", "Weather Resistant", "Easy Application"],
//     applications: ["Metal Structures", "Pipes", "Equipment", "General Metal Work"],
//     slug: "metalock-yellow"
//   },
//   {
//     id: "13",
//     name: "Metalock Red Pro",
//     description: "Premium red industrial coating for heavy-duty applications.",
//     fullDescription: "Metalock Red Pro delivers superior protection and high-visibility red finish for heavy-duty industrial applications.",
//     status: "Active",
//     image: "/Metalock_Red_Pro.png",
//     category: "Industrial Coatings",
//     features: ["Heavy-duty Protection", "Chemical Resistant", "High Visibility", "Long-lasting"],
//     applications: ["Fire Safety Equipment", "Heavy Machinery", "Industrial Piping", "Warning Markings"],
//     slug: "metalock-red-pro"
//   },
//   {
//     id: "14",
//     name: "Metalock Red",
//     description: "Standard red metal coating for general industrial use.",
//     fullDescription: "Metalock Red offers reliable protection and standard red finish for general industrial metal coating requirements.",
//     status: "Active",
//     image: "/Metalock_Red.png",
//     category: "Industrial Coatings",
//     features: ["Good Adhesion", "Weather Resistant", "Economical", "Easy to Apply"],
//     applications: ["General Metal Surfaces", "Maintenance Work", "Repairs", "Touch-ups"],
//     slug: "metalock-red"
//   },
//   {
//     id: "15",
//     name: "Oil Paint Premium",
//     description: "Premium oil-based paint for superior finish and durability.",
//     fullDescription: "Oil Paint Premium delivers a superior, durable finish with excellent flow and leveling properties for professional results.",
//     status: "Active",
//     image: "/Oil_Paint_premium.png",
//     category: "Oil Paints",
//     features: ["Superior Flow", "Excellent Durability", "High Gloss Option", "Smooth Finish"],
//     applications: ["Fine Woodwork", "Furniture", "Decorative Surfaces", "Artistic Projects"],
//     slug: "oil-paint-premium"
//   },
//   {
//     id: "16",
//     name: "Eco Acrylic Distemper",
//     description: "Eco-friendly acrylic distemper for interior walls.",
//     fullDescription: "Eco Acrylic Distemper is an environmentally friendly, water-based distemper perfect for interior walls with excellent coverage.",
//     status: "Active",
//     image: "/Eco_Acrylic_Distemper.png",
//     category: "Distempers",
//     features: ["Eco-friendly", "Water-based", "Excellent Coverage", "Breathable Finish"],
//     applications: ["Interior Walls", "Ceilings", "Low-traffic Areas", "Residential Spaces"],
//     slug: "eco-acrylic-distemper"
//   },
//   {
//     id: "17",
//     name: "Decorx Acrylic Distemper",
//     description: "Decorative acrylic distemper for enhanced interior aesthetics.",
//     fullDescription: "Decorx Acrylic Distemper combines decorative appeal with durable protection for enhanced interior wall aesthetics.",
//     status: "Active",
//     image: "/Decorx_Acrylic_Distemper.png",
//     category: "Distempers",
//     features: ["Decorative Finish", "Durable", "Easy Application", "Good Coverage"],
//     applications: ["Interior Decoration", "Feature Walls", "Commercial Spaces", "Hospitality"],
//     slug: "decorx-acrylic-distemper"
//   },
//   {
//     id: "18",
//     name: "Aquaris Supra",
//     description: "Premium waterproofing solution for superior protection.",
//     fullDescription: "Aquaris Supra provides premium waterproofing protection for roofs, terraces, and other exposed surfaces.",
//     status: "Active",
//     image: "/Aquaris_Supra.png",
//     category: "Waterproofing",
//     features: ["Superior Waterproofing", "Elastic Properties", "UV Resistant", "Long-lasting"],
//     applications: ["Roofs", "Terraces", "Balconies", "Water Tanks"],
//     slug: "aquaris-supra"
//   },
//   {
//     id: "19",
//     name: "Aquaproof",
//     description: "Reliable waterproofing compound for construction.",
//     fullDescription: "Aquaproof is a reliable waterproofing compound that provides effective protection against water ingress in construction projects.",
//     status: "Active",
//     image: "/Aquaproof.png",
//     category: "Waterproofing",
//     features: ["Effective Protection", "Easy Application", "Cost-effective", "Versatile Use"],
//     applications: ["Basements", "Bathrooms", "Wet Areas", "Foundation Walls"],
//     slug: "aquaproof"
//   },
//   {
//     id: "20",
//     name: "Decorprime",
//     description: "High-performance decorative primer for premium finishes.",
//     fullDescription: "Decorprime is a high-performance primer that ensures premium decorative finishes with enhanced durability and adhesion.",
//     status: "Active",
//     image: "/Decorprime.png",
//     category: "Primers",
//     features: ["Premium Finish", "Enhanced Adhesion", "Seals Surfaces", "Quick Drying"],
//     applications: ["Premium Interiors", "Decorative Projects", "High-end Finishes", "Architectural Work"],
//     slug: "decorprime"
//   },
//   {
//     id: "21",
//     name: "DuraGuard Exterior",
//     description: "Heavy-duty exterior paint for maximum protection.",
//     fullDescription: "DuraGuard Exterior provides maximum protection against harsh weather conditions with exceptional durability and color retention.",
//     status: "Active",
//     image: "/DuraGuard_Exterior.png",
//     category: "Exterior Paints",
//     features: ["Maximum Protection", "Weather Resistant", "Color Retention", "Anti-fungal"],
//     applications: ["Exterior Walls", "Facades", "Boundary Walls", "Commercial Buildings"],
//     slug: "duraguard-exterior"
//   },
//   {
//     id: "22",
//     name: "DuraGuard Interior",
//     description: "Durable interior paint for high-traffic areas.",
//     fullDescription: "DuraGuard Interior offers exceptional durability for high-traffic interior areas while maintaining an elegant finish.",
//     status: "Active",
//     image: "/DuraGuard_Interior.png",
//     category: "Interior Paints",
//     features: ["Scrub Resistant", "Stain Resistant", "Easy Cleaning", "Durable Finish"],
//     applications: ["Hallways", "Corridors", "Kitchens", "High-traffic Areas"],
//     slug: "duraguard-interior"
//   },
//   {
//     id: "23",
//     name: "Eva Emulsion",
//     description: "Smooth emulsion with excellent coverage properties.",
//     fullDescription: "Eva Emulsion delivers smooth, even coverage with excellent hiding power and a elegant matte finish.",
//     status: "Active",
//     image: "/Eva_Emulsion.png",
//     category: "Emulsion Paints",
//     features: ["Excellent Coverage", "Smooth Finish", "Matte Appearance", "Good Hiding Power"],
//     applications: ["Interior Walls", "Ceilings", "Bedrooms", "Living Areas"],
//     slug: "eva-emulsion"
//   },
//   {
//     id: "24",
//     name: "Zodiac Emulsion",
//     description: "Premium emulsion for luxurious interior finishes.",
//     fullDescription: "Zodiac Emulsion provides a luxurious, premium finish for discerning interior design projects requiring exceptional quality.",
//     status: "Active",
//     image: "/Zodiac_Emulsion.png",
//     category: "Emulsion Paints",
//     features: ["Luxurious Finish", "Premium Quality", "Excellent Durability", "Rich Colors"],
//     applications: ["Luxury Homes", "Premium Offices", "Hotels", "Showrooms"],
//     slug: "zodiac-emulsion"
//   }
// ];

// export default function ProductDetailPage() {
//   const params = useParams();
//   const slug = params.slug as string;
//   const product = productsData.find((p) => p.slug === slug);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [slug]);

//   if (!product) {
//     notFound();
//   }

//   return (
//     <main className="flex-1 w-full flex flex-col relative z-10">

//       {/* Hero Section */}
//       <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-16 md:pb-24 border-b border-gray-200">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
//           <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-1">
//             <Link href={`/labs#product-${product.slug}`} className="text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2 group mb-6 md:mb-0">
//               {/* <iconify-icon icon="solar:arrow-left-linear" width="14" className="transition-transform group-hover:-translate-x-1" /> */}
//                 <ArrowRight size={14} className="rotate-180 text-gray-400 transition-transform group-hover:-translate-x-1" />
//               Back to Labs
//             </Link>
//           </div>

//           <div className="col-span-1 md:col-span-9 order-1 md:order-2">
//             <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
//               {product.category}
//             </p>
//             <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-medium tracking-tighter leading-[0.85] text-gray-900 mb-6">
//               {product.name}
//             </h1>
//             <p className="text-lg text-gray-500 max-w-2xl leading-relaxed font-medium">
//               {product.description}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Product Details */}
//       <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

//           {/* Left Column - Image */}
//           <div className="col-span-1 lg:col-span-6">
//             <div className="sticky top-32">
//               <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 border border-gray-200">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Details */}
//           <div className="col-span-1 lg:col-span-6">
//             <div className="flex flex-col gap-12">

//               {/* Full Description */}
//               <div>
//                 <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Description</h2>
//                 <p className="text-gray-600 leading-relaxed">
//                   {product.fullDescription}
//                 </p>
//               </div>

//               {/* Technical Specifications */}
//               {product.technicalSpecs && (
//                 <div>
//                   <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Technical Specifications</h2>
//                   <div className="space-y-3">
//                     {product.technicalSpecs.coverage && (
//                       <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
//                         <span className="text-sm text-gray-500">Coverage</span>
//                         <span className="text-sm text-gray-900 font-medium">{product.technicalSpecs.coverage}</span>
//                       </div>
//                     )}
//                     {product.technicalSpecs.dryingTime && (
//                       <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
//                         <span className="text-sm text-gray-500">Drying Time</span>
//                         <span className="text-sm text-gray-900 font-medium">{product.technicalSpecs.dryingTime}</span>
//                       </div>
//                     )}
//                     {product.technicalSpecs.finish && (
//                       <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
//                         <span className="text-sm text-gray-500">Finish</span>
//                         <span className="text-sm text-gray-900 font-medium">{product.technicalSpecs.finish}</span>
//                       </div>
//                     )}
//                     {product.technicalSpecs.application && (
//                       <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
//                         <span className="text-sm text-gray-500">Application Method</span>
//                         <span className="text-sm text-gray-900 font-medium">{product.technicalSpecs.application}</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Key Features */}
//               <div>
//                 <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Key Features</h2>
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   {product.features.map((feature, index) => (
//                     <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
//                       <CheckCircle size={16} className="text-green-500" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Applications */}
//               <div>
//                 <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Applications</h2>
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   {product.applications.map((application, index) => (
//                     <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
//                       {/* <iconify-icon icon="solar:buildings-linear" width="16" className="text-gray-400" /> */}
//                       {application}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* CTA */}
//               <div className="mt-8 pt-8 border-t border-gray-200">
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white hover:bg-black transition-all duration-300 text-sm font-medium tracking-wide outline-none group"
//                 >
//                   Request a Quote
//                   <ArrowRight size={18} />
//                 </Link>
//               </div>

//             </div>
//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }

// 'use client';

// import React, { useEffect } from 'react';
// import { ArrowRight, CheckCircle, Tag, Layers } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound, useParams } from 'next/navigation';
// import { products } from '../data';
// import type { Product } from '../data';

// // interface Product {
// //   id: string;
// //   name: string;
// //   description: string;
// //   fullDescription: string;
// //   status: string;
// //   image: string;
// //   category: string;
// //   features: string[];
// //   applications: string[];
// //   slug: string;
// //   technicalSpecs?: {
// //     coverage?: string;
// //     dryingTime?: string;
// //     finish?: string;
// //     application?: string;
// //   };
// // }

// // const productsData: Product[] = [
// //   { id: "01", name: "Axis Weather Coat", description: "Precision-engineered protective coating for extreme environmental conditions.", fullDescription: "Axis Weather Coat is a premium protective coating engineered to withstand extreme weather conditions, UV radiation, and chemical exposure. Ideal for industrial and marine applications.", status: "Active", image: "/AxisWeatherC.png", category: "Protective Coatings", features: ["UV Resistant", "Chemical Resistant", "Weather Proof", "Long-lasting Durability"], applications: ["Industrial Equipment", "Marine Vessels", "Outdoor Structures", "Pipeline Protection"], slug: "axis-weather-coat" },
// //   { id: "02", name: "Ara Weather Coat", description: "Advanced reactive armor system designed for durability and performance.", fullDescription: "Ara Weather Coat features advanced reactive technology that adapts to environmental conditions, providing superior protection against corrosion and wear.", status: "Active", image: "/AraWeather.png", category: "Protective Coatings", features: ["Self-healing Properties", "Anti-corrosion", "Temperature Resistant", "Flexible Application"], applications: ["Automotive", "Aerospace", "Heavy Machinery", "Infrastructure"], slug: "ara-weather-coat" },
// //   { id: "03", name: "Tough Tex", description: "Industrial-grade textile technology for maximum resilience and flexibility.", fullDescription: "Tough Tex is an industrial-grade textile coating that combines maximum resilience with flexibility, perfect for high-wear applications.", status: "Active", image: "/Tough_Tex.png", category: "Industrial Textiles", features: ["Tear Resistant", "Waterproof", "Breathable", "High Tensile Strength"], applications: ["Protective Gear", "Industrial Covers", "Tarpaulins", "Tents"], slug: "tough-tex" },
// //   { id: "04", name: "CRUX SUPRA Fine Finish Wall Putty", description: "Premium fine finish wall putty for smooth, flawless surfaces.", fullDescription: "CRUX SUPRA Fine Finish Wall Putty provides an ultra-smooth base for premium paints, ensuring perfect wall finishing with superior adhesion.", status: "Active", image: "/CRUX_SUPRA_Fine_Finish_Wall_Putty.png", category: "Wall Finishes", features: ["Smooth Finish", "Excellent Adhesion", "Crack Resistant", "Easy Application"], applications: ["Interior Walls", "Exterior Walls", "Commercial Spaces", "Residential Projects"], slug: "crux-supra-fine-finish" },
// //   { id: "05", name: "CRUX Coarse Finish Wall Putty", description: "Rugged wall putty for textured finishes and surface leveling.", fullDescription: "CRUX Coarse Finish Wall Putty is designed for surface leveling and creating textured finishes on both interior and exterior walls.", status: "Active", image: "/CRUX_Coarse_Finish_Wall_Putty.png", category: "Wall Finishes", features: ["Excellent Coverage", "Surface Leveling", "Textured Finish", "Durable"], applications: ["Exterior Walls", "Textured Finishes", "Repair Work", "Surface Preparation"], slug: "crux-coarse-finish" },
// //   { id: "06", name: "Buildwell Ready-Mix Plaster", description: "Pre-mixed plaster solution for efficient construction.", fullDescription: "Buildwell Ready-Mix Plaster is a factory-mixed plaster that ensures consistent quality and reduces on-site labor requirements.", status: "Active", image: "/Buildwell_Reay-Mix_Plaster.png", category: "Construction Materials", features: ["Consistent Quality", "Time Saving", "Reduced Waste", "Superior Bonding"], applications: ["Interior Walls", "Exterior Walls", "Ceilings", "Renovation Projects"], slug: "buildwell-ready-mix-plaster" },
// //   { id: "07", name: "Glossmate Enamel Paint", description: "High-gloss enamel paint for brilliant, long-lasting finish.", fullDescription: "Glossmate Enamel Paint delivers a brilliant, high-gloss finish that resists yellowing and maintains its shine for years.", status: "Active", image: "/Glossmate_Enamel_Paint.png", category: "Decorative Paints", features: ["High Gloss Finish", "Scratch Resistant", "Easy Cleaning", "Weather Resistant"], applications: ["Metal Surfaces", "Wood Work", "Furniture", "Doors & Windows"], slug: "glossmate-enamel" },
// //   { id: "08", name: "Uniprime Ext", description: "Premium exterior primer for superior paint adhesion.", fullDescription: "Uniprime Ext is a high-performance exterior primer that ensures superior paint adhesion and protects against weathering.", status: "Active", image: "/Uniprime_Ext.png", category: "Primers", features: ["Superior Adhesion", "Alkali Resistant", "Weather Protection", "Seals Surfaces"], applications: ["Exterior Walls", "Concrete Surfaces", "Plastered Walls", "Masonry"], slug: "uniprime-ext" },
// //   { id: "09", name: "Uniprime", description: "Versatile primer for interior and exterior applications.", fullDescription: "Uniprime is a versatile all-purpose primer that prepares surfaces for optimal paint adhesion and uniform finish.", status: "Active", image: "/Uniprime.png", category: "Primers", features: ["All-purpose", "Quick Drying", "Excellent Adhesion", "Seals Porous Surfaces"], applications: ["Interior Walls", "Exterior Walls", "Wood", "Metal"], slug: "uniprime" },
// //   { id: "10", name: "Jet Emulsion", description: "Smooth emulsion paint for elegant interior finishes.", fullDescription: "Jet Emulsion provides a smooth, elegant finish for interior walls with excellent washability and color retention.", status: "Active", image: "/JetEmu.png", category: "Emulsion Paints", features: ["Smooth Finish", "Washable", "Color Retention", "Low VOC"], applications: ["Living Rooms", "Bedrooms", "Offices", "Hotels"], slug: "jet-emulsion" },
// //   { id: "11", name: "Metalock Yellow Pro", description: "Professional grade yellow metal coating for industrial use.", fullDescription: "Metalock Yellow Pro is a professional-grade coating specifically formulated for metal surfaces requiring high visibility and protection.", status: "Active", image: "/Metalock_Yellow_Pro.png", category: "Industrial Coatings", features: ["High Visibility", "Corrosion Resistant", "UV Stable", "Industrial Grade"], applications: ["Safety Equipment", "Industrial Machinery", "Markings", "Heavy Equipment"], slug: "metalock-yellow-pro" },
// //   { id: "12", name: "Metalock Yellow", description: "Standard yellow metal coating for general applications.", fullDescription: "Metalock Yellow provides reliable protection and high-visibility finish for general metal coating applications.", status: "Active", image: "/Metalock_Yellow.png", category: "Industrial Coatings", features: ["Durable Finish", "Good Coverage", "Weather Resistant", "Easy Application"], applications: ["Metal Structures", "Pipes", "Equipment", "General Metal Work"], slug: "metalock-yellow" },
// //   { id: "13", name: "Metalock Red Pro", description: "Premium red industrial coating for heavy-duty applications.", fullDescription: "Metalock Red Pro delivers superior protection and high-visibility red finish for heavy-duty industrial applications.", status: "Active", image: "/Metalock_Red_Pro.png", category: "Industrial Coatings", features: ["Heavy-duty Protection", "Chemical Resistant", "High Visibility", "Long-lasting"], applications: ["Fire Safety Equipment", "Heavy Machinery", "Industrial Piping", "Warning Markings"], slug: "metalock-red-pro" },
// //   { id: "14", name: "Metalock Red", description: "Standard red metal coating for general industrial use.", fullDescription: "Metalock Red offers reliable protection and standard red finish for general industrial metal coating requirements.", status: "Active", image: "/Metalock_Red.png", category: "Industrial Coatings", features: ["Good Adhesion", "Weather Resistant", "Economical", "Easy to Apply"], applications: ["General Metal Surfaces", "Maintenance Work", "Repairs", "Touch-ups"], slug: "metalock-red" },
// //   { id: "15", name: "Oil Paint Premium", description: "Premium oil-based paint for superior finish and durability.", fullDescription: "Oil Paint Premium delivers a superior, durable finish with excellent flow and leveling properties for professional results.", status: "Active", image: "/Oil_Paint_premium.png", category: "Oil Paints", features: ["Superior Flow", "Excellent Durability", "High Gloss Option", "Smooth Finish"], applications: ["Fine Woodwork", "Furniture", "Decorative Surfaces", "Artistic Projects"], slug: "oil-paint-premium" },
// //   { id: "16", name: "Eco Acrylic Distemper", description: "Eco-friendly acrylic distemper for interior walls.", fullDescription: "Eco Acrylic Distemper is an environmentally friendly, water-based distemper perfect for interior walls with excellent coverage.", status: "Active", image: "/Eco_Acrylic_Distemper.png", category: "Distempers", features: ["Eco-friendly", "Water-based", "Excellent Coverage", "Breathable Finish"], applications: ["Interior Walls", "Ceilings", "Low-traffic Areas", "Residential Spaces"], slug: "eco-acrylic-distemper" },
// //   { id: "17", name: "Decorx Acrylic Distemper", description: "Decorative acrylic distemper for enhanced interior aesthetics.", fullDescription: "Decorx Acrylic Distemper combines decorative appeal with durable protection for enhanced interior wall aesthetics.", status: "Active", image: "/Decorx_Acrylic_Distemper.png", category: "Distempers", features: ["Decorative Finish", "Durable", "Easy Application", "Good Coverage"], applications: ["Interior Decoration", "Feature Walls", "Commercial Spaces", "Hospitality"], slug: "decorx-acrylic-distemper" },
// //   { id: "18", name: "Aquaris Supra", description: "Premium waterproofing solution for superior protection.", fullDescription: "Aquaris Supra provides premium waterproofing protection for roofs, terraces, and other exposed surfaces.", status: "Active", image: "/Aquaris_Supra.png", category: "Waterproofing", features: ["Superior Waterproofing", "Elastic Properties", "UV Resistant", "Long-lasting"], applications: ["Roofs", "Terraces", "Balconies", "Water Tanks"], slug: "aquaris-supra" },
// //   { id: "19", name: "Aquaproof", description: "Reliable waterproofing compound for construction.", fullDescription: "Aquaproof is a reliable waterproofing compound that provides effective protection against water ingress in construction projects.", status: "Active", image: "/Aquaproof.png", category: "Waterproofing", features: ["Effective Protection", "Easy Application", "Cost-effective", "Versatile Use"], applications: ["Basements", "Bathrooms", "Wet Areas", "Foundation Walls"], slug: "aquaproof" },
// //   { id: "20", name: "Decorprime", description: "High-performance decorative primer for premium finishes.", fullDescription: "Decorprime is a high-performance primer that ensures premium decorative finishes with enhanced durability and adhesion.", status: "Active", image: "/Decorprime.png", category: "Primers", features: ["Premium Finish", "Enhanced Adhesion", "Seals Surfaces", "Quick Drying"], applications: ["Premium Interiors", "Decorative Projects", "High-end Finishes", "Architectural Work"], slug: "decorprime" },
// //   { id: "21", name: "DuraGuard Exterior", description: "Heavy-duty exterior paint for maximum protection.", fullDescription: "DuraGuard Exterior provides maximum protection against harsh weather conditions with exceptional durability and color retention.", status: "Active", image: "/DuraGuard_Exterior.png", category: "Exterior Paints", features: ["Maximum Protection", "Weather Resistant", "Color Retention", "Anti-fungal"], applications: ["Exterior Walls", "Facades", "Boundary Walls", "Commercial Buildings"], slug: "duraguard-exterior" },
// //   { id: "22", name: "DuraGuard Interior", description: "Durable interior paint for high-traffic areas.", fullDescription: "DuraGuard Interior offers exceptional durability for high-traffic interior areas while maintaining an elegant finish.", status: "Active", image: "/DuraGuard_Interior.png", category: "Interior Paints", features: ["Scrub Resistant", "Stain Resistant", "Easy Cleaning", "Durable Finish"], applications: ["Hallways", "Corridors", "Kitchens", "High-traffic Areas"], slug: "duraguard-interior" },
// //   { id: "23", name: "Eva Emulsion", description: "Smooth emulsion with excellent coverage properties.", fullDescription: "Eva Emulsion delivers smooth, even coverage with excellent hiding power and an elegant matte finish.", status: "Active", image: "/Eva_Emulsion.png", category: "Emulsion Paints", features: ["Excellent Coverage", "Smooth Finish", "Matte Appearance", "Good Hiding Power"], applications: ["Interior Walls", "Ceilings", "Bedrooms", "Living Areas"], slug: "eva-emulsion" },
// //   { id: "24", name: "Zodiac Emulsion", description: "Premium emulsion for luxurious interior finishes.", fullDescription: "Zodiac Emulsion provides a luxurious, premium finish for discerning interior design projects requiring exceptional quality.", status: "Active", image: "/Zodiac_Emulsion.png", category: "Emulsion Paints", features: ["Luxurious Finish", "Premium Quality", "Excellent Durability", "Rich Colors"], applications: ["Luxury Homes", "Premium Offices", "Hotels", "Showrooms"], slug: "zodiac-emulsion" },
// // ];

// export default function ProductDetailPage() {
//   const params = useParams();
// const slug = typeof params?.slug === 'string' ? params.slug : '';
// // const product = productsData.find((p) => p.slug === slug);
// const product = products.find((p) => p.slug === slug);

// useEffect(() => {
//   window.scrollTo(0, 0);
// }, [slug]);

// if (!product) {
//   notFound();
// }

// // const related = productsData
// //   .filter((p) => p.category === product.category && p.slug !== product.slug)
// //   .slice(0, 3);

// const related = products
//   .filter((p) => p.category === product.category && p.slug !== product.slug)
//   .slice(0, 3);

//   return (
//     <div className="bg-warm-white min-h-screen">

//       {/* Breadcrumb */}
//       <div className="bg-white border-b border-warm-gray">
//         <div className="container-wide py-4 flex items-center gap-2 text-sm text-charcoal-muted">
//           <Link href="/products" className="hover:text-gold transition-colors flex items-center gap-1.5">
//             <ArrowRight className="w-3.5 h-3.5 rotate-180" /> All Products
//           </Link>
//           <span>/</span>
//           <span className="text-gold">{product.category}</span>
//           <span>/</span>
//           <span className="text-charcoal">{product.name}</span>
//         </div>
//       </div>

//       {/* Hero */}
//       <section className="section-padding bg-white border-b border-warm-gray">
//   <div className="container-wide">
//     <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">

//       <div className="lg:sticky lg:top-24 space-y-4">
//         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-[#F8F6F2] border border-[#ece7df] shadow-[0_28px_60px_rgba(0,0,0,0.08)]">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_62%)]" />
//           <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/55 to-transparent" />
//           <Image
//             src={product.image}
//             alt={product.name}
//             fill
//             className="object-contain p-8 md:p-12 scale-[1.08] drop-shadow-[0_26px_34px_rgba(0,0,0,0.12)]"
//             sizes="(max-width: 1024px) 100vw, 50vw"
//           />
//           <div className="absolute top-5 left-5">
//             <span className="px-3 py-1.5 bg-white/92 backdrop-blur-sm text-[10px] uppercase tracking-[0.16em] font-bold text-charcoal rounded-full shadow-sm">
//               {product.status}
//             </span>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-3">
//           <div className="rounded-2xl border border-warm-gray bg-white px-4 py-3">
//             <p className="text-[10px] uppercase tracking-[0.14em] text-charcoal-muted mb-1">Category</p>
//             <p className="text-sm font-semibold text-charcoal">{product.category}</p>
//           </div>
//           <div className="rounded-2xl border border-warm-gray bg-white px-4 py-3">
//             <p className="text-[10px] uppercase tracking-[0.14em] text-charcoal-muted mb-1">Finish</p>
//             <p className="text-sm font-semibold text-charcoal">{product.technicalSpecs?.finish ?? 'Premium'}</p>
//           </div>
//           <div className="rounded-2xl border border-warm-gray bg-white px-4 py-3">
//             <p className="text-[10px] uppercase tracking-[0.14em] text-charcoal-muted mb-1">Use</p>
//             <p className="text-sm font-semibold text-charcoal">{product.applications[0] ?? 'General'}</p>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col gap-8">
//         <div>
//           <p className="section-label mb-3">{product.category}</p>
//           <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal mb-4 leading-[1.02] max-w-xl">
//             {product.name}
//           </h1>
//           <p className="text-[17px] md:text-[18px] text-charcoal-muted leading-8 max-w-2xl">
//             {product.fullDescription}
//           </p>
//         </div>

//               {/* Technical specs */}
//               {product.technicalSpecs && (
//                 <div className="card-premium p-6">
//                   <h2 className="font-serif text-lg font-medium text-charcoal mb-4">Technical Specifications</h2>
//                   <div className="divide-y divide-warm-gray">
//                     {product.technicalSpecs.coverage && (
//                       <div className="flex justify-between py-3">
//                         <span className="text-sm text-charcoal-muted">Coverage</span>
//                         <span className="text-sm font-medium text-charcoal">{product.technicalSpecs.coverage}</span>
//                       </div>
//                     )}
//                     {product.technicalSpecs.dryingTime && (
//                       <div className="flex justify-between py-3">
//                         <span className="text-sm text-charcoal-muted">Drying Time</span>
//                         <span className="text-sm font-medium text-charcoal">{product.technicalSpecs.dryingTime}</span>
//                       </div>
//                     )}
//                     {product.technicalSpecs.finish && (
//                       <div className="flex justify-between py-3">
//                         <span className="text-sm text-charcoal-muted">Finish</span>
//                         <span className="text-sm font-medium text-charcoal">{product.technicalSpecs.finish}</span>
//                       </div>
//                     )}
//                     {product.technicalSpecs.application && (
//                       <div className="flex justify-between py-3">
//                         <span className="text-sm text-charcoal-muted">Application Method</span>
//                         <span className="text-sm font-medium text-charcoal">{product.technicalSpecs.application}</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Key Features */}
//               <div className="rounded-[1.75rem] border border-warm-gray bg-[#fcfbf8] p-6 md:p-7">
//   <h2 className="font-serif text-[1.55rem] font-medium text-charcoal mb-5 flex items-center gap-2">
//     <Tag className="w-5 h-5 text-gold" /> Key Features
//   </h2>
//   <div className="grid sm:grid-cols-2 gap-3">
//     {product.features.map((feature, i) => (
//       <div key={i} className="flex items-center gap-3 bg-white px-4 py-3.5 rounded-2xl border border-[#ece7df] shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
//         <CheckCircle className="w-4 h-4 text-gold shrink-0" />
//         <span className="text-sm text-charcoal leading-6">{feature}</span>
//       </div>
//     ))}
//   </div>
// </div>

//               {/* Applications */}
//               <div className="rounded-[1.75rem] border border-warm-gray bg-white p-6 md:p-7">
//   <h2 className="font-serif text-[1.55rem] font-medium text-charcoal mb-5 flex items-center gap-2">
//     <Layers className="w-5 h-5 text-gold" /> Applications
//   </h2>
//   <div className="flex flex-wrap gap-2.5">
//     {product.applications.map((app, i) => (
//       <span
//         key={i}
//         className="text-[11px] font-semibold px-4 py-2.5 bg-[#F7F3EC] text-charcoal rounded-full border border-[#ebe3d8] tracking-[0.08em] uppercase"
//       >
//         {app}
//       </span>
//     ))}
//   </div>
// </div>

//               {/* CTA */}
//               <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-warm-gray">
//                 <Link href="/assistance" className="btn-primary">
//                   Book a Consultation <ArrowRight className="w-4 h-4 ml-2" />
//                 </Link>
//                 <Link href="/contact" className="btn-secondary">
//                   Request a Quote
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Products */}
//       {related.length > 0 && (
//         <section className="section-padding bg-warm-gray">
//           <div className="container-wide">
//             <div className="flex items-end justify-between mb-10">
//               <div>
//                 <p className="section-label">More from {product.category}</p>
//                 <h2 className="font-serif text-3xl font-medium text-charcoal">Related Products</h2>
//               </div>
//               <Link href="/products" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-gold transition-colors">
//                 View All <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//             <div className="grid md:grid-cols-3 gap-6">
//               {related.map((p) => (
//                 // <Link key={p.id} href={`/products/${p.slug}`} className="card-premium group overflow-hidden flex flex-col">
//                 <Link
//   key={p.id}
//   href={`/products/${p.slug}`}
//   className="group overflow-hidden flex flex-col rounded-[1.5rem] border border-[#ece7df] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_38px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
// >
//                   <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F6F2] border-b border-[#eee7de]">
//   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_62%)]" />
//   <Image
//     src={p.image}
//     alt={p.name}
//     fill
//     className="object-contain p-7 scale-[1.05] transition-transform duration-700 group-hover:scale-[1.10]"
//     sizes="33vw"
//   />
// </div>
//                   <div className="p-5">
//                     <p className="text-[10px] uppercase tracking-widest text-gold font-semibold mb-1">{p.category}</p>
//                     <h3 className="font-serif text-lg font-medium text-charcoal mb-2 group-hover:text-gold transition-colors">{p.name}</h3>
//                     <p className="text-sm text-charcoal-muted line-clamp-2">{p.description}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }

// import { ArrowRight, CheckCircle, Tag, Layers } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { products } from "../data";

// type PageProps = {
//   params: Promise<{ slug: string }>;
// };

// export default async function ProductDetailPage({ params }: PageProps) {
//   const { slug } = await params;

//   const product = products.find((p) => p.slug === slug);

//   if (!product) {
//     notFound();
//   }

//   const related = products
//     .filter((p) => p.category === product.category && p.slug !== slug)
//     .slice(0, 3);

//   return (
//     <div className="bg-warm-white min-h-screen">
//       <div className="bg-white border-b border-warm-gray">
//         <div className="container-wide py-4 flex items-center gap-2 text-sm text-charcoal-muted">
//           <Link
//             href="/products"
//             className="hover:text-gold transition-colors flex items-center gap-1.5"
//           >
//             <ArrowRight className="w-3.5 h-3.5 rotate-180" />
//             All Products
//           </Link>
//           <span>/</span>
//           <span className="text-gold">{product.category}</span>
//           <span>/</span>
//           <span className="text-charcoal">{product.name}</span>
//         </div>
//       </div>

//       <section className="section-padding bg-white border-b border-warm-gray">
//         <div className="container-wide">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//             <div className="sticky top-24">
//               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-warm-gray shadow-lg">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-contain p-6"
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest font-bold text-charcoal rounded-full">
//                     {product.status}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-8">
//               <div>
//                 <p className="section-label mb-3">{product.category}</p>
//                 <h1 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-4 leading-tight">
//                   {product.name}
//                 </h1>
//                 <p className="text-lg text-charcoal-muted leading-relaxed">
//                   {product.fullDescription}
//                 </p>
//               </div>

//               {product.technicalSpecs && (
//                 <div className="card-premium p-6">
//                   <h2 className="font-serif text-lg font-medium text-charcoal mb-4">
//                     Technical Specifications
//                   </h2>
//                   <div className="divide-y divide-warm-gray">
//                     {product.technicalSpecs.coverage && (
//                       <div className="flex justify-between py-3">
//                         <span className="text-sm text-charcoal-muted">Coverage</span>
//                         <span className="text-sm font-medium text-charcoal">
//                           {product.technicalSpecs.coverage}
//                         </span>
//                       </div>
//                     )}
//                     {product.technicalSpecs.dryingTime && (
//                       <div className="flex justify-between py-3">
//                         <span className="text-sm text-charcoal-muted">Drying Time</span>
//                         <span className="text-sm font-medium text-charcoal">
//                           {product.technicalSpecs.dryingTime}
//                         </span>
//                       </div>
//                     )}
//                     {product.technicalSpecs.finish && (
//                       <div className="flex justify-between py-3">
//                         <span className="text-sm text-charcoal-muted">Finish</span>
//                         <span className="text-sm font-medium text-charcoal">
//                           {product.technicalSpecs.finish}
//                         </span>
//                       </div>
//                     )}
//                     {product.technicalSpecs.application && (
//                       <div className="flex justify-between py-3">
//                         <span className="text-sm text-charcoal-muted">Application Method</span>
//                         <span className="text-sm font-medium text-charcoal">
//                           {product.technicalSpecs.application}
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}

//               <div>
//                 <h2 className="font-serif text-xl font-medium text-charcoal mb-4 flex items-center gap-2">
//                   <Tag className="w-5 h-5 text-gold" />
//                   Key Features
//                 </h2>
//                 <div className="grid grid-cols-2 gap-3">
//                   {product.features.map((feature, i) => (
//                     <div
//                       key={i}
//                       className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-warm-gray"
//                     >
//                       <CheckCircle className="w-4 h-4 text-gold shrink-0" />
//                       <span className="text-sm text-charcoal">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h2 className="font-serif text-xl font-medium text-charcoal mb-4 flex items-center gap-2">
//                   <Layers className="w-5 h-5 text-gold" />
//                   Applications
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {product.applications.map((app, i) => (
//                     <span
//                       key={i}
//                       className="text-xs font-medium px-3 py-1.5 bg-warm-gray text-charcoal rounded-full border border-warm-gray"
//                     >
//                       {app}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-warm-gray">
//                 <Link href="/assistance" className="btn-primary">
//                   Book a Consultation <ArrowRight className="w-4 h-4 ml-2" />
//                 </Link>
//                 <Link href="/contact" className="btn-secondary">
//                   Request a Quote
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {related.length > 0 && (
//         <section className="section-padding bg-warm-gray">
//           <div className="container-wide">
//             <div className="flex items-end justify-between mb-10">
//               <div>
//                 <p className="section-label">More from {product.category}</p>
//                 <h2 className="font-serif text-3xl font-medium text-charcoal">
//                   Related Products
//                 </h2>
//               </div>
//               <Link
//                 href="/products"
//                 className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-gold transition-colors"
//               >
//                 View All <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6">
//               {related.map((p) => (
//                 <Link
//                   key={p.id}
//                   href={`/products/${p.slug}`}
//                   className="card-premium group overflow-hidden flex flex-col"
//                 >
//                   <div className="relative aspect-[4/3] overflow-hidden bg-warm-gray">
//                     <Image
//                       src={p.image}
//                       alt={p.name}
//                       fill
//                       className="object-cover transition-transform duration-700 group-hover:scale-105"
//                       sizes="33vw"
//                     />
//                   </div>
//                   <div className="p-5">
//                     <p className="text-[10px] uppercase tracking-widest text-gold font-semibold mb-1">
//                       {p.category}
//                     </p>
//                     <h3 className="font-serif text-lg font-medium text-charcoal mb-2 group-hover:text-gold transition-colors">
//                       {p.name}
//                     </h3>
//                     <p className="text-sm text-charcoal-muted line-clamp-2">
//                       {p.description}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   CheckCircle,
//   Phone,
//   ChevronRight,
//   Menu,
//   X,
//   Shield,
//   Droplets,
//   Layers,
//   Zap,
//   Leaf,
//   Maximize2,
//   Sun,
//   Paintbrush,
// } from "lucide-react";
// import { products } from "../data";
// import { Footer } from "@/src/components/Footer";

// const ACCENTS = ["#E91E8C", "#2196F3", "#4CAF50", "#FF5722", "#FFC107"];

// interface PageProps {
//   params: Promise<{ slug: string }>;
// }

// export default function ProductDetailPage({ params }: PageProps) {
//   const resolvedParams = React.use(params);
//   const slug = resolvedParams?.slug || "";

//   return <ProductDetailContainer slug={slug} />;
// }

// function ProductDetailContainer({ slug }: { slug: string }) {
//   const router = useRouter();

//   const product = products.find(
//     (p) => p.slug.toLowerCase() === slug.toLowerCase(),
//   );
//   const productIndex = products.findIndex(
//     (p) => p.slug.toLowerCase() === slug.toLowerCase(),
//   );
//   const accent =
//     ACCENTS[productIndex !== -1 ? productIndex % ACCENTS.length : 0];

//   // const [activeTab, setActiveTab] = useState<"overview" | "features" | "usage">("overview");
//   const [activeTab, setActiveTab] = useState<
//     "overview" | "applications" | "usage"
//   >("overview");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [slug]);

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5] pt-[72px]">
//         <div className="text-center max-w-md bg-white border border-[#EDE7DC] p-10 rounded-[2rem] shadow-sm">
//           <Paintbrush className="w-10 h-10 text-gold mx-auto mb-4 animate-pulse" />
//           <h1
//             className="font-serif text-2xl font-bold text-charcoal mb-2"
//             style={{ fontFamily: "var(--font-cormorant)" }}
//           >
//             Formulation Index Null
//           </h1>
//           <p className="text-xs text-charcoal-muted font-sans font-light mb-4 leading-relaxed">
//             The URL path token{" "}
//             <span className="text-red-500 font-mono bg-red-50 px-1.5 py-0.5 rounded border border-red-100">
//               "{slug || "empty"}"
//             </span>{" "}
//             could not be mapped to an entry inside our product matrix.
//           </p>
//           <Link
//             href="/products"
//             className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-charcoal hover:text-gold transition-colors"
//           >
//             <ArrowLeft className="w-4 h-4" /> Return to Catalog Matrix
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const related = products
//     .filter((p) => p.category === product.category && p.slug !== slug)
//     .slice(0, 4);

//   // Icon map — maps feature keywords to lucide icons
//   const FEATURE_ICON_MAP: Record<string, React.ReactNode> = {
//     "UV Resistant": <Sun className="w-7 h-7" />,
//     "Weather Proof": <Droplets className="w-7 h-7" />,
//     "Chemical Resistant": <Shield className="w-7 h-7" />,
//     "Long-lasting Durability": <Layers className="w-7 h-7" />,
//     "Anti-corrosion": <Shield className="w-7 h-7" />,
//     "Self-healing Properties": <Zap className="w-7 h-7" />,
//     "Temperature Resistant": <Sun className="w-7 h-7" />,
//     "Flexible Application": <Maximize2 className="w-7 h-7" />,
//     "Eco-friendly": <Leaf className="w-7 h-7" />,
//     Waterproof: <Droplets className="w-7 h-7" />,
//     "Smooth Finish": <Layers className="w-7 h-7" />,
//     "Excellent Adhesion": <Shield className="w-7 h-7" />,
//     "Quick Drying": <Zap className="w-7 h-7" />,
//     "Low VOC": <Leaf className="w-7 h-7" />,
//     "Superior Adhesion": <Shield className="w-7 h-7" />,
//     "High Gloss Finish": <Maximize2 className="w-7 h-7" />,
//     "Scratch Resistant": <Shield className="w-7 h-7" />,
//     "Scrub Resistant": <Shield className="w-7 h-7" />,
//     "Stain Resistant": <Droplets className="w-7 h-7" />,
//     "Color Retention": <Sun className="w-7 h-7" />,
//     "Anti-fungal": <Leaf className="w-7 h-7" />,
//     "Elastic Properties": <Maximize2 className="w-7 h-7" />,
//   };
//   const DEFAULT_ICON = <Layers className="w-7 h-7" />;

//   const navText = "text-[#2D2D2D]";
//   const navMuted = "text-[#6B6B6B]";
//   const navBg = scrolled
//     ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F0EAE1]"
//     : "bg-white/95 backdrop-blur-md border-b border-[#F0EAE1]";

//   return (
//     // <div className="bg-[#FAF8F5] min-h-screen selection:bg-[#F3E7C9] pt-[72px]">
//     <div className="bg-[#FAF8F5] min-h-screen selection:bg-[#F3E7C9] pt-[72px] relative">
//       {/* Grain texture */}
//       {/* <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]" */}
//       <div
//         className="pointer-events-none fixed inset-0 z-0 opacity-[0.045]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//           backgroundRepeat: "repeat",
//           backgroundSize: "128px 128px",
//         }}
//       />

//       {/* Warm ambient glow top-right */}
//       <div
//         className="pointer-events-none fixed top-0 right-0 w-[600px] h-[600px] z-0"
//         style={{
//           background: `radial-gradient(circle at top right, ${accent}08 0%, transparent 65%)`,
//         }}
//       />
//       {/* Subtle bottom-left cool balance */}
//       <div
//         className="pointer-events-none fixed bottom-0 left-0 w-[400px] h-[400px] z-0"
//         style={{
//           background:
//             "radial-gradient(circle at bottom left, rgba(243,231,201,0.12) 0%, transparent 70%)",
//         }}
//       />

//       {/* Synchronized Header Navigation */}
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
//       >
//         <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
//           <Link
//             href="/"
//             className="flex items-center gap-4 flex-shrink-0 min-w-[260px]"
//           >
//             <div className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#E8E2D8] p-2 shrink-0">
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
//                 <span
//                   className={`transition-colors duration-300 ${navText}`}
//                   style={{
//                     fontFamily: "var(--font-cormorant)",
//                     fontSize: "2rem",
//                     lineHeight: "0.82",
//                     fontWeight: 700,
//                     letterSpacing: "-0.055em",
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   COLORSOME
//                 </span>
//                 <span
//                   className={`transition-colors duration-300 ${navText}`}
//                   style={{
//                     fontFamily: "var(--font-inter)",
//                     fontSize: "0.55rem",
//                     lineHeight: 1,
//                     fontWeight: 700,
//                     marginLeft: "0.18rem",
//                     marginTop: "0.12rem",
//                     letterSpacing: "0.04em",
//                   }}
//                 >
//                   R
//                 </span>
//               </div>
//             </div>
//           </Link>

//           <nav className="hidden md:flex items-center">
//             <div className="flex items-center gap-1 rounded-full border border-black/[0.06] bg-white/80 backdrop-blur-md px-2 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
//               {[
//                 ["Home", "/"],
//                 ["Products", "/products"],
//                 ["Shades", "/shades"],
//                 ["Assistance", "/assistance"],
//                 ["About", "/about"],
//                 ["Contact", "/contact"],
//               ].map(([label, href]) => {
//                 const isActive = label === "Products";
//                 return (
//                   <Link
//                     key={label}
//                     href={href}
//                     className={`relative rounded-full px-4 py-2.5 transition-all duration-200 ${
//                       isActive
//                         ? "text-[#2D2D2D] bg-[#F3E7C9]"
//                         : `${navMuted} hover:text-[#2D2D2D] hover:bg-black/[0.04]`
//                     }`}
//                     style={{
//                       fontFamily: "var(--font-inter)",
//                       fontSize: "0.92rem",
//                       fontWeight: isActive ? 600 : 500,
//                       letterSpacing: "-0.01em",
//                       lineHeight: 1,
//                     }}
//                   >
//                     {label}
//                   </Link>
//                 );
//               })}
//             </div>
//           </nav>

//           <div className="flex items-center gap-3">
//             <Link
//               href="/assistance"
//               className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 text-white flex-shrink-0"
//               style={{ background: "#2D2D2D" }}
//             >
//               <Phone className="w-4 h-4" /> Book Assistance
//             </Link>

//             <button
//               className={`md:hidden p-2 rounded-lg transition-colors ${navText}`}
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-label="Menu"
//             >
//               {mobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -8 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -8 }}
//               className="md:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-4 space-y-3"
//             >
//               {[
//                 ["Home", "/"],
//                 ["Products", "/products"],
//                 ["Shades", "/shades"],
//                 ["Assistance", "/assistance"],
//                 ["About", "/about"],
//                 ["Contact", "/contact"],
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

//       {/* Breadcrumb Trail */}
//       {/* <div className="max-w-[1280px] mx-auto px-6 py-5 flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-[#8C8C8C] font-sans"> */}
//       <div
//         className="max-w-[1280px] mx-auto px-6 py-5 flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-[#8C8C8C]"
//         style={{ fontFamily: "var(--font-sans)" }}
//       >
//         <Link href="/" className="hover:text-charcoal transition-colors">
//           Home
//         </Link>
//         <ChevronRight className="w-3 h-3 text-gray-300" />
//         <Link
//           href="/products"
//           className="hover:text-charcoal transition-colors"
//         >
//           Matrix Catalog
//         </Link>
//         <ChevronRight className="w-3 h-3 text-gray-300" />
//         <span className="text-charcoal font-black truncate">
//           {product.name}
//         </span>
//       </div>

//       {/* Main Structural Stage Container */}
//       <section className="max-w-[1280px] mx-auto px-6 pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
//           {/* Left Column: Image Presenter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-5 lg:sticky lg:top-[116px]"
//           >
//             <div className="rounded-[2.5rem] overflow-hidden bg-white border border-[#EDE6DA] shadow-[0_20px_50px_rgba(45,45,45,0.05)] p-8 relative group transition-shadow duration-500 hover:shadow-[0_32px_70px_rgba(45,45,45,0.10)]">
//               <div
//                 className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500"
//                 style={{ background: accent }}
//               />

//               <span
//                 className="absolute top-5 right-5 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-md text-white shadow-sm"
//                 style={{ background: accent, fontFamily: "var(--font-inter)" }}
//               >
//                 {product.category?.split(" ")[0] ?? "Formula"}
//               </span>

//               {/* Rotating ring behind image on hover */}
//               <div
//                 className="relative flex items-center justify-center"
//                 style={{ height: 400 }}
//               >
//                 <div
//                   className="absolute inset-0 rounded-[1.5rem] transition-opacity duration-500"
//                   style={{
//                     background: `radial-gradient(circle at center, ${accent}10 0%, transparent 72%)`,
//                   }}
//                 />

//                 {/* Animated ring */}
//                 <div
//                   className="absolute w-64 h-64 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
//                   style={{ borderColor: `${accent}20`, borderWidth: "1px" }}
//                 />
//                 <div
//                   className="absolute w-48 h-48 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
//                   style={{ borderColor: `${accent}15`, borderWidth: "1px" }}
//                 />

//                 {/* Pulsing glow dot — bottom centre */}
//                 <motion.div
//                   className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0"
//                   style={{ background: accent }}
//                 />

//                 <motion.div
//                   animate={{ y: [0, -5, 0] }}
//                   whileHover={{ scale: 1.07, y: -10 }}
//                   // transition={{ type: "spring", stiffness: 220, damping: 18 }}
//                   transition={{
//                     y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
//                     scale: { type: "spring", stiffness: 220, damping: 18 },
//                   }}
//                   className="relative z-10 cursor-zoom-in"
//                 >
//                   {/* Shimmer overlay on hover */}
//                   <div
//                     className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
//                     style={{
//                       background: `linear-gradient(135deg, ${accent}00 30%, ${accent}18 50%, ${accent}00 70%)`,
//                       transform: "rotate(-15deg) scale(1.2)",
//                     }}
//                   />
//                   <Image
//                     src={product.image}
//                     alt={`Colorsome ${product.name}`}
//                     width={360}
//                     height={440}
//                     className="h-80 w-auto object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.13)] transition-filter duration-500 group-hover:drop-shadow-[0_32px_48px_rgba(0,0,0,0.18)]"
//                     priority
//                   />
//                 </motion.div>
//               </div>

//               {/* Specs strip */}
//               {product.technicalSpecs && (
//                 <div className="mt-5 grid grid-cols-2 gap-3">
//                   {product.technicalSpecs.coverage && (
//                     <div
//                       className="bg-[#FDFBF7] border border-[#EDE6DA] rounded-xl p-3 text-center transition-all duration-200 hover:border-current hover:shadow-sm"
//                       style={{ ["--tw-border-opacity" as string]: 1 }}
//                     >
//                       <p
//                         className="text-[9px] uppercase tracking-widest font-bold text-charcoal-muted mb-1"
//                         style={{ fontFamily: "var(--font-inter)" }}
//                       >
//                         Coverage
//                       </p>
//                       <p
//                         className="text-sm font-semibold text-charcoal"
//                         style={{ fontFamily: "var(--font-inter)" }}
//                       >
//                         {product.technicalSpecs.coverage}
//                       </p>
//                     </div>
//                   )}
//                   {product.technicalSpecs.dryingTime && (
//                     <div className="bg-[#FDFBF7] border border-[#EDE6DA] rounded-xl p-3 text-center transition-all duration-200 hover:shadow-sm">
//                       <p
//                         className="text-[9px] uppercase tracking-widest font-bold text-charcoal-muted mb-1"
//                         style={{ fontFamily: "var(--font-inter)" }}
//                       >
//                         Drying Time
//                       </p>
//                       <p
//                         className="text-sm font-semibold text-charcoal"
//                         style={{ fontFamily: "var(--font-inter)" }}
//                       >
//                         {product.technicalSpecs.dryingTime}
//                       </p>
//                     </div>
//                   )}
//                   {product.technicalSpecs.finish && (
//                     <div className="bg-[#FDFBF7] border border-[#EDE6DA] rounded-xl p-3 text-center transition-all duration-200 hover:shadow-sm">
//                       <p
//                         className="text-[9px] uppercase tracking-widest font-bold text-charcoal-muted mb-1"
//                         style={{ fontFamily: "var(--font-inter)" }}
//                       >
//                         Finish
//                       </p>
//                       <p
//                         className="text-sm font-semibold text-charcoal"
//                         style={{ fontFamily: "var(--font-inter)" }}
//                       >
//                         {product.technicalSpecs.finish}
//                       </p>
//                     </div>
//                   )}
//                   {product.technicalSpecs.application && (
//                     <div className="bg-[#FDFBF7] border border-[#EDE6DA] rounded-xl p-3 text-center transition-all duration-200 hover:shadow-sm">
//                       <p
//                         className="text-[9px] uppercase tracking-widest font-bold text-charcoal-muted mb-1"
//                         style={{ fontFamily: "var(--font-inter)" }}
//                       >
//                         Application
//                       </p>
//                       <p
//                         className="text-sm font-semibold text-charcoal"
//                         style={{ fontFamily: "var(--font-inter)" }}
//                       >
//                         {product.technicalSpecs.application}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </motion.div>

//           {/* Right Text Specifications Column */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
//             className="lg:col-span-7 space-y-8"
//           >
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <span
//                   className="w-2 h-[1.5px]"
//                   style={{ background: accent }}
//                 />
//                 <p
//                   className="text-[10px] font-black uppercase tracking-[0.2em]"
//                   style={{ color: accent }}
//                 >
//                   {product.category}
//                 </p>
//               </div>

//               {/* <div
//                 className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4"
//                 style={{ background: `${accent}10` }}
//               >
//                 <span
//                   className="w-1.5 h-1.5 rounded-full"
//                   style={{ background: accent }}
//                 />
//                 <span
//                   className="text-[10px] font-black uppercase tracking-[0.2em]"
//                   style={{ color: accent, fontFamily: "var(--font-inter)" }}
//                 >
//                   {product.status} · {product.id.padStart(2, "0")}
//                 </span>
//               </div> */}

//               <h1
//                 className="text-4xl md:text-5xl font-bold text-charcoal leading-[1.06] tracking-[-0.03em] mb-4"
//                 style={{
//                   fontFamily: "var(--font-cormorant)",
//                   fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
//                 }}
//               >
//                 {product.name}
//               </h1>

//               {/* <p className="text-[15px] sm:text-[16px] text-charcoal-muted leading-relaxed font-sans font-light"> */}
//               <p
//                 className="text-[15px] sm:text-[16px] text-charcoal-muted leading-relaxed font-light"
//                 style={{ fontFamily: "var(--font-inter)" }}
//               >
//                 {/* <p className="text-[15px] sm:text-[16px] text-charcoal-muted leading-relaxed font-light" style={{ fontFamily: "var(--font-inter)" }} > */}
//                 {product.fullDescription || product.description}
//               </p>
//             </div>

//             {/* Tabs Selector Bar */}
//             <div className="border-b border-[#EDE6DA] pt-2">
//               <div className="flex gap-1">
//                 {/* {(["overview", "features", "usage"] as const).map((tab) => { */}
//                 {(["overview", "applications", "usage"] as const).map((tab) => {
//                   const isSelected = activeTab === tab;
//                   return (
//                     <button
//                       key={tab}
//                       onClick={() => setActiveTab(tab)}
//                       // className={`px-5 py-3 text-xs uppercase tracking-widest font-black transition-all border-b-2 -mb-px font-sans ${
//                       className={`px-5 py-3 text-xs uppercase tracking-widest font-black transition-all border-b-2 -mb-px ${
//                         isSelected
//                           ? "text-charcoal"
//                           : "border-transparent text-charcoal-muted hover:text-charcoal "
//                       }`}
//                       // style={isSelected ? { borderColor: accent } : {}}
//                       style={{
//                         fontFamily: "var(--font-inter)",
//                         ...(isSelected ? { borderColor: accent } : {}),
//                       }}
//                     >
//                       {tab}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Content switching area */}
//             <div className="min-h-[160px]">
//               <AnimatePresence mode="wait">
//                 {activeTab === "overview" && (
//                   <motion.div
//                     key="overview"
//                     initial={{ opacity: 0, y: 6 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -6 }}
//                     transition={{ duration: 0.2 }}
//                     className="space-y-5"
//                   >
//                     {/* 2 info cards */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div className="bg-white rounded-2xl border border-[#EDE6DA] p-5">
//                         <p
//                           className="text-[9px] uppercase font-bold tracking-widest text-charcoal-muted mb-1"
//                           style={{ fontFamily: "var(--font-inter)" }}
//                         >
//                           Range Classification
//                         </p>
//                         <p
//                           className="font-bold text-charcoal"
//                           style={{
//                             fontFamily: "var(--font-cormorant)",
//                             fontSize: "1.1rem",
//                           }}
//                         >
//                           {product.category}
//                         </p>
//                       </div>
//                       <div className="bg-white rounded-2xl border border-[#EDE6DA] p-5">
//                         <p
//                           className="text-[9px] uppercase font-bold tracking-widest text-charcoal-muted mb-1"
//                           style={{ fontFamily: "var(--font-inter)" }}
//                         >
//                           Status
//                         </p>
//                         <p
//                           className="font-bold text-charcoal"
//                           style={{
//                             fontFamily: "var(--font-cormorant)",
//                             fontSize: "1.1rem",
//                           }}
//                         >
//                           {product.status}
//                         </p>
//                       </div>
//                     </div>
//                     {/* Features as chips */}
//                     <div>
//                       <p
//                         className="text-[9px] uppercase font-bold tracking-widest text-charcoal-muted mb-3"
//                         style={{ fontFamily: "var(--font-inter)" }}
//                       >
//                         Key Features
//                       </p>
//                       <div className="flex flex-wrap gap-2">
//                         {product.features?.map((f: string, i: number) => (
//                           <motion.span
//                             key={i}
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ delay: i * 0.05 }}
//                             className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
//                             style={{
//                               background: `${accent}12`,
//                               color: accent,
//                               fontFamily: "var(--font-inter)",
//                             }}
//                           >
//                             <CheckCircle className="w-3 h-3" />
//                             {f}
//                           </motion.span>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}

//                 {/* {activeTab === "features" && (
//                   <motion.div
//                     key="features"
//                     initial={{ opacity: 0, y: 6 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -6 }}
//                     transition={{ duration: 0.2 }}
//                     className="grid grid-cols-1 sm:grid-cols-2 gap-3"
//                   >
//                     {product.features?.map((f: string, i: number) => (
//                       <div key={i} className="flex items-start gap-3 p-4 bg-white border border-[#EDE6DA] rounded-xl shadow-inner">
//                         <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${accent}0A` }}>
//                           <CheckCircle className="w-3.5 h-3.5" style={{ color: accent }} />
//                         </div>
//                         <p className="text-[13.5px] font-sans text-charcoal font-medium leading-tight">{f}</p>
//                       </div>
//                     ))}
//                   </motion.div>
//                 )} */}
//                 {activeTab === "applications" && (
//                   <motion.div
//                     key="applications"
//                     initial={{ opacity: 0, y: 6 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -6 }}
//                     transition={{ duration: 0.2 }}
//                     className="grid grid-cols-1 sm:grid-cols-2 gap-3"
//                   >
//                     {product.applications?.map((app: string, i: number) => (
//                       <div
//                         key={i}
//                         className="flex items-center gap-3 p-4 bg-white border border-[#EDE6DA] rounded-xl"
//                         style={{ borderLeft: `3px solid ${accent}` }}
//                       >
//                         <div
//                           className="w-2 h-2 rounded-full flex-shrink-0"
//                           style={{ background: accent }}
//                         />
//                         <p
//                           className="text-[16px] text-charcoal font-medium"
//                           style={{ fontFamily: "var(--font-inter)" }}
//                         >
//                           {app}
//                         </p>
//                       </div>
//                     ))}
//                   </motion.div>
//                 )}

//                 {activeTab === "usage" && (
//                   <motion.div
//                     key="usage"
//                     initial={{ opacity: 0, y: 6 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -6 }}
//                     transition={{ duration: 0.2 }}
//                     className="space-y-4"
//                   >
//                     {[
//                       {
//                         step: "01",
//                         title: "Surface Canvas Evaluation",
//                         desc: "Clean the surface thoroughly. Ensure zero exposure to dust particles, heavy grease, or chemical sub-structures.",
//                       },
//                       {
//                         step: "02",
//                         title: "Prime Framework Base",
//                         desc: "Layer one unified pass of custom primer mix coat. Enforce optimal curing time guidelines prior to layering.",
//                       },
//                       {
//                         step: "03",
//                         title: "Formulation Application",
//                         desc: "Orchestrate layout using dynamic rollers or industrial spray units. Double pass intervals highly recommended.",
//                       },
//                       {
//                         step: "04",
//                         title: "Molecular Curing",
//                         desc: "Sustain uninterrupted environmental drying flow. Absolute molecular setting index wraps up in 24–48 hours.",
//                       },
//                     ].map(({ step, title, desc }) => (
//                       <div
//                         key={step}
//                         className="flex gap-4 p-4 rounded-2xl bg-white border border-[#EDE6DA]"
//                       >
//                         <span
//                           className="text-xs font-black font-sans shrink-0 w-4"
//                           style={{ color: accent }}
//                         >
//                           {step}
//                         </span>
//                         <div>
//                           {/* <p className="text-xs uppercase tracking-wider font-bold text-charcoal mb-1 font-sans">{title}</p>
//                           <p className="text-[13px] text-charcoal-muted font-sans font-light leading-relaxed">{desc}</p> */}
//                           <p
//                             className="text-sm uppercase tracking-wider font-bold text-charcoal mb-1"
//                             style={{ fontFamily: "var(--font-inter)" }}
//                           >
//                             {title}
//                           </p>
//                           <p
//                             className="text-[14px] text-charcoal-muted font-light leading-relaxed"
//                             style={{ fontFamily: "var(--font-inter)" }}
//                           >
//                             {desc}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Why Choose — Feature Cards with Icons */}
//             <div className="pt-2">
//               <p
//                 className="text-[11px] uppercase font-bold tracking-widest text-charcoal-muted mb-4"
//                 style={{ fontFamily: "var(--font-inter)" }}
//               >
//                 Why Choose {product.name}
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {product.features?.map((f: string, i: number) => {
//                   const descriptions: Record<string, string> = {
//                     "UV Resistant":
//                       "Blocks harsh sunlight exposure to help preserve colour strength and surface life.",
//                     "Weather Proof":
//                       "Protects the coating against rain, humidity, and changing outdoor conditions.",
//                     "Chemical Resistant":
//                       "Helps the surface withstand contact with industrial chemicals and cleaning agents.",
//                     "Long-lasting Durability":
//                       "Built for extended performance so the finish remains reliable for years.",
//                     "Anti-corrosion":
//                       "Creates a protective barrier that helps prevent rust and metal deterioration.",
//                     "Self-healing Properties":
//                       "Supports recovery from minor surface marks to maintain a cleaner appearance.",
//                     "Temperature Resistant":
//                       "Performs well across changing temperatures without losing coating stability.",
//                     "Flexible Application":
//                       "Suitable for brush, roller, or spray application for easier on-site use.",
//                     "Eco-friendly":
//                       "Made with a safer formulation approach that is more considerate to users and surroundings.",
//                     Waterproof:
//                       "Helps stop water penetration and protects the substrate from moisture damage.",
//                     "Smooth Finish":
//                       "Creates a more even and refined surface appearance after application.",
//                     "Excellent Adhesion":
//                       "Bonds strongly to the surface for dependable topcoat performance.",
//                     "Quick Drying":
//                       "Reduces waiting time and helps speed up project completion.",
//                     "Low VOC":
//                       "Supports better indoor air quality with reduced solvent emissions.",
//                     "Superior Adhesion":
//                       "Strengthens surface grip so the coating system lasts longer.",
//                     "High Gloss Finish":
//                       "Delivers a rich reflective finish that improves visual appeal.",
//                     "Scratch Resistant":
//                       "Helps the coated surface resist minor scratches during regular use.",
//                     "Scrub Resistant":
//                       "Allows repeated cleaning without quickly damaging the finish.",
//                     "Stain Resistant":
//                       "Makes everyday stains easier to clean and less likely to settle in.",
//                     "Color Retention":
//                       "Keeps the shade looking fresher and more vibrant for longer.",
//                     "Anti-fungal":
//                       "Helps resist fungal growth in damp or moisture-prone environments.",
//                     "Elastic Properties":
//                       "Allows the coating to adjust better to minor surface movement.",
//                     "Consistent Quality":
//                       "Ensures stable finish, colour, and performance across every coat applied.",
//                     "Time Saving":
//                       "Speeds up application and drying so projects move forward faster.",
//                     "Reduced Waste":
//                       "Improves material efficiency and helps lower unnecessary product loss.",
//                     "Superior Bonding":
//                       "Forms a stronger connection with the surface for better long-term hold.",
//                     "High Coverage":
//                       "Covers more area effectively for a more uniform finished surface.",
//                     "Enhanced Longevity":
//                       "Extends coating life and helps reduce frequent maintenance needs.",
//                     "Moisture Resistance":
//                       "Protects the surface from dampness and moisture-related damage.",
//                     "Dust Resistance":
//                       "Helps reduce dust settling and keeps surfaces cleaner for longer.",
//                     "Easy Maintenance":
//                       "Makes the coated surface simpler to clean and maintain over time.",
//                     "Premium Finish":
//                       "Adds a refined and professional appearance to the final surface.",
//                     "Crack Bridging":
//                       "Helps cover minor hairline cracks for a more even finish.",
//                     "Fade Resistance":
//                       "Helps the coating maintain its original appearance despite exposure.",
//                     "Surface Protection":
//                       "Acts as a defensive layer against wear, exposure, and daily stress.",
//                     "Fast Curing":
//                       "Reaches usable condition quickly to reduce downtime on site.",
//                     "Strong Coverage":
//                       "Delivers fuller surface coverage with fewer visible inconsistencies.",
//                     "Breathable Coating":
//                       "Allows trapped moisture vapour to escape while maintaining protection.",
//                     "Mildew Resistance":
//                       "Helps limit mildew formation in humid conditions.",
//                     "Application Ease":
//                       "Designed for smoother spreading and a more controlled application process.",
//                   };
//                   const desc =
//                     descriptions[f] ??
//                     `${f} helps improve coating performance, usability, and long-term surface reliability.`;
//                   const icon = FEATURE_ICON_MAP[f] ?? DEFAULT_ICON;

//                   return (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 8 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.06, duration: 0.3 }}
//                       className="group flex flex-col gap-3 p-5 bg-white border border-[#EDE6DA] rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
//                     >
//                       {/* Icon circle */}
//                       <div
//                         className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
//                         style={{ background: `${accent}10`, color: accent }}
//                       >
//                         {icon}
//                       </div>
//                       {/* Title */}
//                       <p
//                         // className="text-[18] font-bold text-charcoal leading-tight"
//                         className="text-[18px] font-bold text-charcoal leading-tight"
//                         style={{ fontFamily: "var(--font-inter)" }}
//                       >
//                         {f}
//                       </p>
//                       {/* Description */}
//                       <p
//                         className="text-[14px] text-charcoal-muted leading-[1.6]"
//                         style={{
//                           fontFamily: "var(--font-inter)",
//                           fontWeight: 400,
//                         }}
//                       >
//                         {desc}
//                       </p>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#EDE6DA]">
//               <Link
//                 href="/assistance"
//                 className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-black text-white shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex-1"
//                 style={{
//                   background: `linear-gradient(135deg, ${accent} 0%, ${accent}CC 100%)`,
//                   fontFamily: "var(--font-inter)",
//                   letterSpacing: "0.1em",
//                 }}
//               >
//                 <Phone className="w-3.5 h-3.5 animate-pulse" /> Get Expert
//                 Consultation
//               </Link>
//               <button
//                 onClick={() => router.push("/products")}
//                 className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white border border-[#EDE6DA] text-charcoal rounded-xl text-xs uppercase tracking-widest font-black shadow-sm hover:bg-[#FDFBF7] hover:border-[#D5CBBC] active:scale-[0.98] transition-all"
//                 style={{
//                   fontFamily: "var(--font-inter)",
//                   letterSpacing: "0.1em",
//                 }}
//               >
//                 <ArrowLeft className="w-3.5 h-3.5" /> Return to Grid
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Related Products Section */}
//       {related.length > 0 && (
//         <section className="border-t border-[#EDE6DA] py-20 bg-white">
//           <div className="max-w-[1280px] mx-auto px-6">
//             <div className="mb-10">
//               <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-black font-sans mb-1">
//                 Synchronized Range
//               </p>
//               <h2
//                 className="font-serif text-3xl font-bold text-charcoal tracking-tight"
//                 style={{ fontFamily: "var(--font-cormorant)" }}
//               >
//                 Related Formulations
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {related.map((p, i) => {
//                 const relAccent = ACCENTS[i % ACCENTS.length];
//                 return (
//                   <Link
//                     key={p.id}
//                     href={`/products/${p.slug}`}
//                     className="group block flex flex-col justify-between rounded-[1.8rem] bg-[#FAF8F5] border border-[#EDE6DA] overflow-hidden hover:shadow-[0_24px_50px_rgba(45,45,45,0.06)] hover:-translate-y-1 transition-all duration-500 h-full"
//                   >
//                     <div>
//                       <div
//                         className="h-1 w-full"
//                         style={{ background: relAccent }}
//                       />
//                       <div
//                         className="flex items-center justify-center p-6 relative overflow-hidden"
//                         style={{ height: 180 }}
//                       >
//                         <div
//                           className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                           style={{
//                             background: `radial-gradient(circle, ${relAccent}0B 0%, transparent 70%)`,
//                           }}
//                         />
//                         <Image
//                           src={p.image}
//                           alt={p.name}
//                           width={160}
//                           height={180}
//                           className="h-36 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
//                         />
//                       </div>
//                       <div className="p-6 pt-2">
//                         {/* <h3 className="font-serif text-lg font-bold text-charcoal mb-1 leading-tight group-hover:text-gold transition-colors duration-200"> */}
//                         <h3
//                           className="text-lg font-bold text-charcoal mb-1 leading-tight group-hover:text-gold transition-colors duration-200"
//                           style={{ fontFamily: "var(--font-cormorant)" }}
//                         >
//                           {p.name}
//                         </h3>
//                         {/* <p className="text-xs leading-relaxed text-charcoal-muted line-clamp-2 font-sans font-light">{p.description}</p> */}
//                         <p
//                           className="text-xs leading-relaxed text-charcoal-muted line-clamp-2 font-light"
//                           style={{ fontFamily: "var(--font-inter)" }}
//                         >
//                           {p.description}
//                         </p>
//                       </div>
//                     </div>
//                     <div
//                       className="p-6 pt-0 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider"
//                       style={{ color: relAccent }}
//                     >
//                       Examine Specs →
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       )}

//       <Footer />
//     </div>
//   );
// }












// 'use client'
// import React, { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { motion, AnimatePresence, useInView } from 'framer-motion'
// import {
//   ArrowLeft, CheckCircle, Phone, ChevronRight, Menu, X,
//   Shield, Droplets, Layers, Zap, Leaf, Maximize2, Sun,
//   Paintbrush, Star, Clock, Award, FlaskConical, Ruler,
//   Sparkles, Package, ChevronDown, Eye, BadgeCheck,
//   ThumbsUp, Info, Beaker, Hammer
// } from 'lucide-react'
// import { products } from '../data'
// import { Footer } from '@/src/components/Footer';

// const ACCENTS = ['#E91E8C', '#2196F3', '#4CAF50', '#FF5722', '#FFC107']

// const BRAND = {
//   pink: '#E91E8C',
//   blue: '#2196F3',
//   green: '#4CAF50',
//   orange: '#FF5722',
//   yellow: '#FFC107',
//   dark: '#2D2D2D',
// }

// // ─── Motion Variants ──────────────────────────────────────────────
// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 26, stiffness: 180 } },
// }
// const stagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
// }
// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.93 },
//   show: { opacity: 1, scale: 1, transition: { type: 'spring' as const, damping: 22, stiffness: 200 } },
// }

// // ─── Feature → Icon map ───────────────────────────────────────────
// const FEATURE_ICON_MAP: Record<string, React.ReactNode> = {
//   'UV Resistant':           <Sun className="w-5 h-5" />,
//   'Weather Proof':          <Droplets className="w-5 h-5" />,
//   'Chemical Resistant':    <FlaskConical className="w-5 h-5" />,
//   'Long-lasting Durability': <Layers className="w-5 h-5" />,
//   'Anti-corrosion':        <Shield className="w-5 h-5" />,
//   'Self-healing Properties': <Zap className="w-5 h-5" />,
//   'Temperature Resistant': <Sun className="w-5 h-5" />,
//   'Flexible Application':  <Maximize2 className="w-5 h-5" />,
//   'Eco-friendly':          <Leaf className="w-5 h-5" />,
//   'Waterproof':            <Droplets className="w-5 h-5" />,
//   'Smooth Finish':         <Sparkles className="w-5 h-5" />,
//   'Excellent Adhesion':    <Shield className="w-5 h-5" />,
//   'Quick Drying':          <Zap className="w-5 h-5" />,
//   'Low VOC':               <Leaf className="w-5 h-5" />,
//   'Superior Adhesion':     <Shield className="w-5 h-5" />,
//   'High Gloss Finish':     <Sparkles className="w-5 h-5" />,
//   'Scratch Resistant':     <Shield className="w-5 h-5" />,
//   'Scrub Resistant':       <Award className="w-5 h-5" />,
//   'Stain Resistant':       <Droplets className="w-5 h-5" />,
//   'Color Retention':       <Sun className="w-5 h-5" />,
//   'Anti-fungal':           <Leaf className="w-5 h-5" />,
//   'Elastic Properties':    <Maximize2 className="w-5 h-5" />,
//   'Crack Bridging':        <Hammer className="w-5 h-5" />,
//   'Fade Resistance':       <Sun className="w-5 h-5" />,
//   'Breathable Coating':    <Leaf className="w-5 h-5" />,
//   'Mildew Resistance':     <Shield className="w-5 h-5" />,
// }
// const DEFAULT_ICON = <Layers className="w-5 h-5" />

// // ─── Feature Descriptions ─────────────────────────────────────────
// const FEATURE_DESCRIPTIONS: Record<string, string> = {
//   'UV Resistant': 'Blocks harsh sunlight exposure to preserve colour strength and surface life over years of outdoor exposure.',
//   'Weather Proof': 'Shields against rain, humidity, and seasonal shifts — keeping the coating intact through all conditions.',
//   'Chemical Resistant': 'Withstands contact with industrial chemicals and frequent cleaning agents without surface degradation.',
//   'Long-lasting Durability': 'Engineered for extended performance cycles so the finish remains dependable for years, not months.',
//   'Anti-corrosion': 'Forms a molecular barrier that actively resists rust initiation and metal surface deterioration.',
//   'Self-healing Properties': 'Micro-recovery technology that helps minor surface marks close over time for a consistently clean look.',
//   'Temperature Resistant': 'Retains its full coating integrity from sub-zero cold to peak summer heat without cracking or peeling.',
//   'Flexible Application': 'Compatible with brush, roller, and spray — adapting seamlessly to any job site requirement.',
//   'Eco-friendly': 'Formulated with a responsible approach — safer for applicators, occupants, and the surrounding environment.',
//   'Waterproof': 'Creates a hydrophobic surface layer that actively stops water penetration and protects the substrate below.',
//   'Smooth Finish': 'Levels uniformly across all surface types, resulting in a refined, even texture that elevates appearance.',
//   'Excellent Adhesion': 'Bonds with exceptional grip to the surface substrate for reliable, long-lasting topcoat performance.',
//   'Quick Drying': 'Touch-dry within 30 minutes. Re-coatable in 4–6 hours — significantly reducing project turnaround time.',
//   'Low VOC': 'Drastically reduced solvent emissions for improved indoor air quality during and after application.',
//   'Superior Adhesion': 'Multi-surface grip formula ensures the coating system holds firm across diverse surface conditions.',
//   'High Gloss Finish': 'Mirror-bright reflective surface that adds depth, premium visual richness, and easy-clean properties.',
//   'Scratch Resistant': 'Hard-set surface film resists minor abrasions during everyday use and routine cleaning.',
//   'Scrub Resistant': 'Engineered to endure repeated cleaning cycles without visible wear, fading, or surface breakdown.',
//   'Stain Resistant': 'Non-porous surface treatment makes spills and common stains easy to wipe away before they set.',
//   'Color Retention': 'Advanced pigment stabilisers keep the shade vibrant and true-to-swatch for extended periods.',
//   'Anti-fungal': 'Active biostatic agents that suppress fungal colonisation in high-moisture, poorly-ventilated spaces.',
//   'Elastic Properties': 'Flexible film structure absorbs surface micro-movement without cracking, ideal for masonry surfaces.',
//   'Crack Bridging': 'Film elasticity spans hairline fractures up to 0.3 mm — preventing water ingress through minor cracks.',
//   'Fade Resistance': 'UV-stable pigment matrix fights colour degradation so the surface retains its original tone longer.',
//   'Breathable Coating': 'Open micro-pore structure allows trapped moisture vapour to escape, preventing blistering and peel.',
//   'Mildew Resistance': 'Active mould-inhibitor system limits mildew growth in bathrooms, basements, and coastal environments.',
//   'Consistent Quality': 'Batch-to-batch stability ensures every tin delivers the same finish, colour, and application performance.',
//   'Time Saving': 'Fast surface coverage and reduced drying windows compress project timelines without compromising quality.',
//   'Reduced Waste': 'High coverage rate means less product per square metre — optimising material spend on every project.',
//   'Superior Bonding': 'Dual-component adhesion formula creates a near-permanent surface bond on challenging substrates.',
//   'High Coverage': 'Covers up to 130–180 sq ft per litre for consistent, gap-free surface coverage in fewer coats.',
//   'Enhanced Longevity': 'Coating lifespan significantly extended versus standard formulations — reducing maintenance frequency.',
//   'Moisture Resistance': 'Moisture-barrier chemistry locks out dampness while allowing the substrate to breathe naturally.',
//   'Dust Resistance': 'Anti-static surface treatment repels airborne dust particles — keeping walls cleaner between washes.',
//   'Easy Maintenance': 'Smooth, sealed surface requires only a damp cloth to restore its original clean, uniform appearance.',
//   'Premium Finish': 'Luxury-grade surface texture that imparts a refined, professionally applied look to every surface.',
//   'Fast Curing': 'Accelerated cross-linking chemistry reaches full hardness faster — minimising downtime on active sites.',
//   'Strong Coverage': 'Dense pigment load delivers opaque, uniform coverage even over darker existing shades.',
//   'Application Ease': 'Low-drag, flow-optimised viscosity for smoother spreading, fewer roller marks, and easier brush control.',
//   'Surface Protection': 'Multi-layer defensive chemistry guards against abrasion, UV, moisture, and chemical attack simultaneously.',
// }

// // ─── How-to step icon map ─────────────────────────────────────────
// const STEP_ICONS = [
//   <Hammer className="w-5 h-5" />,
//   <Paintbrush className="w-5 h-5" />,
//   <Layers className="w-5 h-5" />,
//   <CheckCircle className="w-5 h-5" />,
//   <Sparkles className="w-5 h-5" />,
//   <BadgeCheck className="w-5 h-5" />,
// ]

// // ─── Spec Row ─────────────────────────────────────────────────────
// function SpecRow({ label, value, accent }: { label: string; value?: string; accent: string }) {
//   if (!value) return null
//   return (
//     <div className="flex items-start gap-4 py-3 border-b border-EDE6DA last:border-0">
//       <span
//         className="text-9px uppercase tracking-widest font-black w-28 shrink-0 pt-0.5"
//         style={{ color: '#9B8E7E', fontFamily: 'var(--font-inter)' }}
//       >
//         {label}
//       </span>
//       <span
//         className="text-sm font-semibold text-charcoal"
//         style={{ fontFamily: 'var(--font-inter)' }}
//       >
//         {value}
//       </span>
//     </div>
//   )
// }

// // ─── Animated number counter ──────────────────────────────────────
// function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
//   const [val, setVal] = useState(0)
//   const ref = useRef<HTMLSpanElement>(null)
//   const inView = useInView(ref, { once: true })
//   useEffect(() => {
//     if (!inView) return
//     let start = 0
//     const step = Math.ceil(end / 40)
//     const timer = setInterval(() => {
//       start += step
//       if (start >= end) { setVal(end); clearInterval(timer) }
//       else setVal(start)
//     }, 30)
//     return () => clearInterval(timer)
//   }, [inView, end])
//   return <span ref={ref}>{val}{suffix}</span>
// }

// // ─── Page interface ───────────────────────────────────────────────
// interface PageProps {
//   params: Promise<{ slug: string }>
// }

// export default function ProductDetailPage({ params }: PageProps) {
//   const resolvedParams = React.use(params)
//   const slug = resolvedParams?.slug
//   return <ProductDetailContainer slug={slug} />
// }

// // ─── Main container ───────────────────────────────────────────────
// function ProductDetailContainer({ slug }: { slug: string }) {
//   const router = useRouter()
//   const product = products.find(p => p.slug.toLowerCase() === slug.toLowerCase())
//   const productIndex = products.findIndex(p => p.slug.toLowerCase() === slug.toLowerCase())
//   const accent = ACCENTS[productIndex !== -1 ? productIndex % ACCENTS.length : 0]

//   type Tab = 'overview' | 'features' | 'howto' | 'specs'
//   const [activeTab, setActiveTab] = useState<Tab>('overview')
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [activePack, setActivePack] = useState(0)
//   const [expandedStep, setExpandedStep] = useState<number | null>(0)

//   useEffect(() => {
//     window.scrollTo(0, 0)
//     const onScroll = () => setScrolled(window.scrollY > 40)
//     window.addEventListener('scroll', onScroll, { passive: true })
//     onScroll()
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [slug])

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-FAF8F5 pt-[120px]">
//         <div className="text-center max-w-md bg-white border border-EDE7DC p-10 rounded-2rem shadow-sm">
//           <Paintbrush className="w-10 h-10 text-gold mx-auto mb-4 animate-pulse" />
//           <h1 className="font-serif text-2xl font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
//             Product Not Found
//           </h1>
//           <p className="text-xs text-charcoal-muted font-sans font-light mb-4 leading-relaxed">
//             The URL path <span className="text-red-500 font-mono bg-red-50 px-1.5 py-0.5 rounded border border-red-100">{slug}</span> could not be matched to any product.
//           </p>
//           <Link href="/products" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-charcoal hover:text-gold transition-colors">
//             <ArrowLeft className="w-4 h-4" /> Return to Catalog
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   const related = products.filter(p => p.category === product.category && p.slug !== slug).slice(0, 4)
//   const navBg = scrolled
//     ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-F0EAE1'
//     : 'bg-white/95 backdrop-blur-md border-b border-F0EAE1'

//   // Build "How To Apply" steps: use product's own data if present, else sensible generic steps
//   const howToSteps: { step: string; title: string; desc: string }[] =
//     (product as any).howToApply ?? [
//       { step: '01', title: 'Surface Preparation', desc: 'Clean the surface thoroughly. Remove dust, loose particles, grease, and any traces of algae or efflorescence. Fill hairline cracks with appropriate filler and allow to dry fully before proceeding.' },
//       { step: '02', title: 'Apply Primer or Undercoat', desc: 'Apply one even coat of a suitable primer or undercoat. Allow adequate drying time as specified on the primer datasheet — typically 4 hours — before applying topcoat.' },
//       { step: '03', title: 'First Coat Application', desc: 'Dilute the paint as recommended (usually 10–15% water for water-based, or thinner for solvent-based). Apply an even first coat using brush, roller, or spray gun in steady, overlapping strokes.' },
//       { step: '04', title: 'Drying & Re-coating', desc: 'Allow the first coat to dry completely — touch-dry in 30 minutes, re-coatable in 4–6 hours. Avoid painting in direct sunlight, high humidity, or temperatures below 10°C.' },
//       { step: '05', title: 'Second & Final Coat', desc: 'Apply a second finishing coat for full opacity and optimal protection. Maintain consistent stroke direction for a uniform finish. Total 2–3 coats recommended for best results.' },
//     ]

//   // Build pack sizes: use product's own array if present
//   const packSizes: string[] = (product as any).packSizes ?? product.packSizes ?? ['1 L', '4 L', '10 L', '20 L']

//   // Build technical specs object
//   const techSpecs = (product as any).technicalSpecs ?? {}

//   // Summary stats for the hero strip
//   const summaryStats = [
//     { label: 'Coverage', value: techSpecs.coverage ?? '130–150 sq.ft/L', icon: <Ruler className="w-4 h-4" /> },
//     { label: 'Finish', value: techSpecs.finish ?? product.finish ?? 'Premium', icon: <Sparkles className="w-4 h-4" /> },
//     { label: 'Dry Time', value: techSpecs.dryingTime ?? '30 min touch', icon: <Clock className="w-4 h-4" /> },
//     { label: 'Application', value: techSpecs.application ?? 'Brush / Roller / Spray', icon: <Paintbrush className="w-4 h-4" /> },
//   ]

//   const TABS: { id: Tab; label: string }[] = [
//     { id: 'overview', label: 'Overview' },
//     { id: 'features', label: 'Key Features' },
//     { id: 'howto', label: 'How to Apply' },
//     { id: 'specs', label: 'Specifications' },
//   ]

//   return (
//     <div className="bg-FAF8F5 min-h-screen selection:bg-F3E7C9 pt-[72px]">
//       {/* ── Ambient Grain ── */}
//       <div
//         className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//           backgroundRepeat: 'repeat',
//           backgroundSize: '128px 128px',
//         }}
//       />
//       {/* ── Accent glow ── */}
//       <div
//         className="pointer-events-none fixed top-0 right-0 w-[520px] h-[520px] z-0"
//         style={{ background: `radial-gradient(circle at top right, ${accent}0A 0%, transparent 65%)` }}
//       />

//       {/* ══════════════════ HEADER ══════════════════ */}
//       <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
//         <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-4 flex-shrink-0 min-w-[260px]">
//             <div className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-E8E2D8 p-2 shrink-0">
//               <Image src="/Ara_Weather_Coat.png" alt="Colorsome logo" width={62} height={62} className="w-full h-full object-contain scale-[1.08]" />
//             </div>
//             <div className="flex flex-col justify-center leading-none">
//               <div className="flex items-start">
//                 <span className="transition-colors duration-300 text-2D2D2D" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', lineHeight: 0.82, fontWeight: 700, letterSpacing: '-0.055em', textTransform: 'uppercase' }}>COLORSOME</span>
//                 <span className="transition-colors duration-300 text-2D2D2D" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.55rem', lineHeight: 1, fontWeight: 700, marginLeft: '0.18rem', marginTop: '0.12rem', letterSpacing: '0.04em' }}>®</span>
//               </div>
//             </div>
//           </Link>
//           {/* Desktop nav */}
//           <nav className="hidden md:flex items-center">
//             <div className="flex items-center gap-1 rounded-full border border-black/[0.06] bg-white/80 backdrop-blur-md px-2 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
//               {[['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => {
//                 const isActive = label === 'Products'
//                 return (
//                   <Link key={label} href={href} className={`relative rounded-full px-4 py-2.5 transition-all duration-200 ${isActive ? 'text-2D2D2D bg-F3E7C9' : 'text-6B6B6B hover:text-2D2D2D hover:bg-black/[0.04]'}`} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', fontWeight: isActive ? 600 : 500, letterSpacing: '-0.01em', lineHeight: 1 }}>
//                     {label}
//                   </Link>
//                 )
//               })}
//             </div>
//           </nav>
//           <div className="flex items-center gap-3">
//             <Link href="/assistance" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 text-white flex-shrink-0" style={{ background: '#2D2D2D' }}>
//               <Phone className="w-4 h-4" /> Book Assistance
//             </Link>
//             <button className="md:hidden p-2 rounded-lg transition-colors text-2D2D2D" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="md:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-4 space-y-3">
//               {[['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => (
//                 <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-gray-50">{label}</Link>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* ══════════════════ BREADCRUMB ══════════════════ */}
//       <div className="max-w-[1280px] mx-auto px-6 pt-6 pb-4 flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-[#8C8C8C]" style={{ fontFamily: 'var(--font-inter)' }}>
//         <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
//         <ChevronRight className="w-3 h-3 text-gray-300" />
//         <Link href="/products" className="hover:text-charcoal transition-colors">Products</Link>
//         <ChevronRight className="w-3 h-3 text-gray-300" />
//         <span className="text-charcoal font-black truncate">{product.name}</span>
//       </div>

//       {/* ══════════════════ HERO — PRODUCT STAGE ══════════════════ */}
//       <section className="max-w-[1280px] mx-auto px-6 pb-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

//           {/* ── LEFT: Image + Quick Specs ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-5 lg:sticky lg:top-[116px]"
//           >
//             {/* Image Card */}
//             <div className="rounded-[2.5rem] overflow-hidden bg-white border border-EDE6DA shadow-[0_20px_50px_rgba(45,45,45,0.05)] p-8 relative group transition-shadow duration-500 hover:shadow-[0_32px_70px_rgba(45,45,45,0.10)]">
//               {/* Accent top bar */}
//               <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}CC)` }} />
//               {/* Category badge */}
//               <span className="absolute top-5 right-5 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-md text-white shadow-sm" style={{ background: accent, fontFamily: 'var(--font-inter)' }}>
//                 {product.category?.split(' ')[0] ?? 'Paint'}
//               </span>
//               {/* Hover rings */}
//               <div className="absolute w-64 h-64 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ borderColor: `${accent}20`, borderWidth: '1px' }} />
//               <div className="absolute w-48 h-48 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ borderColor: `${accent}12`, borderWidth: '1px' }} />
//               {/* Glow spot */}
//               <div className="absolute inset-0 rounded-[2.5rem] transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${accent}0A 0%, transparent 72%)` }} />
//               {/* Product image */}
//               <motion.div
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//                 whileHover={{ scale: 1.06, y: -12 }}
//                 className="relative flex items-center justify-center cursor-zoom-in"
//                 style={{ height: 380 }}
//               >
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={360}
//                   height={380}
//                   className="h-80 w-auto object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.13)] z-10 relative"
//                   priority
//                 />
//               </motion.div>
//             </div>

//             {/* ── Quick Stat Strip ── */}
//             <div className="mt-5 grid grid-cols-2 gap-3">
//               {summaryStats.map(({ label, value, icon }) => (
//                 <div
//                   key={label}
//                   className="bg-white border border-EDE6DA rounded-2xl p-4 text-center group hover:shadow-md transition-all duration-200 hover:border-current cursor-default"
//                   style={{ '--tw-border-opacity': '1' } as React.CSSProperties}
//                 >
//                   <div className="flex items-center justify-center gap-1.5 mb-1.5" style={{ color: accent }}>
//                     {icon}
//                   </div>
//                   <p className="text-[9px] uppercase tracking-widest font-bold text-[#9B8E7E] mb-0.5" style={{ fontFamily: 'var(--font-inter)' }}>{label}</p>
//                   <p className="text-sm font-semibold text-charcoal leading-tight" style={{ fontFamily: 'var(--font-inter)' }}>{value}</p>
//                 </div>
//               ))}
//             </div>

//             {/* ── Pack Size Selector ── */}
//             {packSizes.length > 0 && (
//               <div className="mt-5 bg-white border border-EDE6DA rounded-2xl p-5">
//                 <p className="text-[9px] uppercase tracking-widest font-black text-[#9B8E7E] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>Available Pack Sizes</p>
//                 <div className="flex flex-wrap gap-2">
//                   {packSizes.map((size, i) => (
//                     <button
//                       key={size}
//                       onClick={() => setActivePack(i)}
//                       className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-200"
//                       style={{
//                         fontFamily: 'var(--font-inter)',
//                         background: activePack === i ? accent : 'transparent',
//                         color: activePack === i ? '#fff' : '#2D2D2D',
//                         border: activePack === i ? `1.5px solid ${accent}` : '1.5px solid #EDE6DA',
//                         boxShadow: activePack === i ? `0 4px 14px ${accent}30` : 'none',
//                       }}
//                     >
//                       <Package className="w-3 h-3 inline mr-1 opacity-70" />
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </motion.div>

//           {/* ── RIGHT: Text + Tabs ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
//             className="lg:col-span-7 space-y-8"
//           >
//             {/* Category + Status pill */}
//             <div>
//               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: `${accent}12` }}>
//                 <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
//                 <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: accent, fontFamily: 'var(--font-inter)' }}>
//                   {product.status} &nbsp;·&nbsp; {product.id.toString().padStart(2, '0')}
//                 </span>
//               </div>
//               {/* Product name */}
//               <h1
//                 className="text-4xl md:text-5xl font-bold text-charcoal leading-[1.06] tracking-[-0.03em] mb-4"
//                 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}
//               >
//                 {product.name}
//               </h1>
//               {/* Description */}
//               <p className="text-[15px] sm:text-[16px] text-charcoal-muted leading-relaxed font-light" style={{ fontFamily: 'var(--font-inter)' }}>
//                 {(product as any).fullDescription ?? product.description}
//               </p>
//             </div>

//             {/* ── TABS BAR ── */}
//             <div className="border-b border-EDE6DA">
//               <div className="flex gap-0 overflow-x-auto scrollbar-none">
//                 {TABS.map(tab => {
//                   const sel = activeTab === tab.id
//                   return (
//                     <button
//                       key={tab.id}
//                       onClick={() => setActiveTab(tab.id)}
//                       className="px-5 py-3 text-[11px] uppercase tracking-widest font-black transition-all border-b-2 -mb-px whitespace-nowrap"
//                       style={{
//                         fontFamily: 'var(--font-inter)',
//                         color: sel ? '#2D2D2D' : '#9B8E7E',
//                         borderColor: sel ? accent : 'transparent',
//                       }}
//                     >
//                       {tab.label}
//                     </button>
//                   )
//                 })}
//               </div>
//             </div>

//             {/* ── TAB CONTENT ── */}
//             <div className="min-h-[200px]">
//               <AnimatePresence mode="wait">

//                 {/* ── OVERVIEW ── */}
//                 {activeTab === 'overview' && (
//                   <motion.div key="overview" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }} className="space-y-5">
//                     {/* Category + Status info cards */}
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                       <div className="bg-white rounded-2xl border border-EDE6DA p-5">
//                         <p className="text-[9px] uppercase font-bold tracking-widest text-[#9B8E7E] mb-1" style={{ fontFamily: 'var(--font-inter)' }}>Category</p>
//                         <p className="font-bold text-charcoal" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>{product.category}</p>
//                       </div>
//                       <div className="bg-white rounded-2xl border border-EDE6DA p-5">
//                         <p className="text-[9px] uppercase font-bold tracking-widest text-[#9B8E7E] mb-1" style={{ fontFamily: 'var(--font-inter)' }}>Availability</p>
//                         <p className="font-bold text-charcoal" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>{product.status ?? 'In Stock'}</p>
//                       </div>
//                       <div className="bg-white rounded-2xl border border-EDE6DA p-5">
//                         <p className="text-[9px] uppercase font-bold tracking-widest text-[#9B8E7E] mb-1" style={{ fontFamily: 'var(--font-inter)' }}>Finish Type</p>
//                         <p className="font-bold text-charcoal" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>{techSpecs.finish ?? product.finish ?? 'Premium'}</p>
//                       </div>
//                     </div>

//                     {/* Applications list */}
//                     {product.applications && product.applications.length > 0 && (
//                       <div>
//                         <p className="text-[9px] uppercase font-bold tracking-widest text-[#9B8E7E] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>Suitable For</p>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                           {product.applications.map((app: string, i: number) => (
//                             <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-EDE6DA rounded-xl">
//                               <span className="w-2 h-2 rounded-full shrink-0" style={{ background: accent }} />
//                               <p className="text-[14px] text-charcoal font-medium" style={{ fontFamily: 'var(--font-inter)' }}>{app}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Feature chips preview */}
//                     {product.features && product.features.length > 0 && (
//                       <div>
//                         <p className="text-[9px] uppercase font-bold tracking-widest text-[#9B8E7E] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>Highlights</p>
//                         <div className="flex flex-wrap gap-2">
//                           {product.features.slice(0, 6).map((f: string, i: number) => (
//                             <motion.span
//                               key={i}
//                               initial={{ opacity: 0, scale: 0.9 }}
//                               animate={{ opacity: 1, scale: 1 }}
//                               transition={{ delay: i * 0.05 }}
//                               className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
//                               style={{ background: `${accent}12`, color: accent, fontFamily: 'var(--font-inter)' }}
//                             >
//                               <CheckCircle className="w-3 h-3" /> {f}
//                             </motion.span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </motion.div>
//                 )}

//                 {/* ── KEY FEATURES ── */}
//                 {activeTab === 'features' && (
//                   <motion.div key="features" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {product.features?.map((f: string, i: number) => {
//                         const desc = FEATURE_DESCRIPTIONS[f] ?? `${f} helps improve coating performance, usability, and long-term surface reliability.`
//                         const icon = FEATURE_ICON_MAP[f] ?? DEFAULT_ICON
//                         return (
//                           <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 8 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: i * 0.06, duration: 0.3 }}
//                             className="group flex flex-col gap-3 p-5 bg-white border border-EDE6DA rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
//                           >
//                             {/* Icon circle */}
//                             <div className="flex items-center gap-3">
//                               <div
//                                 className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
//                                 style={{ background: `${accent}12`, color: accent }}
//                               >
//                                 {icon}
//                               </div>
//                               <p className="text-[15px] font-bold text-charcoal leading-tight" style={{ fontFamily: 'var(--font-inter)' }}>{f}</p>
//                             </div>
//                             <p className="text-[13.5px] text-charcoal-muted leading-[1.6]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>{desc}</p>
//                             {/* Bottom accent line on hover */}
//                             <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full mt-auto" style={{ background: `${accent}40` }} />
//                           </motion.div>
//                         )
//                       })}
//                     </div>
//                   </motion.div>
//                 )}

//                 {/* ── HOW TO APPLY ── */}
//                 {activeTab === 'howto' && (
//                   <motion.div key="howto" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }} className="space-y-3">
//                     {howToSteps.map(({ step, title, desc }, i) => {
//                       const isOpen = expandedStep === i
//                       return (
//                         <motion.div
//                           key={step}
//                           initial={{ opacity: 0, y: 8 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: i * 0.07 }}
//                           className="bg-white border border-EDE6DA rounded-2xl overflow-hidden"
//                           style={{ borderLeft: `3px solid ${isOpen ? accent : '#EDE6DA'}` }}
//                         >
//                           <button
//                             onClick={() => setExpandedStep(isOpen ? null : i)}
//                             className="w-full flex items-center gap-4 px-5 py-4 text-left group"
//                           >
//                             {/* Step number bubble */}
//                             <div
//                               className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200"
//                               style={{ background: isOpen ? accent : `${accent}14`, color: isOpen ? '#fff' : accent }}
//                             >
//                               {STEP_ICONS[i] ?? <CheckCircle className="w-5 h-5" />}
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: accent, fontFamily: 'var(--font-inter)' }}>Step {step}</span>
//                               <p className="text-[14px] font-bold text-charcoal" style={{ fontFamily: 'var(--font-inter)' }}>{title}</p>
//                             </div>
//                             <ChevronDown
//                               className="w-4 h-4 text-charcoal-muted shrink-0 transition-transform duration-300"
//                               style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: isOpen ? accent : '#9B8E7E' }}
//                             />
//                           </button>
//                           <AnimatePresence>
//                             {isOpen && (
//                               <motion.div
//                                 initial={{ height: 0, opacity: 0 }}
//                                 animate={{ height: 'auto', opacity: 1 }}
//                                 exit={{ height: 0, opacity: 0 }}
//                                 transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
//                                 className="overflow-hidden"
//                               >
//                                 <div className="px-5 pb-5 pt-1">
//                                   <p className="text-[14px] text-charcoal-muted leading-relaxed" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>{desc}</p>
//                                 </div>
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </motion.div>
//                       )
//                     })}
//                     {/* Pro tip */}
//                     <div className="flex items-start gap-3 p-4 rounded-2xl border" style={{ background: `${accent}06`, borderColor: `${accent}20` }}>
//                       <Info className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accent }} />
//                       <p className="text-[13px] text-charcoal-muted leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
//                         <span className="font-semibold text-charcoal">Pro Tip:</span> Always apply in ambient temperatures between 10°C–40°C and relative humidity below 85% for the best adhesion and finish quality.
//                       </p>
//                     </div>
//                   </motion.div>
//                 )}

//                 {/* ── SPECIFICATIONS ── */}
//                 {activeTab === 'specs' && (
//                   <motion.div key="specs" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>
//                     <div className="bg-white border border-EDE6DA rounded-2xl overflow-hidden">
//                       {/* Section heading */}
//                       <div className="px-6 py-4 border-b border-EDE6DA" style={{ background: `${accent}06` }}>
//                         <p className="text-[11px] uppercase font-black tracking-widest" style={{ color: accent, fontFamily: 'var(--font-inter)' }}>Technical Data Sheet</p>
//                       </div>
//                       <div className="px-6 py-2">
//                         <SpecRow label="Product Name" value={product.name} accent={accent} />
//                         <SpecRow label="Category" value={product.category} accent={accent} />
//                         <SpecRow label="Finish" value={techSpecs.finish ?? product.finish} accent={accent} />
//                         <SpecRow label="Coverage" value={techSpecs.coverage} accent={accent} />
//                         <SpecRow label="Drying Time" value={techSpecs.dryingTime} accent={accent} />
//                         <SpecRow label="Re-coat Time" value={techSpecs.recoatTime} accent={accent} />
//                         <SpecRow label="Application" value={techSpecs.application} accent={accent} />
//                         <SpecRow label="Dilution" value={techSpecs.dilution} accent={accent} />
//                         <SpecRow label="Washability" value={techSpecs.washability} accent={accent} />
//                         <SpecRow label="VOC Level" value={techSpecs.voc} accent={accent} />
//                         <SpecRow label="Base" value={techSpecs.base} accent={accent} />
//                         <SpecRow label="Pack Sizes" value={packSizes.join(', ')} accent={accent} />
//                         <SpecRow label="Suitable For" value={product.applications?.join(', ')} accent={accent} />
//                         <SpecRow label="Status" value={product.status} accent={accent} />
//                       </div>
//                     </div>
//                     {/* Disclaimer */}
//                     <p className="text-[11px] text-[#B0A898] mt-4 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
//                       * Coverage rates are approximate and may vary based on surface porosity, application method, and number of coats. For precise data, refer to the product Technical Data Sheet.
//                     </p>
//                   </motion.div>
//                 )}

//               </AnimatePresence>
//             </div>

//             {/* ── CTA Buttons ── */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-EDE6DA">
//               <Link
//                 href="/assistance"
//                 className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-black text-white shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex-1"
//                 style={{ background: `linear-gradient(135deg, ${accent} 0%, ${accent}CC 100%)`, fontFamily: 'var(--font-inter)', letterSpacing: '0.1em' }}
//               >
//                 <Phone className="w-3.5 h-3.5 animate-pulse" /> Get Expert Consultation
//               </Link>
//               <button
//                 onClick={() => router.push('/products')}
//                 className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white border border-EDE6DA text-charcoal rounded-xl text-xs uppercase tracking-widest font-black shadow-sm hover:bg-FDFBF7 hover:border-D5CBBC active:scale-[0.98] transition-all"
//                 style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.1em' }}
//               >
//                 <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ──════════════════ FEATURE HIGHLIGHTS STRIP ══════════════════ */}
//       {product.features && product.features.length > 0 && (
//         <section className="border-t border-EDE6DA py-16" style={{ background: BRAND.dark }}>
//           <div className="max-w-[1280px] mx-auto px-6">
//             <div className="text-center mb-10">
//               <p className="text-[10px] uppercase tracking-[0.25em] font-black mb-2" style={{ color: accent, fontFamily: 'var(--font-inter)' }}>Performance Profile</p>
//               <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>
//                 What Makes {product.name} Outstanding
//               </h2>
//             </div>
//             <motion.div
//               variants={stagger}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: '-60px' }}
//               className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
//             >
//               {product.features.map((f: string, i: number) => {
//                 const icon = FEATURE_ICON_MAP[f] ?? DEFAULT_ICON
//                 return (
//                   <motion.div
//                     key={i}
//                     variants={scaleIn}
//                     whileHover={{ y: -4, scale: 1.02 }}
//                     className="p-5 rounded-2xl border cursor-default"
//                     style={{ background: `${accent}10`, borderColor: `${accent}20` }}
//                   >
//                     <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300" style={{ background: `${accent}20`, color: accent }}>
//                       {icon}
//                     </div>
//                     <p className="text-[13px] font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-inter)' }}>{f}</p>
//                   </motion.div>
//                 )
//               })}
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* ──════════════════ WHY CHOOSE SECTION ══════════════════ */}
//       <section className="py-16 bg-white">
//         <div className="max-w-[1280px] mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -24 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ type: 'spring', damping: 22 }}
//             >
//               <p className="text-[10px] uppercase tracking-[0.25em] font-black mb-3" style={{ color: accent, fontFamily: 'var(--font-inter)' }}>Product Advantage</p>
//               <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-5 leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
//                 Why Professionals Choose {product.name}
//               </h2>
//               <p className="text-[15px] text-charcoal-muted leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
//                 {(product as any).fullDescription ?? product.description} Every batch is quality-checked and formulated to Colorsome's strict performance standards.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { icon: <ThumbsUp className="w-5 h-5" />, label: 'Trusted Formula', val: '10+ Yrs' },
//                   { icon: <Star className="w-5 h-5" />, label: 'Premium Grade', val: 'A+ Class' },
//                   { icon: <BadgeCheck className="w-5 h-5" />, label: 'Quality Tested', val: '12-Stage QC' },
//                   { icon: <Eye className="w-5 h-5" />, label: 'Colour Verified', val: 'Lab Matched' },
//                 ].map(({ icon, label, val }) => (
//                   <div key={label} className="flex items-center gap-3 p-4 rounded-xl border border-EDE6DA bg-FAF8F5">
//                     <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${accent}12`, color: accent }}>{icon}</div>
//                     <div>
//                       <p className="text-[9px] uppercase tracking-wider font-black text-[#9B8E7E]" style={{ fontFamily: 'var(--font-inter)' }}>{label}</p>
//                       <p className="text-[13px] font-bold text-charcoal" style={{ fontFamily: 'var(--font-inter)' }}>{val}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//             {/* Stats column */}
//             <motion.div
//               initial={{ opacity: 0, x: 24 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ type: 'spring', damping: 22, delay: 0.1 }}
//               className="grid grid-cols-2 gap-5"
//             >
//               {[
//                 { end: 98, suffix: '%', label: 'Customer Satisfaction' },
//                 { end: 130, suffix: '+', label: 'Sq.ft Coverage / Litre' },
//                 { end: 10, suffix: ' Yrs', label: 'Proven Performance Life' },
//                 { end: 100, suffix: '%', label: 'Eco-Friendly & Low VOC' },
//               ].map(({ end, suffix, label }) => (
//                 <div key={label} className="p-6 rounded-2xl border border-EDE6DA bg-FAF8F5 text-center">
//                   <p className="font-bold text-4xl mb-1" style={{ fontFamily: 'var(--font-cormorant)', color: accent }}>
//                     <CountUp end={end} suffix={suffix} />
//                   </p>
//                   <p className="text-[11px] text-[#9B8E7E] uppercase tracking-wider font-semibold" style={{ fontFamily: 'var(--font-inter)' }}>{label}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ──════════════════ RELATED PRODUCTS ══════════════════ */}
//       {related.length > 0 && (
//         <section className="border-t border-EDE6DA py-20 bg-FAF8F5">
//           <div className="max-w-[1280px] mx-auto px-6">
//             <div className="mb-10">
//               <p className="text-[10px] uppercase tracking-[0.25em] font-black mb-1" style={{ color: '#B8A48A', fontFamily: 'var(--font-inter)' }}>You May Also Like</p>
//               <h2 className="text-3xl font-bold text-charcoal tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>Related Formulations</h2>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {related.map((p, i) => {
//                 const relAccent = ACCENTS[i % ACCENTS.length]
//                 return (
//                   <Link
//                     key={p.id}
//                     href={`/products/${p.slug}`}
//                     className="group block flex flex-col justify-between rounded-[1.8rem] bg-white border border-EDE6DA overflow-hidden hover:shadow-[0_24px_50px_rgba(45,45,45,0.06)] hover:-translate-y-1 transition-all duration-500 h-full"
//                   >
//                     <div>
//                       <div className="h-1 w-full" style={{ background: relAccent }} />
//                       <div className="flex items-center justify-center p-6 relative overflow-hidden" style={{ height: 180 }}>
//                         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle, ${relAccent}0B 0%, transparent 70%)` }} />
//                         <Image src={p.image} alt={p.name} width={160} height={180} className="h-36 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500" />
//                       </div>
//                       <div className="p-6 pt-2">
//                         <h3 className="text-lg font-bold text-charcoal mb-1 leading-tight group-hover:transition-colors duration-200" style={{ fontFamily: 'var(--font-cormorant)', color: undefined }}>{p.name}</h3>
//                         <p className="text-xs leading-relaxed text-charcoal-muted line-clamp-2 font-light" style={{ fontFamily: 'var(--font-inter)' }}>{p.description}</p>
//                       </div>
//                     </div>
//                     <div className="p-6 pt-0">
//                       <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider" style={{ color: relAccent }}>
//                         View Details <ChevronRight className="w-3 h-3" />
//                       </span>
//                     </div>
//                   </Link>
//                 )
//               })}
//             </div>
//           </div>
//         </section>
//       )}

//       <Footer />
//     </div>
//   )
// }










'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  ArrowLeft, CheckCircle, Phone, ChevronRight, Menu, X,
  Shield, Droplets, Layers, Zap, Leaf, Maximize2, Sun,
  Paintbrush, Star, Clock, Award, FlaskConical, Ruler,
  Sparkles, Package, ChevronDown, Eye, BadgeCheck,
  ThumbsUp, Info, Beaker, Hammer
} from 'lucide-react'
import { products } from '../data'
import { Footer } from '@/src/components/Footer';

const ACCENTS = ['#E91E8C', '#2196F3', '#4CAF50', '#FF5722', '#FFC107']

const BRAND = {
  pink: '#E91E8C',
  blue: '#2196F3',
  green: '#4CAF50',
  orange: '#FF5722',
  yellow: '#FFC107',
  dark: '#2D2D2D',
}

// ─── Motion Variants ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 26, stiffness: 180 } },
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}
const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring' as const, damping: 22, stiffness: 200 } },
}

// ─── Feature → Icon map ───────────────────────────────────────────
const FEATURE_ICON_MAP: Record<string, React.ReactNode> = {
  'UV Resistant':           <Sun className="w-5 h-5" />,
  'Weather Proof':          <Droplets className="w-5 h-5" />,
  'Chemical Resistant':    <FlaskConical className="w-5 h-5" />,
  'Long-lasting Durability': <Layers className="w-5 h-5" />,
  'Anti-corrosion':        <Shield className="w-5 h-5" />,
  'Self-healing Properties': <Zap className="w-5 h-5" />,
  'Temperature Resistant': <Sun className="w-5 h-5" />,
  'Flexible Application':  <Maximize2 className="w-5 h-5" />,
  'Eco-friendly':          <Leaf className="w-5 h-5" />,
  'Waterproof':            <Droplets className="w-5 h-5" />,
  'Smooth Finish':         <Sparkles className="w-5 h-5" />,
  'Excellent Adhesion':    <Shield className="w-5 h-5" />,
  'Quick Drying':          <Zap className="w-5 h-5" />,
  'Low VOC':               <Leaf className="w-5 h-5" />,
  'Superior Adhesion':     <Shield className="w-5 h-5" />,
  'High Gloss Finish':     <Sparkles className="w-5 h-5" />,
  'Scratch Resistant':     <Shield className="w-5 h-5" />,
  'Scrub Resistant':       <Award className="w-5 h-5" />,
  'Stain Resistant':       <Droplets className="w-5 h-5" />,
  'Color Retention':       <Sun className="w-5 h-5" />,
  'Anti-fungal':           <Leaf className="w-5 h-5" />,
  'Elastic Properties':    <Maximize2 className="w-5 h-5" />,
  'Crack Bridging':        <Hammer className="w-5 h-5" />,
  'Fade Resistance':       <Sun className="w-5 h-5" />,
  'Breathable Coating':    <Leaf className="w-5 h-5" />,
  'Mildew Resistance':     <Shield className="w-5 h-5" />,
}
const DEFAULT_ICON = <Layers className="w-5 h-5" />

// ─── Feature Descriptions ─────────────────────────────────────────
const FEATURE_DESCRIPTIONS: Record<string, string> = {
  'UV Resistant': 'Blocks harsh sunlight exposure to preserve colour strength and surface life over years of outdoor exposure.',
  'Weather Proof': 'Shields against rain, humidity, and seasonal shifts — keeping the coating intact through all conditions.',
  'Chemical Resistant': 'Withstands contact with industrial chemicals and frequent cleaning agents without surface degradation.',
  'Long-lasting Durability': 'Engineered for extended performance cycles so the finish remains dependable for years, not months.',
  'Anti-corrosion': 'Forms a molecular barrier that actively resists rust initiation and metal surface deterioration.',
  'Self-healing Properties': 'Micro-recovery technology that helps minor surface marks close over time for a consistently clean look.',
  'Temperature Resistant': 'Retains its full coating integrity from sub-zero cold to peak summer heat without cracking or peeling.',
  'Flexible Application': 'Compatible with brush, roller, and spray — adapting seamlessly to any job site requirement.',
  'Eco-friendly': 'Formulated with a responsible approach — safer for applicators, occupants, and the surrounding environment.',
  'Waterproof': 'Creates a hydrophobic surface layer that actively stops water penetration and protects the substrate below.',
  'Smooth Finish': 'Levels uniformly across all surface types, resulting in a refined, even texture that elevates appearance.',
  'Excellent Adhesion': 'Bonds with exceptional grip to the surface substrate for reliable, long-lasting topcoat performance.',
  'Quick Drying': 'Touch-dry within 30 minutes. Re-coatable in 4–6 hours — significantly reducing project turnaround time.',
  'Low VOC': 'Drastically reduced solvent emissions for improved indoor air quality during and after application.',
  'Superior Adhesion': 'Multi-surface grip formula ensures the coating system holds firm across diverse surface conditions.',
  'High Gloss Finish': 'Mirror-bright reflective surface that adds depth, premium visual richness, and easy-clean properties.',
  'Scratch Resistant': 'Hard-set surface film resists minor abrasions during everyday use and routine cleaning.',
  'Scrub Resistant': 'Engineered to endure repeated cleaning cycles without visible wear, fading, or surface breakdown.',
  'Stain Resistant': 'Non-porous surface treatment makes spills and common stains easy to wipe away before they set.',
  'Color Retention': 'Advanced pigment stabilisers keep the shade vibrant and true-to-swatch for extended periods.',
  'Anti-fungal': 'Active biostatic agents that suppress fungal colonisation in high-moisture, poorly-ventilated spaces.',
  'Elastic Properties': 'Flexible film structure absorbs surface micro-movement without cracking, ideal for masonry surfaces.',
  'Crack Bridging': 'Film elasticity spans hairline fractures up to 0.3 mm — preventing water ingress through minor cracks.',
  'Fade Resistance': 'UV-stable pigment matrix fights colour degradation so the surface retains its original tone longer.',
  'Breathable Coating': 'Open micro-pore structure allows trapped moisture vapour to escape, preventing blistering and peel.',
  'Mildew Resistance': 'Active mould-inhibitor system limits mildew growth in bathrooms, basements, and coastal environments.',
  'Consistent Quality': 'Batch-to-batch stability ensures every tin delivers the same finish, colour, and application performance.',
  'Time Saving': 'Fast surface coverage and reduced drying windows compress project timelines without compromising quality.',
  'Reduced Waste': 'High coverage rate means less product per square metre — optimising material spend on every project.',
  'Superior Bonding': 'Dual-component adhesion formula creates a near-permanent surface bond on challenging substrates.',
  'High Coverage': 'Covers up to 130–180 sq ft per litre for consistent, gap-free surface coverage in fewer coats.',
  'Enhanced Longevity': 'Coating lifespan significantly extended versus standard formulations — reducing maintenance frequency.',
  'Moisture Resistance': 'Moisture-barrier chemistry locks out dampness while allowing the substrate to breathe naturally.',
  'Dust Resistance': 'Anti-static surface treatment repels airborne dust particles — keeping walls cleaner between washes.',
  'Easy Maintenance': 'Smooth, sealed surface requires only a damp cloth to restore its original clean, uniform appearance.',
  'Premium Finish': 'Luxury-grade surface texture that imparts a refined, professionally applied look to every surface.',
  'Fast Curing': 'Accelerated cross-linking chemistry reaches full hardness faster — minimising downtime on active sites.',
  'Strong Coverage': 'Dense pigment load delivers opaque, uniform coverage even over darker existing shades.',
  'Application Ease': 'Low-drag, flow-optimised viscosity for smoother spreading, fewer roller marks, and easier brush control.',
  'Surface Protection': 'Multi-layer defensive chemistry guards against abrasion, UV, moisture, and chemical attack simultaneously.',
}

// ─── How-to step icon map ─────────────────────────────────────────
const STEP_ICONS = [
  <Hammer className="w-5 h-5" />,
  <Paintbrush className="w-5 h-5" />,
  <Layers className="w-5 h-5" />,
  <CheckCircle className="w-5 h-5" />,
  <Sparkles className="w-5 h-5" />,
  <BadgeCheck className="w-5 h-5" />,
]

// ─── Spec Row ─────────────────────────────────────────────────────
function SpecRow({ label, value, accent }: { label: string; value?: string; accent: string }) {
  if (!value) return null
  return (
    <div className="flex items-start gap-4 py-3 border-b border-EDE6DA last:border-0">
      <span
        className="text-9px uppercase tracking-widest font-black w-28 shrink-0 pt-0.5"
        style={{ color: '#9B8E7E', fontFamily: 'var(--font-inter)' }}
      >
        {label}
      </span>
      <span
        className="text-sm font-semibold text-charcoal"
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {value}
      </span>
    </div>
  )
}

// ─── Animated number counter ──────────────────────────────────────
function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(end / 40)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setVal(end); clearInterval(timer) }
      else setVal(start)
    }, 30)
    return () => clearInterval(timer)
  }, [inView, end])
  return <span ref={ref}>{val}{suffix}</span>
}

// ─── Page interface ───────────────────────────────────────────────
interface PageProps {
  params: Promise<{ slug: string }>
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = React.use(params)
  const slug = resolvedParams?.slug
  return <ProductDetailContainer slug={slug} />
}

// ─── Main container ───────────────────────────────────────────────
function ProductDetailContainer({ slug }: { slug: string }) {
  const router = useRouter()
  const product = products.find(p => p.slug.toLowerCase() === slug.toLowerCase())
  const productIndex = products.findIndex(p => p.slug.toLowerCase() === slug.toLowerCase())
  const accent = ACCENTS[productIndex !== -1 ? productIndex % ACCENTS.length : 0]

  type Tab = 'overview' | 'features' | 'howto' | 'specs'
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activePack, setActivePack] = useState(0)
  const [expandedStep, setExpandedStep] = useState<number | null>(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-FAF8F5 pt-[120px]">
        <div className="text-center max-w-md bg-white border border-EDE7DC p-10 rounded-2rem shadow-sm">
          <Paintbrush className="w-10 h-10 text-gold mx-auto mb-4 animate-pulse" />
          <h1 className="font-serif text-2xl font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Product Not Found
          </h1>
          <p className="text-xs text-charcoal-muted font-sans font-light mb-4 leading-relaxed">
            The URL path <span className="text-red-500 font-mono bg-red-50 px-1.5 py-0.5 rounded border border-red-100">{slug}</span> could not be matched to any product.
          </p>
          <Link href="/products" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-charcoal hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Return to Catalog
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter(p => p.category === product.category && p.slug !== slug).slice(0, 4)
  const navBg = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-F0EAE1'
    : 'bg-white/95 backdrop-blur-md border-b border-F0EAE1'

  // ─── Category-Specific Application Steps Fallbacks ─────────────────
  const CATEGORY_HOW_TO_MAP: Record<string, { step: string; title: string; desc: string }[]> = {
    'Waterproofing': [
      { step: '01', title: 'Surface Cleaning & Repair', desc: 'Wash surface to remove moss, algae, and loose debris. Heavy cracks must be opened up, cleaned, and sealed with structural polyurethane sealant before coating.' },
      { step: '02', title: 'Self-Priming / Smart Primer', desc: 'Apply a priming coat. For many advanced compounds, dilute the product itself with 30% clean water to act as a deep-penetrating primer coat. Let dry for 2–3 hours.' },
      { step: '03', title: 'First Undiluted Coat', desc: 'Apply the first coat of the waterproofing compound without dilution using a heavy block brush or roller. Ensure even structural coverage across all joints and parapet wall bases.' },
      { step: '04', title: 'Cross-Directional Second Coat', desc: 'Apply the second coat perpendicular (at a 90-degree angle) to the first coat after 4–6 hours. This cross-hatching layout guarantees zero micro-pinholes are left exposed.' }
    ],
    'Primers': [
      { step: '01', title: 'Substrate Levelling & Sanding', desc: 'Ensure walls are clean and fully cured. Sand the surface with emery paper 180 to remove loose plaster particles and wipe off the structural dust clean.' },
      { step: '02', title: 'Dilution and Consistency', desc: 'Dilute the primer base with clean water or specified solvent as per the technical sheet (typically 80–100% by volume for water-based primers). Stir thoroughly.' },
      { step: '03', title: 'Application Layout', desc: 'Apply a single uniform coat using a professional paint brush or roller. Work from top to bottom, avoiding patches or excessive paint runs.' },
      { step: '04', title: 'Sanding Post-Dry', desc: 'Allow it to air-dry for 4–6 hours. Lightly sand the primed surface with emery paper 320 to level micro-ridges before applying the finishing topcoat layers.' }
    ],
    'Oil Paints': [
      { step: '01', title: 'Degreasing & Rust Removal', desc: 'For metal substrates, remove rust completely using wire brushes or sanding. For wood, sand smooth. Wipe down thoroughly with Mineral Turpentine Oil (MTO) to clean oils.' },
      { step: '02', title: 'Undercoat Application', desc: 'Apply an oil-based primer line (Red Oxide for ferrous metals, Wood Primer for wood). Allow it to dry completely for 12–18 hours before proceeding.' },
      { step: '03', title: 'Thinning & First Coat', desc: 'Thin the gloss enamel paint with 10–15% MTO. Apply a thin, uniform first coat. Avoid heavy pooling to ensure it does not sag or blister during cross-linking.' },
      { step: '04', title: 'Overnight Cure & Recoat', desc: 'Allow 12–16 hours of overnight drying. Lightly scuff the surface to create a mechanical key, clean the dust, and apply the final high-gloss finishing coat.' }
    ],
    'Industrial Textiles': [
      { step: '01', title: 'Base Preparation', desc: 'Ensure the engineering substrate is structurally sound, level, free of sharp protrusions, and cleared of standing water or mud deposits.' },
      { step: '02', title: 'Unrolling & Alignment', desc: 'Roll out the technical textile fabric smoothly along the layout lines. Pull taut to remove wrinkles, ensuring correct mechanical alignment.' },
      { step: '03', title: 'Overlap & Anchoring', desc: 'Maintain a minimum overlap of 300mm to 500mm at all layout joints. Secure the panels structurally using thermal welding, specialized adhesive tapes, or mechanical fasteners.' },
      { step: '04', title: 'Immediate Backfilling', desc: 'Cover the textile membrane with the designated aggregate or soil layer within 48 hours to minimize long-term construction UV exposure damage.' }
    ],
    'Protective Coatings': [
      { step: '01', title: 'Profile Sandblasting / Cleaning', desc: 'Clean substrates to pristine standards. For industrial metals, commercial sandblasting to near-white metal is recommended to create an ideal anchor profile.' },
      { step: '02', title: 'Mixing Multi-Component Bases', desc: 'If dealing with a dual-pack epoxy or polyurethane system, mix base and hardener in the precise stated ratio. Respect the pot-life clock limit completely.' },
      { step: '03', title: 'Airless Spray Setup', desc: 'Apply using heavy-duty airless spray equipment for a dense, void-free protective film shield. Monitor Wet Film Thickness (WFT) continuously during application.' },
      { step: '04', title: 'Curing Environment', desc: 'Allow complete cross-linking. Avoid moisture impact or structural mechanical loading during the initial 7-day chemical curing window.' }
    ]
  };

  const DEFAULT_PAINT_STEPS = [
    { step: '01', title: 'Surface Preparation', desc: 'Clean the surface thoroughly. Remove dust, loose particles, grease, and any traces of algae. Fill hairline cracks with appropriate wall putty and let dry.' },
    { step: '02', title: 'Apply Primer Base', desc: 'Apply one uniform coat of a suitable undercoat primer. Allow adequate drying time (typically 4–6 hours) before stepping up to the topcoat.' },
    { step: '03', title: 'First Topcoat Application', desc: 'Dilute the premium paint layer as recommended (usually 10–15% water for emulsions). Apply an even first coat using a high-quality roller or brush tool.' },
    { step: '04', title: 'Drying & Final Coat', desc: 'Allow the first coat to dry completely for 4 hours. Apply a second finishing coat perpendicular to the first coat for full opacity and optimal color richness.' }
  ];

  // Resolve the dynamic steps based on product configuration or category fallback
  const howToSteps: { step: string; title: string; desc: string }[] =
    (product as any).howToApply ?? 
    CATEGORY_HOW_TO_MAP[product.category] ?? 
    DEFAULT_PAINT_STEPS;

  // Build pack sizes: use product's own array if present
  const packSizes: string[] = (product as any).packSizes ?? product.packSizes ?? ['1 L', '4 L', '10 L', '20 L']

  // Build technical specs object
  const techSpecs = (product as any).technicalSpecs ?? {}

  // Summary stats for the hero strip
  const summaryStats = [
    { label: 'Coverage', value: techSpecs.coverage ?? '130–150 sq.ft/L', icon: <Ruler className="w-4 h-4" /> },
    { label: 'Finish', value: techSpecs.finish ?? product.finish ?? 'Premium', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Dry Time', value: techSpecs.dryingTime ?? '30 min touch', icon: <Clock className="w-4 h-4" /> },
    { label: 'Application', value: techSpecs.application ?? 'Brush / Roller / Spray', icon: <Paintbrush className="w-4 h-4" /> },
  ]

  const TABS: { id: Tab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'howto', label: 'How to Apply' },
    { id: 'specs', label: 'Specifications' },
  ]

  return (
    <div className="bg-FAF8F5 min-h-screen selection:bg-F3E7C9 pt-[72px]">
      {/* ── Ambient Grain ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />
      {/* ── Accent glow ── */}
      <div
        className="pointer-events-none fixed top-0 right-0 w-[520px] h-[520px] z-0"
        style={{ background: `radial-gradient(circle at top right, ${accent}0A 0%, transparent 65%)` }}
      />

      {/* ══════════════════ HEADER ══════════════════ */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 flex-shrink-0 min-w-[260px]">
            <div className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-E8E2D8 p-2 shrink-0">
              <Image src="/Ara_Weather_Coat.png" alt="Colorsome logo" width={62} height={62} className="w-full h-full object-contain scale-[1.08]" />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <div className="flex items-start">
                <span className="transition-colors duration-300 text-2D2D2D" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', lineHeight: 0.82, fontWeight: 700, letterSpacing: '-0.055em', textTransform: 'uppercase' }}>COLORSOME</span>
                <span className="transition-colors duration-300 text-2D2D2D" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.55rem', lineHeight: 1, fontWeight: 700, marginLeft: '0.18rem', marginTop: '0.12rem', letterSpacing: '0.04em' }}>®</span>
              </div>
            </div>
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-1 rounded-full border border-black/[0.06] bg-white/80 backdrop-blur-md px-2 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
              {[['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => {
                const isActive = label === 'Products'
                return (
                  <Link key={label} href={href} className={`relative rounded-full px-4 py-2.5 transition-all duration-200 ${isActive ? 'text-2D2D2D bg-F3E7C9' : 'text-6B6B6B hover:text-2D2D2D hover:bg-black/[0.04]'}`} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', fontWeight: isActive ? 600 : 500, letterSpacing: '-0.01em', lineHeight: 1 }}>
                    {label}
                  </Link>
                )
              })}
            </div>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/assistance" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 text-white flex-shrink-0" style={{ background: '#2D2D2D' }}>
              <Phone className="w-4 h-4" /> Book Assistance
            </Link>
            <button className="md:hidden p-2 rounded-lg transition-colors text-2D2D2D" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="md:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-4 space-y-3">
              {[['Home', '/'], ['Products', '/products'], ['Shades', '/shades'], ['Assistance', '/assistance'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => (
                <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-gray-50">{label}</Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ══════════════════ BREADCRUMB ══════════════════ */}
      <div className="max-w-[1280px] mx-auto px-6 pt-6 pb-4 flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-[#8C8C8C]" style={{ fontFamily: 'var(--font-inter)' }}>
        <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 text-gray-300" />
        <Link href="/products" className="hover:text-charcoal transition-colors">Products</Link>
        <ChevronRight className="w-3 h-3 text-gray-300" />
        <span className="text-charcoal font-black truncate">{product.name}</span>
      </div>

      {/* ══════════════════ HERO — PRODUCT STAGE ══════════════════ */}
      <section className="max-w-[1280px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Image + Quick Specs ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-[116px]"
          >
            {/* Image Card */}
            <div className="rounded-[2.5rem] overflow-hidden bg-white border border-EDE6DA shadow-[0_20px_50px_rgba(45,45,45,0.05)] p-8 relative group transition-shadow duration-500 hover:shadow-[0_32px_70px_rgba(45,45,45,0.10)]">
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}CC)` }} />
              {/* Category badge */}
              <span className="absolute top-5 right-5 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-md text-white shadow-sm" style={{ background: accent, fontFamily: 'var(--font-inter)' }}>
                {product.category?.split(' ')[0] ?? 'Paint'}
              </span>
              {/* Hover rings */}
              <div className="absolute w-64 h-64 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ borderColor: `${accent}20`, borderWidth: '1px' }} />
              <div className="absolute w-48 h-48 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ borderColor: `${accent}12`, borderWidth: '1px' }} />
              {/* Glow spot */}
              <div className="absolute inset-0 rounded-[2.5rem] transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${accent}0A 0%, transparent 72%)` }} />
              {/* Product image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.06, y: -12 }}
                className="relative flex items-center justify-center cursor-zoom-in"
                style={{ height: 380 }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={360}
                  height={380}
                  className="h-80 w-auto object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.13)] z-10 relative"
                  priority
                />
              </motion.div>
            </div>

            {/* ── Quick Stat Strip ── */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {summaryStats.map(({ label, value, icon }) => (
                <div
                  key={label}
                  className="bg-white border border-EDE6DA rounded-2xl p-4 text-center group hover:shadow-md transition-all duration-200 hover:border-current cursor-default"
                  style={{ '--tw-border-opacity': '1' } as React.CSSProperties}
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1.5" style={{ color: accent }}>
                    {icon}
                  </div>
                  <p className="text-[9px] uppercase tracking-widest font-bold text-[#9B8E7E] mb-0.5" style={{ fontFamily: 'var(--font-inter)' }}>{label}</p>
                  <p className="text-sm font-semibold text-charcoal leading-tight" style={{ fontFamily: 'var(--font-inter)' }}>{value}</p>
                </div>
              ))}
            </div>

            {/* ── Pack Size Selector ── */}
            {packSizes.length > 0 && (
              <div className="mt-5 bg-white border border-EDE6DA rounded-2xl p-5">
                <p className="text-[9px] uppercase tracking-widest font-black text-[#9B8E7E] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>Available Pack Sizes</p>
                <div className="flex flex-wrap gap-2">
                  {packSizes.map((size, i) => (
                    <button
                      key={size}
                      onClick={() => setActivePack(i)}
                      className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-200"
                      style={{
                        fontFamily: 'var(--font-inter)',
                        background: activePack === i ? accent : 'transparent',
                        color: activePack === i ? '#fff' : '#2D2D2D',
                        border: activePack === i ? `1.5px solid ${accent}` : '1.5px solid #EDE6DA',
                        boxShadow: activePack === i ? `0 4px 14px ${accent}30` : 'none',
                      }}
                    >
                      <Package className="w-3 h-3 inline mr-1 opacity-70" />
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* ── RIGHT: Text + Tabs ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Category + Status pill */}
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: `${accent}12` }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: accent, fontFamily: 'var(--font-inter)' }}>
                  {product.status} &nbsp;·&nbsp; {product.id.toString().padStart(2, '0')}
                </span>
              </div>
              {/* Product name */}
              <h1
                className="text-4xl md:text-5xl font-bold text-charcoal leading-[1.06] tracking-[-0.03em] mb-4"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}
              >
                {product.name}
              </h1>
              {/* Description */}
              <p className="text-[15px] sm:text-[16px] text-charcoal-muted leading-relaxed font-light" style={{ fontFamily: 'var(--font-inter)' }}>
                {(product as any).fullDescription ?? product.description}
              </p>
            </div>

            {/* ── TABS BAR ── */}
            <div className="border-b border-EDE6DA">
              <div className="flex gap-0 overflow-x-auto scrollbar-none">
                {TABS.map(tab => {
                  const sel = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="px-5 py-3 text-[11px] uppercase tracking-widest font-black transition-all border-b-2 -mb-px whitespace-nowrap"
                      style={{
                        fontFamily: 'var(--font-inter)',
                        color: sel ? '#2D2D2D' : '#9B8E7E',
                        borderColor: sel ? accent : 'transparent',
                      }}
                    >
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* ── TAB CONTENT ── */}
            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">

                {/* ── OVERVIEW ── */}
                {activeTab === 'overview' && (
                  <motion.div key="overview" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }} className="space-y-5">
                    {/* Category + Status info cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-white rounded-2xl border border-EDE6DA p-5">
                        <p className="text-[9px] uppercase font-bold tracking-widest text-[#9B8E7E] mb-1" style={{ fontFamily: 'var(--font-inter)' }}>Category</p>
                        <p className="font-bold text-charcoal" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>{product.category}</p>
                      </div>
                      <div className="bg-white rounded-2xl border border-EDE6DA p-5">
                        <p className="text-[9px] uppercase font-bold tracking-widest text-[#9B8E7E] mb-1" style={{ fontFamily: 'var(--font-inter)' }}>Availability</p>
                        <p className="font-bold text-charcoal" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>{product.status ?? 'In Stock'}</p>
                      </div>
                      <div className="bg-white rounded-2xl border border-EDE6DA p-5">
                        <p className="text-[9px] uppercase font-bold tracking-widest text-[#9B8E7E] mb-1" style={{ fontFamily: 'var(--font-inter)' }}>Finish Type</p>
                        <p className="font-bold text-charcoal" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>{techSpecs.finish ?? product.finish ?? 'Premium'}</p>
                      </div>
                    </div>

                    {/* Applications list */}
                    {product.applications && product.applications.length > 0 && (
                      <div>
                        <p className="text-[9px] uppercase font-bold tracking-widest text-[#9B8E7E] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>Suitable For</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {product.applications.map((app: string, i: number) => (
                            <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-EDE6DA rounded-xl">
                              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: accent }} />
                              <p className="text-[14px] text-charcoal font-medium" style={{ fontFamily: 'var(--font-inter)' }}>{app}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Feature chips preview */}
                    {product.features && product.features.length > 0 && (
                      <div>
                        <p className="text-[9px] uppercase font-bold tracking-widest text-[#9B8E7E] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>Highlights</p>
                        <div className="flex flex-wrap gap-2">
                          {product.features.slice(0, 6).map((f: string, i: number) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
                              style={{ background: `${accent}12`, color: accent, fontFamily: 'var(--font-inter)' }}
                            >
                              <CheckCircle className="w-3 h-3" /> {f}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* ── KEY FEATURES ── */}
                {activeTab === 'features' && (
                  <motion.div key="features" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features?.map((f: string, i: number) => {
                        const desc = FEATURE_DESCRIPTIONS[f] ?? `${f} helps improve coating performance, usability, and long-term surface reliability.`
                        const icon = FEATURE_ICON_MAP[f] ?? DEFAULT_ICON
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06, duration: 0.3 }}
                            className="group flex flex-col gap-3 p-5 bg-white border border-EDE6DA rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                          >
                            {/* Icon circle */}
                            <div className="flex items-center gap-3">
                              <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                                style={{ background: `${accent}12`, color: accent }}
                              >
                                {icon}
                              </div>
                              <p className="text-[15px] font-bold text-charcoal leading-tight" style={{ fontFamily: 'var(--font-inter)' }}>{f}</p>
                            </div>
                            <p className="text-[13.5px] text-charcoal-muted leading-[1.6]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>{desc}</p>
                            {/* Bottom accent line on hover */}
                            <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full mt-auto" style={{ background: `${accent}40` }} />
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}

                {/* ── HOW TO APPLY ── */}
                {activeTab === 'howto' && (
                  <motion.div key="howto" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }} className="space-y-3">
                    {howToSteps.map(({ step, title, desc }, i) => {
                      const isOpen = expandedStep === i
                      return (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.07 }}
                          className="bg-white border border-EDE6DA rounded-2xl overflow-hidden"
                          style={{ borderLeft: `3px solid ${isOpen ? accent : '#EDE6DA'}` }}
                        >
                          <button
                            onClick={() => setExpandedStep(isOpen ? null : i)}
                            className="w-full flex items-center gap-4 px-5 py-4 text-left group"
                          >
                            {/* Step number bubble */}
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200"
                              style={{ background: isOpen ? accent : `${accent}14`, color: isOpen ? '#fff' : accent }}
                            >
                              {STEP_ICONS[i] ?? <CheckCircle className="w-5 h-5" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: accent, fontFamily: 'var(--font-inter)' }}>Step {step}</span>
                              <p className="text-[14px] font-bold text-charcoal" style={{ fontFamily: 'var(--font-inter)' }}>{title}</p>
                            </div>
                            <ChevronDown
                              className="w-4 h-4 text-charcoal-muted shrink-0 transition-transform duration-300"
                              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: isOpen ? accent : '#9B8E7E' }}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 pb-5 pt-1">
                                  <p className="text-[14px] text-charcoal-muted leading-relaxed" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>{desc}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })}
                    {/* Pro tip */}
                    <div className="flex items-start gap-3 p-4 rounded-2xl border" style={{ background: `${accent}06`, borderColor: `${accent}20` }}>
                      <Info className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accent }} />
                      <p className="text-[13px] text-charcoal-muted leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                        <span className="font-semibold text-charcoal">Pro Tip:</span> Always apply in ambient temperatures between 10°C–40°C and relative humidity below 85% for the best adhesion and finish quality.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* ── SPECIFICATIONS ── */}
                {activeTab === 'specs' && (
                  <motion.div key="specs" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>
                    <div className="bg-white border border-EDE6DA rounded-2xl overflow-hidden">
                      {/* Section heading */}
                      <div className="px-6 py-4 border-b border-EDE6DA" style={{ background: `${accent}06` }}>
                        <p className="text-[11px] uppercase font-black tracking-widest" style={{ color: accent, fontFamily: 'var(--font-inter)' }}>Technical Data Sheet</p>
                      </div>
                      <div className="px-6 py-2">
                        <SpecRow label="Product Name" value={product.name} accent={accent} />
                        <SpecRow label="Category" value={product.category} accent={accent} />
                        <SpecRow label="Finish" value={techSpecs.finish ?? product.finish} accent={accent} />
                        <SpecRow label="Coverage" value={techSpecs.coverage} accent={accent} />
                        <SpecRow label="Drying Time" value={techSpecs.dryingTime} accent={accent} />
                        <SpecRow label="Re-coat Time" value={techSpecs.recoatTime} accent={accent} />
                        <SpecRow label="Application" value={techSpecs.application} accent={accent} />
                        <SpecRow label="Dilution" value={techSpecs.dilution} accent={accent} />
                        <SpecRow label="Washability" value={techSpecs.washability} accent={accent} />
                        <SpecRow label="VOC Level" value={techSpecs.voc} accent={accent} />
                        <SpecRow label="Base" value={techSpecs.base} accent={accent} />
                        <SpecRow label="Pack Sizes" value={packSizes.join(', ')} accent={accent} />
                        <SpecRow label="Suitable For" value={product.applications?.join(', ')} accent={accent} />
                        <SpecRow label="Status" value={product.status} accent={accent} />
                      </div>
                    </div>
                    {/* Disclaimer */}
                    <p className="text-[11px] text-[#B0A898] mt-4 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                      * Coverage rates are approximate and may vary based on surface porosity, application method, and number of coats. For precise data, refer to the product Technical Data Sheet.
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* ── CTA Buttons ── */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-EDE6DA">
              <Link
                href="/assistance"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-black text-white shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex-1"
                style={{ background: `linear-gradient(135deg, ${accent} 0%, ${accent}CC 100%)`, fontFamily: 'var(--font-inter)', letterSpacing: '0.1em' }}
              >
                <Phone className="w-3.5 h-3.5 animate-pulse" /> Get Expert Consultation
              </Link>
              <button
                onClick={() => router.push('/products')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white border border-EDE6DA text-charcoal rounded-xl text-xs uppercase tracking-widest font-black shadow-sm hover:bg-FDFBF7 hover:border-D5CBBC active:scale-[0.98] transition-all"
                style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.1em' }}
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──════════════════ FEATURE HIGHLIGHTS STRIP ══════════════════ */}
      {product.features && product.features.length > 0 && (
        <section className="border-t border-EDE6DA py-16" style={{ background: BRAND.dark }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-10">
              <p className="text-[10px] uppercase tracking-[0.25em] font-black mb-2" style={{ color: accent, fontFamily: 'var(--font-inter)' }}>Performance Profile</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>
                What Makes {product.name} Outstanding
              </h2>
            </div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {product.features.map((f: string, i: number) => {
                const icon = FEATURE_ICON_MAP[f] ?? DEFAULT_ICON
                return (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-5 rounded-2xl border cursor-default"
                    style={{ background: `${accent}10`, borderColor: `${accent}20` }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300" style={{ background: `${accent}20`, color: accent }}>
                      {icon}
                    </div>
                    <p className="text-[13px] font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-inter)' }}>{f}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* ──════════════════ WHY CHOOSE SECTION ══════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 22 }}
            >
              <p className="text-[10px] uppercase tracking-[0.25em] font-black mb-3" style={{ color: accent, fontFamily: 'var(--font-inter)' }}>Product Advantage</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-5 leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Why Professionals Choose {product.name}
              </h2>
              <p className="text-[15px] text-charcoal-muted leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
                {(product as any).fullDescription ?? product.description} Every batch is quality-checked and formulated to Colorsome's strict performance standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <ThumbsUp className="w-5 h-5" />, label: 'Trusted Formula', val: '10+ Yrs' },
                  { icon: <Star className="w-5 h-5" />, label: 'Premium Grade', val: 'A+ Class' },
                  { icon: <BadgeCheck className="w-5 h-5" />, label: 'Quality Tested', val: '12-Stage QC' },
                  { icon: <Eye className="w-5 h-5" />, label: 'Colour Verified', val: 'Lab Matched' },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="flex items-center gap-3 p-4 rounded-xl border border-EDE6DA bg-FAF8F5">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${accent}12`, color: accent }}>{icon}</div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider font-black text-[#9B8E7E]" style={{ fontFamily: 'var(--font-inter)' }}>{label}</p>
                      <p className="text-[13px] font-bold text-charcoal" style={{ fontFamily: 'var(--font-inter)' }}>{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            {/* Stats column */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 22, delay: 0.1 }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { end: 98, suffix: '%', label: 'Customer Satisfaction' },
                { end: 130, suffix: '+', label: 'Sq.ft Coverage / Litre' },
                { end: 10, suffix: ' Yrs', label: 'Proven Performance Life' },
                { end: 100, suffix: '%', label: 'Eco-Friendly & Low VOC' },
              ].map(({ end, suffix, label }) => (
                <div key={label} className="p-6 rounded-2xl border border-EDE6DA bg-FAF8F5 text-center">
                  <p className="font-bold text-4xl mb-1" style={{ fontFamily: 'var(--font-cormorant)', color: accent }}>
                    <CountUp end={end} suffix={suffix} />
                  </p>
                  <p className="text-[11px] text-[#9B8E7E] uppercase tracking-wider font-semibold" style={{ fontFamily: 'var(--font-inter)' }}>{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──════════════════ RELATED PRODUCTS ══════════════════ */}
      {related.length > 0 && (
        <section className="border-t border-EDE6DA py-20 bg-FAF8F5">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-[0.25em] font-black mb-1" style={{ color: '#B8A48A', fontFamily: 'var(--font-inter)' }}>You May Also Like</p>
              <h2 className="text-3xl font-bold text-charcoal tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>Related Formulations</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => {
                const relAccent = ACCENTS[i % ACCENTS.length]
                return (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    className="group block flex flex-col justify-between rounded-[1.8rem] bg-white border border-EDE6DA overflow-hidden hover:shadow-[0_24px_50px_rgba(45,45,45,0.06)] hover:-translate-y-1 transition-all duration-500 h-full"
                  >
                    <div>
                      <div className="h-1 w-full" style={{ background: relAccent }} />
                      <div className="flex items-center justify-center p-6 relative overflow-hidden" style={{ height: 180 }}>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle, ${relAccent}0B 0%, transparent 70%)` }} />
                        <Image src={p.image} alt={p.name} width={160} height={180} className="h-36 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6 pt-2">
                        <h3 className="text-lg font-bold text-charcoal mb-1 leading-tight group-hover:transition-colors duration-200" style={{ fontFamily: 'var(--font-cormorant)', color: undefined }}>{p.name}</h3>
                        <p className="text-xs leading-relaxed text-charcoal-muted line-clamp-2 font-light" style={{ fontFamily: 'var(--font-inter)' }}>{p.description}</p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider" style={{ color: relAccent }}>
                        View Details <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}