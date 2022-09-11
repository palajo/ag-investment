/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  domains: ['localhost'],
  images: {
    domains: ['localhost', 'api.ak-investment.pl'],
  },
}

module.exports = nextConfig
