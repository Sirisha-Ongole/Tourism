/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   appDir: true,
  // },
};

// const { i18n } = require("./next-i18next.config.js");

module.exports = {
  // i18n,
  ...nextConfig,
  trailingSlash: true,

  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
