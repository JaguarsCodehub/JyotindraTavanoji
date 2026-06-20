const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: [
      'cdn-icons-png.flaticon.com',
      'upload.wikimedia.org',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'cdn.hashnode.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true,
      },
      {
        source: '/showcase',
        destination: '/projects',
        permanent: true,
      },
    ]
  },
};

module.exports = withMDX(nextConfig);
