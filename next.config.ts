/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // For Next.js 13 and later, use remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**', // Allows any path from this hostname
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com', // If you use source.unsplash.com for random images
        port: '',
        pathname: '**',
      },
      // Add other external image domains here if needed
      // Example:
      // {
      //   protocol: 'https',
      //   hostname: 'your-other-image-cdn.com',
      //   port: '',
      //   pathname: '**',
      // },
    ],
    // For Next.js 12 and earlier, you would use 'domains'
    // domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
};

module.exports = nextConfig;
