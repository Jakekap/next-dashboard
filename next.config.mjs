/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.autobild.es",
      },
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
      },
    ],
  },
};

export default nextConfig;
