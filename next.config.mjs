import nextTranslate from 'next-translate-plugin'


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader',
    })

    return config
  },
}


export default nextTranslate(nextConfig)