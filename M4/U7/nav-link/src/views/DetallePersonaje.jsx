import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetallePersonaje() {
  const params = useParams(); //el id del personaje elegido
  const character_id = params.id; //parametro de la url
  const [selectedCharacter, setSelectedCharacter] = useState({
    name: "-",
    last_name: "-",
    url_image: "-",
    age: "-",
  });

  async function fetchCharacters() {
    const response = await fetch("/api.json");
    const characters = await response.json();
    const selected_character = characters.find(
      (item) => item.id == character_id
    );
    
    setSelectedCharacter(selected_character);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <img src={selectedCharacter.url_image} alt="-" width={500} height={500} />
      <h1>
        {selectedCharacter.name} {selectedCharacter.last_name}
      </h1>
      <p>Edad: {selectedCharacter.age}</p>
    </div>
  );
}
