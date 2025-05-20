import React from "react";

export default function ProductCard({ handleResetCounter, handleCounter }) {
  return (
    <div className="c2">
      <img
        src="https://www.alambique251.com/cdn/shop/products/Tabernario_1024x1024.png?v=1623556039"
        alt=""
        width={50}
        height={50}
      />
      <button type="number" onClick={handleResetCounter}>
        Quitar del carrito
      </button>
      <button type="number" onClick={handleCounter}>
        Agregar +
      </button>
    </div>
  );
}
