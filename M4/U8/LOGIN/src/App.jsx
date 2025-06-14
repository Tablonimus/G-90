import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import Test from "./pages/Test";
import RegisterWithCustomHooks from "./pages/RegisterWithCustomHooks";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/register"
        element={<RegisterWithCustomHooks />}
      />
      <Route
        path="/profile"
        element={<ProfilePage />}
      />
      <Route
        path="/test"
        element={<Test />}
      />
    </Routes>
  );
};
export default App;
