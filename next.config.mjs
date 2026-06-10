/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // static HTML export for GitHub Pages / free hosting
  images: {
    unoptimized: true,    // required for static export (no Next.js server)
  },
};

export default nextConfig;
