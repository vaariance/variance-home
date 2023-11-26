/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.animaapp.com",
      },
    ],
  },
};

module.exports = nextConfig;
