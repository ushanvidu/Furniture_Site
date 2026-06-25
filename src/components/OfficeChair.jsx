// Ergonomic high-back office chair — front view, drawn as SVG.
// `tone` swaps the upholstery palette so a few can read as a small collection.
const TONES = {
  navy: { body: '#1c3a66', bodyDk: '#122747', seat: '#21437a' },
  midnight: { body: '#16233f', bodyDk: '#0e1830', seat: '#1c2c4d' },
  slate: { body: '#2d3c52', bodyDk: '#1e2a3b', seat: '#34465f' },
}

function OfficeChair({ tone = 'navy', uid = 'c', className = '' }) {
  const t = TONES[tone] || TONES.navy
  const g = `grad-${uid}`
  const gs = `grad-seat-${uid}`

  return (
    <svg
      className={`chair-svg ${className}`}
      viewBox="0 0 240 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={t.body} />
          <stop offset="1" stopColor={t.bodyDk} />
        </linearGradient>
        <linearGradient id={gs} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={t.seat} />
          <stop offset="1" stopColor={t.bodyDk} />
        </linearGradient>
        <linearGradient id={`gold-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e0bd7e" />
          <stop offset="1" stopColor="#b07f3a" />
        </linearGradient>
      </defs>

      {/* ----- 5-star base + castors ----- */}
      <g stroke={`url(#gold-${uid})`} strokeWidth="6" strokeLinecap="round">
        <line x1="120" y1="232" x2="48" y2="252" />
        <line x1="120" y1="232" x2="90" y2="266" />
        <line x1="120" y1="232" x2="150" y2="266" />
        <line x1="120" y1="232" x2="192" y2="252" />
        <line x1="120" y1="232" x2="120" y2="262" />
      </g>
      <g fill="#0a1730" stroke={`url(#gold-${uid})`} strokeWidth="2.5">
        <circle cx="46" cy="256" r="8" />
        <circle cx="88" cy="270" r="8" />
        <circle cx="120" cy="266" r="8" />
        <circle cx="152" cy="270" r="8" />
        <circle cx="194" cy="256" r="8" />
      </g>

      {/* ----- gas lift column ----- */}
      <rect x="112" y="196" width="16" height="40" rx="4" fill={`url(#gold-${uid})`} />

      {/* ----- seat cushion ----- */}
      <path
        d="M70 168 q0 -10 12 -10 h76 q12 0 12 10 v18 q0 14 -16 14 H86 q-16 0 -16 -14 Z"
        fill={`url(#${gs})`}
        stroke={`url(#gold-${uid})`}
        strokeWidth="2"
      />

      {/* ----- armrests ----- */}
      <g fill="none" stroke={`url(#gold-${uid})`} strokeWidth="6" strokeLinecap="round">
        <path d="M64 176 v-18 q0 -8 10 -8" />
        <path d="M176 176 v-18 q0 -8 -10 -8" />
      </g>
      <rect x="48" y="168" width="34" height="11" rx="5" fill={`url(#${g})`} />
      <rect x="158" y="168" width="34" height="11" rx="5" fill={`url(#${g})`} />

      {/* ----- backrest ----- */}
      <path
        d="M80 158 V70 q0 -34 40 -34 t40 34 V158 Z"
        fill={`url(#${g})`}
        stroke={`url(#gold-${uid})`}
        strokeWidth="2.5"
      />
      {/* stitching / mesh lines */}
      <g stroke="rgba(224,189,126,0.28)" strokeWidth="2" strokeLinecap="round">
        <line x1="120" y1="58" x2="120" y2="150" />
        <line x1="100" y1="64" x2="100" y2="150" />
        <line x1="140" y1="64" x2="140" y2="150" />
      </g>

      {/* ----- headrest ----- */}
      <rect
        x="96"
        y="20"
        width="48"
        height="30"
        rx="14"
        fill={`url(#${g})`}
        stroke={`url(#gold-${uid})`}
        strokeWidth="2.5"
      />
    </svg>
  )
}

export default OfficeChair
