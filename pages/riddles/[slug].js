import { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import RiddleCard from '../../components/RiddleCard'
import SEOHead from '../../components/SEOHead'
import Link from 'next/link'
import { riddles, getRiddleBySlug, getRelatedRiddles } from '../../data/riddles'

export default function RiddlePage({ riddle, related }) {
  const [revealed, setRevealed] = useState(false)
  if (!riddle) return null

  const diffLabel = riddle.difficulty.charAt(0).toUpperCase() + riddle.difficulty.slice(1)
  const catLabel  = riddle.category.charAt(0).toUpperCase() + riddle.category.slice(1)
  const hasLongform = riddle.longform && (
    riddle.longform.why_it_works ||
    riddle.longform.origins ||
    riddle.longform.how_to_solve ||
    (riddle.longform.trivia && riddle.longform.trivia.length > 0)
  )

  return (
    <>
      <SEOHead
        title={riddle.question.slice(0, 60) + (riddle.question.length > 60 ? '...' : '')}
        description={`Riddle: ${riddle.question} Answer: ${riddle.answer}. ${riddle.explanation}`}
        riddle={riddle}
        canonical={`/riddles/${riddle.slug}`}
      />
      <Nav />
      <main>

        {/* ─── Breadcrumb ─── */}
        <div style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(232,184,75,0.12)', padding: '0.6rem 0' }}>
          <div className="container">
            <nav style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.05em', color: 'rgba(250,246,238,0.35)' }}>
              <Link href="/" style={{ color: 'rgba(250,246,238,0.35)' }}>Home</Link>
              <span style={{ margin: '0 8px' }}>›</span>
              <Link href="/riddles" style={{ color: 'rgba(250,246,238,0.35)' }}>Riddles</Link>
              <span style={{ margin: '0 8px' }}>›</span>
              <span style={{ color: 'var(--gold)' }}>{riddle.answer}</span>
            </nav>
          </div>
        </div>

        {/* ─── Hero (question + reveal card) ─── */}
        <section className="hero">
          <div className="hero__orb" />
          <div className="container--narrow">
            <div style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span className={`badge badge--${riddle.difficulty}`}>{diffLabel}</span>
              <Link href={`/categories/${riddle.category}`} style={{ textDecoration: 'none' }}>
                <span className="badge badge--category" style={{ cursor: 'pointer' }}>{catLabel}</span>
              </Link>
            </div>

            <h1 style={{ fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', lineHeight: 1.45, marginBottom: '2rem', color: 'var(--cream)' }}>
              "{riddle.question}"
            </h1>

            {/* Reveal card */}
            <div style={{ background: 'rgba(250,246,238,0.05)', border: '1px solid rgba(232,184,75,0.35)', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', marginBottom: '1.5rem' }}>
              <div style={{ height: '3px', background: 'linear-gradient(to right, var(--gold-deep), var(--gold), var(--gold-deep))' }} />
              <div style={{ padding: '2rem 2.5rem' }}>
                {!revealed ? (
                  <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 900, color: 'rgba(232,184,75,0.1)', lineHeight: 1, marginBottom: '0.75rem' }}>?</div>
                    <p style={{ color: 'var(--cream-dim)', fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1rem' }}>
                      Take a moment to ponder before you face the answer...
                    </p>
                    <button className="btn btn--primary" onClick={() => setRevealed(true)} style={{ fontSize: '1.05rem' }}>
                      ♛ &nbsp;Reveal the Answer
                    </button>
                  </div>
                ) : (
                  <div style={{ animation: 'revealAnswer 0.4s ease' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>The Answer Is</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.2 }}>
                      {riddle.answer}
                    </div>
                    <div style={{ width: '36px', height: '2px', background: 'rgba(232,184,75,0.5)', marginBottom: '1rem' }} />
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(250,246,238,0.35)', marginBottom: '0.4rem' }}>Explanation</div>
                    <p style={{ color: 'var(--cream-dim)', lineHeight: 1.7, fontSize: '1.05rem', margin: '0 0 1.25rem' }}>{riddle.explanation}</p>
                    <button
                      className="btn btn--ghost"
                      onClick={() => setRevealed(false)}
                      style={{ fontSize: '0.9rem', padding: '0.5rem 1.2rem' }}
                    >
                      ▲ Hide the answer
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Crawler-visible answer */}
            <details style={{ marginBottom: '1.5rem' }}>
              <summary style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.05em', cursor: 'pointer', color: 'rgba(250,246,238,0.3)', textTransform: 'uppercase', listStyle: 'none', outline: 'none' }}>
                ▸ Quick answer (for search engines & AI)
              </summary>
              <div style={{ marginTop: '0.75rem', padding: '1rem', background: 'rgba(250,246,238,0.05)', border: 'var(--border-cream)', borderRadius: '4px' }}>
                <p style={{ margin: 0, fontSize: '1rem', color: 'var(--cream-dim)' }}>
                  <strong style={{ color: 'var(--gold)' }}>Answer:</strong> {riddle.answer}. {riddle.explanation}
                </p>
              </div>
            </details>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link href="/riddles" className="btn btn--ghost" style={{ fontSize: '0.9rem', padding: '0.5rem 1.2rem' }}>← All Riddles</Link>
              <Link href="/" className="btn btn--ghost" style={{ fontSize: '0.9rem', padding: '0.5rem 1.2rem' }}>Today's Riddle</Link>
            </div>
          </div>
        </section>

        {/* ─── Longform content (collapsible, SEO-safe) ─── */}
        {hasLongform && (
          <section style={{ padding: '2rem 0 3rem' }}>
            <div className="container--narrow">
              <details style={{
                background: 'rgba(250,246,238,0.03)',
                border: '1px solid rgba(232,184,75,0.2)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}>
                <summary style={{
                  padding: '1.25rem 1.75rem',
                  cursor: 'pointer',
                  listStyle: 'none',
                  outline: 'none',
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem' }}>
                    ✦ Go deeper ▼
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--cream)' }}>
                    The full story behind this riddle
                  </div>
                </summary>

                <div style={{ padding: '0.5rem 1.75rem 2rem' }}>

                  {riddle.longform.why_it_works && (
                    <div style={{ marginBottom: '2rem' }}>
                      <div className="eyebrow" style={{ marginTop: '1.5rem' }}>The Mechanism</div>
                      <h2 style={{ marginBottom: '0.75rem', fontSize: '1.4rem' }}>Why this riddle works</h2>
                      <p style={{ color: 'var(--cream-dim)', lineHeight: 1.75, fontSize: '1rem' }}>
                        {riddle.longform.why_it_works}
                      </p>
                    </div>
                  )}

                  {riddle.longform.origins && (
                    <div style={{ marginBottom: '2rem' }}>
                      <div className="eyebrow">Heritage</div>
                      <h2 style={{ marginBottom: '0.75rem', fontSize: '1.4rem' }}>Origins and history</h2>
                      <p style={{ color: 'var(--cream-dim)', lineHeight: 1.75, fontSize: '1rem' }}>
                        {riddle.longform.origins}
                      </p>
                    </div>
                  )}

                  {riddle.longform.how_to_solve && (
                    <div style={{ marginBottom: '2rem' }}>
                      <div className="eyebrow">The Technique</div>
                      <h2 style={{ marginBottom: '0.75rem', fontSize: '1.4rem' }}>How to solve it</h2>
                      <p style={{ color: 'var(--cream-dim)', lineHeight: 1.75, fontSize: '1rem' }}>
                        {riddle.longform.how_to_solve}
                      </p>
                    </div>
                  )}

                  {riddle.longform.trivia && riddle.longform.trivia.length > 0 && (
                    <div style={{
                      background: 'rgba(232,184,75,0.06)',
                      border: '1px solid rgba(232,184,75,0.25)',
                      borderRadius: '10px',
                      padding: '1.5rem 1.75rem',
                    }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
                        ✦ Curiosities
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {riddle.longform.trivia.map((item, i) => (
                          <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--cream-dim)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            <span style={{ color: 'var(--gold)', flexShrink: 0 }}>◆</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </details>
            </div>
          </section>
        )}

        {/* ─── Tags ─── */}
        <div className="container--narrow" style={{ padding: '0 1.5rem 2rem' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(250,246,238,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Tags:</span>
            {riddle.tags.map(tag => (
              <span key={tag} style={{ background: 'rgba(232,184,75,0.1)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: '20px', padding: '2px 10px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'rgba(232,184,75,0.7)' }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* ─── Related riddles ─── */}
        {related.length > 0 && (
          <section className="bg-darker" style={{ padding: '2rem 0 4rem' }}>
            <div className="container--narrow">
              <div className="divider">✦</div>
              <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>More to Ponder</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {related.map(r => <RiddleCard key={r.id} riddle={r} />)}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  return { paths: riddles.map(r => ({ params: { slug: r.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const riddle = getRiddleBySlug(params.slug)
  if (!riddle) return { notFound: true }
  const related = getRelatedRiddles(riddle, 3)
  return { props: { riddle: JSON.parse(JSON.stringify(riddle)), related: JSON.parse(JSON.stringify(related)) } }
}
