import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

export default function Contact() {
  return (
    <>
      <SEOHead title="Contact" description="Get in touch with Riddle King — questions, feedback, riddle submissions, or business enquiries." canonical="/contact" />
      <Nav />
      <main>
        <section className="hero" style={{ padding: '3rem 0 2rem' }}>
          <div className="hero__orb" />
          <div className="container--narrow">
            <div className="eyebrow">Contact</div>
            <h1>Get in Touch</h1>
          </div>
        </section>

        <div className="container--narrow" style={{ padding: '3rem 1.5rem 5rem' }}>
          <div style={{ maxWidth: '640px' }}>
            <p style={{ color: 'var(--cream-dim)' }}>
              Riddle King is an independent site run by one person. I read every message — whether you have spotted an error, want to submit a riddle, have a business enquiry, or simply want to say hello.
            </p>

            <div className="divider">✦</div>

            <h2 style={{ marginBottom: '1rem' }}>General Enquiries</h2>
            <p style={{ color: 'var(--cream-dim)', marginBottom: '1.5rem' }}>
              For anything at all — feedback, corrections, partnership ideas, press — please email:
            </p>
            <div style={{
              background: 'rgba(232,184,75,0.08)',
              border: '1px solid rgba(232,184,75,0.3)',
              borderRadius: '8px',
              padding: '1.5rem 2rem',
              marginBottom: '2rem',
            }}>
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--gold)', fontSize: '1.3rem' }}>
                hello@riddleking.co.uk
              </p>
            </div>

            <h2 style={{ marginBottom: '1rem' }}>Submit a Riddle</h2>
            <p style={{ color: 'var(--cream-dim)', marginBottom: '1.5rem' }}>
              Have a riddle worthy of the vault? Send it along with your proposed answer and a one-paragraph explanation to:
            </p>
            <div style={{
              background: 'rgba(232,184,75,0.08)',
              border: '1px solid rgba(232,184,75,0.3)',
              borderRadius: '8px',
              padding: '1.5rem 2rem',
              marginBottom: '2rem',
            }}>
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--gold)', fontSize: '1.3rem' }}>
                riddles@riddleking.co.uk
              </p>
            </div>

            <h2 style={{ marginBottom: '1rem' }}>Privacy & Data</h2>
            <p style={{ color: 'var(--cream-dim)', marginBottom: '1.5rem' }}>
              For privacy-related requests, including data access or deletion under UK GDPR:
            </p>
            <div style={{
              background: 'rgba(232,184,75,0.08)',
              border: '1px solid rgba(232,184,75,0.3)',
              borderRadius: '8px',
              padding: '1.5rem 2rem',
              marginBottom: '2rem',
            }}>
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--gold)', fontSize: '1.3rem' }}>
                privacy@riddleking.co.uk
              </p>
            </div>

            <div className="divider">✦</div>

            <h2 style={{ marginBottom: '1rem' }}>Response Times</h2>
            <p style={{ color: 'var(--cream-dim)' }}>
              I aim to respond to all emails within 3–5 working days. Riddle submissions may take a little longer as each is read and considered carefully. Thank you for your patience.
            </p>

            <h2 style={{ margin: '2rem 0 1rem' }}>Location</h2>
            <p style={{ color: 'var(--cream-dim)' }}>
              Riddle King is operated from Jersey, Channel Islands.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
