import type { NextConfig } from "next";

// Exportação estática: o site vira HTML/CSS/JS puro (pasta /out),
// publicável de graça na Vercel, Netlify ou GitHub Pages.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
