import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Miniaturas dos vídeos do YouTube
    remotePatterns: [new URL("https://i.ytimg.com/vi/**")],
  },
};

export default nextConfig;
