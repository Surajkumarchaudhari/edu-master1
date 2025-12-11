// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          {/* Left Logo */}
          <div className="nav-left">
            <div className="logo-box">EM</div>
            <div className="logo-text">
              <h2>EduMaster</h2>
              <span>COACHING</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/placements">Achievement</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Right Buttons */}
          <div className="nav-right">

            {/* ⭐ Teacher Button */}
            <Link to="/teacher-admin">
              <button className="teacher-btn">Teacher</button>
            </Link>

            {/* ⭐ Login */}
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>

            {/* Hamburger */}
            <div className="menu-icon" onClick={() => setMenuOpen(true)}>
              ☰
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>×</div>

        <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
        <Link onClick={() => setMenuOpen(false)} to="/courses">Courses</Link>
        <Link onClick={() => setMenuOpen(false)} to="/admissions">Admissions</Link>
        <Link onClick={() => setMenuOpen(false)} to="/resources">Resources</Link>
        <Link onClick={() => setMenuOpen(false)} to="/faculty">Faculty</Link>
        <Link onClick={() => setMenuOpen(false)} to="/placements">Placements</Link>
        <Link onClick={() => setMenuOpen(false)} to="/blog">Blog</Link>
        <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>

        {/* ⭐ Mobile Teacher */}
        <Link onClick={() => setMenuOpen(false)} to="/teacher-admin">Teacher</Link>

        {/* ⭐ Mobile Login */}
        <Link onClick={() => setMenuOpen(false)} to="/login">Login</Link>
      </div>
    </>
  );
};

export default Navbar;
