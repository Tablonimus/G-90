import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav>
      <NavLink className={setActiveClass} to="/">
        {" "}
        Home{" "}
      </NavLink>
      <NavLink className={setActiveClass} to="/admin">
        {" "}
        Administración{" "}
      </NavLink>
      <NavLink className={setActiveClass} to="/login">
        {" "}
        Login{" "}
      </NavLink>
    </nav>
  );
}
