/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Cloudflare Pages
  output: 'standalone',
  
  // Enable experimental features for better Cloudflare compatibility
  experimental: {
    serverActions: {
      allowedOrigins: ['*']
    }
  }
}

module.exports = nextConfig

