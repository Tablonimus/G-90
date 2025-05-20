import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClassname = ({ isActive }) =>
    isActive ? "active-true" : "active-false";

  return (
    <nav>
      <ul>
        <li>
          <NavLink className={setActiveClassname} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={setActiveClassname} to="/personajes">
            Personajes
          </NavLink>
        </li>
        <li>
          <NavLink className={setActiveClassname} to="/extra">
            Extra
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
