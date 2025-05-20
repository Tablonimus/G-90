import React from "react";

export default function Componente2({ handleResetCounter, handleCounter }) {
    
  return (
    <div className="c2">  
      <button type="number" onClick={handleResetCounter}>
        Resetear
      </button>
      <button type="number" onClick={handleCounter}>
        Agregar +
      </button>
    </div>
  );
}
