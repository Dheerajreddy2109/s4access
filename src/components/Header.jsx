import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/mainlogo.png';
import fav from '../assets/images/favic.svg';
import '../css/Header.css';
import MegaMenu from './MegaMenu.jsx';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Services
            </NavLink>
            <MegaMenu show={showMegaMenu} />
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
        </ul>
      </div>
      <div className="button-contact">
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Header;