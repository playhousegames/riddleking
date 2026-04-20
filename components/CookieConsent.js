import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getConsent, setConsent, hasDecided } from '../lib/consent'

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [prefs, setPrefs] = useState({ analytics: false, advertising: false })

  useEffect(() => {
    setMounted(true)
    const existing = getConsent()
    if (existing) {
      setPrefs({ analytics: existing.analytics, advertising: existing.advertising })
    }
    if (!hasDecided()) {
      setShowBanner(true)
    }
    const openHandler = () => {
      const current = getConsent()
      if (current) {
        setPrefs({ analytics: current.analytics, advertising: current.advertising })
      }
      setShowModal(true)
    }
    window.addEventListener('rk:open-consent', openHandler)
    return () => window.removeEventListener('rk:open-consent', openHandler)
  }, [])

  if (!mounted) return null

  const acceptAll = () => {
    setConsent(true, true)
    setPrefs({ analytics: true, advertising: true })
    setShowBanner(false)
    setShowModal(false)
  }

  const rejectAll = () => {
    setConsent(false, false)
    setPrefs({ analytics: false, advertising: false })
    setShowBanner(false)
    setShowModal(false)
  }

  const savePreferences = () => {
    setConsent(prefs.analytics, prefs.advertising)
    setShowBanner(false)
    setShowModal(false)
  }

  const openPreferences = () => {
    setShowModal(true)
  }

  // ═══ BANNER (first-visit) ═══
  const banner = showBanner && !showModal && (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '1rem',
        right: '1rem',
        maxWidth: '640px',
        margin: '0 auto',
        zIndex: 10000,
        background: 'rgba(22, 18, 35, 0.98)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(232,184,75,0.35)',
        borderRadius: '10px',
        boxShadow: '0 12px 48px rgba(0,0,0,0.6)',
        padding: '1.5rem',
        color: 'var(--cream)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '1.3rem' }}>🍪</span>
        <h3 style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          color: 'var(--gold)',
        }}>
          Cookies on Riddle King
        </h3>
      </div>
      <p style={{
        margin: '0 0 1rem',
        fontSize: '0.92rem',
        lineHeight: 1.55,
        color: 'var(--cream-dim)',
      }}>
        We use essential cookies to run the site, and — with your permission — analytics and advertising cookies to understand visitors and keep Riddle King free. You can change your mind anytime from our <Link href="/cookies" style={{ color: 'var(--gold)' }}>Cookie Policy</Link>.
      </p>
      <div style={{
        display: 'flex',
        gap: '0.6rem',
        flexWrap: 'wrap',
      }}>
        <button
          onClick={acceptAll}
          className="btn btn--primary"
          style={{ fontSize: '0.9rem', padding: '0.55rem 1.1rem', flex: '1 1 auto' }}
        >
          Accept all
        </button>
        <button
          onClick={rejectAll}
          className="btn btn--ghost"
          style={{ fontSize: '0.9rem', padding: '0.55rem 1.1rem', flex: '1 1 auto' }}
        >
          Reject all
        </button>
        <button
          onClick={openPreferences}
          className="btn btn--ghost"
          style={{ fontSize: '0.9rem', padding: '0.55rem 1.1rem', flex: '1 1 auto' }}
        >
          Preferences
        </button>
      </div>
    </div>
  )

  // ═══ MODAL (detailed preferences) ═══
  const modal = showModal && (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie preferences"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10001,
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={(e) => {
        // Close if they click the backdrop (but not if they've never decided)
        if (e.target === e.currentTarget && hasDecided()) {
          setShowModal(false)
        }
      }}
    >
      <div style={{
        background: 'rgba(22, 18, 35, 0.99)',
        border: '1px solid rgba(232,184,75,0.35)',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
        maxWidth: '520px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        padding: '2rem',
        color: 'var(--cream)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '1.4rem' }}>🍪</span>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.4rem' }}>
            Cookie Preferences
          </h2>
        </div>
        <p style={{ color: 'var(--cream-dim)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Choose which cookies you are happy for Riddle King to use. You can change these settings anytime.
        </p>

        {/* Strictly necessary - locked on */}
        <div style={{
          background: 'rgba(250,246,238,0.03)',
          border: '1px solid rgba(232,184,75,0.15)',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '0.75rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--cream)' }}>
              Strictly Necessary
            </h3>
            <span style={{
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--gold)',
              background: 'rgba(232,184,75,0.1)',
              padding: '0.2rem 0.6rem',
              borderRadius: '10px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Always on
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.5, color: 'var(--cream-dim)' }}>
            Essential for the site to function. These are set automatically and do not require consent.
          </p>
        </div>

        {/* Analytics */}
        <ConsentToggle
          title="Analytics"
          description="Helps us understand which riddles you enjoy and improve the site. Uses Google Analytics 4."
          checked={prefs.analytics}
          onChange={(v) => setPrefs({ ...prefs, analytics: v })}
        />

        {/* Advertising */}
        <ConsentToggle
          title="Advertising"
          description="Allows Google AdSense to show ads and measure performance. Advertising keeps Riddle King free."
          checked={prefs.advertising}
          onChange={(v) => setPrefs({ ...prefs, advertising: v })}
        />

        <div style={{
          display: 'flex',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginTop: '1.5rem',
        }}>
          <button
            onClick={savePreferences}
            className="btn btn--primary"
            style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem', flex: '1 1 auto' }}
          >
            Save preferences
          </button>
          <button
            onClick={acceptAll}
            className="btn btn--ghost"
            style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem', flex: '1 1 auto' }}
          >
            Accept all
          </button>
          <button
            onClick={rejectAll}
            className="btn btn--ghost"
            style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem', flex: '1 1 auto' }}
          >
            Reject all
          </button>
        </div>

        <p style={{ margin: '1.25rem 0 0', fontSize: '0.8rem', color: 'var(--cream-dim)', textAlign: 'center' }}>
          See our <Link href="/cookies" style={{ color: 'var(--gold)' }}>Cookie Policy</Link> and <Link href="/privacy" style={{ color: 'var(--gold)' }}>Privacy Policy</Link> for full details.
        </p>
      </div>
    </div>
  )

  return (
    <>
      {banner}
      {modal}
    </>
  )
}

// ─── Toggle sub-component ───
function ConsentToggle({ title, description, checked, onChange }) {
  return (
    <div style={{
      background: 'rgba(250,246,238,0.03)',
      border: '1px solid rgba(232,184,75,0.15)',
      borderRadius: '8px',
      padding: '1rem 1.25rem',
      marginBottom: '0.75rem',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '0.4rem' }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--cream)' }}>
          {title}
        </h3>
        {/* Toggle switch */}
        <button
          role="switch"
          aria-checked={checked}
          aria-label={`${title} cookies`}
          onClick={() => onChange(!checked)}
          style={{
            width: '44px',
            height: '24px',
            borderRadius: '12px',
            background: checked ? 'var(--gold)' : 'rgba(250,246,238,0.15)',
            border: '1px solid ' + (checked ? 'var(--gold)' : 'rgba(232,184,75,0.25)'),
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.2s',
            padding: 0,
            flexShrink: 0,
          }}
        >
          <span style={{
            position: 'absolute',
            top: '2px',
            left: checked ? '22px' : '2px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: checked ? 'var(--royal-deep, #1a1630)' : 'var(--cream)',
            transition: 'left 0.2s',
          }} />
        </button>
      </div>
      <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.5, color: 'var(--cream-dim)' }}>
        {description}
      </p>
    </div>
  )
}
