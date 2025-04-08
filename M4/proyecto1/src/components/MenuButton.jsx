import React from "react";

export default function MenuButton({ item_name, item_number }) {
  return (
    <button className="menu-btn">
      {item_number}-{item_name}
    </button>
  );
}
