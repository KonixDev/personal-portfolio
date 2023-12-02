/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // here you can add the url's that you are planning
    // to use inside your next/image.
    domains: ["res.cloudinary.com", "i.ytimg.com"],
  },
};

module.exports = nextConfig;
