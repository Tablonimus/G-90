import Card from "react-bootstrap/Card";
import Tags from './Tags'

const MyCard = ({ image, nombre, desc, tag, colorTag }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
        <Tags tag={tag} colorTag={colorTag} />
      </Card>
    </>
  );
};

export default MyCard;
