import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Personajes from "./views/Personajes";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import DetallePersonaje from "./views/DetallePersonaje";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/personajes/:id" element={<DetallePersonaje />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
