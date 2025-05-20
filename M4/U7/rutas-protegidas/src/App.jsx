import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Administracion from "./views/Administracion";
import Login from "./views/Login";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={user ? <Administracion /> : <Navigate to="/login" />} // ruta protegida con ternario
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default App;
