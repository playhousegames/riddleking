import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem', background: 'linear-gradient(150deg, var(--royal-deep) 0%, var(--royal) 100%)' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '7rem', fontWeight: 900, color: 'rgba(232,184,75,0.08)', lineHeight: 1 }}>404</div>
          <h1 style={{ fontStyle: 'italic', fontWeight: 400, marginBottom: '1rem', marginTop: '-1rem', fontSize: '1.6rem' }}>
            "I am a page that does not exist. What am I?"
          </h1>
          <p style={{ color: 'var(--cream-dim)', fontStyle: 'italic', marginBottom: '2rem' }}>
            A 404 error. Even the King of Riddles is stumped.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn--primary">Today's riddle</Link>
            <Link href="/riddles" className="btn btn--ghost">Browse all riddles</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
