import React from 'react';
import Theme from './ChangeTheme';
import '../App.css';

const Resources = () => {
  return (
    <div className="wrapper">

      <section className="section-name">
        <h4>Resources</h4>
      </section>

      <footer className="component-pages">
        <div className="social-links-pages">
          {/* LinkedIn */}
          <a href='https://linkedin.com/in/eric-deleon' target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" aria-hidden="true" />
          </a>
          {/* Github */}
          <a href="https://github.com/ericdleon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" aria-hidden="true" />
          </a>
          {/* Email */}
          <a href="mailto:deleoneric97@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope" aria-hidden="true" />
          </a>
        </div>
      </footer>

      <center><Theme /></center>

  </div>
  );
}
export default Resources;
