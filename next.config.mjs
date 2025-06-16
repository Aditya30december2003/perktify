 /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "centralapps.hivefinty.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["perktify.com", "localhost:3000"]
    }
  }
};

export default nextConfig;
