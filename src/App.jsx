import { useState, useEffect, useMemo } from 'react'
import Logo from './components/Logo.jsx'
import './App.css'

// Launch target — adjust this date as needed
const LAUNCH_DATE = new Date('2026-07-25T09:00:00')

function getRemaining() {
  const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now())
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  return { days, hours, minutes, seconds }
}

function Countdown() {
  const [time, setTime] = useState(getRemaining)

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <div className="countdown">
      {units.map((u, i) => (
        <div className="count-box" key={u.label} style={{ '--i': i }}>
          <div className="count-value">{String(u.value).padStart(2, '0')}</div>
          <div className="count-label">{u.label}</div>
        </div>
      ))}
    </div>
  )
}

// Decorative floating furniture glyphs
const FLOATERS = ['🛋️', '🪑', '🛏️', '🚪', '🪞', '🕯️', '🪟', '🧺']

function Floaters() {
  const items = useMemo(
    () =>
      FLOATERS.map((glyph, i) => ({
        glyph,
        left: `${(i * 12 + 6) % 96}%`,
        delay: `${i * 1.3}s`,
        duration: `${14 + (i % 4) * 4}s`,
        size: `${1.4 + (i % 3) * 0.5}rem`,
      })),
    []
  )
  return (
    <div className="floaters" aria-hidden="true">
      {items.map((it, i) => (
        <span
          key={i}
          className="floater"
          style={{
            left: it.left,
            animationDelay: it.delay,
            animationDuration: it.duration,
            fontSize: it.size,
          }}
        >
          {it.glyph}
        </span>
      ))}
    </div>
  )
}

function App() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 4000)
    }, 1400)
  }

  return (
    <div className="page">
      {/* Animated background layers */}
      <div className="bg-gradient" aria-hidden="true" />
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="blob blob-3" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <Floaters />

      <main className="container">
        <header className="top" style={{ '--d': '0.1s' }}>
          <Logo />
        </header>

        <section className="hero">
          <div className="badge" style={{ '--d': '0.25s' }}>
            <span className="badge-dot" />
            Launching Soon
          </div>

          <h1 className="headline" style={{ '--d': '0.4s' }}>
            Crafting Your
            <span className="grad"> Dream Space</span>
          </h1>

          <p className="subtitle" style={{ '--d': '0.55s' }}>
            We're putting the finishing touches on an exclusive online destination
            for premium, handcrafted furniture. Sign up to be the first through the
            door — and unlock an inaugural launch-day discount.
          </p>

          <div className="cd-wrap" style={{ '--d': '0.7s' }}>
            <Countdown />
          </div>

          <form className="notify" onSubmit={handleSubmit} style={{ '--d': '0.85s' }}>
            <div className="field">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                required
              />
              <button type="submit" disabled={status === 'loading'} data-status={status}>
                {status === 'loading'
                  ? 'Joining…'
                  : status === 'success'
                  ? "You're in! ✓"
                  : 'Notify Me'}
              </button>
            </div>
            <p className={`form-note ${status === 'success' ? 'show' : ''}`}>
              {status === 'success'
                ? "🎉 Thanks! We'll email you the moment we open."
                : 'No spam — just one launch announcement.'}
            </p>
          </form>

          <div className="socials" style={{ '--d': '1s' }}>
            {[
              { name: 'Instagram', href: '#', icon: IgIcon },
              { name: 'Facebook', href: '#', icon: FbIcon },
              { name: 'Pinterest', href: '#', icon: PinIcon },
              { name: 'Email', href: 'mailto:hello@rialtofurniture.com', icon: MailIcon },
            ].map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} className="social" aria-label={name}>
                <Icon />
              </a>
            ))}
          </div>
        </section>

        <footer className="foot" style={{ '--d': '1.15s' }}>
          <span>© {new Date().getFullYear()} Rialto Furniture</span>
          <span className="dot-sep">•</span>
          <span>Designed for living beautifully</span>
        </footer>
      </main>
    </div>
  )
}

/* --- Inline social icons --- */
function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function FbIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M14 9h3l.5-3H14V4.5c0-.8.3-1.5 1.5-1.5H17V.2C16.6.1 15.5 0 14.3 0 11.7 0 10 1.6 10 4.3V6H7v3h3v9h4V9z" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2C6.9 2 3 5.9 3 10.4c0 3.3 2 6.2 5 7.4-.1-.6-.1-1.6 0-2.3l1-4.1s-.3-.5-.3-1.3c0-1.2.7-2.1 1.6-2.1.7 0 1.1.6 1.1 1.3 0 .8-.5 2-.8 3.1-.2.9.5 1.6 1.4 1.6 1.7 0 2.8-2.1 2.8-4.7 0-1.9-1.3-3.4-3.7-3.4-2.7 0-4.4 2-4.4 4.2 0 .8.2 1.3.6 1.8.2.2.2.3.1.5l-.2.8c-.1.3-.3.4-.5.3-1.4-.6-2-2-2-3.7 0-2.8 2.3-6.1 7-6.1 3.7 0 6.2 2.7 6.2 5.6 0 3.8-2.1 6.7-5.3 6.7-1 0-2-.6-2.4-1.2l-.6 2.5c-.2.8-.7 1.8-1.1 2.5.9.3 1.8.4 2.7.4 5.1 0 9-3.9 9-8.6C21 5.9 17.1 2 12 2z" />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M3 6l9 6 9-6" />
    </svg>
  )
}

export default App
