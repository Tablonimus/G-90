import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-start">
        <Link to={"/"} className="text-white ms-3 text-decoration-none">
          <Navbar.Brand>Dogstel</Navbar.Brand>
        </Link>
        {/* Links */}
        <Link to={"/"} className="text-white ms-3 text-decoration-none">
          Home
        </Link>
        <Link to={"/planes"} className="text-white ms-3 text-decoration-none">
          Planes
        </Link>
        <Link to={"/razas"} className="text-white ms-3 text-decoration-none">
          Razas
        </Link>
      </Container>
    </Navbar>
  );
};
export default Navigation;
