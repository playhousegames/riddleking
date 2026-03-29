import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RiddleCard from '../components/RiddleCard'
import SEOHead from '../components/SEOHead'
import Link from 'next/link'
import { riddles, getDailyRiddle, categories } from '../data/riddles'

export default function Home({ daily, recent, cats }) {
  return (
    <>
      <SEOHead canonical="/" />
      <Nav />
      <main>

        {/* ─── Hero ─── */}
        <section className="hero">
          <div className="hero__orb" />
          <div className="hero__orb2" />
          <div className="container--narrow">
            <div className="fade-up">
              <div className="eyebrow">Daily Riddle</div>
              <h1 style={{ marginBottom: '0.5rem' }}>
                Welcome to <span style={{ color: 'var(--gold)' }}>Riddle King</span>
              </h1>
              <p style={{ color: 'var(--cream-dim)', fontStyle: 'italic', fontSize: '1.15rem', marginBottom: '2.5rem' }}>
                A new riddle every day. Sharpen your mind, outsmart your friends, claim the crown.
              </p>
            </div>
            <div className="fade-up fade-up--1">
              <RiddleCard riddle={daily} featured={true} showLink={true} />
            </div>
          </div>
        </section>

        {/* ─── Ad ─── */}
        <div className="container">
          <div className="ad-slot ad-slot--banner">Advertisement · 728×90 Leaderboard</div>
        </div>

        {/* ─── Categories ─── */}
        <section style={{ padding: '2rem 0 3rem' }}>
          <div className="container">
            <div className="divider">✦</div>
            <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>Browse by Category</h2>
            <p style={{ textAlign: 'center', color: 'var(--cream-dim)', fontStyle: 'italic', marginBottom: '1.75rem' }}>Every riddle has its kingdom</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: '1rem' }}>
              {cats.map((cat, i) => (
                <Link key={cat.slug} href={`/categories/${cat.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: 'rgba(250,246,238,0.04)',
                    border: '1px solid rgba(232,184,75,0.2)',
                    borderRadius: '8px',
                    padding: '1.25rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    height: '100%',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,184,75,0.1)'; e.currentTarget.style.borderColor = 'rgba(232,184,75,0.5)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(250,246,238,0.04)'; e.currentTarget.style.borderColor = 'rgba(232,184,75,0.2)'; }}
                  >
                    <div style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}>
                      {['⚔️','📜','🌀','💭','⚡'][i]}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--cream)', marginBottom: '0.3rem' }}>{cat.label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>{cat.count} riddles</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Recent Riddles ─── */}
        <section className="bg-darker" style={{ padding: '2rem 0 4rem' }}>
          <div className="container">
            <div className="divider">✦</div>
            <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>More Riddles to Solve</h2>
            <p style={{ textAlign: 'center', color: 'var(--cream-dim)', fontStyle: 'italic', marginBottom: '1.75rem' }}>Think you can handle these?</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {recent.map(r => <RiddleCard key={r.id} riddle={r} />)}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/riddles" className="btn btn--outline-gold">View all {riddles.length} riddles →</Link>
            </div>
          </div>
        </section>

        {/* ─── Ad rectangles ─── */}
        <div className="container" style={{ padding: '2rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="ad-slot ad-slot--rect">Advertisement · 300×250</div>
            <div className="ad-slot ad-slot--rect">Advertisement · 300×250</div>
          </div>
        </div>

        {/* ─── Why section ─── */}
        <section className="bg-accent" style={{ padding: '3rem 0 4rem' }}>
          <div className="container--narrow">
            <div className="divider">✦</div>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Why Riddle King?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '♛', title: 'A New Riddle Daily', body: 'A fresh riddle every single day — automatically rotated so there is always something new.' },
                { icon: '📖', title: 'Full Explanations', body: 'Every answer comes with a detailed explanation so you understand the why, not just the what.' },
                { icon: '🧠', title: 'All Difficulties', body: 'Easy warm-ups to fiendish brain-breakers. Filter by difficulty to match your mood.' },
                { icon: '🔍', title: 'AI & SEO Visible', body: 'Every riddle is a structured page — discoverable by search engines and AI assistants alike.' },
              ].map(item => (
                <div key={item.title} style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h4 style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-display)', color: 'var(--cream)' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--cream-dim)', margin: 0, lineHeight: 1.6 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const daily  = getDailyRiddle()
  const recent = riddles.filter(r => r.id !== daily.id).slice(0, 6)
  const cats   = categories.map(c => ({ ...c, count: riddles.filter(r => r.category === c.slug).length }))
  return { props: { daily: JSON.parse(JSON.stringify(daily)), recent: JSON.parse(JSON.stringify(recent)), cats } }
}
