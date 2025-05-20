import { useState } from "react";
import "./App.css";
import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
import MyContext from "./context/my_context";

function App() {
  const [data, setData] = useState(0);

  const globalState = {
    title: "Mi titulo en contexto",
    data: data,
    setData: setData,
  };

  return (
    <div className="card">
      <MyContext.Provider value={globalState}>
        <Componente1 />
        <Componente2 />
      </MyContext.Provider>
    </div>
  );
}

export default App;
