"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Shield,
  Phone,
  CheckCircle,
  Clock,
  Award,
  ChevronRight,
  ChevronDown,
  Loader,
  Star,
  Eye,
  Paintbrush,
  Ruler,
  Layers,
  Sun,
  Home,
  Sparkles,
  Zap,
  ChevronLeft,
  MoveHorizontal,
  BadgeCheck,
  Menu,
  X,
} from "lucide-react";

// import {

//   getCategories, getFeaturedProducts, getFeaturedShades, getTestimonials,

// } from '../lib/supabase';

// import type { Category, Product, Shade, Testimonial } from '../lib/supabase';
import { ShadeCard } from "../components/ShadeCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "../components/Footer";
type Category = {
  id: number;

  name: string;

  slug: string;

  description?: string;
};

type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  category: string;
  features?: string[];
};

type Shade = {
  id: number;
  name: string;
  hex_code: string;
  code?: string;
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

// ─── Brand palette ────────────────────────────────────────────────────────────

const BRAND = {
  pink: "#E91E8C",
  blue: "#2196F3",
  green: "#4CAF50",
  orange: "#FF5722",
  yellow: "#FFC107",
  dark: "#2D2D2D",
};

const ACCENTS = [
  BRAND.pink,
  BRAND.blue,
  BRAND.green,
  BRAND.orange,
  BRAND.yellow,
];

const HARDCODED_CATEGORIES: Category[] = [
  { id: 1, name: "Interior Paint", slug: "interior-paint" },
  { id: 2, name: "Exterior Paint", slug: "exterior-paint" },
  { id: 3, name: "Texture Paint", slug: "texture-paint" },
  { id: 4, name: "Enamel Paint", slug: "enamel-paint" },
];

const HARDCODED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Axis Weather Coat",
    slug: "axis-weather-coat",
    image: "/AxisWeatherC.png",
    description: "Exterior protection with durable weather resistance.",
    category: "Exterior Paint",
    features: ["Weatherproof", "Exterior", "Premium"],
  },

  {
    id: 2,
    name: "Ara Weather Coat",
    slug: "ara-weather-coat",
    image: "/AraWeather.png",
    description: "Premium exterior coating with rich finish and long life.",
    category: "Exterior Paint",
    features: ["Durable", "Smooth Finish", "Long Lasting"],
  },

  {
    id: 3,
    name: "Tough Tex",
    slug: "tough-tex",
    image: "/Tough_Tex.png",
    description: "Textured coating for striking decorative walls.",
    category: "Texture Paint",
    features: ["Texture", "Decorative", "Strong"],
  },

  {
    id: 4,
    name: "Crux Supra Fine Finish",
    slug: "crux-supra-fine-finish",
    image: "/CRUX_SUPRA_Fine_Finish_Wall_Putty.png",
    description: "Fine finish wall solution for elegant smooth surfaces.",
    category: "Interior Finish",
    features: ["Fine Finish", "Smooth", "Elegant"],
  },

  {
    id: 5,
    name: "Crux Coarse Finish",
    slug: "crux-coarse-finish",
    image: "/CRUX_Coarse_Finish_Wall_Putty.png",
    description: "Coarse finish texture for bold wall character.",
    category: "Texture Paint",
    features: ["Coarse", "Decorative", "Durable"],
  },

  {
    id: 6,
    name: "Glossmate Enamel",
    slug: "glossmate-enamel",
    image: "/Glossmate_Enamel_Paint.png",
    description: "High quality enamel for wood and metal surfaces.",
    category: "Enamel Paint",
    features: ["Gloss", "Wood", "Metal"],
  },

  {
    id: 7,
    name: "Duraguard Exterior",
    slug: "duraguard-exterior",
    image: "/Duraguard_Exterior.png",
    description: "Advanced exterior paint built for tough climate conditions.",
    category: "Exterior Paint",
    features: ["Protection", "Exterior", "Premium"],
  },

  {
    id: 8,
    name: "Duraguard Interior",
    slug: "duraguard-interior",
    image: "/Duraguard_Interior.png",
    description: "Interior paint with elegant finish and durability.",
    category: "Interior Paint",
    features: ["Interior", "Washable", "Rich Finish"],
  },

  {
    id: 9,
    name: "Uniprime",
    slug: "uniprime",
    image: "/Uniprime.png",
    description: "Smooth emulsion with rich colour depth.",
    category: "Interior Paint",
    features: ["Emulsion", "Smooth", "Premium"],
  },
];

const HARDCODED_SHADES: Shade[] = [
  { id: 1, name: "Soft Ivory", hex_code: "#F3E9D7", code: "CS101" },
  { id: 2, name: "Rose Blush", hex_code: "#E9C7C7", code: "CS102" },
  { id: 3, name: "Warm Sand", hex_code: "#D8C1A3", code: "CS103" },
  { id: 4, name: "Ocean Mist", hex_code: "#BFD7EA", code: "CS104" },
  { id: 5, name: "Olive Earth", hex_code: "#A6B18A", code: "CS105" },
  { id: 6, name: "Sun Gold", hex_code: "#F4C542", code: "CS106" },
];

// ─── Motion variants ──────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },

  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 25, stiffness: 180 },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, damping: 22, stiffness: 200 },
  },
};

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Inline Product Card ──────────────────────────────────────────────────────

// function FeaturedProductCard({ product, index }: { product: Product; index: number }) {

//   const accent = ACCENTS[index % ACCENTS.length];

//   const [hovered, setHovered] = useState(false);

//   return (

//     <motion.div variants={scaleIn} whileHover={{ y: -6 }} transition={{ type: 'spring', damping: 16 }}>

//       <Link

//         href={`/products/${product.slug}`}

//         className="group block rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-400 h-full"

//         onMouseEnter={() => setHovered(true)}

//         onMouseLeave={() => setHovered(false)}

//       >

//         <div className="h-1" style={{ background: accent }} />

//         <div className="relative bg-[#F7F6F2] flex items-center justify-center" style={{ height: 200 }}>

//           <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none"

//             style={{ opacity: hovered ? 1 : 0, background: `radial-gradient(ellipse at center, ${accent}18 0%, transparent 70%)` }} />

//           <div className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"

//             style={{ background: accent }}>

//             {product.category?.split(' ')[0] ?? 'Paint'}

//           </div>

//           <motion.img src={product.image} alt={product.name}

//             className="h-36 w-auto object-contain relative z-10 drop-shadow-lg"

//             animate={{ scale: hovered ? 1.08 : 1 }} transition={{ type: 'spring', damping: 18 }} />

//         </div>

//         <div className="p-5">

//           <h3 className="font-serif text-lg font-medium text-charcoal mb-1 leading-tight transition-colors duration-200"

//             style={{ color: hovered ? accent : '' }}>

//             {product.name}

//           </h3>

//           <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-2 mb-3">{product.description}</p>

//           {product.features && (

//             <div className="flex flex-wrap gap-1.5 mb-4">

//               {product.features.slice(0, 3).map((f: string) => (

//                 <span key={f} className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"

//                   style={{ background: `${accent}14`, color: accent }}>{f}</span>

//               ))}

//             </div>

//           )}

//           <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all"

//             style={{ color: accent }}>

//             View Details <ArrowRight className="w-3.5 h-3.5" />

//           </div>

//         </div>

//       </Link>

//     </motion.div>

//   );

// }

// ─── Infinite Product Marquee Card ────────────────────────────────────────────

// function MarqueeCard({ product, accent }: { product: Product; accent: string }) {

//   return (

//     // <div className="flex-shrink-0 w-52 mx-3 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer">

//     <div className="flex-shrink-0 w-64 mx-3 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer">

//       <Link href={`/products/${product.slug}`}>

//         <div className="h-1.5 w-full" style={{ background: accent }} />

//         {/* <div className="relative flex items-center justify-center bg-[#F7F6F2]" style={{ height: 140 }}> */}

//         <div className="relative flex items-center justify-center bg-[#F8F6F2] px-4" style={{ height: 170 }}>

//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"

//             style={{ background: `radial-gradient(ellipse at center, ${accent}20 0%, transparent 70%)` }} />

//           <motion.img

//             src={product.image}

//             alt={product.name}

//             className="h-28 w-auto max-w-[80%] object-contain drop-shadow-md relative z-10"

//             whileHover={{ scale: 1.08, rotate: 1 }}

//             transition={{ type: 'spring', damping: 15 }}

//           />

//           <span className="absolute top-2 right-2 text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-white"

//             style={{ background: accent }}>

//             {product.category?.split(' ')[0] ?? 'Paint'}

//           </span>

//         </div>

//         <div className="px-4 py-3">

//           <h4 className="font-serif text-sm font-semibold text-charcoal leading-tight truncate group-hover:transition-colors"

//             style={{ transition: 'color 200ms' }}

//             onMouseEnter={(e) => (e.currentTarget.style.color = accent)}

//             onMouseLeave={(e) => (e.currentTarget.style.color = '')}>

//             {product.name}

//           </h4>

//           <p className="text-[10px] text-charcoal-muted mt-0.5 truncate">{product.description}</p>

//           <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: accent }}>

//             View <ArrowRight className="w-2.5 h-2.5" />

//           </span>

//         </div>

//       </Link>

//     </div>

//   );

// }

// function MarqueeCard({ product, accent }: { product: Product; accent: string }) {

//   return (

//     <div className="flex-shrink-0 w-64 mx-3 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer">

//       <Link href={`/products/${product.slug}`}>

//         <div className="h-1.5 w-full" style={{ background: accent }} />

//         <div

//           className="relative flex items-center justify-center bg-[#F7F6F2] px-4"

//           style={{ height: 170 }}

//         >

//           <div

//             className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"

//             style={{ background: `radial-gradient(ellipse at center, ${accent}20 0%, transparent 70%)` }}

//           />

//           <motion.img

//             src="/Ara_Weather_Coat.jpg"

//             alt={product.name}

//             className="h-28 w-auto max-w-[80%] object-contain drop-shadow-md relative z-10"

//             whileHover={{ scale: 1.08, rotate: 1 }}

//             transition={{ type: 'spring', damping: 15 }}

//           />

//           <span

//             className="absolute top-2 right-2 text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-white"

//             style={{ background: accent }}

//           >

//             {product.category?.split(' ')[0] ?? 'Paint'}

//           </span>

//         </div>

//         <div className="px-4 py-3">

//           <h4

//             className="font-serif text-sm font-semibold text-charcoal leading-tight truncate group-hover:transition-colors"

//             style={{ transition: 'color 200ms' }}

//             onMouseEnter={(e) => (e.currentTarget.style.color = accent)}

//             onMouseLeave={(e) => (e.currentTarget.style.color = '')}

//           >

//             {product.name}

//           </h4>

//           <p className="text-[10px] text-charcoal-muted mt-0.5 truncate">

//             {product.description}

//           </p>

//           <span

//             className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold uppercase tracking-wider"

//             style={{ color: accent }}

//           >

//             View <ArrowRight className="w-2.5 h-2.5" />

//           </span>

//         </div>

//       </Link>

//     </div>

//   );

// }

// // ─── Infinite Marquee Row ─────────────────────────────────────────────────────

// function InfiniteMarquee({

//   products,

//   speed = 35,

//   reverse = false,

// }: {

//   products: Product[];

//   speed?: number;

//   reverse?: boolean;

// }) {

//   const loopedProducts = [...products, ...products];

//   return (

//     <div className="overflow-hidden py-2">

//       <motion.div

//         className="flex w-max"

//         animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}

//         transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}

//       >

//         {loopedProducts.map((p, i) => (

//           <MarqueeCard

//             key={`${p.id}-${i}`}

//             product={p}

//             accent={ACCENTS[i % ACCENTS.length]}

//           />

//         ))}

//       </motion.div>

//     </div>

//   );

// }

function MarqueeCard({
  product,

  accent,
}: {
  product: Product;

  accent: string;
}) {
  return (
    <div className="flex-shrink-0 w-64 mx-3 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
      <Link href={`/products/${product.slug}`}>
        <div className="h-1.5 w-full" style={{ background: accent }} />

        <div
          className="relative flex items-center justify-center bg-[#F8F6F2] px-4"
          style={{ height: 180 }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(ellipse at center, ${accent}20 0%, transparent 70%)`,
            }}
          />

          <motion.img
            src={product.image}
            alt={product.name}
            className="h-36 w-auto max-w-[92%] object-contain drop-shadow-md relative z-10"
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ type: "spring", damping: 15 }}
          />

          <span
            className="absolute top-2 right-2 text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-white"
            style={{ background: accent }}
          >
            {product.category?.split(" ")[0] ?? "Paint"}
          </span>
        </div>

        <div className="px-4 py-3">
          <h4 className="mini-title truncate">{product.name}</h4>

          <p className="text-xs text-charcoal-muted mt-1 truncate">
            {product.description || "Premium paint product"}
          </p>

          <span
            className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold uppercase tracking-wider"
            style={{ color: accent }}
          >
            View <ArrowRight className="w-2.5 h-2.5" />
          </span>
        </div>
      </Link>
    </div>
  );
}

// function InfiniteMarquee({

//   products,

//   speed = 35,

//   reverse = false,

// }: {

//   products: Product[];

//   speed?: number;

//   reverse?: boolean;

// }) {

//   const loopedProducts = [...products, ...products];

//   return (

//     <div className="overflow-hidden py-2">

//       <motion.div

//         className="flex w-max"

//         animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}

//         transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}

//       >

//         {loopedProducts.map((p, i) => (

//           <MarqueeCard

//             key={`${p.id}-${i}`}

//             product={p}

//             accent={ACCENTS[i % ACCENTS.length]}

//           />

//         ))}

//       </motion.div>

//     </div>

//   );

// }

function InfiniteMarquee({
  products,

  speed = 35,

  reverse = false,
}: {
  products: Product[];

  speed?: number;

  reverse?: boolean;
}) {
  const loopedProducts = [...products, ...products];

  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {loopedProducts.map((p, i) => (
          <MarqueeCard
            key={`${p.id}-${i}`}
            product={p}
            accent={ACCENTS[i % ACCENTS.length]}
          />
        ))}
      </motion.div>
    </div>
  );
}

// ─── Static data ──────────────────────────────────────────────────────────────

const services = [
  {
    icon: Shield,
    title: "Premium Quality",
    desc: "Superior formulations for exceptional finish and lasting durability",
    color: BRAND.blue,
  },

  {
    icon: Droplets,
    title: "Rich Colour Depth",
    desc: "Vibrant pigments that maintain their beauty for years to come",
    color: BRAND.pink,
  },

  {
    icon: Award,
    title: "Expert Guidance",
    desc: "Professional consultation for perfect shade and product selection",
    color: BRAND.green,
  },

  {
    icon: Sun,
    title: "Weather Resistance",
    desc: "Advanced protection against sun, rain, and harsh conditions",
    color: BRAND.yellow,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Discuss your requirements with our paint experts",
    color: BRAND.pink,
  },

  {
    num: "02",
    title: "Site Evaluation",
    desc: "Professional assessment of your space and surfaces",
    color: BRAND.blue,
  },

  {
    num: "03",
    title: "Recommendation",
    desc: "Personalized product and shade recommendations",
    color: BRAND.green,
  },

  {
    num: "04",
    title: "Quote",
    desc: "Transparent pricing and detailed estimate",
    color: BRAND.orange,
  },

  {
    num: "05",
    title: "Execution",
    desc: "Professional application or timely product delivery",
    color: BRAND.yellow,
  },
];

const browseByFinish = [
  {
    name: "Matte",
    desc: "Velvety, non-reflective elegance",
    color: "#E8E4DF",
    icon: Layers,
    accent: BRAND.pink,
  },

  {
    name: "Sheen",
    desc: "Subtle glow with depth",
    color: "#D4CFC8",
    icon: Sparkles,
    accent: BRAND.blue,
  },

  {
    name: "Gloss",
    desc: "Brilliant, mirror-like shine",
    color: "#C8C0B4",
    icon: Zap,
    accent: BRAND.yellow,
  },

  {
    name: "Texture",
    desc: "Tactile, dimensional artistry",
    color: "#B8AFA2",
    icon: Paintbrush,
    accent: BRAND.green,
  },

  {
    name: "Weatherproof",
    desc: "Fortified exterior shield",
    color: "#8B9E7E",
    icon: Shield,
    accent: BRAND.orange,
  },
];

const browseBySpace = [
  {
    name: "Living Room",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80",
    tag: "Most Popular",
    accent: BRAND.pink,
  },

  {
    name: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    tag: "Top Picks",
    accent: BRAND.blue,
  },

  {
    name: "Exterior Walls",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    tag: "Weather-proof",
    accent: BRAND.green,
  },

  {
    name: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    tag: "Easy Clean",
    accent: BRAND.orange,
  },
];

const stats = [
  { value: "100%", label: "Indian Owned", color: BRAND.pink },
  { value: "100%", label: "Premium Quality", color: BRAND.blue },
  { value: "Top-Tier", label: "Materials Used", color: BRAND.green },
  { value: "15+", label: "Combined Years of Expertise", color: BRAND.yellow },
];

const serviceHighlights = [
  {
    icon: CheckCircle,
    title: "Clean Work",
    desc: "Meticulous preparation and tidy execution",
    color: BRAND.green,
  },

  {
    icon: Eye,
    title: "Careful Prep",
    desc: "Thorough surface preparation for lasting results",
    color: BRAND.blue,
  },

  {
    icon: Star,
    title: "Quality Finish",
    desc: "Flawless application with premium materials",
    color: BRAND.yellow,
  },

  {
    icon: Clock,
    title: "Timely Completion",
    desc: "Committed timelines and reliable delivery",
    color: BRAND.orange,
  },
];

const transformations = [
  {
    label: "Living Room Makeover",
    before: "/bimg.png",
    product: "Zodiac Emulsion — Warm Ivory",
    color: BRAND.pink,
  },
];

const dots = [
  { color: BRAND.pink, size: 14, top: "18%", left: "72%", delay: 0 },
  { color: BRAND.blue, size: 10, top: "65%", left: "78%", delay: 0.4 },
  { color: BRAND.green, size: 18, top: "30%", left: "88%", delay: 0.8 },
  { color: BRAND.orange, size: 12, top: "75%", left: "62%", delay: 1.2 },
  { color: BRAND.yellow, size: 20, top: "12%", left: "60%", delay: 0.6 },
];

function AnimatedStat({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", damping: 22, stiffness: 180 }}
      className="text-center"
    >
      {/* <p className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color }}>{value}</p> */}
      <p className="section-title mb-1" style={{ color }}>
        {value}
      </p>
      <p className="text-sm text-white/60">{label}</p>
    </motion.div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════

export default function HomePage() {
  // const [categories, setCategories]   = useState<Category[]>([]);
  // const [products, setProducts]       = useState<Product[]>([]);
  // const [shades, setShades]           = useState<Shade[]>([]);
  // const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  // const [isLoading, setIsLoading]     = useState(true);
  const [categories] = useState<Category[]>(HARDCODED_CATEGORIES);
  const [products] = useState<Product[]>(HARDCODED_PRODUCTS);
  const [shades] = useState<Shade[]>(HARDCODED_SHADES);
  // const [testimonials] = useState<Testimonial[]>(HARDCODED_TESTIMONIALS);
  const [isLoading] = useState(false);
  const [calcArea, setCalcArea] = useState("");
  const [calcCoats, setCalcCoats] = useState("2");
  const [calcResult, setCalcResult] = useState<string | null>(null);
  const [calcCity, setCalcCity] = useState("bangalore");
  const [calcPart, setCalcPart] = useState("Interior");
  const [calcBhk, setCalcBhk] = useState("2 BHK");
  const [calcSqft, setCalcSqft] = useState("");
  const [calcTier, setCalcTier] = useState("premium");
  const [calcType, setCalcType] = useState("Fresh Painting");
  const [calcAdvancedResult, setCalcAdvancedResult] = useState<{
    cost: string;
    area: string;
    tier: string;
    city: string;
    type: string;
  } | null>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [activeTransform, setActiveTransform] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showConsultationPopup, setShowConsultationPopup] = useState(false);
  const [hasShownConsultationPopup, setHasShownConsultationPopup] =
    useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Dynamic header
  const [scrolled, setScrolled] = useState(false);
  const [headerDark, setHeaderDark] = useState(false);
  useEffect(() => {
    const darkIds = ["why-colorsome", "before-after", "stats-section"];
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const headerBottom = 72;
      let dark = false;
      for (const id of darkIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top < headerBottom && bottom > 0) {
          dark = true;
          break;
        }
      }
      setHeaderDark(dark);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- CINEMATIC BACKGROUND SLIDER LOGIC ---
  const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    // "/Aquaproof.png",
    // "/Decoprime.png",
    // "/AxisWeatherC.png",
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const loopInterval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        let nextIdx;
        do {
          nextIdx = Math.floor(Math.random() * 6);
        } while (nextIdx === prev); // Keeps rolling if it picks the active image again
        return nextIdx;
      });
    }, 5000);
    return () => clearInterval(loopInterval);
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const [cat, prod, shd, tst] = await Promise.all([
  //         getCategories(), getFeaturedProducts(), getFeaturedShades(), getTestimonials(),
  //       ]);
  //       setCategories(cat); setProducts(prod); setShades(shd); setTestimonials(tst);
  //     } catch (err) { console.error(err); } finally { setIsLoading(false); }
  //   }
  //   fetchData();
  // }, []);

  const handleCalc = () => {
    const area = parseFloat(calcArea),
      coats = parseInt(calcCoats);
    if (area > 0 && coats > 0)
      setCalcResult(
        `Approximately ${((area * coats) / 130).toFixed(1)} liters needed for ${area} sq ft with ${coats} coat${coats > 1 ? "s" : ""}`,
      );
  };

  const handleCalcAdvanced = () => {
    const bhkAreaMap: Record<string, number> = {
      "1 BHK": 575,
      "2 BHK": 950,
      "3 BHK": 1400,
      "4 BHK+": 2100,
    };
    const manualSqft = parseFloat(calcSqft);
    const carpetArea =
      !isNaN(manualSqft) && manualSqft > 0
        ? manualSqft
        : (bhkAreaMap[calcBhk] ?? 950);

    const paintableArea = Math.round(carpetArea * 3.5);
    const tierRateMap: Record<string, [number, number]> = {
      economy: [12, 18],
      premium: [20, 28],
      luxury: [30, 45],
    };
    const cityMultiplier: Record<string, number> = {
      mumbai: 1.15,
      bangalore: 1.0,
      delhi: 1.0,
      hyderabad: 0.95,
      pune: 1.0,
      chennai: 0.92,
      kolkata: 0.88,
      other: 0.9,
    };
    const typeMultiplier: Record<string, number> = {
      "Fresh Painting": 1.0,
      "Re-Painting": 0.72,
      "Rental Painting": 0.55,
    };
    const [rateMin, rateMax] = tierRateMap[calcTier] ?? [20, 28];
    const cm = cityMultiplier[calcCity] ?? 1.0;
    const tm = typeMultiplier[calcType] ?? 1.0;
    const parts = calcPart === "Both" ? 1.4 : 1.0;

    const low =
      Math.round((paintableArea * rateMin * cm * tm * parts) / 1000) * 1000;
    const high =
      Math.round((paintableArea * rateMax * cm * tm * parts) / 1000) * 1000;
    const fmt = (n: number) =>
      n >= 100000
        ? `₹${(n / 100000).toFixed(1)}L`
        : `₹${(n / 1000).toFixed(0)}K`;

    setCalcAdvancedResult({
      cost: `${fmt(low)} – ${fmt(high)}`,
      area: `${paintableArea.toLocaleString()} sq ft`,
      tier: calcTier.charAt(0).toUpperCase() + calcTier.slice(1),
      city: calcCity.charAt(0).toUpperCase() + calcCity.slice(1),
      type: calcType,
    });
  };

  const updateSliderPosition = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, next)));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateSliderPosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  useEffect(() => {
    setSliderPos(50);
  }, [activeTransform]);

  useEffect(() => {
    if (hasShownConsultationPopup) return;
    const timer = setTimeout(() => {
      setShowConsultationPopup(true);
      setHasShownConsultationPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [hasShownConsultationPopup]);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-white">
        <div className="text-center">
          <Loader className="w-8 h-8 text-gold animate-spin mx-auto mb-4" />
          <p className="text-charcoal-muted text-sm">Loading Colorsome...</p>
        </div>
      </div>
    );

  // ─── Header colours ────────────────────────────────────────────────────────

  const onDark = headerDark;
  const navText = onDark ? "text-white" : "text-[#2D2D2D]";
  const navMuted = onDark ? "text-white/70" : "text-[#6B6B6B]";
  const navBg = scrolled
    ? onDark
      ? "bg-[#2D2D2D]/90 backdrop-blur-md shadow-lg border-b border-white/10"
      : "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
    : "bg-transparent";

  // Split products for marquee rows

  // const mid = Math.ceil(products.length / 2);

  // const row1 = products.slice(0, mid);

  // const row2 = products.slice(mid);

  const marqueeData = products;
  const row1 = marqueeData.slice(0, Math.ceil(marqueeData.length / 2));
  const row2 = marqueeData.slice(Math.ceil(marqueeData.length / 2));
  return (
    <>
      {/* ════════════════════════════════════════
          SELF-CONTAINED HEADER
          (replaces any external <Header> component
           — make sure your layout.tsx does NOT also render <Header>)
      ════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        {/* <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]"> */}

        <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-[78px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4 flex-shrink-0 min-w-[260px]"
          >
            <div className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#E8E2D8] p-2 shrink-0">
              <img
                src="Ara_Weather_Coat.png"
                alt="Colorsome logo"
                className="w-full h-full object-contain scale-[1.08]"
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <div className="flex items-start">
                <span
                  className={`transition-colors duration-300 ${navText}`}
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2rem",
                    lineHeight: "0.82",
                    fontWeight: 700,
                    letterSpacing: "-0.055em",
                    textTransform: "uppercase",
                    // color: '#2D2D2D',
                    // color: '#6E5336',
                    // color: '#A0602B',
                  }}
                >
                  COLORSOME
                </span>

                <span
                  className={`transition-colors duration-300 ${navText}`}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.55rem",
                    lineHeight: 1,
                    fontWeight: 700,
                    marginLeft: "0.18rem",
                    marginTop: "0.12rem",
                    letterSpacing: "0.04em",
                    // color: '#2D2D2D',
                    // color: '#6E5336',
                    // color: '#A0602B',
                  }}
                >
                  R
                </span>
              </div>

              {/* <span

    className={`mt-1.5 transition-colors duration-300 ${navMuted}`}

    style={{
      fontFamily: 'var(--font-inter)',
      fontSize: '0.82rem',
      lineHeight: 1,
      fontWeight: 700,
      letterSpacing: '0.34em',
      textTransform: 'uppercase',
    }}

  >
    Paints
  </span> */}
            </div>
          </Link>
          {/* Desktop nav */}

          <nav className="hidden md:flex items-center">
            {/* <div className="flex items-center gap-1 rounded-full border border-black/6 bg-white/72 backdrop-blur-md px-2 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"> */}
            <div
              className={`flex items-center gap-1 rounded-full px-2 py-1 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 ${
                onDark
                  ? "border border-white/10 bg-white/8"
                  : "border border-black/6 bg-white/72"
              }`}
            >
              {[
                ["Home", "/"],
                ["Products", "/products"],
                ["Shades", "/shades"],
                ["Assistance", "/assistance"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => {
                const isActive = label === "Home";
                return (
                  <Link
                    key={label}
                    href={href}
                    className={`relative rounded-full px-4 py-2.5 transition-all duration-200 ${
                      isActive
                        ? "text-[#2D2D2D] bg-[#F3E7C9]"
                        : onDark
                          ? "text-white/75 hover:text-white hover:bg-white/10"
                          : "text-[#6B6B6B] hover:text-[#2D2D2D] hover:bg-black/[0.04]"
                    }`}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.92rem",
                      fontWeight: isActive ? 600 : 500,
                      letterSpacing: "-0.01em",
                      lineHeight: 1,
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </nav>
          {/* CTA + mobile burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/assistance"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 text-white flex-shrink-0 shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:translate-y-[-1px]"
              style={{
                background:
                  onDark && !scrolled ? "rgba(255,255,255,0.18)" : "#2D2D2D",
                fontFamily: "var(--font-inter)",
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              <Phone className="w-4 h-4" />
              Book Assistance
            </Link>

            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${navText}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-4 space-y-3"
            >
              {[
                ["Home", "/"],
                ["Products", "/products"],
                ["Shades", "/shades"],
                ["Assistance", "/assistance"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  // className="block text-sm font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-gray-50"
                  className="block text-charcoal hover:text-gold transition-colors py-2 border-b border-gray-50"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* ════════════════════════════════════════
          PAGE CONTENT  (pt-[72px] to clear fixed header)
      ════════════════════════════════════════ */}
      {/* <div className="bg-warm-white overflow-x-hidden pt-[72px]"> */}
      <div
        className={`${inter.variable} ${cormorant.variable} bg-warm-white overflow-x-hidden pt-[72px]`}
      >
        {/* ── HERO ────────────────────────────── */}
        <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F7] via-[#FAF9F7]/93 to-[#FAF9F7]/30" />
          </div>
          {dots.map((d, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full hidden lg:block pointer-events-none"
              style={{
                width: d.size,
                height: d.size,
                top: d.top,
                left: d.left,
                background: d.color,
                opacity: 0.65,
              }}
              animate={{ y: [0, -12, 0], scale: [1, 1.15, 1] }}
              transition={{
                duration: 3.5 + i * 0.5,
                delay: d.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <div className="max-w-[1280px] mx-auto px-6 relative z-10 py-16 w-full">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
              <motion.div initial="hidden" animate="show" variants={stagger}>
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-full mb-6 shadow-sm"
                >
                  <span className="flex gap-1">
                    {ACCENTS.map((c) => (
                      <span
                        key={c}
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: c }}
                      />
                    ))}
                  </span>
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-charcoal">
                    Premium Paint Solutions
                  </span>
                </motion.div>
                {/* <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-charcoal leading-[1.08] mb-6"> */}

                <motion.h1 variants={fadeUp} className="hero-title mb-4">
                  {/* <motion.h1 
                  variants={fadeUp} 
                  className="hero-title mb-6"
                  style={{
                    fontFamily: "serif",        // Forces the base text to use the serif font family
                    fontWeight: "bold",         // Forces the base text to be bold/thick
                  }}
                > */}
                  Transform Your Home
                  <br />
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${BRAND.pink}, ${BRAND.orange}, ${BRAND.yellow})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    with Colour &amp;
                  </span>
                  <br />
                  Craftsmanship
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-base text-charcoal-muted leading-relaxed mb-7 max-w-md"
                >
                  Premium interior and exterior paints with superior finish,
                  lasting durability, and rich colour depth. Expert guidance for
                  flawless results.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/products" className="btn-primary">
                    Explore Products <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>

                  <Link href="/assistance" className="btn-secondary">
                    <Phone className="w-5 h-5 mr-2" /> Book Assistance
                  </Link>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-10 flex items-center gap-3 flex-wrap"
                >
                  <span className="text-xs text-charcoal-muted">
                    50+ shades →
                  </span>

                  <div className="flex gap-1.5">
                    {[
                      "#E91E8C",
                      "#2196F3",
                      "#4CAF50",
                      "#FF5722",
                      "#FFC107",
                      "#9C27B0",
                      "#00BCD4",
                      "#FF9800",
                    ].map((c) => (
                      <motion.div
                        key={c}
                        whileHover={{ scale: 1.35, y: -4 }}
                        transition={{ type: "spring", damping: 15 }}
                        className="w-6 h-6 rounded-full shadow-sm cursor-pointer border-2 border-white"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* ── Hero Visual — Premium Product Showcase ── */}

              {/* Define showcase products inline */}
              {(() => {
                const SHOWCASE = [
                  {
                    src: "/AxisWeatherC.png",
                    name: "Axis Weather Coat",
                    cat: "Exterior Paint",
                    feat: ["Weatherproof", "Durable", "Premium"],
                    accent: BRAND.blue,
                    bg: "#EFF6FF",
                  },
                  {
                    src: "/AraWeather.png",
                    name: "Ara Weather Coat",
                    cat: "Exterior Paint",
                    feat: ["Rich Finish", "Long Lasting", "Smooth"],
                    accent: BRAND.green,
                    bg: "#F0FDF4",
                  },
                  {
                    src: "/Duraguard_Exterior.png",
                    name: "Duraguard Exterior",
                    cat: "Exterior Paint",
                    feat: ["Protection", "Climate-Ready", "Premium"],
                    accent: BRAND.orange,
                    bg: "#FFF7ED",
                  },
                  {
                    src: "/Glossmate_Enamel_Paint.png",
                    name: "Glossmate Enamel",
                    cat: "Enamel Paint",
                    feat: ["High Gloss", "Wood & Metal", "Durable"],
                    accent: BRAND.pink,
                    bg: "#FCE7F3",
                  },
                  {
                    src: "/Uniprime.png",
                    name: "Uniprime",
                    cat: "Interior Paint",
                    feat: ["Emulsion", "Smooth", "Premium"],
                    accent: BRAND.yellow,
                    bg: "#FFFBEB",
                  },
                  {
                    src: "/Tough_Tex.png",
                    name: "Tough Tex",
                    cat: "Texture Paint",
                    feat: ["Textured", "Decorative", "Strong"],
                    accent: "#9333ea",
                    bg: "#FAF5FF",
                  },
                ];
                const idx = currentImageIndex % SHOWCASE.length;
                const active = SHOWCASE[idx];

                return (
                  <motion.div
                    className="hidden lg:block relative"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 100,
                      delay: 0.3,
                    }}
                    style={{ width: 460, flexShrink: 0 }}
                  >
                    {/* ── Main Card ── */}
                    <div
                      className="relative rounded-[2rem] overflow-hidden shadow-2xl"
                      style={{ height: 480 }}
                    >
                      {/* Animated gradient background */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`bg-${idx}`}
                          className="absolute inset-0"
                          style={{
                            background: `radial-gradient(ellipse at 60% 40%, ${active.accent}22 0%, ${active.bg} 65%)`,
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6 }}
                        />
                      </AnimatePresence>

                      {/* Subtle grid texture overlay */}
                      <div
                  className="absolute -inset-3 rounded-3xl -z-10 opacity-40"
                  style={{
                    background: `conic-gradient(from 0deg, ${BRAND.pink}, ${BRAND.orange}, ${BRAND.yellow}, ${BRAND.green}, ${BRAND.blue}, ${BRAND.pink})`,
                  }}
                />

                      {/* Big glowing blob behind product */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`blob-${idx}`}
                          className="absolute rounded-full blur-3xl"
                          style={{
                            width: 260,
                            height: 260,
                            top: "50%",
                            left: "50%",
                            marginTop: -130,
                            marginLeft: -130,
                            background: `radial-gradient(circle, ${active.accent}40 0%, transparent 70%)`,
                          }}
                          initial={{ scale: 0.6, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </AnimatePresence>

                      {/* Category pill top-left */}
                      <div
                        className="absolute top-5 left-5 z-20 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-md"
                        style={{ background: active.accent }}
                      >
                        {active.cat}
                      </div>

                      {/* 10+ badge top-right */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0, type: "spring", damping: 15 }}
                        className="absolute top-5 right-5 z-20 text-white rounded-2xl shadow-lg px-4 py-3 text-center"
                        style={{
                          background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.yellow}, ${BRAND.green})`,
                        }}
                      >
                        <p
                          className="text-xl font-bold leading-none"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          10+
                        </p>
                        <p className="text-[9px] tracking-[0.1em] uppercase mt-0.5">
                          Yrs Life
                        </p>
                      </motion.div>

                      {/* Product image — large, centered, floats */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={`img-${idx}`}
                            src={active.src}
                            alt={active.name}
                            className="object-contain drop-shadow-2xl"
                            style={{ width: 600, height: 600 }}
                            // style={{ maxWidth: "85%", maxHeight: "280px", width: "auto", height: "auto" }}
                            initial={{ opacity: 0, scale: 0.78, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: -20 }}
                            transition={{
                              type: "spring",
                              damping: 20,
                              stiffness: 160,
                            }}
                          />
                        </AnimatePresence>
                        {/* Floor shadow */}
                        <div
                          className="absolute blur-2xl opacity-20 rounded-full"
                          style={{
                            width: 180,
                            height: 28,
                            bottom: 80,
                            background: active.accent,
                          }}
                        />
                      </div>

                      {/* Bottom info strip */}
                      <div
                        className="absolute bottom-0 left-0 right-0 z-20 px-6 pt-5 pb-5"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(255,255,255,0.96) 60%, transparent)",
                        }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`info-${idx}`}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{
                              type: "spring",
                              damping: 22,
                              stiffness: 180,
                            }}
                          >
                            <p
                              className="text-xl font-bold text-[#1A1A1A] leading-tight mb-2"
                              style={{
                                fontFamily: "var(--font-cormorant)",
                                letterSpacing: "-0.02em",
                              }}
                            >
                              {active.name}
                            </p>
                            <div className="flex gap-1.5 flex-wrap">
                              {active.feat.map((f) => (
                                <span
                                  key={f}
                                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"
                                  style={{
                                    background: `${active.accent}18`,
                                    color: active.accent,
                                  }}
                                >
                                  {f}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* ── Thumbnail rail below card ── */}
                    {/* <div className="flex gap-2.5 mt-4 justify-center">
                      {SHOWCASE.map((p, i) => (
                        <motion.button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          whileHover={{ scale: 1.12, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", damping: 16 }}
                          className="relative rounded-xl overflow-hidden border-2 transition-all duration-200"
                          style={{
                            width: 52,
                            height: 52,
                            borderColor: i === idx ? p.accent : "transparent",
                            background: i === idx ? `${p.accent}12` : "#f3f2ef",
                            boxShadow:
                              i === idx ? `0 4px 14px ${p.accent}40` : "none",
                          }}
                        >
                          <img
                            src={p.src}
                            alt={p.name}
                            className="w-full h-full object-contain p-1"
                          />
                          {i === idx && (
                            <motion.div
                              layoutId="thumb-indicator"
                              className="absolute inset-0 rounded-xl ring-2"
                              style={{ ringColor: p.accent }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </div> */}

                    {/* ── Floating Colorsome Luxe card ── */}
                    <motion.div
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0, type: "spring", damping: 20 }}
                      className="absolute -left-16 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-3.5 z-30"
                      style={{ minWidth: 172 }}
                    >
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-9 h-9 rounded-lg bg-[#F7F6F2] border border-gray-200 p-0.5 shrink-0">
                          <img
                            src="/Ara_Weather_Coat.png"
                            alt="logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <p
                            className="text-xs font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            Colorsome Luxe
                          </p>
                          <p className="text-[10px] text-gray-400 font-medium">
                            Interior Matte
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1.5">
                        {ACCENTS.map((c) => (
                          <motion.div
                            key={c}
                            whileHover={{ scale: 1.25, y: -2 }}
                            className="w-5 h-5 rounded-full border-2 border-white shadow cursor-pointer"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })()}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            {/* <span className="text-[10px] tracking-[0.2em] uppercase text-charcoal-muted">Scroll</span> */}

            {/* <span className="text-xs tracking-[0.14em] uppercase text-charcoal-muted">
              Scroll
            </span>

            <ChevronDown className="w-4 h-4 text-charcoal-muted animate-bounce" /> */}
          </motion.div>
        </section>
        {/* ── COLOUR TICKER ───────────────────── */}
        <div
          className="overflow-hidden py-4 border-y border-gray-100"
          style={{ background: BRAND.dark }}
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, rep) => (
              <div key={rep} className="flex gap-8 items-center">
                {[
                  "Premium Quality",
                  "Rich Colour Depth",
                  "Expert Guidance",
                  "Weather Resistance",
                  "100% Indian Owned",
                  "Trusted Since 2008",
                  "Eco-Friendly Formulas",
                  "100% Premium Quality",
                ].map((t, i) => (
                  <span
                    key={t}
                    className="flex items-center gap-3 text-white/70 text-sm font-medium tracking-wide"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: ACCENTS[i % 5] }}
                    />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── CATEGORIES ──────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-16">
                <p className="section-label">Our Range</p>
                <h2 className="section-title mb-4">
                  Premium Product Categories
                </h2>
                <p className="section-subtitle mx-auto">
                  From luxurious interior finishes to weather-resistant exterior
                  coatings — discover the perfect solution for every surface
                </p>
              </motion.div>
            </Section>
            <Section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {categories.map((category, idx) => {
                const icons = [
                  Droplets,
                  Shield,
                  Layers,
                  Paintbrush,
                  Zap,
                  Ruler,
                  Sparkles,
                  Home,
                ];

                const Icon = icons[idx % icons.length];
                const accent = ACCENTS[idx % ACCENTS.length];
                return (
                  <motion.div key={category.id} variants={scaleIn}>
                    <Link
                      href={`/products?category=${category.slug}`}
                      className="group block p-6 lg:p-8 text-center rounded-2xl bg-warm-gray hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", damping: 15 }}
                        className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                        style={{ background: `${accent}18` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: accent }} />
                      </motion.div>
                      {/* <h3 className="font-serif text-lg font-medium text-charcoal mb-2">{category.name}</h3> */}
                      <h3 className="card-title mb-2">{category.name}</h3>

                      {category.description && (
                        <p className="text-sm text-charcoal-muted line-clamp-2">
                          {category.description}
                        </p>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </Section>
          </div>
        </section>
        {/* ── WHY COLORSOME ───────────────────── */}
        <section
          id="why-colorsome"
          className="section-padding overflow-hidden"
          style={{ background: BRAND.dark }}
        >
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <Section>
                <motion.div variants={fadeUp}>
                  <p className="section-label">Why Choose Us</p>

                  {/* <h2 className="font-serif text-5xl md:text-6xl font-semibold tracking-[-0.03em] mb-6 leading-[1.02] text-white"> */}

                  <h2 className="hero-title-light mb-6 text-white">
                    Uncompromising Quality,
                    <br />
                    <span
                      style={{
                        background: `linear-gradient(90deg, ${BRAND.pink}, ${BRAND.orange}, ${BRAND.yellow})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Exceptional Finish
                    </span>
                  </h2>

                  {/* <p className="text-white/60 leading-relaxed mb-8 max-w-md">Every Colorsome product is crafted with precision and care. Our advanced formulations deliver unmatched coverage, vibrant colours, and lasting protection.</p> */}

                  <p className="section-subtitle mb-8 max-w-md text-white/60">
                    Every Colorsome product is crafted with precision and care.
                    Our advanced formulations deliver unmatched coverage,
                    vibrant colours, and lasting protection.
                  </p>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white hover:opacity-90 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.yellow})`,
                    }}
                  >
                    Our Story <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </Section>

              <Section className="grid grid-cols-2 gap-5">
                {services.map((s) => (
                  <motion.div
                    key={s.title}
                    variants={scaleIn}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-6 rounded-2xl border border-white/10 cursor-default"
                    style={{ background: `${s.color}14` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${s.color}22` }}
                    >
                      <s.icon className="w-5 h-5" style={{ color: s.color }} />
                    </div>

                    {/* <h3 className="font-serif text-base font-medium mb-2 text-white">{s.title}</h3> */}

                    <h3 className="card-title-light mb-2">{s.title}</h3>

                    {/* <p className="text-xs text-white/50">{s.desc}</p> */}

                    <p className="text-sm text-white/50 leading-relaxed">
                      {s.desc}
                    </p>
                  </motion.div>
                ))}
              </Section>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════

            INFINITE PRODUCT SHOWCASE

        ══════════════════════════════════════ */}

        <section className="section-padding bg-warm-gray overflow-hidden">
          {/* <div className="container-wide mb-12"> */}

          <div className="container-wide mb-8">
            <Section>
              <motion.div
                variants={fadeUp}
                className="flex flex-col lg:flex-row lg:items-end justify-between"
              >
                <div>
                  <p className="section-label">Our Products</p>

                  <h2 className="section-title">Explore Our Full Range</h2>

                  {/* <p className="text-charcoal-muted mt-2 max-w-sm">Every product engineered for performance and beauty.</p> */}

                  <p className="section-subtitle mt-2 max-w-sm">
                    Every product engineered for performance and beauty.
                  </p>
                </div>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-charcoal font-medium text-sm hover:text-gold transition-colors mt-4 lg:mt-0"
                >
                  View All Products <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </Section>
          </div>

          {/* {products.length > 0 ? ( */}

          {/* {marqueeData.length > 0 ? (

  <div className="space-y-5">

    <InfiniteMarquee
      // products={row1.length > 0 ? row1 : products}
      products={row1}
      speed={32}
      reverse={false}
    />

    {row2.length > 0 && (
      <InfiniteMarquee
        products={row2}
        speed={36}
        reverse={true}
      />
    )}
  </div>
) : (

  <div className="text-center py-16 text-charcoal-muted">
    <Droplets className="w-10 h-10 mx-auto mb-3 text-gold opacity-50" />
    <p className="text-sm">Products loading...</p>
  </div>

)} */}
          {marqueeData.length > 0 || products.length > 0 ? (
            <div className="space-y-5">
              <InfiniteMarquee
                products={
                  row1.length > 0
                    ? row1
                    : products.slice(0, Math.ceil(products.length / 2))
                }
                speed={32}
                reverse={false}
              />
              {(row2.length > 0 || products.length > 1) && (
                <InfiniteMarquee
                  products={
                    row2.length > 0
                      ? row2
                      : products.slice(Math.ceil(products.length / 2))
                  }
                  speed={36}
                  reverse={true}
                />
              )}
            </div>
          ) : (
            <div className="text-center py-16 text-charcoal-muted">
              <Droplets className="w-10 h-10 mx-auto mb-3 text-gold opacity-50" />
              <p className="text-sm">Products loading...</p>
            </div>
          )}
          {/* Featured 3 pinned cards below marquee */}
          {/* {products.length > 0 && (
            <div className="container-wide mt-14">
              <Section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.slice(0, 3).map((product, i) => (
                  <FeaturedProductCard key={product.id} product={product} index={i} />
                ))}
              </Section>
            </div>
          )} */}
        </section>

        {/* ── FEATURED SHADES ──────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            {/* <Section>
              <motion.div variants={fadeUp} className="text-center mb-14">
                <p className="section-label">Colour Inspiration</p>
                <h2 className="section-title mb-4">Curated Shade Collections</h2>
                <p className="section-subtitle mx-auto">Explore our handpicked colour palettes designed to elevate any space</p>
              </motion.div>
            </Section>
            <Section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 lg:gap-5">
              {shades.slice(0, 12).map((shade) => (
                <motion.div key={shade.id} variants={scaleIn} whileHover={{ y: -6, scale: 1.05 }} transition={{ type: 'spring', damping: 15 }}>
                  <ShadeCard shade={shade} size="lg" showInfo={false} />
                </motion.div>
              ))}
            </Section> */}

            <Section>
              <motion.div
                variants={fadeUp}
                className="text-center mb-12 md:mb-14"
              >
                <p className="section-label">Transformations</p>

                <h2 className="hero-title-light mb-4">
                  See the Beauty of a
                  <br />
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${BRAND.pink}, ${BRAND.orange}, ${BRAND.yellow})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Real Makeover
                  </span>
                </h2>

                <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                  Real rooms. Real results. Slide across each space and feel how
                  the right colour palette transforms mood, light, and character
                  instantly.
                </p>
              </motion.div>
            </Section>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link href="/shades" className="btn-primary">
                Explore All Shades <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── BROWSE BY FINISH ─────────────────── */}

        <section className="section-padding bg-warm-gray">
          <div className="container-wide">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-14">
                <p className="section-label">By Finish</p>

                <h2 className="section-title mb-4">Find Your Perfect Finish</h2>

                <p className="section-subtitle mx-auto">
                  From velvety matte to brilliant gloss — each finish creates a
                  distinct character
                </p>
              </motion.div>
            </Section>

            <Section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {browseByFinish.map((f) => (
                <motion.div
                  key={f.name}
                  variants={scaleIn}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", damping: 15 }}
                >
                  <Link
                    href="/products"
                    className="group block overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className="h-36 flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: f.color }}
                    >
                      <f.icon
                        className="w-10 h-10"
                        style={{ color: f.accent, opacity: 0.7 }}
                      />

                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `${f.accent}20` }}
                      />
                    </div>

                    <div className="p-5">
                      {/* <h3 className="font-serif text-xl font-semibold tracking-[-0.02em] text-charcoal">{f.name}</h3> */}
                      <h3 className="card-title">{f.name}</h3>
                      {/* <p className="text-xs text-charcoal-muted mt-1">{f.desc}</p> */}
                      <p className="text-sm text-charcoal-muted mt-1 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </Section>
          </div>
        </section>

        {/* ── BROWSE BY SPACE ──────────────────── */}

        <section className="section-padding bg-white">
          <div className="container-wide">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-14">
                <p className="section-label">By Space</p>

                <h2 className="section-title mb-4">Colours for Every Room</h2>
              </motion.div>
            </Section>

            <Section className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {browseBySpace.map((s) => (
                <motion.div
                  key={s.name}
                  variants={scaleIn}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", damping: 15 }}
                >
                  <Link
                    href="/shades"
                    className="group block overflow-hidden rounded-2xl relative h-72 shadow-md hover:shadow-xl transition-all"
                  >
                    <img
                      src={s.image}
                      alt={s.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white" style={{ background: s.accent }}>{s.tag}</div> */}

                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.12em] text-white">
                      {s.tag}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      {/* <h3 className="font-serif text-xl font-medium text-white mb-1">{s.name}</h3> */}

                      <h3 className="card-title-light mb-1">{s.name}</h3>

                      <span className="inline-flex items-center gap-1 text-xs text-white/70 group-hover:text-white transition-colors">
                        View Shades <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </Section>
          </div>
        </section>

        {/* ── BEFORE / AFTER ───────────────────── */}
        {/* <section id="before-after" className="section-padding overflow-hidden" style={{ background: BRAND.dark }}> */}
        <section
          id="before-after"
          className="py-20 md:py-24 lg:py-28 overflow-hidden relative"
          style={{ background: BRAND.dark }}
        >
          <div className="container-wide">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-14">
                <p className="section-label">Transformations</p>

                {/* <h2 className="font-serif text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-white mb-4 leading-[1.02]">See the Difference</h2> */}

                <h2 className="hero-title-light text-white mb-4">
                  See the Difference
                </h2>

                {/* <p className="text-white/50 max-w-lg mx-auto">Real rooms. Real results. Drag the slider to reveal the Colorsome transformation.</p> */}

                {/* <p className="text-white/50 max-w-2xl mx-auto"> */}

                <p className="section-subtitle text-white/50 max-w-2xl mx-auto">
                  Real spaces. Refined palettes. See how Colorsome turns
                  ordinary rooms into warm, polished, design-led makeovers.
                </p>
              </motion.div>
            </Section>

            {/* <div className="flex justify-center gap-3 mb-8 flex-wrap">
              {transformations.map((t, i) => (
                <motion.button key={i} onClick={() => setActiveTransform(i)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTransform === i ? 'text-white shadow-lg' : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'}`}
                  style={activeTransform === i ? { background: t.color } : {}}>
                  {t.label}
                </motion.button>
              ))}
            </div> */}

            <div className="flex justify-center gap-3 mb-8 md:mb-10 flex-wrap">
              {transformations.map((t, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveTransform(i)}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-5 md:px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    activeTransform === i
                      ? "text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] border-transparent"
                      : "bg-white/5 text-white/65 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
                  }`}
                  style={
                    activeTransform === i
                      ? {
                          background: `linear-gradient(135deg, ${t.color}, ${t.color}DD)`,

                          boxShadow: `0 12px 35px ${t.color}30`,
                        }
                      : {}
                  }
                >
                  {t.label}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTransform}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.99 }}
                transition={{ type: "spring", damping: 24, stiffness: 180 }}
                className="relative max-w-6xl mx-auto"
              >
                <div
                  className="absolute -inset-6 rounded-[2.5rem] blur-3xl opacity-20 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${transformations[activeTransform].color}50 0%, transparent 72%)`,
                  }}
                />

                {/* <div className="grid md:grid-cols-2 gap-6 lg:gap-8 relative">

      <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
        <img
        src="/beforeimg.png"
        alt="Before transformation"
        className="w-full h-[340px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        draggable={false}
      />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
        <div className="absolute top-5 left-5 z-10 bg-black/45 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/60" />
          Before
        </div>

        <div className="absolute bottom-5 left-5 right-5 z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 backdrop-blur-md px-4 py-2 text-white/85 text-xs font-medium">
            Existing mood
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
        <img
          src={transformations[activeTransform].after}
          alt="After transformation by Colorsome"
          className="w-full h-[340px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <div
          className="absolute top-5 right-5 z-10 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5"
          style={{
            background: `${transformations[activeTransform].color}CC`,
            backdropFilter: 'blur(6px)',
          }}
        >
          <BadgeCheck className="w-3.5 h-3.5" />
          After Colorsome
        </div>

        <div className="absolute bottom-5 left-5 right-5 z-10">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white"
            style={{ background: `${transformations[activeTransform].color}22` }}
          >
            Complete makeover
          </div>
        </div>
      </div>
    </div> */}

                <div
                  ref={sliderRef}
                  className="relative mx-auto max-w-5xl h-[340px] md:h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#1f1f1f] shadow-[0_28px_80px_rgba(0,0,0,0.35)] select-none touch-none cursor-col-resize"
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                >
                  <img
                    // src={transformations[activeTransform].after}
                    src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&q=80"
                    alt="After Colorsome"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                  {/* <div
    className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
    style={{ width: `${sliderPos}%` }}
  >
    <img
      src={transformations[activeTransform].before}
      alt="Before transformation"
      className="absolute inset-0 w-full h-full object-cover"
      draggable={false}
    />
  </div> */}
                  <img
                    src={transformations[activeTransform].before}
                    alt="Before transformation"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/6 pointer-events-none" />
                  <div
                    className="absolute inset-y-0 z-20 pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div
                      className="absolute inset-y-0 left-0 w-[2px] -translate-x-1/2"
                      style={{
                        background: `linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.98), rgba(255,255,255,0.15))`,
                        boxShadow: `0 0 0 1px rgba(255,255,255,0.08), 0 0 24px ${transformations[activeTransform].color}44`,
                      }}
                    />

                    <div
                      className="absolute left-0 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-40"
                      style={{
                        background: transformations[activeTransform].color,
                      }}
                    />

                    <motion.div
                      animate={{
                        scale: isDragging ? 1.08 : 1,
                        boxShadow: isDragging
                          ? `0 18px 45px rgba(0,0,0,0.30), 0 0 0 8px ${transformations[activeTransform].color}22`
                          : `0 16px 38px rgba(0,0,0,0.24), 0 0 0 6px rgba(255,255,255,0.06)`,
                      }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <div
                        className="relative flex w-14 h-14 md:w-[66px] md:h-[66px] items-center justify-center rounded-full border bg-white/95 backdrop-blur-md"
                        style={{
                          borderColor: `${transformations[activeTransform].color}AA`,
                        }}
                      >
                        <div
                          className="absolute inset-[5px] rounded-full"
                          style={{
                            background: `linear-gradient(145deg, white, ${transformations[activeTransform].color}10)`,
                          }}
                        />
                        <div className="relative z-10 flex items-center justify-center gap-1 text-charcoal">
                          <ChevronLeft className="w-4 h-4" />
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute top-5 left-5 z-10 bg-black/40 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 pointer-events-none border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-white/60" />
                    Before
                  </div>
                  <div
                    className="absolute top-5 right-5 z-10 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 pointer-events-none border border-white/10"
                    style={{
                      background: `linear-gradient(135deg, ${transformations[activeTransform].color}, ${transformations[activeTransform].color}DD)`,
                      boxShadow: `0 8px 24px ${transformations[activeTransform].color}35`,
                    }}
                  >
                    <BadgeCheck className="w-3.5 h-3.5" />
                    After Colorsome
                  </div>
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/35 backdrop-blur-md px-4 py-2 text-xs text-white/85 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                      <MoveHorizontal className="w-3.5 h-3.5" />
                      Slide to reveal makeover
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* <div className="text-center mt-6">
              <span className="inline-flex items-center gap-2 text-sm">
                <Droplets className="w-4 h-4" style={{ color: BRAND.yellow }} />
                <span className="text-white/50">Used:</span>
                <span className="font-medium" style={{ color: transformations[activeTransform].color }}>{transformations[activeTransform].product}</span>
              </span>
            </div> */}

            <div className="text-center mt-8 md:mt-10">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/6 border border-white/10 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: `${transformations[activeTransform].color}22`,
                  }}
                >
                  <Droplets
                    className="w-4 h-4"
                    style={{ color: transformations[activeTransform].color }}
                  />
                </div>
                <div className="text-left">
                  {/* <p className="text-[11px] uppercase tracking-[0.18em] text-white/45 font-semibold"> */}
                  {/* <p className="text-xs uppercase tracking-[0.14em] text-white/45 font-semibold">
        Featured makeover palette
      </p>
      <p
        className="text-sm font-semibold"
        style={{ color: transformations[activeTransform].color }}
      >
        {transformations[activeTransform].product}
      </p> */}
                  <p className="text-xs uppercase tracking-[0.14em] text-white/45 font-semibold">
                    Featured makeover palette
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: transformations[activeTransform].color }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PAINT CALCULATOR ─────────────────── */}

        {/* ── PAINT COST CALCULATOR (UPGRADED) ─────────────────────────── */}
        <section className="section-padding bg-warm-gray" id="paint-calculator">
          <div className="container-wide">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <p className="section-label">Estimate</p>
                <h2 className="section-title mb-3">Painting Cost Calculator</h2>
                <p className="section-subtitle mx-auto max-w-2xl">
                  Estimate Your Home Painting Cost Instantly - Already have your
                  estimate?{" "}
                  <a
                    href="#cost-reference"
                    className="underline text-charcoal font-medium hover:text-gold transition-colors"
                  >
                    Scroll down for detailed cost breakdowns
                  </a>{" "}
                  by apartment size, city, and paint brand - or call us at{" "}
                  <Link
                    href="/assistance"
                    className="font-semibold text-charcoal hover:text-gold transition-colors underline"
                  >
                    Get Free Estimate
                  </Link>{" "}
                  for a free consultation.
                </p>
              </motion.div>
            </Section>

            <div className="max-w-5xl mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                <div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${BRAND.pink}, ${BRAND.orange}, ${BRAND.yellow}, ${BRAND.green}, ${BRAND.blue})`,
                  }}
                />
                <div className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* LEFT — Inputs */}
                    <div className="space-y-7">
                      {/* City */}
                      <div>
                        <label className="label-premium mb-2 block">
                          <span
                            className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] font-black mr-2"
                            style={{ background: BRAND.pink }}
                          >
                            1
                          </span>
                          Where do you live?
                        </label>
                        <select
                          value={calcCity}
                          onChange={(e) => setCalcCity(e.target.value)}
                          className="select-premium"
                        >
                          <option value="bangalore">Bangalore</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="delhi">Delhi / NCR</option>
                          <option value="hyderabad">Hyderabad</option>
                          <option value="pune">Pune</option>
                          <option value="chennai">Chennai</option>
                          <option value="kolkata">Kolkata</option>
                          <option value="other">Other City</option>
                        </select>
                      </div>

                      {/* Part */}
                      <div>
                        <label className="label-premium mb-2 block">
                          <span
                            className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] font-black mr-2"
                            style={{ background: BRAND.blue }}
                          >
                            2
                          </span>
                          What part of your house?
                        </label>
                        <div className="flex gap-3">
                          {["Interior", "Exterior", "Both"].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setCalcPart(opt)}
                              className={`flex-1 py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${calcPart === opt ? "text-white border-transparent" : "bg-warm-gray border-gray-200 text-charcoal-muted hover:border-gray-300"}`}
                              style={
                                calcPart === opt
                                  ? { background: BRAND.blue }
                                  : {}
                              }
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* BHK */}
                      {/* Step 3: BHK + sq ft */}
                      <div>
                        <label className="label-premium mb-2 block">
                          <span
                            className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] font-black mr-2"
                            style={{ background: BRAND.green }}
                          >
                            3
                          </span>
                          Size of your home
                        </label>
                        <div className="grid grid-cols-4 gap-2.5 mb-2">
                          {["1 BHK", "2 BHK", "3 BHK", "4 BHK+"].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => {
                                setCalcBhk(opt);
                                setCalcSqft("");
                              }}
                              className={`py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
                                calcBhk === opt && !calcSqft
                                  ? "text-white border-transparent"
                                  : "bg-warm-gray border-gray-200 text-charcoal-muted hover:border-gray-300"
                              }`}
                              style={
                                calcBhk === opt && !calcSqft
                                  ? { background: BRAND.green }
                                  : {}
                              }
                            >
                              {opt}
                            </button>
                          ))}
                        </div>

                        {/* Sq ft ranges under each BHK button */}
                        <div className="grid grid-cols-4 gap-2.5 mb-3">
                          {[
                            { bhk: "1 BHK", range: "500–650 sq ft" },
                            { bhk: "2 BHK", range: "800–1,100 sq ft" },
                            { bhk: "3 BHK", range: "1,200–1,600 sq ft" },
                            { bhk: "4 BHK+", range: "1,800–2,400 sq ft" },
                          ].map(({ bhk, range }) => (
                            <p
                              key={bhk}
                              className={`text-center text-[10px] leading-tight transition-colors ${
                                calcBhk === bhk && !calcSqft
                                  ? "font-semibold"
                                  : "text-charcoal-muted"
                              }`}
                              style={
                                calcBhk === bhk && !calcSqft
                                  ? { color: BRAND.green }
                                  : {}
                              }
                            >
                              {range}
                            </p>
                          ))}
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-3 my-3">
                          <div className="flex-1 h-px bg-gray-200" />
                          <span className="text-[10px] uppercase tracking-widest text-charcoal-muted font-semibold">
                            or enter exact
                          </span>
                          <div className="flex-1 h-px bg-gray-200" />
                        </div>

                        {/* Manual sq ft input */}
                        <div className="relative">
                          <input
                            type="number"
                            value={calcSqft}
                            onChange={(e) => setCalcSqft(e.target.value)}
                            placeholder="Enter carpet area (e.g. 1050)"
                            className="input-premium pr-16 w-full"
                            min={100}
                            max={10000}
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-charcoal-muted font-semibold pointer-events-none">
                            sq ft
                          </span>
                        </div>
                        <p className="text-[10px] text-charcoal-muted mt-1.5">
                          Carpet area × 3.5 = paintable wall area
                        </p>
                      </div>

                      {/* Type */}
                      <div>
                        <label className="label-premium mb-2 block">
                          <span
                            className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] font-black mr-2"
                            style={{ background: BRAND.orange }}
                          >
                            4
                          </span>
                          Type of painting
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            {
                              label: "Fresh Painting",
                              sub: "Painting from scratch",
                            },
                            {
                              label: "Re-Painting",
                              sub: "Change colour / finish",
                            },
                            {
                              label: "Rental Painting",
                              sub: "Tenant vacating?",
                            },
                          ].map((opt) => (
                            <button
                              key={opt.label}
                              onClick={() => setCalcType(opt.label)}
                              className={`p-3 rounded-xl border-2 text-left transition-all duration-200 ${calcType === opt.label ? "text-white border-transparent" : "bg-warm-gray border-gray-200 hover:border-gray-300"}`}
                              style={
                                calcType === opt.label
                                  ? { background: BRAND.orange }
                                  : {}
                              }
                            >
                              <p
                                className={`text-xs font-bold leading-tight ${calcType === opt.label ? "text-white" : "text-charcoal"}`}
                              >
                                {opt.label}
                              </p>
                              <p
                                className={`text-[10px] mt-0.5 leading-tight ${calcType === opt.label ? "text-white/80" : "text-charcoal-muted"}`}
                              >
                                {opt.sub}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={handleCalcAdvanced}
                        className="btn-primary w-full justify-center"
                      >
                        Get My Estimate <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>

                    {/* RIGHT — Tier selector */}
                    <div>
                      <label className="label-premium mb-4 block">
                        <span
                          className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] font-black mr-2"
                          style={{ background: BRAND.yellow }}
                        >
                          5
                        </span>
                        How would you describe your preference?
                      </label>
                      <div className="space-y-3">
                        {[
                          {
                            key: "economy",
                            color: "#4CAF50",
                            darkColor: "#388E3C",
                            label: "Economy",
                            sub: "Budget-friendly, doesn't compromise quality",
                            features: [
                              "Matt Finish",
                              "Non-Washable",
                              "Durability up to 2 yrs",
                            ],
                            dotColor: "bg-gray-400",
                          },
                          {
                            key: "premium",
                            color: "#2196F3",
                            darkColor: "#1565C0",
                            label: "Premium",
                            sub: "Classy and elegant feel for your walls",
                            features: [
                              "Matt & Sheen Finish",
                              "Semi-Washable",
                              "Durability up to 5 yrs",
                            ],
                            dotColor: "bg-blue-400",
                          },
                          {
                            key: "luxury",
                            color: "#FFC107",
                            darkColor: "#F57F17",
                            label: "Luxury",
                            sub: "Exquisite finish — the envy of your friends",
                            features: [
                              "Matt & Sheen Finish",
                              "Fully-Washable",
                              "Durability up to 7 yrs",
                            ],
                            dotColor: "bg-yellow-400",
                          },
                        ].map((tier) => (
                          <button
                            key={tier.key}
                            onClick={() => setCalcTier(tier.key)}
                            className={`w-full rounded-2xl overflow-hidden border-2 transition-all duration-200 text-left ${calcTier === tier.key ? "border-transparent" : "border-gray-200 hover:border-gray-300"}`}
                            style={
                              calcTier === tier.key
                                ? { borderColor: tier.color }
                                : {}
                            }
                          >
                            <div
                              className="px-5 py-3"
                              style={{
                                background:
                                  calcTier === tier.key
                                    ? tier.darkColor
                                    : tier.color,
                              }}
                            >
                              <p className="text-white font-black text-sm uppercase tracking-widest">
                                {tier.label}
                              </p>
                              <p className="text-white/80 text-xs mt-0.5">
                                {tier.sub}
                              </p>
                            </div>
                            <div className="px-5 py-3 bg-white">
                              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-charcoal-muted">
                                {tier.features.map((f) => (
                                  <span
                                    key={f}
                                    className="flex items-center gap-1.5"
                                  >
                                    <span
                                      className={`w-1.5 h-1.5 rounded-full ${tier.dotColor}`}
                                    />
                                    {f}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <AnimatePresence>
                    {calcAdvancedResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-8 rounded-2xl overflow-hidden border"
                        style={{ borderColor: `${BRAND.orange}30` }}
                      >
                        <div
                          className="h-1"
                          style={{
                            background: `linear-gradient(90deg, ${BRAND.pink}, ${BRAND.orange}, ${BRAND.yellow})`,
                          }}
                        />
                        <div
                          className="p-6 grid sm:grid-cols-3 gap-6"
                          style={{ background: `${BRAND.orange}08` }}
                        >
                          <div className="text-center">
                            <p className="text-xs uppercase tracking-widest text-charcoal-muted font-semibold mb-1">
                              Estimated Cost
                            </p>
                            <p
                              className="card-title text-2xl"
                              style={{ color: BRAND.orange }}
                            >
                              {calcAdvancedResult.cost}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs uppercase tracking-widest text-charcoal-muted font-semibold mb-1">
                              Paintable Area
                            </p>
                            <p
                              className="card-title text-2xl"
                              style={{ color: BRAND.blue }}
                            >
                              {calcAdvancedResult.area}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs uppercase tracking-widest text-charcoal-muted font-semibold mb-1">
                              Paint Tier
                            </p>
                            <p
                              className="card-title text-2xl capitalize"
                              style={{ color: BRAND.green }}
                            >
                              {calcAdvancedResult.tier}
                            </p>
                          </div>
                        </div>
                        <div
                          className="px-6 py-4 bg-white border-t"
                          style={{ borderColor: `${BRAND.orange}20` }}
                        >
                          <p className="text-xs text-charcoal-muted text-center">
                            Indicative estimate for {calcAdvancedResult.city} ·{" "}
                            {calcAdvancedResult.type} · Includes paint, labour,
                            primer & putty.{" "}
                            {/* <a href="tel:8088777173" className="font-semibold text-charcoal underline hover:text-gold">Call 8088777173</a> for exact quote. */}
                            <Link
                              href="/assistance"
                              className="font-semibold text-charcoal underline hover:text-gold transition-colors"
                            >
                              Book free consultation
                            </Link>
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Cost reference tables */}
              <div id="cost-reference" className="mt-16 space-y-12">
                <Section>
                  <motion.div variants={fadeUp}>
                    <h3 className="section-title mb-2">
                      Painting Cost by BHK ~ India 2026
                    </h3>
                    <p className="section-subtitle mb-2">
                      Includes surface prep, primer, putty, 2 coats of paint,
                      labour & furniture covering.{" "}
                      <span className="font-semibold text-charcoal">
                        Carpet area × 3.5 = paintable wall area.
                      </span>
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mt-5">
                      <table className="w-full text-sm">
                        <thead>
                          <tr style={{ background: BRAND.dark }}>
                            {[
                              "Home Size",
                              "Carpet Area",
                              "Economy",
                              "Premium",
                              "Luxury",
                            ].map((h, i) => (
                              <th
                                key={h}
                                className="px-5 py-4 text-left text-xs uppercase tracking-wider font-semibold"
                                style={{
                                  color:
                                    i === 0 || i === 1
                                      ? "rgba(255,255,255,0.6)"
                                      : i === 2
                                        ? BRAND.green
                                        : i === 3
                                          ? BRAND.blue
                                          : BRAND.yellow,
                                }}
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            [
                              "1 RK",
                              "250–400 sq ft",
                              "₹8,000–₹15,000",
                              "₹15,000–₹25,000",
                              "₹25,000–₹40,000",
                            ],
                            [
                              "1 BHK",
                              "500–650 sq ft",
                              "₹18,000–₹25,000",
                              "₹30,000–₹40,000",
                              "₹50,000–₹70,000",
                            ],
                            [
                              "2 BHK",
                              "800–1,100 sq ft",
                              "₹25,000–₹38,000",
                              "₹45,000–₹60,000",
                              "₹80,000–₹1,10,000",
                            ],
                            [
                              "3 BHK",
                              "1,200–1,600 sq ft",
                              "₹38,000–₹55,000",
                              "₹65,000–₹85,000",
                              "₹1,12,000–₹1,50,000",
                            ],
                            [
                              "4 BHK",
                              "1,800–2,400 sq ft",
                              "₹55,000–₹75,000",
                              "₹90,000–₹1,20,000",
                              "₹1,50,000–₹2,20,000",
                            ],
                            [
                              "Villa",
                              "2,500–4,000+ sq ft",
                              "₹80,000–₹1,20,000",
                              "₹1,50,000–₹2,50,000",
                              "₹2,50,000–₹4,50,000",
                            ],
                          ].map(([size, area, eco, prem, lux], i) => (
                            <tr
                              key={i}
                              className={
                                i % 2 === 0 ? "bg-white" : "bg-warm-gray/50"
                              }
                            >
                              <td className="px-5 py-3.5 font-semibold text-charcoal">
                                {size}
                              </td>
                              <td className="px-5 py-3.5 text-charcoal-muted">
                                {area}
                              </td>
                              <td
                                className="px-5 py-3.5 font-medium"
                                style={{ color: BRAND.green }}
                              >
                                {eco}
                              </td>
                              <td
                                className="px-5 py-3.5 font-medium"
                                style={{ color: BRAND.blue }}
                              >
                                {prem}
                              </td>
                              <td
                                className="px-5 py-3.5 font-medium"
                                style={{ color: BRAND.yellow }}
                              >
                                {lux}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-charcoal-muted mt-3">
                      Economy = Tractor Emulsion / Ace · Premium = Apcolite /
                      Apex / Berger Silk · Luxury = Royale / Royale Aspira /
                      Dulux Velvet Touch. Metro city rates. Tier-2 cities 10–15%
                      lower. Exterior painting costs 15–25% more.
                    </p>
                  </motion.div>
                </Section>

                <Section>
                  <motion.div variants={fadeUp}>
                    <h3 className="section-title mb-2">
                      Interior Paint Cost Per Sq Ft ~ 2026
                    </h3>
                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mt-5">
                      <table className="w-full text-sm">
                        <thead>
                          <tr style={{ background: BRAND.dark }}>
                            {[
                              "Category",
                              "Example Products",
                              "Material Only",
                              "With Labour",
                              "Durability",
                            ].map((h) => (
                              <th
                                key={h}
                                className="px-5 py-4 text-left text-white/60 text-xs uppercase tracking-wider font-semibold"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            [
                              "Distemper",
                              "Tractor Uno, Snowcem",
                              "₹3–5/sq ft",
                              "₹8–12/sq ft",
                              "1–2 yrs",
                            ],
                            [
                              "Economy Emulsion",
                              "Tractor Emulsion, Ace",
                              "₹4–7/sq ft",
                              "₹12–18/sq ft",
                              "2–3 yrs",
                            ],
                            [
                              "Premium Emulsion",
                              "Apcolite, Apex, Berger Silk",
                              "₹7–12/sq ft",
                              "₹18–28/sq ft",
                              "4–5 yrs",
                            ],
                            [
                              "Luxury Emulsion",
                              "Royale Shyne, Dulux Velvet Touch",
                              "₹12–20/sq ft",
                              "₹28–45/sq ft",
                              "6–8 yrs",
                            ],
                            [
                              "Texture / Decorative",
                              "Royale Play, Stucco",
                              "₹25–80/sq ft",
                              "₹45–150/sq ft",
                              "8–12 yrs",
                            ],
                            [
                              "Waterproofing",
                              "Damp Bloc, SmartCare",
                              "₹15–30/sq ft",
                              "₹30–80/sq ft",
                              "5–7 yrs",
                            ],
                          ].map(([cat, prod, mat, lab, dur], i) => (
                            <tr
                              key={i}
                              className={
                                i % 2 === 0 ? "bg-white" : "bg-warm-gray/50"
                              }
                            >
                              <td className="px-5 py-3.5 font-semibold text-charcoal">
                                {cat}
                              </td>
                              <td className="px-5 py-3.5 text-charcoal-muted text-xs">
                                {prod}
                              </td>
                              <td className="px-5 py-3.5 font-medium text-charcoal">
                                {mat}
                              </td>
                              <td
                                className="px-5 py-3.5 font-medium"
                                style={{ color: BRAND.orange }}
                              >
                                {lab}
                              </td>
                              <td className="px-5 py-3.5 text-charcoal-muted">
                                {dur}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                </Section>

                <Section>
                  <motion.div variants={fadeUp}>
                    <h3 className="section-title mb-2">
                      Labour Cost Per Sq Ft ~ City-Wise 2026
                    </h3>
                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mt-5">
                      <table className="w-full text-sm">
                        <thead>
                          <tr style={{ background: BRAND.dark }}>
                            {[
                              "City",
                              "Economy",
                              "Premium",
                              "Luxury",
                              "Notes",
                            ].map((h) => (
                              <th
                                key={h}
                                className="px-5 py-4 text-left text-white/60 text-xs uppercase tracking-wider font-semibold"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            [
                              "Bangalore",
                              "₹6–10",
                              "₹15–25",
                              "₹28–45",
                              "Higher in Whitefield, HSR, Indiranagar",
                            ],
                            [
                              "Mumbai",
                              "₹8–12",
                              "₹18–30",
                              "₹32–50",
                              "Highest in India. Navi Mumbai slightly lower",
                            ],
                            [
                              "Delhi / NCR",
                              "₹6–10",
                              "₹14–24",
                              "₹26–42",
                              "South Delhi premium. Dwarka more affordable",
                            ],
                            [
                              "Hyderabad",
                              "₹5–9",
                              "₹13–22",
                              "₹24–40",
                              "Gachibowli / HITEC City at upper end",
                            ],
                            [
                              "Pune",
                              "₹6–10",
                              "₹15–24",
                              "₹26–42",
                              "Similar to Bangalore rates",
                            ],
                            [
                              "Chennai",
                              "₹5–8",
                              "₹12–20",
                              "₹22–38",
                              "Lower labour, similar material cost",
                            ],
                            [
                              "Kolkata",
                              "₹4–7",
                              "₹10–18",
                              "₹20–35",
                              "Most affordable metro",
                            ],
                            [
                              "Ahmedabad",
                              "₹5–8",
                              "₹12–20",
                              "₹22–36",
                              "Growing market, rates increasing",
                            ],
                          ].map(([city, eco, prem, lux, note], i) => (
                            <tr
                              key={i}
                              className={
                                i % 2 === 0 ? "bg-white" : "bg-warm-gray/50"
                              }
                            >
                              <td className="px-5 py-3.5 font-semibold text-charcoal">
                                {city}
                              </td>
                              <td
                                className="px-5 py-3.5 font-medium"
                                style={{ color: BRAND.green }}
                              >
                                {eco}
                              </td>
                              <td
                                className="px-5 py-3.5 font-medium"
                                style={{ color: BRAND.blue }}
                              >
                                {prem}
                              </td>
                              <td
                                className="px-5 py-3.5 font-medium"
                                style={{ color: BRAND.yellow }}
                              >
                                {lux}
                              </td>
                              <td className="px-5 py-3.5 text-xs text-charcoal-muted">
                                {note}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-charcoal-muted mt-3">
                      Ceiling painting adds ₹2–4/sq ft. Exterior with
                      scaffolding adds ₹5–10/sq ft.
                    </p>
                  </motion.div>
                </Section>

                {/* CTA Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-8 text-center text-white relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.dark}, #3a3a3a)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 30% 50%, ${BRAND.pink}, transparent 60%), radial-gradient(ellipse at 80% 50%, ${BRAND.blue}, transparent 60%)`,
                    }}
                  />
                  <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-2 relative z-10">
                    Get An Accurate Quote
                  </p>
                  <h4 className="card-title-light mb-3 relative z-10">
                    Skip the Math — Talk to an Expert
                  </h4>
                  <p className="text-white/70 text-sm mb-6 max-w-md mx-auto relative z-10">
                    Book a free site visit. We measure your space, recommend the
                    right product, and give you a transparent quote.
                  </p>
                  {/* <a href="tel:8088777173"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg hover:opacity-90 transition-opacity relative z-10"
            style={{ background: `linear-gradient(135deg, ${BRAND.pink}, ${BRAND.orange})` }}>
            <Phone className="w-4 h-4" />
            Call 8088777173 — Free Consultation
          </a> */}
                  <Link
                    href="/assistance"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg hover:opacity-90 transition-opacity relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND.pink}, ${BRAND.orange})`,
                    }}
                  >
                    <Phone className="w-4 h-4" />
                    Book Free Consultation
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────── */}

        <section className="section-padding bg-white">
          <div className="container-wide">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-16">
                <p className="section-label">Our Process</p>

                <h2 className="section-title mb-4">How We Help</h2>

                <p className="section-subtitle mx-auto">
                  From consultation to completion, we guide you through every
                  step
                </p>
              </motion.div>
            </Section>

            <Section className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={scaleIn}
                  whileHover={{ y: -4 }}
                  className="text-center cursor-default"
                >
                  <div className="relative mb-5">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center"
                      style={{ background: `${step.color}18` }}
                    >
                      {/* <span className="font-serif text-3xl font-semibold tracking-[-0.03em]" style={{ color: step.color }}>{step.num}</span> */}

                      <span
                        className="mini-title text-3xl"
                        style={{ color: step.color }}
                      >
                        {step.num}
                      </span>
                    </motion.div>

                    {i < processSteps.length - 1 && (
                      <div
                        className="hidden md:block absolute top-1/2 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px"
                        style={{
                          background: `linear-gradient(90deg, ${step.color}40, ${processSteps[i + 1].color}40)`,
                        }}
                      />
                    )}
                  </div>

                  {/* <h3 className="font-serif text-base md:text-lg font-medium text-charcoal mb-2">{step.title}</h3> */}

                  <h3 className="mini-title mb-2">{step.title}</h3>

                  <p className="text-xs md:text-sm text-charcoal-muted">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </Section>
          </div>
        </section>

        {/* ── SERVICE HIGHLIGHTS ───────────────── */}

        <section className="py-16 bg-warm-gray">
          <div className="container-wide">
            <Section className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {serviceHighlights.map((h) => (
                <motion.div
                  key={h.title}
                  variants={scaleIn}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-white hover:shadow-md transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${h.color}18` }}
                  >
                    <h.icon className="w-6 h-6" style={{ color: h.color }} />
                  </div>

                  {/* <h3 className="font-serif text-base font-medium text-charcoal mb-1">{h.title}</h3> */}

                  <h3 className="mini-title mb-1">{h.title}</h3>

                  {/* <p className="text-xs text-charcoal-muted">{h.desc}</p> */}

                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    {h.desc}
                  </p>
                </motion.div>
              ))}
            </Section>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
        <section className="section-padding bg-white" id="testimonials">
          <div className="container-wide">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-14">
                <p className="section-label">Customer Reviews</p>
                <h2 className="section-title mb-3">What Homeowners Say</h2>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current"
                        style={{ color: BRAND.yellow }}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-charcoal text-lg">4.9</span>
                  <span className="text-charcoal-muted text-sm">
                    · Top-Rated by Homeowners
                  </span>
                </div>
              </motion.div>
            </Section>

            {/* Row 1 — 3 cards */}
            <Section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                {
                  name: "Priya Venkataraman",
                  date: "May 28, 2026",
                  avatar: "PV",
                  avatarBg: "#2196F3",
                  rating: 5,
                  text: "The entire experience was seamless - from the initial estimate to the final coat. The project manager kept us updated daily and the painters were careful with our furniture. The colour we chose for the living room transformed the space completely.",
                },
                {
                  name: "Rohit Agarwal",
                  date: "May 24, 2026",
                  avatar: "RA",
                  avatarBg: "#E91E8C",
                  rating: 5,
                  text: "Hired them for a complete 3BHK repaint in Pune. The team arrived on time every day and finished ahead of schedule. The wall putty work was excellent and the final finish is smooth and even. Would recommend for quality-conscious homeowners.",
                },
                {
                  name: "Meera Sundaram",
                  date: "May 20, 2026",
                  avatar: "MS",
                  avatarBg: "#4CAF50",
                  rating: 5,
                  text: "What stood out was how thoughtfully they helped us pick shades. We were confused between three options and they brought sample patches before deciding. Clean work, no mess left behind, and the team was polite throughout.",
                },
              ].map((r, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", damping: 18 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ background: r.avatarBg }}
                    >
                      {r.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-charcoal text-sm leading-tight truncate">
                        {r.name}
                      </p>
                      <p className="text-xs text-charcoal-muted mt-0.5">
                        {r.date}
                      </p>
                    </div>
                    <div className="ml-auto flex-shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(r.rating)].map((_, si) => (
                      <Star
                        key={si}
                        className="w-4 h-4 fill-current"
                        style={{ color: BRAND.yellow }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-charcoal-muted leading-relaxed flex-1">
                    {r.text}
                  </p>
                </motion.div>
              ))}
            </Section>

            {/* Row 2 — horizontal scroll */}
            <div className="overflow-x-auto pb-2 -mx-4 px-4">
              <div className="flex gap-5" style={{ minWidth: "max-content" }}>
                {[
                  {
                    name: "Kiran Desai",
                    date: "June 12, 2026",
                    avatar: "KD",
                    avatarBg: "#9C27B0",
                    rating: 5,
                    text: "Excellent exterior painting job for our villa in Hyderabad. The waterproofing coat they applied first made all the difference — no seepage issues since. Thorough surface preparation and clean execution.",
                  },
                  {
                    name: "Anita Sharma",
                    date: "June 09, 2026",
                    avatar: "AS",
                    avatarBg: "#FF5722",
                    rating: 5,
                    text: "Used the online calculator to estimate costs before calling. The final bill matched the estimate closely - no hidden charges. The supervisor explained every line item clearly. Refreshing transparency.",
                  },
                  {
                    name: "Vikram Nair",
                    date: "June 05, 2026",
                    avatar: "VN",
                    avatarBg: "#00BCD4",
                    rating: 5,
                    text: "Quick and efficient. Got my 2BHK done in 3 days flat including putty and two coats. The painters worked neatly and I barely had to supervise. Exactly what a busy professional needs.",
                  },
                  {
                    name: "Sunita Pillai",
                    date: "May 30, 2026",
                    avatar: "SP",
                    avatarBg: "#FF9800",
                    rating: 5,
                    text: "The texture painting on our feature wall turned out stunning. Multiple neighbours have asked for the contact since. Very skilled craftsmen who clearly take pride in their work.",
                  },
                  {
                    name: "Deepak Joshi",
                    date: "May 15, 2026",
                    avatar: "DJ",
                    avatarBg: "#009688",
                    rating: 5,
                    text: "Second time using their service and it gets better each time. They remembered my preferences from the last job and recommended a complementary shade for the new room. This kind of attention to detail keeps me coming back.",
                  },
                ].map((r, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", damping: 18 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col flex-shrink-0"
                    style={{ width: "280px" }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ background: r.avatarBg }}
                      >
                        {r.avatar}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-charcoal text-sm leading-tight truncate">
                          {r.name}
                        </p>
                        <p className="text-xs text-charcoal-muted mt-0.5">
                          {r.date}
                        </p>
                      </div>
                      <div className="ml-auto flex-shrink-0">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(r.rating)].map((_, si) => (
                        <Star
                          key={si}
                          className="w-3.5 h-3.5 fill-current"
                          style={{ color: BRAND.yellow }}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-charcoal-muted leading-relaxed flex-1">
                      {r.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
      <a href="/about#reviews" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-sm text-charcoal border-2 border-gray-200 hover:border-charcoal hover:bg-warm-gray transition-all duration-200 shadow-sm">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        See All Google Reviews
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div> */}
          </div>
        </section>

        {/* ── STATS ────────────────────────────── */}

        <section
          id="stats-section"
          className="py-20 relative overflow-hidden"
          style={{ background: BRAND.dark }}
        >
          {ACCENTS.slice(0, 4).map((c, i) => (
            <div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 200,

                height: 200,

                background: c,

                opacity: 0.06,

                filter: "blur(60px)",

                top: i < 2 ? "-50px" : "50%",

                left: `${i * 25}%`,
              }}
            />
          ))}

          <div className="container-wide relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <AnimatedStat key={s.label} {...s} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <AnimatePresence>
        {showConsultationPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowConsultationPopup(false)}
            className="fixed inset-0 z-[100] bg-charcoal/40 backdrop-blur-[6px] flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ type: "spring", damping: 26 }}
              className="w-full max-w-2xl rounded-[2.5rem] bg-[#FAF8F5] shadow-2xl overflow-hidden relative border border-white p-1"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Aesthetic Linear Color Strip */}

              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${BRAND.pink}, ${BRAND.orange}, ${BRAND.yellow}, ${BRAND.green}, ${BRAND.blue})`,
                }}
              />

              {/* Premium Geometric Close Button */}

              <button
                onClick={() => setShowConsultationPopup(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white border border-[#EDE6DA] flex items-center justify-center text-[#5A5A5A] hover:text-black hover:bg-[#FAF8F5] transition-all z-10 shadow-sm"
                aria-label="Close consultation popup"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative px-6 sm:px-12 py-12 text-center overflow-hidden rounded-3xl bg-[#FDFBF7]/80 backdrop-blur-md border border-white/40">
                {/* Ambient Color Flow (Eye-catching background technique) */}

                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
                  <div
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[80px]"
                    style={{
                      background: `radial-gradient(circle, ${BRAND.pink} 0%, transparent 70%)`,
                    }}
                  />

                  <div
                    className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full blur-[80px]"
                    style={{
                      background: `radial-gradient(circle, ${BRAND.orange} 0%, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Company Brand Presentation Frame */}

                <div className="flex flex-col items-center justify-center gap-3 mb-6 relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-[#EDE6DA] p-1.5"
                  >
                    <img
                      src="/Ara_Weather_Coat.png"
                      alt="Colorsome Core Symbol"
                      className="w-full h-full object-contain scale-105"
                    />
                  </motion.div>

                  <div className="flex items-center justify-center tracking-tight leading-none">
                    <span
                      className="brand-wordmark text-[#1A1A1A]"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      COLORSOME
                    </span>

                    <span className="text-[10px] text-gold font-bold ml-0.5 -mt-1 font-sans">
                      R
                    </span>
                  </div>
                </div>

                <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-black font-sans mb-3 relative z-10">
                  Exhibition Intent
                </p>

                <h2
                  className="section-title mb-4 max-w-md mx-auto relative z-10"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Ready to Transform Your Space?
                </h2>

                {/* Description Text - Upgraded typography color & tracking */}

                {/* <p className="text-sm sm:text-[17px] text-charcoal/80 max-w-lg mx-auto mb-10 font-inter font-normal leading-relaxed tracking-wide relative z-10"> */}

                <p className="text-sm sm:text-[17px] text-charcoal-muted max-w-lg mx-auto mb-10 font-inter font-light leading-relaxed tracking-wide">
                  Book a free consultation with our paint experts. Get
                  personalized recommendations, accurate quotes, and
                  professional guidance for your painting project.
                </p>

                {/* Action Call Controls Container */}

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-xl mx-auto px-4 font-inter relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:flex-1"
                  >
                    <Link
                      href="/assistance"
                      onClick={() => setShowConsultationPopup(false)}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-white rounded-xl text-xs uppercase tracking-widest font-black font-inter whitespace-nowrap shadow-md hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${BRAND.pink} 0%, ${BRAND.orange} 100%)`,
                      }}
                    >
                      <Phone className="w-3.5 h-3.5 text-white animate-pulse font-inter" />{" "}
                      Book Consultation Pass
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:flex-1"
                  >
                    <Link
                      href="/products"
                      onClick={() => setShowConsultationPopup(false)}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/90 border border-[#EDE6DA] text-charcoal rounded-xl text-xs uppercase tracking-widest font-black font-inter whitespace-nowrap shadow-sm hover:bg-white hover:border-charcoal/30 hover:shadow-md transition-all duration-300"
                    >
                      Examine Catalog Matrix{" "}
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </motion.div>
                </div>

                {/* Bottom Synchronized Accent Dot Train */}

                <div className="flex justify-center gap-2.5 mt-10 relative z-10">
                  {ACCENTS.map((c, i) => (
                    <motion.div
                      key={c}
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 2,

                        delay: i * 0.15,

                        repeat: Infinity,

                        ease: "easeInOut",
                      }}
                      className="w-2 h-2 rounded-full shadow-sm"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
