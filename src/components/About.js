import React from 'react';
import Skills from './Skills';
import Theme from './ChangeTheme';
import '../App.css';

const About = () => {
  return (
    <div className="wrapper">

      <section className="section-name">
        <h4>About</h4>
      </section>

      <section className="about-container">

        <header className="about">
          <h2>Who I am</h2>
          <div className="indent">
            <p>
            Hi, my name is Eric and I am an Information Techonology and Informatics major at Rutgers New Brunswick.
            As an ITI major, I specialize in evaluating, implementing, using and managing
            information technologies for most
            organizations and corporations. As a developer, I have experiences ranging from front-end development
            to web-based applications. I wish to pursue a career in
            Project Management, utilizing my knowledge in management as an ITI major and my knowledge as a Developer.
            </p>
        </div>
        </header>

        <section className="skills-text">
            <h4>Skills</h4>
        </section>

        <div className="skills">
          <Skills
            skill="ReactJS"
            progress="80"
            />
          <Skills
            skill="NodeJS"
            progress="80"
            />
          <Skills
            skill="JavaScript"
            progress="80"
            />
          <Skills
            skill="HTML5 + CSS3"
            progress="100"
            />
          <Skills
            skill="GridCSS + Bootstrap4"
            progress="90"
            />
          <Skills
            skill="Java"
            progress="75"
            />
          <Skills
            skill="C"
            progress="75"
            />
          <Skills
            skill="Command Line"
            progress="95"
            />
        </div>
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
export default About;
