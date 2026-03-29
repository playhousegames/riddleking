import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SEOHead from '../../components/SEOHead'
import Link from 'next/link'
import { categories, riddles } from '../../data/riddles'

export default function CategoriesPage({ cats }) {
  const icons = { classic:'⚔️', wordplay:'📜', lateral:'🌀', abstract:'💭', modern:'⚡' }
  return (
    <>
      <SEOHead title="Riddle Categories" description="Browse riddles by category — classic, wordplay, lateral thinking, abstract, and modern." canonical="/categories" />
      <Nav />
      <main>
        <section className="hero" style={{ padding: '3rem 0 2rem' }}>
          <div className="hero__orb" />
          <div className="container--narrow">
            <div className="eyebrow">Explore</div>
            <h1 style={{ marginBottom: '0.5rem' }}>Categories</h1>
            <p style={{ color: 'var(--cream-dim)', fontStyle: 'italic', fontSize: '1.1rem' }}>Every riddle belongs to a tradition. Find yours.</p>
          </div>
        </section>
        <div className="container" style={{ padding: '3rem 1.5rem 5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cats.map(cat => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'rgba(250,246,238,0.04)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: '10px', padding: '2rem', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(232,184,75,0.1)'; e.currentTarget.style.borderColor='rgba(232,184,75,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(250,246,238,0.04)'; e.currentTarget.style.borderColor='rgba(232,184,75,0.2)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '2.2rem' }}>{icons[cat.slug]||'♟'}</div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--gold)', letterSpacing: '0.06em', background: 'rgba(232,184,75,0.1)', padding: '3px 10px', borderRadius: '20px', border: '1px solid rgba(232,184,75,0.3)' }}>{cat.count} riddles</span>
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '0.4rem', color: 'var(--cream)' }}>{cat.label}</h2>
                    <p style={{ color: 'var(--cream-dim)', fontSize: '0.95rem', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>{cat.description}</p>
                  </div>
                  <div style={{ color: 'var(--gold)', fontSize: '0.9rem', fontWeight: 600 }}>Explore →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const cats = categories.map(c => ({ ...c, count: riddles.filter(r => r.category === c.slug).length }))
  return { props: { cats } }
}
