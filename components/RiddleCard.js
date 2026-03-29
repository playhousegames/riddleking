import { useState } from 'react'
import Link from 'next/link'

export default function RiddleCard({ riddle, featured = false, showLink = true }) {
  const [revealed, setRevealed] = useState(false)
  const diffLabel = riddle.difficulty.charAt(0).toUpperCase() + riddle.difficulty.slice(1)
  const catLabel  = riddle.category.charAt(0).toUpperCase() + riddle.category.slice(1)

  return (
    <article style={{
      background: 'rgba(250,246,238,0.05)',
      border: featured ? '1px solid rgba(232,184,75,0.45)' : '1px solid rgba(232,184,75,0.22)',
      borderRadius: featured ? '10px' : '8px',
      boxShadow: featured ? '0 8px 32px rgba(0,0,0,0.4)' : '0 2px 12px rgba(0,0,0,0.25)',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}>
      {featured && (
        <div style={{ height: '3px', background: 'linear-gradient(to right, var(--gold-deep), var(--gold), var(--gold-deep))' }} />
      )}

      <div style={{ padding: featured ? '2rem 2.5rem' : '1.5rem' }}>
        {/* Meta row */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span className={`badge badge--${riddle.difficulty}`}>{diffLabel}</span>
            <span className="badge badge--category">{catLabel}</span>
          </div>
          {featured && <span className="badge badge--today">✦ Today's Riddle</span>}
        </div>

        {/* Question */}
        <blockquote style={{
          fontFamily: 'var(--font-display)',
          fontSize: featured ? 'clamp(1.1rem, 2.5vw, 1.5rem)' : '1.1rem',
          fontStyle: 'italic',
          fontWeight: 400,
          lineHeight: 1.55,
          color: 'var(--cream)',
          borderLeft: '3px solid var(--gold)',
          paddingLeft: '1.25rem',
          margin: '0 0 1.5rem',
        }}>
          {riddle.question}
        </blockquote>

        {/* Answer reveal */}
        {revealed && (
          <div style={{
            background: 'rgba(232,184,75,0.08)',
            border: '1px solid rgba(232,184,75,0.3)',
            borderRadius: '6px',
            padding: '1.25rem 1.5rem',
            marginBottom: '1.5rem',
            animation: 'revealAnswer 0.3s ease',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>
              The Answer
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.75rem' }}>
              {riddle.answer}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--cream-dim)', lineHeight: 1.6, margin: 0 }}>
              {riddle.explanation}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            className={`btn ${revealed ? 'btn--ghost' : 'btn--primary'}`}
            onClick={() => setRevealed(!revealed)}
            style={{ fontSize: '0.95rem', padding: '0.6rem 1.4rem' }}
          >
            {revealed ? '▲ Hide answer' : '▼ Reveal the answer'}
          </button>
          {showLink && (
            <Link href={`/riddles/${riddle.slug}`} className="btn btn--ghost" style={{ fontSize: '0.95rem', padding: '0.6rem 1.4rem' }}>
              Full page →
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
