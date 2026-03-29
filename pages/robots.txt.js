export default function Robots() {}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain')
  res.write(`User-agent: *
Allow: /

Sitemap: https://www.riddleking.co.uk/sitemap.xml
`)
  res.end()
  return { props: {} }
}
