import React from "react";
import Banner from "./Banner";
import MenuButton from "./MenuButton";

export default function Sidebar() {
  return (
    <div id="side-bar">
      <Banner />

      <MenuButton item_name={"Inicio"} item_number={1} />

      <MenuButton item_name={"Contacto"} item_number={2} />

      <MenuButton item_name={"FAQ"} item_number={3} />
    </div>
  );
}
