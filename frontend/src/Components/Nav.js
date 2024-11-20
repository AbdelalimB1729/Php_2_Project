import React from 'react';
import '../CSS/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src="logo.PNG" alt="BookNest Logo" className="logo-image" />
      <h1>BookNest</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search books, authors, ISBN..." />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
      <div className="user-settings">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
