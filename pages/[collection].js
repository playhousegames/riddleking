import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'
import Link from 'next/link'
import { getRiddleBySlug } from '../data/riddles'
import { collections, getCollectionBySlug } from '../data/collections'

export default function CollectionPage({ collection, items, others }) {
  return (
    <>
      <SEOHead title={collection.title} description={collection.metaDescription} canonical={`/${collection.slug}`} />
      <Nav />
      <main>
        <section className="hero" style={{ padding: '3rem 0 2rem' }}>
          <div className="hero__orb" />
          <div className="container--narrow">
            <nav style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(250,246,238,0.35)', marginBottom: '1rem' }}>
              <Link href="/" style={{ color: 'rgba(250,246,238,0.35)' }}>Home</Link>
              <span style={{ margin: '0 8px' }}>›</span>
              <span style={{ color: 'var(--gold)' }}>{collection.label}</span>
            </nav>
            <div className="eyebrow">{items.length} hand-picked riddles</div>
            <h1 style={{ marginBottom: '1.25rem' }}>{collection.h1}</h1>
            {collection.intro.map((para, i) => (
              <p key={i} style={{ color: 'var(--cream-dim)', fontSize: '1.1rem', lineHeight: 1.7 }}>{para}</p>
            ))}
          </div>
        </section>

        <div className="container--narrow" style={{ padding: '0 1.5rem 3rem' }}>
          <ol className="collection-list">
            {items.map(r => (
              <li key={r.slug}>
                <p className="collection-list__question">{r.question}</p>
                <details>
                  <summary>Reveal answer</summary>
                  <div className="collection-list__answer">
                    <strong>{r.answer}</strong>
                    <p>{r.explanation}</p>
                  </div>
                </details>
                <Link href={`/riddles/${r.slug}`} style={{ fontSize: '0.95rem' }}>
                  More about this riddle →
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <section className="bg-darker" style={{ padding: '2rem 0 4rem' }}>
          <div className="container--narrow">
            <div className="divider">✦</div>
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>More Riddle Collections</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
              {others.map(c => (
                <Link key={c.slug} href={`/${c.slug}`} className="collection-tile">
                  <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{c.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--cream)' }}>
                    {c.label}
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/riddles" className="btn btn--ghost">Browse all riddles →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  return { paths: collections.map(c => ({ params: { collection: c.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const found = getCollectionBySlug(params.collection)
  if (!found) return { notFound: true }
  const { riddles: slugs, ...collection } = found

  // One-line explanation = first sentence of the riddle's full explanation.
  const items = slugs.map(slug => {
    const r = getRiddleBySlug(slug)
    if (!r) throw new Error(`Collection "${found.slug}" lists unknown riddle slug "${slug}"`)
    return {
      slug: r.slug,
      question: r.question,
      answer: r.answer,
      explanation: r.explanation.split(/(?<=[.?!])\s/)[0],
    }
  })

  const others = collections
    .filter(c => c.slug !== found.slug)
    .map(c => ({ slug: c.slug, label: c.label, icon: c.icon }))

  return { props: { collection, items, others } }
}
