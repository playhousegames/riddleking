import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo">
          <img
            src="/logo.png"
            alt="Riddle King"
            className="nav__logo-img"
          />
          Riddle <span>King</span>
        </Link>
        <ul className="nav__links">
          <li><Link href="/">Daily Riddle</Link></li>
          <li><Link href="/riddles">All Riddles</Link></li>
          <li><Link href="/categories">Categories</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
