import React from 'react';
import { Card, CardTitle } from 'react-materialize';
import Theme from './ChangeTheme';

import '../App.css';

const Projects = () => {
  return (
    <div className="wrapper">

      <section className="section-name">
        <h4>Projects</h4>
      </section>

      <section className="boxes-projects">
        <div className="box-projects">
          <Card className='small'
            header={<CardTitle image="assets/devpost-image.gif">Defending Hackerspace</CardTitle>}
            actions={[<a href='https://devpost.com/software/defend-hackerspace' target="_blank" rel="noopener noreferrer"><img src="assets/devpost.png" alt="devpost" /></a>]}>
            <div className="box-text">
            HackNY | October 2016
            </div>
          </Card>
        </div>
        <div className="box-projects">
          <Card className='small'
            header={<CardTitle image="assets/devpost-image.gif">Cyber-dome</CardTitle>}
            actions={[<a href='https://devpost.com/software/cyberdome' target="_blank" rel="noopener noreferrer"><img src="assets/devpost.png" alt="devpost" /></a>]}>
            <div className="box-text">
            HackNJIT | November 2016
            </div>
          </Card>
        </div>
        <div className="box-projects">
          <Card className='small'
            header={<CardTitle image="assets/devpost-image.gif">Git Pulled VR</CardTitle>}
            actions={[<a href='https://devpost.com/software/git-pulled-vr' target="_blank" rel="noopener noreferrer"><img src="assets/devpost.png" alt="devpost" /></a>]}>
            <div className="box-text">
            HackRPI | November 2016
            </div>
          </Card>
        </div>
        <div className="box-projects">
          <Card className='small'
            header={<CardTitle image="assets/connect4.png">Connect 4</CardTitle>}
            actions={[<a href='https://github.com/ericdleon/Connect-4' target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>]}>
            <div className="box-text">
            CS11 Project | December 2016
            </div>
          </Card>
        </div>
        <div className="box-projects">
          <Card className='small'
            header={<CardTitle image="assets/profhacks.jpg">IT Simulator 2017</CardTitle>}
            actions={[<a href='https://devpost.com/software/it-simulator-2017' target="_blank" rel="noopener noreferrer"><img src="assets/devpost.png" alt="devpost" /></a>]}>
            <div className="box-text">
            ProfHacks | February 2017
            </div>
          </Card>
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
export default Projects;
