import React from "react";

export default function Componente3({
  title,
  handleTitle,
  dameTodaLaInformacion,
}) {
  const numeroMisterioso = 10;
  const nombreMisterioso = "XXXXXXX";
  const lugarMisterioso = "Lugar misterioso";

  const handleClick = (e) => {
    dameTodaLaInformacion(numeroMisterioso, nombreMisterioso, lugarMisterioso);
  };

  return (
    <div>
      <label htmlFor="text">Ingresa el titulo deseado: </label>
      <input placeholder={title} id="text" type="text" onChange={handleTitle} />
      <br />
      <button onClick={handleClick}>Dar info al padre</button>
    </div>
  );
}
