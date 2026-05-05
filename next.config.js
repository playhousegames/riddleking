/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      // Non-www → www canonical redirect
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'riddleking.co.uk' }],
        destination: 'https://www.riddleking.co.uk/:path*',
        permanent: true,
      },

      // Old WordPress difficulty routes → new category routes
      { source: '/difficulty/easy', destination: '/categories/classic', permanent: true },
      { source: '/difficulty/medium', destination: '/categories/classic', permanent: true },
      { source: '/difficulty/hard', destination: '/categories/classic', permanent: true },
      { source: '/difficulty/for-kids', destination: '/categories/classic', permanent: true },
      { source: '/difficulty/:slug', destination: '/categories/:slug', permanent: true },
      { source: '/difficulty/easy/page/:num', destination: '/riddles', permanent: true },
      { source: '/difficulty/:slug/page/:num', destination: '/riddles', permanent: true },

      // Old WordPress game/tool pages
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

      // Old WordPress .html variants
      { source: '/:slug.html', destination: '/riddles/:slug', permanent: true },

      // Old WordPress taxonomy/category pages
      { source: '/riddle-category/:slug', destination: '/categories', permanent: true },
      { source: '/riddle-category/:slug/', destination: '/categories', permanent: true },

      // Old WordPress author pages
      { source: '/author/:slug', destination: '/', permanent: true },
      { source: '/author/:slug/', destination: '/', permanent: true },

      // Old WordPress pagination
      { source: '/riddles/page/:num', destination: '/riddles', permanent: true },
      { source: '/riddles/page/:num/', destination: '/riddles', permanent: true },
      { source: '/page/:num', destination: '/riddles', permanent: true },
      { source: '/page/:num/', destination: '/riddles', permanent: true },

      // Old WordPress riddle slugs → riddles index
      // (these had different naming convention from new site)
      { source: '/riddles/the-book-problem', destination: '/riddles', permanent: true },
      { source: '/riddles/the-book-problem/', destination: '/riddles', permanent: true },
      { source: '/riddles/the-fence-riddle', destination: '/riddles', permanent: true },
      { source: '/riddles/the-fence-riddle/', destination: '/riddles', permanent: true },
      { source: '/riddles/the-shoe-mystery', destination: '/riddles', permanent: true },
      { source: '/riddles/the-shoe-mystery/', destination: '/riddles', permanent: true },
      { source: '/riddles/the-stair-puzzle', destination: '/riddles', permanent: true },
      { source: '/riddles/the-stair-puzzle/', destination: '/riddles', permanent: true },
      { source: '/riddles/the-mystical-object', destination: '/riddles', permanent: true },
      { source: '/riddles/the-mystical-object/', destination: '/riddles', permanent: true },
      { source: '/riddles/the-quiet-answer', destination: '/riddles', permanent: true },
      { source: '/riddles/the-quiet-answer/', destination: '/riddles', permanent: true },
      { source: '/riddles/the-burning-question', destination: '/riddles', permanent: true },
      { source: '/riddles/the-burning-question/', destination: '/riddles', permanent: true },
      { source: '/riddles/the-water-jug-problem', destination: '/riddles', permanent: true },
      { source: '/riddles/the-water-jug-problem/', destination: '/riddles', permanent: true },
      { source: '/riddles/the-rainy-friend', destination: '/riddles', permanent: true },
      { source: '/riddles/the-rainy-friend/', destination: '/riddles', permanent: true },
      { source: '/riddles/the-strawberry-patch', destination: '/riddles', permanent: true },
      { source: '/riddles/the-strawberry-patch/', destination: '/riddles', permanent: true },
      { source: '/riddles/the-sound-riddle', destination: '/riddles', permanent: true },
      { source: '/riddles/the-sound-riddle/', destination: '/riddles', permanent: true },
      { source: '/riddles/the-philosophers-puzzle', destination: '/riddles', permanent: true },
      { source: '/riddles/the-philosophers-puzzle/', destination: '/riddles', permanent: true },
      { source: '/riddles/the-age-puzzle', destination: '/riddles', permanent: true },
      { source: '/riddles/the-age-puzzle/', destination: '/riddles', permanent: true },

      // Catch-all for any remaining old WordPress riddle slugs starting with "the-"
      { source: '/riddles/the-:slug', destination: '/riddles', permanent: true },
      { source: '/riddles/the-:slug/', destination: '/riddles', permanent: true },

      // Suspended page from when domain lapsed
      { source: '/cgi-sys/suspendedpage.cgi', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
