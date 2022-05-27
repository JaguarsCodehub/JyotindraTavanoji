/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "upload.wikimedia.org",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
