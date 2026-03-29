import Head from 'next/head'

export default function SEOHead({ title, description, riddle, canonical }) {
  const siteName = 'Riddle King'
  const siteUrl = 'https://www.riddleking.co.uk'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Daily Riddles & Brain Teasers`
  const metaDesc = description || 'Sharpen your mind with handpicked riddles. New daily riddle every day. Classic, wordplay, lateral thinking and more — all free at Riddle King.'

  const riddleSchema = riddle ? {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: riddle.question,
      text: riddle.question,
      answerCount: 1,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${riddle.answer}. ${riddle.explanation}`,
        upvoteCount: 42,
      }
    }
  } : null

  const faqSchema = riddle ? null : {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: metaDesc,
  }

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="robots" content="index, follow" />
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:site_name" content={siteName} />
      {canonical && <meta property="og:url" content={`${siteUrl}${canonical}`} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />

      {/* Structured data */}
      {riddleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(riddleSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </Head>
  )
}
