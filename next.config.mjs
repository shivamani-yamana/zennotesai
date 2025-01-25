/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Explicitly allow this hostname
        pathname: "**", // Allow all paths under this hostname
      },
    ],
  },
  reactStrictMode:false,
};

export default nextConfig;
