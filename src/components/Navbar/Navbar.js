import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing the CSS file for styling
import logoImg from '../../image/logo.png'; // Importing the logo image

const Navbar = () => {
  // Using React's useState hook to manage the state of the menu toggle
  const [toggleMenu, setToggleMenu] = useState(false);

  // Function to toggle the menu when the hamburger icon is clicked
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  // The return statement contains the JSX that will be rendered
  return (
    <nav className='navbar' id='navbar'>
      <div className='container navbar-content flex'>
        {/* The logo and site name */}
        <Link to="/" className='navbar-brand flex-sb'>
          <img src={logoImg} alt="site logo" />
          <span className='text-uppercase fw-7 fs-24 ls-1'></span>
        </Link>

        {/* The menu items */}
        <ul className='gap-4'>
          <li className='nav-item'>
            {/* Link to the "news" page */}
            <Link to="news" className='nav-link text-uppercase text-white fs-24 fw-7 ls-1'>Beranda</Link>
          </li>
        </ul>
      </div>

      {/* The collapsible menu */}
      <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
      </div>
    </nav>
  )
}

export default Navbar