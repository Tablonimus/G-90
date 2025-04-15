import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [input, setInput] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false); //true
  function handleShowPassword(e) {
    setShowPass(!showPass);
  }

  /* SIN BOOLEANO */
  // const [showPass, setShowPass] = useState("password"); //text
  // function handleShowPassword(e) {
  //   if (showPass == "password") {
  //     setShowPass("text");
  //   } else {
  //     setShowPass("password");
  //   }
  // }

  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleLogin() {
    if (username == "admin" && password == "1234") {
      alert("BIENVENIDO!");
    } else {
      alert("Credenciales invalidas. Intente nuevamente");
    }
  }

  return (
    <>
      <h1>INICIO DE SESIÓN</h1>
      <div className="card">
        <label htmlFor="username">Usuario: </label>
        <input id="username" type="text" onChange={handleUsername} />

        <label htmlFor="password">Contraseña: </label>
        <div className="pass-input">
          <input
            id="password"
            type={showPass ? "text" : "password"}
            // type={showPass}
            onChange={handlePassword}
          />
          <button onClick={handleShowPassword}>👁</button>
        </div>

        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>

      <div>
        <p>usuario ingresado: {username}</p>
        <p>pass ingresado: {password}</p>
      </div>
    </>
  );
}

export default App;
