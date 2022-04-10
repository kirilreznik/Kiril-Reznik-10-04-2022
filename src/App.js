import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import FavoritesPage from "./pages/favorites-page/FavoritesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
