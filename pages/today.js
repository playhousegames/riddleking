import { useState, useEffect } from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import { riddles } from '../data/riddles';

export default function Today() {
  const [riddle, setRiddle] = useState(null);
  const [related, setRelated] = useState([]);
  const [revealed, setRevealed] = useState(false);
  const [dateLabel, setDateLabel] = useState('');

  useEffect(() => {
    // Same deterministic daily logic as the homepage
    const index = Math.floor(Date.now() / 86400000) % riddles.length;
    const todays = riddles[index];
    setRiddle(todays);

    const sameCategory = riddles
      .filter(r => r.category === todays.category && r.slug !== todays.slug)
      .slice(0, 3);
    const fill = riddles.filter(r => r.slug !== todays.slug);
    setRelated(
      sameCategory.length >= 3
        ? sameCategory
        : [...sameCategory, ...fill.slice(0, 3 - sameCategory.length)]
    );

    setDateLabel(new Date().toLocaleDateString('en-GB', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    }));
  }, []);

  if (!riddle) return null;

  return (
    <>
      <SEOHead
        title={`Riddle of the Day — ${dateLabel} | Riddle King`}
        description={`The King has a riddle for you: ${riddle.question.slice(0, 140)}`}
        canonical="https://www.riddleking.co.uk/today/"
      />

      <main className="today">
        <div className="parchment">
          <span className="crown" aria-hidden="true">♛</span>
          <p className="eyebrow">Riddle of the Day</p>
          <p className="date">{dateLabel}</p>

          <div className="divider" />

          <p className="question">{riddle.question}</p>

          <div className="divider" />

          {/* Always in DOM for crawlers — visually hidden until reveal */}
          <details className="seo-answer">
            <summary>Answer</summary>
            <p>{riddle.answer}</p>
          </details>

          <button
            className={`reveal-btn${revealed ? ' done' : ''}`}
            onClick={() => setRevealed(true)}
            disabled={revealed}
          >
            {revealed ? '✓ Answered' : 'Reveal the Answer'}
          </button>

          {revealed && (
            <div className="answer">
              <p className="answer-label">The King decrees…</p>
              <p className="answer-text">{riddle.answer}</p>
              <Link href={`/riddles/${riddle.slug}/`} className="full-link">
                Full riddle + explanation →
              </Link>
            </div>
          )}
        </div>

        {related.length > 0 && (
          <section className="related">
            <h2>More from the vault</h2>
            <div className="grid">
              {related.map(r => (
                <Link key={r.slug} href={`/riddles/${r.slug}/`} className="card">
                  <span className="card-cat">{r.category}</span>
                  <p className="card-q">{r.question}</p>
                  <span className="card-cta">Solve it →</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="all-cta">
          <p>The King holds <strong>{riddles.length} riddles</strong> in his vault.</p>
          <Link href="/riddles/" className="btn">Browse all riddles</Link>
        </div>
      </main>

      <style jsx>{`
        .today {
          max-width: 680px;
          margin: 0 auto;
          padding: 2rem 1.25rem 5rem;
        }

        /* ── Parchment card ── */
        .parchment {
          background: var(--cream);
          border: 2px solid var(--gold);
          border-radius: 3px;
          padding: 2.5rem 1.75rem;
          position: relative;
          text-align: center;
          box-shadow: 0 16px 48px -16px rgba(29, 15, 62, 0.25);
        }
        /* Corner marks */
        .parchment::before, .parchment::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 24px;
          border: 2px solid var(--gold);
        }
        .parchment::before { top: 7px; left: 7px; border-right: none; border-bottom: none; }
        .parchment::after  { bottom: 7px; right: 7px; border-left: none; border-top: none; }

        .crown {
          display: block;
          font-size: 2.5rem;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .eyebrow {
          font-family: var(--font-display);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--royal);
          margin: 0 0 0.3rem;
          font-weight: 600;
        }
        .date {
          font-family: var(--font-body);
          font-style: italic;
          color: var(--royal-light);
          margin: 0;
          font-size: 0.95rem;
        }
        .divider {
          border: none;
          border-top: 1px solid rgba(232, 184, 75, 0.35);
          margin: 1.5rem 0;
        }
        .question {
          font-family: var(--font-display);
          font-size: clamp(1.25rem, 4vw, 1.6rem);
          line-height: 1.5;
          color: var(--royal-deep);
          margin: 0;
          font-weight: 500;
        }

        /* ── Reveal button ── */
        .reveal-btn {
          margin-top: 2rem;
          background: var(--royal);
          color: var(--cream);
          border: none;
          font-family: var(--font-display);
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.9rem 2rem;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 4px 14px -4px rgba(29, 15, 62, 0.4);
        }
        .reveal-btn:hover:not(:disabled) {
          background: var(--gold);
          color: var(--royal-deep);
          transform: translateY(-1px);
        }
        .reveal-btn.done {
          background: transparent;
          color: var(--royal);
          border: 1px solid var(--royal);
          box-shadow: none;
          cursor: default;
        }

        /* Crawlable answer — visually hidden */
        .seo-answer {
          position: absolute;
          width: 1px; height: 1px;
          overflow: hidden; clip: rect(0,0,0,0);
          white-space: nowrap; border: 0;
        }

        /* ── Answer reveal ── */
        .answer {
          margin-top: 1.75rem;
          padding: 1.25rem 1.5rem;
          background: var(--gold-pale);
          border-left: 3px solid var(--gold);
          text-align: left;
          animation: fadeUp 0.4s ease-out;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .answer-label {
          font-family: var(--font-display);
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--royal-light);
          margin: 0 0 0.4rem;
        }
        .answer-text {
          font-family: var(--font-body);
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--royal-deep);
          margin: 0 0 0.85rem;
        }
        .full-link {
          font-family: var(--font-body);
          font-style: italic;
          font-size: 0.95rem;
          color: var(--royal);
          text-decoration: none;
          border-bottom: 1px solid var(--gold);
          padding-bottom: 1px;
        }
        .full-link:hover { color: var(--gold-deep); }

        /* ── Related riddles ── */
        .related { margin-top: 3.5rem; }
        .related h2 {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--royal);
          text-align: center;
          margin: 0 0 1.25rem;
          letter-spacing: 0.03em;
        }
        .grid {
          display: grid;
          gap: 0.75rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 560px) {
          .grid { grid-template-columns: repeat(3, 1fr); }
        }
        .card {
          display: flex;
          flex-direction: column;
          background: var(--cream);
          border: 1px solid rgba(232, 184, 75, 0.3);
          padding: 1rem 1.1rem;
          text-decoration: none;
          border-radius: 2px;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .card:hover {
          border-color: var(--gold);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -10px rgba(29, 15, 62, 0.2);
        }
        .card-cat {
          font-family: var(--font-display);
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold-deep);
          margin-bottom: 0.4rem;
        }
        .card-q {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.45;
          color: var(--royal-deep);
          margin: 0 0 auto;
          padding-bottom: 0.75rem;
        }
        .card-cta {
          font-family: var(--font-body);
          font-style: italic;
          font-size: 0.85rem;
          color: var(--royal-light);
        }

        /* ── Bottom CTA ── */
        .all-cta {
          margin-top: 3.5rem;
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(232, 184, 75, 0.25);
        }
        .all-cta p {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--royal);
          margin: 0 0 1rem;
        }
        .btn {
          display: inline-block;
          background: var(--gold);
          color: var(--royal-deep);
          padding: 0.8rem 1.75rem;
          text-decoration: none;
          font-family: var(--font-display);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 2px;
          transition: background 0.2s, color 0.2s;
        }
        .btn:hover {
          background: var(--royal);
          color: var(--cream);
        }
      `}</style>
    </>
  );
}
