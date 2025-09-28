/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configuration for custom domain deployment (chekoivan.dev)
  // No assetPrefix or basePath needed for custom domains
}

module.exports = nextConfig
