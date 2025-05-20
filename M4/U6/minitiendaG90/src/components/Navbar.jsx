import React from "react";

export default function Navbar({ products }) {
  return (
    <div className="c1">
      <nav style={{ textAlign: "right" }}>🛒{products}</nav>
    </div>
  );
}
