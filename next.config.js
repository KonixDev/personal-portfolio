/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
  images: {
    unoptimized: true ,
    domains: [
      "images.unsplash.com",
      "www.schoolofsciencery.com",
      "picsum.photos",
    ],
  },
};

module.exports = nextConfig;
