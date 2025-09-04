/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me', // Add this for the user avatars
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.vrbo.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
