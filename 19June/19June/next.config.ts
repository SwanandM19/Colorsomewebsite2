import type { NextConfig } from "next";

// Baseline security headers for every route. HSTS is added by Vercel itself.
// No Content-Security-Policy yet: the site loads fonts/images/scripts from
// several origins and a wrong CSP would blank the page, so it needs its own
// tested rollout (see node_modules/next/dist/docs/01-app/02-guides/content-security-policy.md).
const securityHeaders = [
  // Stops other sites framing this one (clickjacking).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Stops browsers guessing file types (MIME sniffing).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Sends only the site origin, not full URLs, to other sites.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site never needs these browser features, so switch them off.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   turbopack: {
//     root: "C:/Users/Pranav/OneDrive/Desktop/CSPaints/colorsome-next",
//   },
// };

// export default nextConfig;