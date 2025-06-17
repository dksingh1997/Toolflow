/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // This is needed for monorepo path aliases to resolve correctly
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, '../..'), // root of monorepo
    };

    return config;
  },

  // Optional: expose env vars to client
  env: {
    // EXAMPLE: API_URL: process.env.API_URL
  }
};

module.exports = nextConfig;
