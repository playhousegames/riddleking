import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'
import { riddles } from '../data/riddles'

export default function About() {
  return (
    <>
      <SEOHead title="About Riddle King" description="About Riddle King — the home of the finest free riddles on the internet." canonical="/about" />
      <Nav />
      <main>
        <section className="hero" style={{ padding: '3rem 0 2rem' }}>
          <div className="hero__orb" />
          <div className="container--narrow">
            <div className="eyebrow">About</div>
            <h1>About Riddle King</h1>
          </div>
        </section>
        <div className="container--narrow" style={{ padding: '3rem 1.5rem 5rem' }}>
          <div style={{ maxWidth: '640px' }}>
            <h2 style={{ marginBottom: '1rem' }}>What is Riddle King?</h2>
            <p style={{ color: 'var(--cream-dim)' }}>Riddle King is a free, ad-supported riddle website built for curious minds. We publish a fresh riddle every single day, drawn from a vault of over {riddles.length} carefully written puzzles spanning classic riddles, wordplay, lateral thinking, abstract philosophy, and modern brain teasers.</p>
            <p style={{ color: 'var(--cream-dim)' }}>Every riddle on Riddle King comes with a full, thoughtful explanation — not just the answer, but the <em>why</em>. We believe the most satisfying part of a riddle is truly understanding what makes it work.</p>
            <div className="divider">✦</div>
            <h2 style={{ marginBottom: '1rem' }}>How the Daily Riddle Works</h2>
            <p style={{ color: 'var(--cream-dim)' }}>Each day, a new riddle is automatically selected from our vault and displayed on the homepage. The rotation ensures that regular visitors always have something new, while the full archive remains searchable for anyone who wants to browse or challenge themselves.</p>
            <p style={{ color: 'var(--cream-dim)' }}>The answer is never shown automatically — you must click "Reveal the Answer". This means you can share the page with friends and family without spoiling the solution.</p>
            <div className="divider">✦</div>
            <h2 style={{ marginBottom: '1rem' }}>Our Riddle Philosophy</h2>
            <p style={{ color: 'var(--cream-dim)' }}>A good riddle has three qualities: it feels impossible at first, it has a satisfying single answer, and once you know the answer, you cannot imagine any other solution. We write and curate with those principles in mind.</p>
            <div className="divider">✦</div>
            <h2 style={{ marginBottom: '1rem' }}>Submit a Riddle</h2>
            <p style={{ color: 'var(--cream-dim)' }}>Have a riddle worthy of the vault? Send it with your proposed answer and explanation to: <strong style={{ color: 'var(--gold)' }}>riddles@riddleking.co.uk</strong></p>
            <div style={{ background: 'rgba(232,184,75,0.08)', border: '1px solid rgba(232,184,75,0.3)', borderRadius: '8px', padding: '1.5rem', marginTop: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.1rem', margin: 0, color: 'var(--cream)' }}>
                "A riddle is a metaphor that asks to be decoded. And in decoding it, we practise the fundamental act of all thinking: finding the pattern."
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
