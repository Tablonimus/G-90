import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Formateamos la data de inicio de sesión y definimos la url
    const login_data = { email, password }; //=> objeto JS
    const url = "http://localhost:1212/api/auth/login";

    /*AXIOS=> Enviamos data al servidor */
    try {
      const logged_user = (await axios.post(url, login_data)).data;
      localStorage.setItem("logged_user", JSON.stringify(logged_user));
      alert("bienvenido a la sesión");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <section
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <h1>Bienvenid@</h1>
      <div className="w-25">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresar email"
              onChange={handleEmail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Iniciar sesión
          </Button>
        </Form>
      </div>
    </section>
  );
};
export default Login;
