import { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import RiddleCard from '../../components/RiddleCard'
import SEOHead from '../../components/SEOHead'
import Link from 'next/link'
import { riddles, categories } from '../../data/riddles'

export default function AllRiddles({ allRiddles, cats }) {
  const [difficulty, setDifficulty] = useState('all')
  const [category, setCategory]     = useState('all')

  const filtered = allRiddles.filter(r =>
    (difficulty === 'all' || r.difficulty === difficulty) &&
    (category   === 'all' || r.category   === category)
  )

  const pill = (active) => ({
    padding: '5px 14px', borderRadius: '20px', cursor: 'pointer', fontSize: '0.8rem',
    fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', transition: 'all 0.15s',
    border: active ? '1px solid var(--gold)' : '1px solid rgba(250,246,238,0.14)',
    background: active ? 'var(--gold)' : 'transparent',
    color: active ? 'var(--royal-deep)' : 'var(--cream-dim)',
  })

  return (
    <>
      <SEOHead title="All Riddles" description={`Browse all ${allRiddles.length} riddles. Filter by difficulty and category.`} canonical="/riddles" />
      <Nav />
      <main>
        <section className="hero" style={{ padding: '3rem 0 2rem' }}>
          <div className="hero__orb" />
          <div className="container--narrow">
            <div className="eyebrow">The Vault</div>
            <h1 style={{ marginBottom: '0.5rem' }}>All Riddles</h1>
            <p style={{ color: 'var(--cream-dim)', fontStyle: 'italic', fontSize: '1.1rem' }}>
              {allRiddles.length} riddles. Filter, explore, and test your wits.
            </p>
          </div>
        </section>

        {/* Filter bar */}
        <div style={{ borderBottom: '1px solid rgba(232,184,75,0.15)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: '60px', zIndex: 50 }}>
          <div className="container" style={{ padding: '0.85rem 1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(250,246,238,0.3)', marginRight: '4px' }}>Difficulty</span>
              {['all','easy','medium','hard'].map(d => (
                <button key={d} style={pill(difficulty===d)} onClick={() => setDifficulty(d)}>
                  {d === 'all' ? 'All' : d.charAt(0).toUpperCase()+d.slice(1)}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(250,246,238,0.3)', marginRight: '4px' }}>Category</span>
              <button style={pill(category==='all')} onClick={() => setCategory('all')}>All</button>
              {cats.map(c => <button key={c.slug} style={pill(category===c.slug)} onClick={() => setCategory(c.slug)}>{c.label}</button>)}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="ad-slot ad-slot--banner">Advertisement · 728×90</div>
        </div>

        <div className="container" style={{ padding: '0 1.5rem 5rem' }}>
          <div style={{ marginBottom: '1.25rem', color: 'rgba(250,246,238,0.3)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.05em' }}>
            {filtered.length} riddle{filtered.length !== 1 ? 's' : ''} found
          </div>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--cream-dim)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤔</div>
              <p style={{ fontStyle: 'italic' }}>No riddles match those filters — try broadening your search.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {filtered.map((r, i) => (
                <div key={r.id}>
                  <RiddleCard riddle={r} />
                  {(i + 1) % 8 === 0 && i < filtered.length - 1 && (
                    <div className="ad-slot ad-slot--inline" style={{ marginTop: '1.25rem' }}>Advertisement · In-feed</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  return { props: { allRiddles: JSON.parse(JSON.stringify(riddles)), cats: categories } }
}
