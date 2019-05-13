import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';
import '../App.css';

const CustomNavbar = () => {
  return (
    <Navbar brand ='MyPortfolio' right>
      <NavItem><Link to="/">Home</Link></NavItem>
      <NavItem><Link to="/about">About</Link></NavItem>
      <NavItem><Link to="/projects">Projects</Link></NavItem>
      <NavItem href="https://drive.google.com/file/d/1x8y7CwVLpRh090Y5FKQo49mkyKPHXCFF/view?usp=sharing"><a href="https://drive.google.com/file/d/1x8y7CwVLpRh090Y5FKQo49mkyKPHXCFF/view?usp=sharing" target="_blank" rel="noopener noreferrer">Résumé</a></NavItem>
      <NavItem><Link to="/resources">Resources</Link></NavItem>
    </Navbar>
  );
}
export default CustomNavbar;
