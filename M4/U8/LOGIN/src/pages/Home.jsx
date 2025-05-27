import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const logged_user = JSON.parse(localStorage.getItem("logged_user")); //se parsea al pedirlo

  /* PROTECCION CASO QUE QUIERAS ENTRAR A ESTA RUTA SIN INICIAR SESIÓN */
  useEffect(() => {
    if (!logged_user) {
      navigate("/login");
    }
  },[]);

  const handleLogout = () => {
    localStorage.removeItem("logged_user");
    navigate("/login");
  };
  return (
    <div>
      <h1>Bienvenido {logged_user?.email}</h1>
      <h2>Tu token es: {logged_user?.token}</h2>

      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};
export default Home;
