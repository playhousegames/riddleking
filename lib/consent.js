// Utilities for managing cookie consent state.
// Consent is stored in localStorage under 'rk_consent_v1'.
// Shape: { analytics: boolean, advertising: boolean, timestamp: number }

const STORAGE_KEY = 'rk_consent_v1'

export function getConsent() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function setConsent(analytics, advertising) {
  if (typeof window === 'undefined') return
  const consent = {
    analytics: !!analytics,
    advertising: !!advertising,
    timestamp: Date.now(),
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
  } catch {
    // localStorage unavailable (private mode, etc.) — fail silently
  }
  // Push update to Google Consent Mode v2
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage:   analytics   ? 'granted' : 'denied',
      ad_storage:          advertising ? 'granted' : 'denied',
      ad_user_data:        advertising ? 'granted' : 'denied',
      ad_personalization:  advertising ? 'granted' : 'denied',
    })
  }
  // Notify anyone listening (e.g. to close the modal from elsewhere)
  window.dispatchEvent(new CustomEvent('rk:consent-updated', { detail: consent }))
}

export function hasDecided() {
  return getConsent() !== null
}

export function openConsentPreferences() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('rk:open-consent'))
}
