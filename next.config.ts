import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Requerido para next/image
    domains: [
      "images.unsplash.com",
      "www.schoolofsciencery.com",
      "picsum.photos",
    ],
  },
  basePath: "/personal-portfolio", // Si tu repo NO es del tipo usuario/usuario.github.io
  assetPrefix: "/personal-portfolio", // Igual que arriba
};

module.exports = nextConfig;

export default nextConfig;
