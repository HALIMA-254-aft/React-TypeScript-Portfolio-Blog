
function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '1rem 0',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <a href="#blog" style={{ color: '#00bcd4' }}>Blog</a>
      <a href="#about" style={{ color: '#00bcd4' }}>About</a>
      <a href="#contact" style={{ color: '#00bcd4' }}>Contact</a>
    </nav>
  )
}

export default Navbar
