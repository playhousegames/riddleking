import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

export default function Submit() {
  return (
    <>
      <SEOHead title="Submit a Riddle" description="Submit your original riddle to Riddle King. We review all submissions and publish the best in our daily riddle vault." canonical="/submit" />
      <Nav />

      <main>
        <section style={{ padding: '3rem 0 2rem', borderBottom: '1px solid rgba(201,146,42,0.2)', background: 'linear-gradient(to bottom, var(--parchment), var(--parchment-dark))' }}>
          <div className="container--narrow">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
              Community
            </div>
            <h1>Submit a Riddle</h1>
            <p style={{ color: 'var(--slate)', fontStyle: 'italic', fontSize: '1.1rem' }}>
              Think you've got a riddle worthy of the vault?
            </p>
          </div>
        </section>

        <div className="container--narrow" style={{ padding: '3rem 1.5rem 5rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <p>We welcome original riddle submissions. The best riddles are:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Original or truly classic (not just copied from elsewhere)</li>
              <li>Fair — the answer should be deducible from the clues</li>
              <li>Clean — a single, unambiguous correct answer</li>
              <li>Accompanied by a brief explanation of why the answer is correct</li>
            </ul>

            <div style={{
              background: 'var(--gold-pale)',
              border: '1px solid rgba(201,146,42,0.35)',
              borderRadius: '6px',
              padding: '1.5rem 2rem',
              marginBottom: '2rem',
            }}>
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}>
                Email your submission to:
              </p>
              <p style={{ margin: '0.5rem 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--crimson)', fontSize: '1.3rem' }}>
                riddles@riddleking.co.uk
              </p>
            </div>

            <p style={{ color: 'var(--slate)', fontSize: '0.95rem' }}>
              Please include: the riddle text, the answer, a one-paragraph explanation, and your preferred category (classic, wordplay, lateral thinking, abstract, or modern). We review all submissions and will get back to you if we publish yours.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
