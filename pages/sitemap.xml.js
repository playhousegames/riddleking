import { riddles, categories } from '../data/riddles'

const SITE_URL = 'https://www.riddleking.co.uk'

function generateSitemap() {
  const staticPages = ['', '/riddles', '/categories', '/about', '/submit', '/privacy']

  const riddlePages = riddles.map(r => `/riddles/${r.slug}`)
  const categoryPages = categories.map(c => `/categories/${c.slug}`)

  const allPages = [...staticPages, ...riddlePages, ...categoryPages]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${SITE_URL}${page}/</loc>
    <changefreq>${page === '' ? 'daily' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.startsWith('/riddles/') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`
}

export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap()
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
  return { props: {} }
}
