import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <img src="/logo.png" alt="" style={{ width: '32px', height: '32px', objectFit: 'contain', opacity: 0.9 }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 900, color: 'var(--cream)' }}>Riddle King</span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--cream-dim)' }}>
              The home of the finest riddles on the internet. Sharpen your mind daily with handpicked puzzles from the classic to the contemporary.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>Explore</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link href="/" style={{ fontSize: '0.95rem', color: 'var(--cream-dim)' }}>Daily Riddle</Link></li>
              <li><Link href="/riddles" style={{ fontSize: '0.95rem', color: 'var(--cream-dim)' }}>All Riddles</Link></li>
              <li><Link href="/categories" style={{ fontSize: '0.95rem', color: 'var(--cream-dim)' }}>Categories</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>More</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link href="/about" style={{ fontSize: '0.95rem', color: 'var(--cream-dim)' }}>About</Link></li>

              <li><Link href="/privacy" style={{ fontSize: '0.95rem', color: 'var(--cream-dim)' }}>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: 'var(--border-gold)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(250,246,238,0.3)', margin: 0 }}>
            © {new Date().getFullYear()} Riddle King · riddleking.co.uk
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(250,246,238,0.3)', margin: 0, fontStyle: 'italic' }}>
            A mind sharpened is a kingdom won.
          </p>
        </div>
      </div>
    </footer>
  )
}
