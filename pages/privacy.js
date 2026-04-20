import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

export default function Privacy() {
  return (
    <>
      <SEOHead title="Privacy Policy" description="Riddle King privacy policy — how we handle your data under UK GDPR." canonical="/privacy" />
      <Nav />

      <main>
        <section className="hero" style={{ padding: '3rem 0 2rem' }}>
          <div className="hero__orb" />
          <div className="container--narrow">
            <div className="eyebrow">Legal</div>
            <h1>Privacy Policy</h1>
            <p style={{ color: 'var(--cream-dim)', fontStyle: 'italic' }}>Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}</p>
          </div>
        </section>

        <div className="container--narrow" style={{ padding: '3rem 1.5rem 5rem' }}>
          <div style={{ maxWidth: '640px', color: 'var(--cream-dim)' }}>

            <h2 style={{ margin: '0 0 1rem', color: 'var(--cream)' }}>Who We Are</h2>
            <p>Riddle King (riddleking.co.uk) is an independent puzzle website operated from Jersey, Channel Islands. This policy explains what data we collect, why, and your rights under UK GDPR and the Data Protection (Jersey) Law 2018.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Data We Collect</h2>
            <p>Riddle King does not require an account. You can browse and read every riddle on the site without providing any personal information. We collect only the following:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong style={{ color: 'var(--cream)' }}>Analytics data</strong> via Google Analytics 4 — aggregated information about pages viewed, time on site, country, device type, and referring source. This does not personally identify you.</li>
              <li><strong style={{ color: 'var(--cream)' }}>Server logs</strong> — standard web server records including IP address, browser type, and pages requested. Retained for a maximum of 30 days for security and troubleshooting.</li>
              <li><strong style={{ color: 'var(--cream)' }}>Email contents</strong> — if you email us (for example, to submit a riddle or ask a question), we retain the message for as long as needed to respond and maintain a record.</li>
            </ul>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Legal Basis for Processing</h2>
            <p>Under UK GDPR, we process your data on the following bases:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong style={{ color: 'var(--cream)' }}>Consent</strong> — for analytics and advertising cookies, where you have agreed via the consent banner.</li>
              <li><strong style={{ color: 'var(--cream)' }}>Legitimate interests</strong> — for server logs (security, fraud prevention) and responding to email enquiries.</li>
            </ul>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Cookies</h2>
            <p>This site uses cookies for analytics and, where enabled, advertising. Essential cookies are set automatically; non-essential cookies are only set with your consent. For a full breakdown of every cookie used, see our <a href="/cookies" style={{ color: 'var(--gold)' }}>Cookie Policy</a>.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Advertising</h2>
            <p>Riddle King may display advertising via Google AdSense to support the free operation of the site. Google and its partners may use cookies to show you ads based on your prior visits to this and other sites. You can opt out of personalised advertising at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Google Ads Settings</a>.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Third-Party Services</h2>
            <p>We rely on a small number of third-party services to operate:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong style={{ color: 'var(--cream)' }}>Google Analytics</strong> — traffic measurement</li>
              <li><strong style={{ color: 'var(--cream)' }}>Google AdSense</strong> — advertising (when enabled)</li>
              <li><strong style={{ color: 'var(--cream)' }}>Vercel</strong> — website hosting</li>
              <li><strong style={{ color: 'var(--cream)' }}>Cloudflare</strong> — DNS and security</li>
            </ul>
            <p>Each of these providers has its own privacy policy governing how they handle any data they process on our behalf.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Your Rights</h2>
            <p>Under UK GDPR you have the right to:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Access any personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing or withdraw consent</li>
              <li>Lodge a complaint with the Jersey Office of the Information Commissioner (<a href="https://jerseyoic.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>jerseyoic.org</a>) or the UK Information Commissioner's Office (<a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>ico.org.uk</a>)</li>
            </ul>
            <p>To exercise any of these rights, email: <strong style={{ color: 'var(--gold)' }}>privacy@riddleking.co.uk</strong></p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Children</h2>
            <p>Riddle King is a family-friendly site and does not knowingly collect personal data from children. If you believe a child has provided us with personal information, please contact us and we will delete it.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Changes to This Policy</h2>
            <p>This policy may be updated from time to time. The "last updated" date at the top of this page will reflect any changes.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Contact</h2>
            <p>For privacy-related queries: <strong style={{ color: 'var(--gold)' }}>privacy@riddleking.co.uk</strong></p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
