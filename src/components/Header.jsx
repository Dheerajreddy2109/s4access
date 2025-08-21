import React, { useRef, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/mainlogo.png';
import fav from '../assets/images/favic.svg';
import '../css/Header.css';
import MegaMenu from './MegaMenu.jsx';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const hideTimeout = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuEnter = () => {
    clearTimeout(hideTimeout.current);
    setShowMegaMenu(true);
  };
  const handleMenuLeave = () => {
    hideTimeout.current = setTimeout(() => setShowMegaMenu(false), 200);
  };

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="logo">
        <Link to="/">
          <img className="main-logo" src={logo} alt="S4access Logo" />
        </Link>
        <img className="star-logo" src={fav} alt="Star Logo" />
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
         
          <li
            onMouseEnter={handleMenuEnter}
            onMouseLeave={handleMenuLeave}
          >
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Services
            </NavLink>
            <MegaMenu show={showMegaMenu} setShow={setShowMegaMenu} />
          </li>
          <li>
            <NavLink
              to="/customer-success"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Customer Success
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/insights"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Insights
            </NavLink>
          </li>
        <li>
          <NavLink
            to="/careers"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Careers
          </NavLink>
        </li>
         <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="button-contact">
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Header;