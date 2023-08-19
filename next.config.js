const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  redirects: async () => {
    return [
      {
        source: '/blog',
        destination: '/blog/page/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
