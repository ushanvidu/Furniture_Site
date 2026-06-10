function Logo({ className = '' }) {
  return (
    <div className={`logo ${className}`}>
      <img
        src="/logo.png"
        alt="Rialto Furniture"
        className="logo-img"
        width="2987"
        height="850"
      />
    </div>
  )
}

export default Logo
