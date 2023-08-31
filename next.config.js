const nextConfig = {
  reactStrictMode: false,
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
  webpack(config, options) {
    const { isServer } = options
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      }
    }
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
