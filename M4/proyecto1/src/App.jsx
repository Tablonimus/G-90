import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";

function App() {
  return (
    <div id="padre">
      <Sidebar />
      <div>
        <h1>Bienvenidos alumnos</h1>
        <Title text={"Hola soy Jose"}/>
        <Title text={"Hola soy Pedro"}/>
        <Title text={"Hola soy Raquel"}/>
      </div>
    </div>
  );
}

export default App;
