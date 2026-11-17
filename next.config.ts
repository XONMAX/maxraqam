import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Canonical URLs never end with a slash; /ru/ redirects to /ru.
  trailingSlash: false,
  poweredByHeader: false,
  experimental: {
    // Multiple root layouts (uz / ru) need a global 404 page: app/global-not-found.tsx
    globalNotFound: true,
  },
  images: {
    formats: ['image/webp'],
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
