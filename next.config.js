/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configuration for GitHub Pages deployment with custom domain
  distDir: 'out'
}

module.exports = nextConfig
