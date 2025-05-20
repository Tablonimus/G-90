import { useState } from "react";
import "./App.css";
import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
import Componente3 from "./components/Componente3";

function App() {
  const [title, setTitle] = useState("Sin informacion");
  const [count, setCount] = useState(0);

  const handleCounter = (e) => {
    alert("esta a punto de aumentar el valor");
    setCount(count + 10);
    console.log("un saludo!!!");
  };

  const handleResetCounter = (e) => {
    alert("esta a punto de resetear el valor");
    setCount(0);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const dameTodaLaInformacion = (param1, param2, param3) => {
    console.log(`param1: ${param1}, param2: ${param2}, param3: ${param3}`);
  };

  return (
    <div className="card">
      <h1>Seteando estados de hijo a padre</h1>
      <section>
        <h3>{title}</h3>
        <Componente3
          title={title}
          handleTitle={handleTitle}
          dameTodaLaInformacion={dameTodaLaInformacion}
        />
        {/* Mostrar el contador */}
        <Componente1 count={count} />
        {/* Setear el contador */}
        <Componente2
          handleCounter={handleCounter}
          handleResetCounter={handleResetCounter}
        />
      </section>
    </div>
  );
}

export default App;
