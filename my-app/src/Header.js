// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="wrapper">
        <div className="header-content">
          <a className="site-title" href="/">Soham Talukdar</a>
          <nav className="nav-links">
            <a className="nav-link" href="/cv">CV</a>
            <Link className="nav-link" to="/readings">Readings</Link>
          </nav>
          <div className="contact-info">
            <div className="social-icons">
              <a href="https://github.com/sohamtalukdar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/soham-talukdar" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="mailto:sohamt09@gmail.com"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
