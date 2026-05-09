import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import CookieConsent from '../components/CookieConsent'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-icon.png" />
        <link rel="apple-touch-icon" href="/logo-icon.png" />
      </Head>

      {/*
        Google Consent Mode v2 — runs BEFORE GA4 loads.
        Everything starts "denied" so no tracking cookies are set until the
        user grants consent via the CookieConsent banner. If they have
        already consented in a previous session, we re-grant here.
      */}
      <Script id="consent-mode" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          // Default: everything denied
          gtag('consent', 'default', {
            ad_storage:         'denied',
            ad_user_data:       'denied',
            ad_personalization: 'denied',
            analytics_storage:  'denied',
            wait_for_update:    500
          });

          // Re-grant from localStorage if user has previously consented
          try {
            var stored = localStorage.getItem('rk_consent_v1');
            if (stored) {
              var c = JSON.parse(stored);
              gtag('consent', 'update', {
                analytics_storage:  c.analytics   ? 'granted' : 'denied',
                ad_storage:         c.advertising ? 'granted' : 'denied',
                ad_user_data:       c.advertising ? 'granted' : 'denied',
                ad_personalization: c.advertising ? 'granted' : 'denied',
              });
            }
          } catch (e) {}
        `}
      </Script>

      {/* Google Analytics — respects consent state above */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0X60PN3GKE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', 'G-0X60PN3GKE', { anonymize_ip: true });
        `}
      </Script>

      <Component {...pageProps} />
      <CookieConsent />
    </>
  )
}
