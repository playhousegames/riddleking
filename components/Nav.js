import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo" onClick={close}>
          <img
            src="/logo.png"
            alt="Riddle King"
            className="nav__logo-img"
          />
          Riddle <span>King</span>
        </Link>
        <button
          className={`nav__burger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav__links${open ? ' open' : ''}`}>
          <li><Link href="/" onClick={close}>Daily Riddle</Link></li>
          <li><Link href="/riddles" onClick={close}>All Riddles</Link></li>
          <li><Link href="/categories" onClick={close}>Categories</Link></li>
          <li><Link href="/about" onClick={close}>About</Link></li>
          <li><Link href="/royal-recommendations" onClick={close}>Royal Picks</Link></li>
        </ul>
      </div>
    </nav>
  )
}
