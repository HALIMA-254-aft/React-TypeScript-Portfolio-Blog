
function Contact() {
  return (
    <section
      style={{
        padding: '2rem',
        maxWidth: 800,
        width: '100%',
        margin: '3rem auto',
        backgroundColor: '#2c2c2c',
        borderRadius: '10px',
        color: '#fff',
        boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
      }}
    >
      <h2 style={{ color: '#00bcd4', marginBottom: '1rem' }}>Contact Me</h2>
      <p>You can reach me via:</p>
      <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
        <li>Email: halima@example.com</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/halima-abdullahi-2278243a1/" target="_blank" rel="noreferrer">linkedin.com/in/halima</a></li>
        <li>GitHub: <a href="https://github.com/HALIMA-254-aft" target="_blank" rel="noreferrer">github.com/HALIMA-254-aft</a></li>
      </ul>
    </section>
  )
}

export default Contact
