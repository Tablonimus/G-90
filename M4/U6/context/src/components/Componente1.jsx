import React, { useContext } from "react";
import MyContext from "../context/my_context";

export default function Componente1() {
  const { data, title } = useContext(MyContext);

  return (
    <div className="c1">
      <h3>Titulo: {title}</h3>
      <h4>Data: {data}</h4>
    </div>
  );
}
