import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/matthias957.github.io", // Required because site is served from subdirectory
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing
  // Ensure proper asset handling for GitHub Pages
  distDir: "out",
};

export default nextConfig;
