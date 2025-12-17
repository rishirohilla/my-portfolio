/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rishi-rohilla-portfolio.vercel.app',
          },
        ],
        destination: 'https://rishirohilla.tech/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
