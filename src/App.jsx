import { useState } from 'react'
import Logo from './components/Logo.jsx'
import OfficeChair from './components/OfficeChair.jsx'
import './App.css'

const FEATURES = [
  { icon: ChairIcon, label: 'Timeless\nDesigns' },
  { icon: HeartIcon, label: 'Built for\nComfort' },
  { icon: HomeIcon, label: 'Made for\nYour Space' },
]

const SHOWCASE = [
  { tone: 'slate', uid: 'a' },
  { tone: 'navy', uid: 'b' },
  { tone: 'midnight', uid: 'c' },
]

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
      <div className="spotlight" aria-hidden="true" />
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <main className="container">
        <header className="top" style={{ '--d': '0.1s' }}>
          <Logo />
        </header>

        <section className="hero">
          <div className="badge" style={{ '--d': '0.25s' }}>
            <span className="badge-tools" aria-hidden="true">⚒</span>
            We&rsquo;re Under Maintenance
          </div>

          <h1 className="headline" style={{ '--d': '0.4s' }}>
            Crafting Something
            <span className="grad">Beautiful</span>
            <span className="headline-sub">Just For You</span>
          </h1>

          <div className="divider" style={{ '--d': '0.5s' }}>
            <span className="divider-heart">♥</span>
          </div>

          <p className="subtitle" style={{ '--d': '0.55s' }}>
            Our website is getting a fresh new look and feel. We&rsquo;re fine-tuning
            every detail to bring you a smoother experience.
          </p>

          <p className="back-soon" style={{ '--d': '0.65s' }}>
            We&rsquo;ll be back very soon!
          </p>

          <p className="tagline" style={{ '--d': '0.75s' }}>
            Where <em>Comfort</em> Meets <em>Style</em>
          </p>

          {/* Office chair showcase */}
          <div className="showcase" style={{ '--d': '0.85s' }}>
            {SHOWCASE.map((c, i) => (
              <div className={`chair chair-${i}`} key={c.uid} style={{ '--ci': i }}>
                <OfficeChair tone={c.tone} uid={c.uid} />
                <span className="chair-shadow" />
              </div>
            ))}
          </div>

          {/* Feature highlights */}
          <div className="features" style={{ '--d': '0.95s' }}>
            {FEATURES.map(({ icon: Icon, label }, i) => (
              <div className="feature" key={label}>
                <Icon />
                <span className="feature-label">
                  {label.split('\n').map((l, j) => (
                    <span key={j}>{l}</span>
                  ))}
                </span>
                {i < FEATURES.length - 1 && <span className="feature-sep" />}
              </div>
            ))}
          </div>

          {/* Notify form */}
          <form className="notify" onSubmit={handleSubmit} style={{ '--d': '1.05s' }}>
            <p className="notify-lead">
              <MailIcon /> Stay updated! Drop your email and be the first to know.
            </p>
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
                  ? 'Sending…'
                  : status === 'success'
                  ? "You're on the list! ✓"
                  : 'Notify Me'}
              </button>
            </div>
            <p className={`form-note ${status === 'success' ? 'show' : ''}`}>
              {status === 'success'
                ? "🎉 Thanks! We'll email you the moment we're back."
                : 'No spam — just one note when we reopen.'}
            </p>
          </form>

          <div className="socials" style={{ '--d': '1.15s' }}>
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

        <footer className="foot" style={{ '--d': '1.25s' }}>
          <span>© {new Date().getFullYear()} Rialto Furniture</span>
          <span className="dot-sep">•</span>
          <span>Premium office seating, crafted for you</span>
        </footer>
      </main>
    </div>
  )
}

/* --- Feature icons --- */
function ChairIcon() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4h10v8H7z" />
      <path d="M7 12v4h10v-4M9 16v3M15 16v3M8 19h8" />
    </svg>
  )
}
function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5.5 6 5.5c2 0 3 1.2 6 4 3-2.8 4-4 6-4 3.5 0 5 3.5 3.5 6.5C19 16.5 12 21 12 21z" />
    </svg>
  )
}
function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-7 9 7M5 10v10h14V10M9 20v-6h6v6" />
    </svg>
  )
}

/* --- Social icons --- */
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
