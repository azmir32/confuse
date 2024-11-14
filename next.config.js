/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets9.lottiefiles.com', 'assets5.lottiefiles.com', 'assets10.lottiefiles.com'],
  },
  reactStrictMode: true,
  transpilePackages: ["framer-motion"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "framer-motion": require.resolve("framer-motion"),
    };
    return config;
  },
};

module.exports = nextConfig;