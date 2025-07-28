/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO Optimizations
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
  
  // Image optimization
  images: {
    domains: ['awsdevopstraininghyderabad.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Headers for SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/aws-training',
        destination: '/',
        permanent: true,
      },
      {
        source: '/devops-training',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Rewrites for better URLs
  async rewrites() {
    return [
      {
        source: '/aws-cloud-fundamentals',
        destination: '/courses/aws-cloud-fundamentals',
      },
      {
        source: '/aws-devops-engineering', 
        destination: '/courses/aws-devops-engineering',
      },
      {
        source: '/aws-data-engineering',
        destination: '/courses/aws-data-engineering',
      },
    ];
  },
};

export default nextConfig;
