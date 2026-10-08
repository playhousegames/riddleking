import Head from 'next/head'

export default function SEOHead({ title, description, riddle, canonical }) {
  const siteName = 'Riddle King'
  const siteUrl = 'https://www.riddleking.co.uk'
  const ogImage = `${siteUrl}/logo-icon.png`
  const canonicalUrl = canonical
    ? `${siteUrl}${canonical.endsWith('/') ? canonical : canonical + '/'}`
    : null
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Daily Riddles & Brain Teasers`
  const metaDesc = description || 'Sharpen your mind with handpicked riddles. New daily riddle every day. Classic, wordplay, lateral thinking and more — all free at Riddle King.'

  // Breadcrumb schema for riddle pages. (Replaces the old QAPage schema: QAPage is
  // meant for user-generated forum answers, the upvote count was invented, and it
  // let Google show the answer directly in search results.)
  const riddleSchema = riddle ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${riddle.category.charAt(0).toUpperCase()}${riddle.category.slice(1)} Riddles`,
        item: `${siteUrl}/categories/${riddle.category}/`,
      },
      { '@type': 'ListItem', position: 3, name: title || riddle.question, item: canonicalUrl },
    ],
  } : null

  const websiteSchema = !riddle ? {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: metaDesc,
  } : null

  const orgSchema = canonical === '/' ? {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: ogImage,
    description: metaDesc,
  } : null

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="robots" content="index, follow" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data */}
      {riddleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(riddleSchema) }}
        />
      )}
      {websiteSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      )}
      {orgSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      )}
    </Head>
  )
}
