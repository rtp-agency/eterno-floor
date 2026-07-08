/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Images in /public/products are already optimised to webp at build time.
    unoptimized: true,
  },
};

export default nextConfig;
