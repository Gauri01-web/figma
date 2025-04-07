import React from 'react';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      <header style={{ backgroundColor: '#fff', padding: '20px 0', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Positivus</h1>
          <nav>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>About</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Services</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main style={{ backgroundColor: '#f9f9f9', padding: '40px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Navigating the digital landscape</h2>
            <p style={{ fontSize: '18px', color: '#666' }}>Empowering businesses to thrive in the digital age.</p>
          </section>

          <section style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
            <div style={{ flex: '1', marginRight: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Our Services</h3>
              <p style={{ fontSize: '16px', color: '#666' }}>We offer a wide range of services to help your business succeed.</p>
            </div>
            <div style={{ flex: '1', marginLeft: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Why Choose Us</h3>
              <p style={{ fontSize: '16px', color: '#666' }}>We are committed to delivering the best solutions for your business.</p>
            </div>
          </section>

          <section style={{ backgroundColor: '#e0ffe0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Get Started Today</h3>
            <p style={{ fontSize: '16px', color: '#333' }}>Join us and start your journey to success.</p>
            <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sign Up</button>
          </section>
        </div>
      </main>

      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ margin: '0' }}>© 2023 Positivus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

