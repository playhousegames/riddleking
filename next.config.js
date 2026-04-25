/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      // Old WordPress difficulty routes → new category routes
      { source: '/difficulty/easy', destination: '/categories/classic', permanent: true },
      { source: '/difficulty/medium', destination: '/categories/classic', permanent: true },
      { source: '/difficulty/hard', destination: '/categories/classic', permanent: true },
      { source: '/difficulty/for-kids', destination: '/categories/classic', permanent: true },
      { source: '/difficulty/:slug', destination: '/categories/:slug', permanent: true },

      // Old WordPress game/tool pages → home (these don't exist in new site)
      { source: '/word-dig', destination: '/', permanent: true },
      { source: '/word-dig/', destination: '/', permanent: true },
      { source: '/word-ladder-challenge', destination: '/', permanent: true },
      { source: '/word-ladder-challenge/', destination: '/', permanent: true },

      // Old WordPress HTML pages
      { source: '/tough-riddles.html', destination: '/riddles', permanent: true },
      { source: '/easy-riddles.html', destination: '/riddles', permanent: true },
      { source: '/funny-riddles.html', destination: '/riddles', permanent: true },
      { source: '/riddle-categories', destination: '/categories', permanent: true },
      { source: '/riddle-categories/', destination: '/categories', permanent: true },

      // Old WordPress .html variants (catch common patterns)
      { source: '/:slug.html', destination: '/riddles/:slug', permanent: true },
    ]
  },
}

module.exports = nextConfig
