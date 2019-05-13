import React from 'react';
import { ProgressBar } from 'react-materialize';
import '../App.css';
//Used In About.js

const Skills = (props) => {
  return (
    <div>
      <p className="skills-p"> {props.skill} </p>
      <ProgressBar style={{margin: 'auto', width: '75%'}} progress={props.progress} />
    </div>
  );
}
export default Skills;
