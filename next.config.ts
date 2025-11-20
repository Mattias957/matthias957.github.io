import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // No basePath needed - username.github.io repositories should be served from root
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing
  // Ensure proper asset handling for GitHub Pages
  distDir: "out",
};

export default nextConfig;
