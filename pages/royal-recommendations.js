import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'
import { useAmazonLink } from '../lib/useAmazonLink'

// Replace ukAsin / usAsin with your actual ASINs from Associates dashboards
const products = [
  {
    ukAsin: 'B074HKJ4MV',
    usAsin: 'B00TU4A0JK',
    name: 'Codenames',
    emoji: '🕵️',
    tagline: 'The spy word game',
    description: 'Two rival spymasters know the secret identities of 25 agents. Give one-word clues to contact your agents first. The classic party game for word lovers.',
    priceUK: '~£20',
    priceUS: '~$25',
    stars: '4.8',
    reviews: '12,000+',
    category: 'Party Game',
  },
  {
    ukAsin: 'B076K5F67J',
    usAsin: 'B076K5F67J',
    name: 'Azul',
    emoji: '🎨',
    tagline: 'The tile-drafting masterpiece',
    description: 'Draft beautiful azulejo tiles to decorate your palace wall. A modern classic that rewards both strategy and intuition. Perfect for 2–4 players.',
    priceUK: '~£30',
    priceUS: '~$35',
    stars: '4.7',
    reviews: '8,500+',
    category: 'Strategy',
  },
  {
    ukAsin: 'B0CN98GLGQ',
    usAsin: 'B00BCZGPQY',
    name: "Rubik's Cube",
    emoji: '🧩',
    tagline: 'The original brain teaser',
    description: 'Over 43 quintillion possible combinations. One solution. The puzzle that launched a thousand riddles — see if you can solve it in under a minute.',
    priceUK: '~£10',
    priceUS: '~$12',
    stars: '4.6',
    reviews: '50,000+',
    category: 'Puzzle',
  },
  {
    ukAsin: 'B07L3WJLHF',
    usAsin: 'B01M1J85DQ',
    name: 'Ticket to Ride',
    emoji: '🚂',
    tagline: 'The railway adventure',
    description: 'Collect train cards and claim railway routes across the country. Longer routes score more points — but block your rivals before they block you.',
    priceUK: '~£40',
    priceUS: '~$45',
    stars: '4.8',
    reviews: '25,000+',
    category: 'Strategy',
  },
  {
    ukAsin: 'B00NYB6RMS',
    usAsin: 'B00NYB6RMS',
    name: 'Exploding Kittens',
    emoji: '🐱',
    tagline: 'The highly strategic kitty-powered card game',
    description: 'Draw cards until someone draws an Exploding Kitten. Defuse it with a Laser Pointer or Catnip Sandwich. The Oatmeal\'s wildly popular chaotic card game.',
    priceUK: '~£18',
    priceUS: '~$20',
    stars: '4.7',
    reviews: '30,000+',
    category: 'Card Game',
  },
  {
    ukAsin: 'B07KQLGL4Q',
    usAsin: 'B07KQLGL4Q',
    name: 'ThinkFun Gravity Maze',
    emoji: '⚙️',
    tagline: 'The tumbling tower logic game',
    description: 'Drop marbles through towers and ramps to reach the target. 60 challenges from beginner to expert. A solo logic puzzle that rewards lateral thinking.',
    priceUK: '~£25',
    priceUS: '~$30',
    stars: '4.7',
    reviews: '6,000+',
    category: 'Logic Puzzle',
  },
]

export default function RoyalRecommendations() {
  const { buildLink, isUS } = useAmazonLink()

  return (
    <>
      <SEOHead
        title="Royal Recommendations — Puzzles &amp; Games"
        description="The Riddle King's picks for the finest puzzles and brain-teasing games. Curated for minds that love a challenge."
        canonical="/royal-recommendations"
      />
      <Nav />

      <main>

        {/* ─── Hero ─── */}
        <section className="hero" style={{ minHeight: '40vh', paddingBottom: '3rem' }}>
          <div className="hero__orb" />
          <div className="hero__orb2" />
          <div className="container--narrow" style={{ textAlign: 'center' }}>
            <div className="fade-up">
              <div className="eyebrow">Curated by the King</div>
              <h1 style={{ marginBottom: '1rem' }}>
                Royal <span style={{ color: 'var(--gold)' }}>Recommendations</span>
              </h1>
              <p style={{ color: 'var(--cream-dim)', fontSize: '1.15rem', maxWidth: '560px', margin: '0 auto 1.5rem' }}>
                The finest puzzles and games for minds that love a challenge. Every pick personally approved by the King.
              </p>
              <div style={{
                display: 'inline-block',
                background: 'rgba(232,184,75,0.12)',
                border: '1px solid rgba(232,184,75,0.35)',
                borderRadius: '6px',
                padding: '0.5rem 1.25rem',
                color: 'var(--gold)',
                fontSize: '0.85rem',
                letterSpacing: '0.04em',
              }}>
                ♚ Affiliate links — we earn a small commission at no extra cost to you
              </div>
            </div>
          </div>
        </section>

        {/* ─── Products grid ─── */}
        <section style={{ background: 'var(--cream)', padding: '4rem 0' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2rem',
            }}>
              {products.map((product, i) => (
                <ProductCard
                  key={product.ukAsin}
                  product={product}
                  link={buildLink(product)}
                  isUS={isUS}
                  delay={i % 3}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Why we recommend ─── */}
        <section className="bg-darker" style={{ padding: '4rem 0' }}>
          <div className="container--narrow" style={{ textAlign: 'center' }}>
            <div className="eyebrow">The Royal Standard</div>
            <h2 style={{ marginBottom: '1rem' }}>Why these games?</h2>
            <p style={{ color: 'var(--cream-dim)', marginBottom: '3rem', fontSize: '1.05rem' }}>
              Every recommendation earns its place on this list through three tests.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🧠', title: 'Mind-Sharpening', body: 'It demands real thought — pattern recognition, deduction, or lateral thinking.' },
                { icon: '⏱️', title: 'Replay Value', body: 'Thousands of hours of play, not a one-and-done novelty.' },
                { icon: '👑', title: 'King-Tested', body: 'Played, enjoyed, and vouched for. No padding. No paid placements.' },
              ].map(({ icon, title, body }) => (
                <div key={title} style={{
                  background: 'rgba(250,246,238,0.05)',
                  border: '1px solid rgba(232,184,75,0.2)',
                  borderRadius: '10px',
                  padding: '1.75rem 1.5rem',
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                  <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ color: 'var(--cream-dim)', fontSize: '0.9rem', margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Disclosure ─── */}
        <section style={{ background: 'var(--cream)', padding: '2.5rem 0' }}>
          <div className="container--narrow" style={{ textAlign: 'center' }}>
            <p style={{ color: '#666', fontSize: '0.82rem', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
              <strong>Affiliate disclosure:</strong> Riddle King participates in the Amazon Associates programme.
              Links on this page are affiliate links — if you buy through them, we earn a small commission
              at no additional cost to you. This helps keep the site free and the riddles flowing.
              {isUS
                ? ' You\'re being served US Amazon links (amazon.com).'
                : ' You\'re being served UK Amazon links (amazon.co.uk).'}
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

function ProductCard({ product, link, isUS, delay }) {
  const price = isUS ? product.priceUS : product.priceUK

  return (
    <div
      className={`fade-up fade-up--${delay}`}
      style={{
        background: '#fff',
        border: '1px solid rgba(45,27,105,0.12)',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 12px rgba(45,27,105,0.07)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
    >
      {/* Card header */}
      <div style={{
        background: 'var(--royal)',
        padding: '1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{product.emoji}</div>
        <div style={{
          display: 'inline-block',
          background: 'rgba(232,184,75,0.18)',
          border: '1px solid rgba(232,184,75,0.4)',
          borderRadius: '4px',
          padding: '0.2rem 0.6rem',
          color: 'var(--gold)',
          fontSize: '0.72rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>
          {product.category}
        </div>
        <h2 style={{
          color: 'var(--cream)',
          fontSize: '1.3rem',
          margin: '0 0 0.25rem',
          fontFamily: 'var(--font-display)',
        }}>
          {product.name}
        </h2>
        <p style={{ color: 'var(--gold)', fontSize: '0.9rem', margin: 0, fontStyle: 'italic' }}>
          {product.tagline}
        </p>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p style={{ color: '#444', fontSize: '0.93rem', lineHeight: 1.65, flex: 1, margin: '0 0 1.25rem' }}>
          {product.description}
        </p>

        {/* Stars + reviews */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
          <span style={{ color: '#e8a020' }}>{'★'.repeat(5)}</span>
          <span style={{ color: '#555' }}>{product.stars} · {product.reviews} reviews</span>
        </div>

        {/* Price */}
        <div style={{ marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--royal)' }}>{price}</span>
          <span style={{ fontSize: '0.8rem', color: '#888', marginLeft: '0.4rem' }}>on Amazon</span>
        </div>

        {/* CTA */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn btn--primary"
          style={{ textAlign: 'center', textDecoration: 'none' }}
        >
          View on Amazon {isUS ? '🇺🇸' : '🇬🇧'}
        </a>
      </div>
    </div>
  )
}
