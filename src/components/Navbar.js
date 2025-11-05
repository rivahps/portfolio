import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <div className="navbar-logo-stack">
            <span className="navbar-logo-name">Rivah</span>
            <span className="navbar-logo-name">Somerville</span>
          </div>
        </Link>
        <button
          className="menu-icon"
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          {menuOpen ? (
            <CloseOutlined className="close-icon" />
          ) : (
            <MenuOutlined className="open-icon" />
          )}
        </button>
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
