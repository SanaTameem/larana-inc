import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className={`${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className={`${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/our-team" className={`${location.pathname === '/our-team' ? 'active' : ''}`}>Our Team</Link>
        </li>
        <li className="nav-item">
          <Link to="/service" className={`${location.pathname === '/service' ? 'active' : ''}`}>Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/plan" className={`${location.pathname === '/plan' ? 'active' : ''}`}>Plans</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
