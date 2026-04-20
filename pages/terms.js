import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

export default function Terms() {
  return (
    <>
      <SEOHead title="Terms of Service" description="Terms of service for using Riddle King." canonical="/terms" />
      <Nav />

      <main>
        <section className="hero" style={{ padding: '3rem 0 2rem' }}>
          <div className="hero__orb" />
          <div className="container--narrow">
            <div className="eyebrow">Legal</div>
            <h1>Terms of Service</h1>
            <p style={{ color: 'var(--cream-dim)', fontStyle: 'italic' }}>Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}</p>
          </div>
        </section>

        <div className="container--narrow" style={{ padding: '3rem 1.5rem 5rem' }}>
          <div style={{ maxWidth: '640px', color: 'var(--cream-dim)' }}>

            <p>These terms govern your use of Riddle King (riddleking.co.uk). By using this site, you agree to these terms. If you do not agree, please do not use the site.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>1. About Riddle King</h2>
            <p>Riddle King is a free, independently operated website providing riddles, brain teasers and puzzle content for personal entertainment and educational use. The site is operated from Jersey, Channel Islands.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>2. Use of the Site</h2>
            <p>You may use Riddle King for personal, non-commercial enjoyment. You agree not to:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Use automated tools, scrapers, or bots to access, copy, or collect content from the site without permission</li>
              <li>Attempt to interfere with the site's operation, security, or infrastructure</li>
              <li>Reproduce, republish, or redistribute substantial portions of the content without written permission</li>
              <li>Use the site for any unlawful purpose</li>
              <li>Frame or embed the site within another site without permission</li>
            </ul>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>3. Intellectual Property</h2>
            <p>The original content on Riddle King — including the explanations, category framing, site design, branding, and all editorial material — is the property of Riddle King and is protected by copyright. Many of the traditional riddles themselves are folk puzzles in the public domain; however, the way they are presented, explained, and organised on this site is original work.</p>
            <p>You may share individual riddle pages via direct link. You may not copy explanations, republish pages, or reproduce the site's structure elsewhere without permission.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>4. User Submissions</h2>
            <p>If you submit a riddle or other content to Riddle King (for example, via email submission), you grant Riddle King a non-exclusive, worldwide, royalty-free licence to use, edit, publish and display your submission on the site and associated channels. You confirm that any content you submit is original to you or that you have the right to share it.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>5. Advertising</h2>
            <p>Riddle King may display third-party advertising, including Google AdSense, to support the free operation of the site. Advertisers are responsible for the content of their own advertisements. Riddle King does not endorse any advertised products or services and is not responsible for any dealings you have with advertisers.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>6. Third-Party Links</h2>
            <p>The site may link to third-party websites for reference or context. Riddle King has no control over the content of those sites and accepts no responsibility for them. Following external links is at your own discretion.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>7. No Warranty</h2>
            <p>Riddle King is provided "as is" for entertainment and educational purposes. While I try to keep the site accurate, functional and secure, I make no warranties that it will be error-free, continuously available, or suitable for any particular purpose.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Riddle King, its operator, and its contributors are not liable for any indirect, incidental, or consequential loss arising from your use of the site. Nothing in these terms excludes liability that cannot be excluded under applicable law.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>9. Changes to These Terms</h2>
            <p>These terms may be updated from time to time. The "last updated" date at the top of this page will reflect any changes. Continued use of the site after changes constitutes acceptance of the updated terms.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>10. Governing Law</h2>
            <p>These terms are governed by the laws of the Bailiwick of Jersey. Any disputes arising in connection with these terms or your use of the site will be subject to the jurisdiction of the Jersey courts.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>11. Contact</h2>
            <p>Questions about these terms? Please email: <strong style={{ color: 'var(--gold)' }}>hello@riddleking.co.uk</strong></p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
