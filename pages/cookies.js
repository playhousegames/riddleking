import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'
import { openConsentPreferences } from '../lib/consent'

export default function Cookies() {
  return (
    <>
      <SEOHead title="Cookie Policy" description="Cookie policy for Riddle King — what cookies we use, why, and how you can control them." canonical="/cookies" />
      <Nav />

      <main>
        <section className="hero" style={{ padding: '3rem 0 2rem' }}>
          <div className="hero__orb" />
          <div className="container--narrow">
            <div className="eyebrow">Legal</div>
            <h1>Cookie Policy</h1>
            <p style={{ color: 'var(--cream-dim)', fontStyle: 'italic' }}>Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}</p>
          </div>
        </section>

        <div className="container--narrow" style={{ padding: '3rem 1.5rem 5rem' }}>
          <div style={{ maxWidth: '640px', color: 'var(--cream-dim)' }}>

            <h2 style={{ margin: '0 0 1rem', color: 'var(--cream)' }}>What Are Cookies?</h2>
            <p>Cookies are small text files that a website places on your device when you visit. They are widely used to make websites work, to remember your preferences, and to help site owners understand how their site is being used.</p>
            <p>This policy explains which cookies Riddle King uses, why we use them, and how you can control them.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Categories of Cookies We Use</h2>

            <h3 style={{ margin: '1.5rem 0 0.75rem', color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>Strictly Necessary Cookies</h3>
            <p>These are essential for the site to function. They do not require consent under UK GDPR. Riddle King currently uses minimal strictly necessary cookies for basic site operation.</p>

            <h3 style={{ margin: '1.5rem 0 0.75rem', color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>Analytics Cookies</h3>
            <p>We use <strong style={{ color: 'var(--cream)' }}>Google Analytics 4</strong> to understand how visitors use the site — which pages are popular, how long people spend reading, and where they come from. This helps us improve the riddles and the site experience.</p>
            <p>Google Analytics sets cookies that begin with <code style={{ background: 'rgba(232,184,75,0.08)', padding: '0.1rem 0.4rem', borderRadius: '3px', color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontSize: '0.9em' }}>_ga</code> and <code style={{ background: 'rgba(232,184,75,0.08)', padding: '0.1rem 0.4rem', borderRadius: '3px', color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontSize: '0.9em' }}>_ga_*</code>. These typically last up to two years. The data is aggregated and does not personally identify you.</p>

            <h3 style={{ margin: '1.5rem 0 0.75rem', color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>Advertising Cookies</h3>
            <p>Riddle King may display advertising via <strong style={{ color: 'var(--cream)' }}>Google AdSense</strong> to support the free operation of the site. When enabled, Google and its advertising partners may set cookies to:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Show ads relevant to your interests based on your visits to this and other websites</li>
              <li>Limit how often you see the same advertisement</li>
              <li>Measure the effectiveness of advertising campaigns</li>
              <li>Detect and prevent fraudulent advertising activity</li>
            </ul>
            <p>You can opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Google Ads Settings</a> or <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Your Online Choices</a>.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Third Parties Who May Set Cookies</h2>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong style={{ color: 'var(--cream)' }}>Google Analytics</strong> — traffic and engagement measurement. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Google Privacy Policy</a></li>
              <li><strong style={{ color: 'var(--cream)' }}>Google AdSense</strong> — advertising (when enabled). <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Google Advertising Policy</a></li>
              <li><strong style={{ color: 'var(--cream)' }}>Cloudflare</strong> — content delivery and security. Cloudflare may set a <code style={{ background: 'rgba(232,184,75,0.08)', padding: '0.1rem 0.4rem', borderRadius: '3px', color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontSize: '0.9em' }}>__cf_bm</code> cookie for bot management.</li>
            </ul>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>How to Control Cookies</h2>

            <div style={{
              background: 'rgba(232,184,75,0.08)',
              border: '1px solid rgba(232,184,75,0.35)',
              borderRadius: '8px',
              padding: '1.25rem 1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.05rem', marginBottom: '0.2rem' }}>
                  Your current preferences
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--cream-dim)' }}>
                  Review or update which cookies Riddle King may use.
                </div>
              </div>
              <button
                type="button"
                onClick={openConsentPreferences}
                className="btn btn--primary"
                style={{ fontSize: '0.9rem', padding: '0.55rem 1.2rem' }}
              >
                Manage cookies
              </button>
            </div>

            <p>You have several options for managing cookies on Riddle King:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong style={{ color: 'var(--cream)' }}>Consent banner:</strong> When you first visit the site, you will be offered a choice about which non-essential cookies to allow. You can change your choice at any time.</li>
              <li><strong style={{ color: 'var(--cream)' }}>Browser settings:</strong> Most browsers allow you to view, delete and block cookies. See instructions for <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Chrome</a>, <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Firefox</a>, <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Safari</a>, or <a href="https://support.microsoft.com/en-gb/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Edge</a>.</li>
              <li><strong style={{ color: 'var(--cream)' }}>Opt out of analytics:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Google Analytics Opt-out Browser Add-on</a>.</li>
              <li><strong style={{ color: 'var(--cream)' }}>Opt out of personalised ads:</strong> Visit <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Google Ads Settings</a>.</li>
            </ul>
            <p>Please note that blocking all cookies may affect how the site functions.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Changes to This Policy</h2>
            <p>This cookie policy may be updated as the site changes. The "last updated" date at the top of this page will reflect any changes.</p>

            <h2 style={{ margin: '2rem 0 1rem', color: 'var(--cream)' }}>Contact</h2>
            <p>Questions about cookies or your data? Please email: <strong style={{ color: 'var(--gold)' }}>privacy@riddleking.co.uk</strong></p>

            <p style={{ marginTop: '2rem', fontSize: '0.9rem' }}>See also our <a href="/privacy" style={{ color: 'var(--gold)' }}>Privacy Policy</a> for a broader overview of how we handle data.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
