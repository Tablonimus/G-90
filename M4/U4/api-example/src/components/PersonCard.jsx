import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PersonCard({ name, email, phone }) {
  return (
    <Card style={{ width: "18rem", border: "1px solid black" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{email}</Card.Text>
        <Button variant="primary">{phone}</Button>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;
