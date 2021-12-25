import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar-container">
      <Link to="/products">Shop</Link>
      <div className="links">
        <Link to="/products">Categories</Link>
        <Link to="/products">Sign in</Link>
        <Link to="/cart" className="cart">
          <div>{cartCount}</div>
          <div><i className="fas fa-shopping-cart fa-lg"></i></div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
