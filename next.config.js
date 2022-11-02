/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    appName: "Starling School",
  },
  async rewrites() {
    return [
      {
        source: "/profile",
        destination: "/akun/profile",
      },
      {
        source: "/password",
        destination: "/akun/password",
      },
    ];
  },
};

module.exports = nextConfig;
