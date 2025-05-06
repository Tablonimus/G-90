import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import PlansPage from "./views/PlansPage.jsx";
import HomePage from "./views/HomePage.jsx";
import NotFound from "./views/NotFound.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planes" element={<PlansPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
