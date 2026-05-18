import { Link } from 'react-router-dom';
import React  from 'react';
import './NavBar.css';

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
};

  return (
    <nav className= "nav controls">
      <div className="navbar" id="my-nav">
        <li className="nav-item">
           <Link onClick={() => scrollToSection('home')} className="nav-link" data-id="home">
            <i className="fas fa-home"></i>
            <span className="icon-text"></span>
           </Link>
        </li>
        <li className="nav-item">
           <Link onClick={() => scrollToSection('about')} className="nav-link" data-id="about">
            <i className="fas fa-user"></i>
            <span className="icon-text"></span>
           </Link>
        </li>
        <li className="nav-item">
           <Link onClick={() => scrollToSection('my-portfolio')} className="nav-link" data-id="my-portfolio">
            <i className="fas fa-briefcase"></i>
            <span className="icon-text"></span>
           </Link>
        </li>
        <li className="nav-item">
           <Link onClick={() => scrollToSection('contact')} className="nav-link" data-id="contact">
            <i className="fas fa-envelope-open"></i>
            <span className="icon-text"></span>
           </Link>
        </li>
      </div>
    </nav>
  );
}
export default NavBar;