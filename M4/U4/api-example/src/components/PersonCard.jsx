import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PersonCard({ name, email, phone }) {
  const [info, setInfo] = useState("");

  async function fetchPersons2(e) {
    console.log("hice click en ", name);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(
        "DATOS PARA SETEAR EN UN ESTADO DEL COMPONENTE O EN DONDE SE REQUIERA",
        data
      );
      setInfo("DATA QUE QUIERAS MOSTRAR DE LA RESPONSE")
    } catch (error) {
      console.log("Error =>", error);
      alert("Ha ocurrido un error inesperado.");
    }
  }

  return (
    <Card style={{ width: "18rem", border: "1px solid black" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{email}</Card.Text>
        <Card.Text>{phone}</Card.Text>
        <Button variant="primary" onClick={fetchPersons2}>
          Ver mas info
        </Button>
        <p>{info}</p>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;
