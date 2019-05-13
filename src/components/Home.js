import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import Theme from '../components/ChangeTheme';
import '../App.css';

const Home = () => {
  return (
    <div className="wrapper">
      <section className="top-container">
        <header className="showcase">
          <img src="assets/Profile.jpg" alt="profile-pic" />
          <h1>Eric Deleon</h1>
          <hr className="style-hr"/>
          <p>ReactJS | NodeJS | JavaScript | CSS3 | HTML5 | Java | C | Command Line</p>
          <div className="social-links">
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
      </header>
      <div className="top-box top-box-a">
        <h4>About</h4>
        <Icon>info</Icon>
        <Link to="/about" className="btn btn-large">Here</Link>
      </div>
      <div className="top-box top-box-b">
        <h4>Projects</h4>
        <Icon>folder</Icon>
        <Link to="/projects" className="btn btn-large">Here</Link>
      </div>
      <div className="top-box bottom-box-a">
        <h4>Résumé</h4>
        <Icon>picture_as_pdf</Icon>
        <a href="https://drive.google.com/file/d/1x8y7CwVLpRh090Y5FKQo49mkyKPHXCFF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-large">Here</a>
      </div>
      <div className="top-box bottom-box-b">
        <h4>Resources</h4>
        <Icon>wb_cloudy</Icon>
        <Link to="/resources" className="btn btn-large">Here</Link>
      </div>
    </section>

    <footer className="footer">
      <p>Eric Deleon &copy; 2018</p>
      <center><Theme /></center>
    </footer>

    </div>
  );
}
export default Home;
