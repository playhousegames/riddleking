import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

export default function Privacy() {
  return (
    <>
      <SEOHead title="Privacy Policy" description="Riddle King privacy policy." canonical="/privacy" />
      <Nav />

      <main>
        <section style={{ padding: '3rem 0 2rem', borderBottom: '1px solid rgba(201,146,42,0.2)', background: 'linear-gradient(to bottom, var(--parchment), var(--parchment-dark))' }}>
          <div className="container--narrow">
            <h1>Privacy Policy</h1>
            <p style={{ color: 'var(--slate)', fontStyle: 'italic' }}>Last updated: {new Date().getFullYear()}</p>
          </div>
        </section>

        <div className="container--narrow" style={{ padding: '3rem 1.5rem 5rem' }}>
          <div style={{ maxWidth: '640px' }}>
            <h2 style={{ marginBottom: '1rem' }}>Advertising</h2>
            <p>Riddle King is supported by advertising. We use Google AdSense to display adverts. Google may use cookies to show ads based on your prior visits to our site and other sites on the internet. You can opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>

            <h2 style={{ margin: '2rem 0 1rem' }}>Cookies</h2>
            <p>This site uses cookies for advertising and analytics purposes. By continuing to use the site, you consent to our use of cookies in accordance with this policy.</p>

            <h2 style={{ margin: '2rem 0 1rem' }}>Analytics</h2>
            <p>We use Google Analytics to understand how visitors use the site. This data is anonymised and helps us improve content and user experience. No personally identifiable information is collected through analytics.</p>

            <h2 style={{ margin: '2rem 0 1rem' }}>Data We Collect</h2>
            <p>We do not require you to create an account or provide personal information to use Riddle King. We collect only standard server logs (IP addresses, browser type, pages visited) which are retained for a maximum of 30 days.</p>

            <h2 style={{ margin: '2rem 0 1rem' }}>Your Rights</h2>
            <p>You have the right to request deletion of any personal data we hold about you. Please contact us at <strong>privacy@riddleking.co.uk</strong> to exercise this right.</p>

            <h2 style={{ margin: '2rem 0 1rem' }}>Contact</h2>
            <p>For privacy-related queries, contact: <strong>privacy@riddleking.co.uk</strong></p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
