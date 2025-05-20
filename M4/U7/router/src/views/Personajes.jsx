import React, { useState } from "react";
import simpsonsCharacters from "../assets/data/characters.json";
import { Link, useNavigate } from "react-router-dom";

export default function Personajes() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState(simpsonsCharacters);

  const selectCharacter = (id) => {
    //me redirije a la info precisa del personaje seleccionado
    navigate(`/personajes/${id}`);
  };

  return (
    <div>
      <h1>Personajes de la serie</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi inventore
        et odio ipsum voluptatum quibusdam nesciunt officiis autem ipsa totam
        deleniti in, voluptates, quod optio pariatur quas officia blanditiis
        deserunt.
      </p>
      <section
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {characters.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            <img
              src={item.url_image}
              alt=""
              style={{ width: "200px", height: "200px", objectFit: "contain" }}
            />
            <button onClick={(e) => selectCharacter(item.id)}>
              Ver información completa
            </button>

            {/* <Link to={`/personajes/${item.id}`}>Ver información completa</Link> */}
          </div>
        ))}
      </section>
    </div>
  );
}
