// Home.js

import React from 'react';
import './Home.css'; // Make sure this CSS file is in the same directory

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Our Application</h1>
        <p>Your journey to productivity and success starts here. Discover our powerful features designed to help you achieve your goals.</p>
        <a href="#features" className="cta-button">Learn More</a>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">🚀</div>
            <h3>Blazing Fast</h3>
            <p>Experience unparalleled speed with our optimized performance architecture.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🛡️</div>
            <h3>Secure by Design</h3>
            <p>Your data is protected with state-of-the-art encryption and security protocols.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🎨</div>
            <h3>Fully Customizable</h3>
            <p>Tailor the application to your unique needs with a wide range of customization options.</p>
          </div>
        </div>
      </section>

      {/* Optional: Add a Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#e9ecef', color: '#666' }}>
        <p>&copy; 2024 Your App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;