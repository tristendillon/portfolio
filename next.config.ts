import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/decide',
        destination: 'https://us.i.posthog.com/decide',
      },
    ]
  },
  skipTrailingSlashRedirect: true,

  // Performance and SEO optimizations
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable gzip compression
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio.tdilly.com',
      },
    ],
  },
  reactStrictMode: true,

  // Improve core web vitals
  experimental: {
    // Using beasties as a modern replacement for critters
    // Also keeping critters for backward compatibility
    optimizeCss: true,
    scrollRestoration: true,
  },
}

export default nextConfig
