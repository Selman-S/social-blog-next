/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.dummyapi.io',
        port: '',
        pathname: '/photo**',
      },
    ],
  },
}

module.exports = nextConfig
