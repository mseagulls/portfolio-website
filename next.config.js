/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SITE_URL: process.env.SITE_URL || "https://example.com",
    SITE_NAME: process.env.SITE_NAME || "AI Tool",
    AUTHOR_NAME: process.env.AUTHOR_NAME || "AI Tool",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "development-secret",
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:3000",
  },
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
