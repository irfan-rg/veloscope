import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the phone/tablet on local network to load dev resources
  allowedDevOrigins: ["192.168.0.113"],
};

export default nextConfig;
