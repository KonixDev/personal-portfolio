/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: [
      "images.unsplash.com",
      "www.schoolofsciencery.com",
      "picsum.photos",
    ],
  },
};

module.exports = nextConfig;
