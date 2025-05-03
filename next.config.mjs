/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  // No basePath needed since you're using a custom domain at the root level
  assetPrefix: '/',
  trailingSlash: true, // This helps with serving assets correctly
}

export default nextConfig
