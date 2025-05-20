import React, { useContext } from "react";
import MyContext from "../context/my_context";

export default function Componente2() {
  const { data, setData } = useContext(MyContext);
  return (
    <div className="c2">
      <button onClick={() => setData(data + 1)}>Sumar data</button>
    </div>
  );
}
