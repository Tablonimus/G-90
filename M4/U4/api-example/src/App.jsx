import { useEffect, useState } from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchPersons() {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setPersons(data);
    } catch (error) {
      console.log("Error =>", error);
      alert("Ha ocurrido un error inesperado.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <main>
      {/* cargador */}
      {isLoading ? (
        <div className="loader">
          <img
            src="https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.gif"
            alt=""
          />
        </div>
      ) : null}
      <h1>API</h1>
      <section className="d-flex">
        {/* Friends section contanier*/}
        {/* cards section */}
        {persons.length
          ? persons.map((person, index) => (
              <PersonCard
                key={index}
                name={person.name}
                email={person.email}
                phone={person.phone}
              />
            ))
          : "No hay amigos para mostrar"}
      </section>
    </main>
  );
}

export default App;
