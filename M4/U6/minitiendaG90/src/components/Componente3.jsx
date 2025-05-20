import React from "react";

export default function Componente3({ adress, handleTitle, products }) {
  return (
    <div>
      <label htmlFor="text">Ingresa la dirección de envío: </label>
      <input
        placeholder={adress}
        id="text"
        type="text"
        onChange={handleTitle}
      />

      <section>
        <h4>
          se enviaran {products} productos a {adress}
        </h4>
      </section>
    </div>
  );
}
