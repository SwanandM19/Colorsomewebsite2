// import type { Metadata } from 'next';
// import { Header } from '../components/Header';
// // import { Footer } from '@/components/Footer';
// import { Footer } from '../components/Footer';
// import './globals.css';

// export const metadata: Metadata = {
//   title: 'Colorsome Paints — Premium Quality Paints for Beautiful Homes',
//   description:
//     'Premium interior and exterior paints with superior finish, lasting durability, and rich colour depth. Expert guidance for perfect results.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-warm-white text-charcoal antialiased">
//         <Header />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


// import type { Metadata } from 'next';
// import { Header } from '../components/Header';
// import { Footer } from '../components/Footer';
// import './globals.css';

// export const metadata: Metadata = {
//   title: 'Colorsome Paints — Premium Quality Paints for Beautiful Homes',
//   description:
//     'Premium interior and exterior paints with superior finish, lasting durability, and rich colour depth. Expert guidance for perfect results.',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-warm-white text-charcoal antialiased">
//         <Header />
//         <main className="min-h-screen pt-[72px]">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from 'next';
// import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
// import { Footer } from '../components/Footer';
// import './globals.css';

// const cormorant = Cormorant_Garamond({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   style: ['normal', 'italic'],
//   variable: '--font-cormorant',
//   display: 'swap',
// });

// const dmSans = DM_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-dm-sans',
//   display: 'swap',
// });

// export const metadata: Metadata = {
//   title: 'Colorsome Paints — Premium Quality Paints for Beautiful Homes',
//   description:
//     'Premium interior and exterior paints with superior finish, lasting durability, and rich colour depth. Expert guidance for perfect results.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${dmSans.variable} ${cormorant.variable} bg-warm-white text-charcoal antialiased`}>
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

// in src/app/layout.tsx
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ChatBot } from '@/src/components/ChatBot';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
        {/* <ChatBot /> */}
      </body>
    </html>
  );
}