import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import RiddleCard from '../../components/RiddleCard'
import SEOHead from '../../components/SEOHead'
import Link from 'next/link'
import { categories, riddles, getRiddlesByCategory } from '../../data/riddles'

export default function CategoryPage({ cat, catRiddles }) {
  return (
    <>
      <SEOHead title={`${cat.label} Riddles`} description={`${cat.count} ${cat.label.toLowerCase()} riddles. ${cat.description}`} canonical={`/categories/${cat.slug}`} />
      <Nav />
      <main>
        <section className="hero" style={{ padding: '3rem 0 2rem' }}>
          <div className="hero__orb" />
          <div className="container--narrow">
            <nav style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(250,246,238,0.35)', marginBottom: '1rem' }}>
              <Link href="/categories" style={{ color: 'rgba(250,246,238,0.35)' }}>Categories</Link>
              <span style={{ margin: '0 8px' }}>›</span>
              <span style={{ color: 'var(--gold)' }}>{cat.label}</span>
            </nav>
            <h1 style={{ marginBottom: '0.5rem' }}>{cat.label} Riddles</h1>
            <p style={{ color: 'var(--cream-dim)', fontStyle: 'italic', fontSize: '1.1rem' }}>{cat.description} — {cat.count} riddles</p>
          </div>
        </section>
        <div className="container"><div className="ad-slot ad-slot--banner">Advertisement · 728×90</div></div>
        <div className="container--narrow" style={{ padding: '0 1.5rem 5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {catRiddles.map((r, i) => (
              <div key={r.id}>
                <RiddleCard riddle={r} />
                {(i+1) % 5 === 0 && i < catRiddles.length - 1 && (
                  <div className="ad-slot ad-slot--inline" style={{ marginTop: '1.25rem' }}>Advertisement · In-feed</div>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/riddles" className="btn btn--ghost">← Back to all riddles</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  return { paths: categories.map(c => ({ params: { category: c.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const cat = categories.find(c => c.slug === params.category)
  if (!cat) return { notFound: true }
  const catRiddles = getRiddlesByCategory(params.category)
  return { props: { cat: { ...cat, count: catRiddles.length }, catRiddles: JSON.parse(JSON.stringify(catRiddles)) } }
}
