import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [nombre, setNombre] = useState("");

  function handleNombre(e) {
    setNombre(e.target.value);
  }

  function handleCounter(e) {
    const numberCount = Number(e.target.value);
    setCount(count + numberCount);
  }

  return (
    <>
      <div>
        <h3>
          El contador es {count} y me llamo {nombre}
        </h3>
      </div>
      <button id="boton-1" value={1} onClick={handleCounter}>
        Sumar en 1
      </button>
      <button id="boton-2" value={2} onClick={handleCounter}>
        Sumar en 2
      </button>
      <button id="boton-10" value={10} onClick={handleCounter}>
        Sumar en 10
      </button>
      <br />
      <label htmlFor="texto-estado">Nombre: </label>
      <input id="texto-estado" type="text" onChange={handleNombre} />
      {/* <input
        id="texto-estado"
        type="text"
        onChange={(event) => handleNombre(event)}
      /> */}
    </>
  );
}

export default App;
