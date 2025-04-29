import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // useEffect( fn , [] )
  // Sin Array como segundo parametro: Ejecuta al montaje y cada vez que el componente se actualice.
  // Con Array vacio [] como segundo parametro: Ejecutarse solamente al montaje.
  // Con Array de dependencias como segundo parametro: Ejecuta al montaje, y cada vez que una dependencia mencionada en el array cambie.
  /* En este ejemplo observaremos que useEffect solo tiene dos de los tres estados disponibles asignados al array de dependendencias. */
  useEffect(() => {
    console.log("Estoy ejecutandome en el useEffect 🤪");
    document.title = "Suma contadores es = " + (count + count2);
  }, [count, count2]);

  return (
    <>
      <h1>DEMO useEffect</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          CONTADOR 1 = {count}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          CONTADOR 2 = {count2}
        </button>
        <button onClick={() => setCount3((count3) => count3 + 1)}>
          CONTADOR 3 = {count3}
        </button>
      </div>
    </>
  );
}

export default App;
