import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  // Automatically detect the current page title from the URL path
  const getPageTitle = () => {
    const path = location.pathname.replace("/", ""); // remove leading slash
    if (path === "" || path === "home") return "Home";
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <nav className="navbar">
      <h2 className="nav-title">{getPageTitle()}</h2>

      <ul className="nav-links">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certifications"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Certifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
