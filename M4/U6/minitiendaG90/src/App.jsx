import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Componente3 from "./components/Componente3";

function App() {
  const [adress, setAdress] = useState("-");
  const [products, setProducts] = useState(0);

  const handleAddProducts = (e) => {
    setProducts(products + 1);
  };

  const handleDeleteProducts = (e) => {
    setProducts(0);
  };

  const handleAdress = (e) => {
    setAdress(e.target.value);
  };

  return (
    <div className="card">
      <Navbar products={products} />
      <h1>Tienda</h1>
      <section>
        <ProductCard
          handleCounter={handleAddProducts}
          handleResetCounter={handleDeleteProducts}
        />
      </section>
      <Componente3
        adress={adress}
        handleTitle={handleAdress}
        products={products}
      />
    </div>
  );
}

export default App;
