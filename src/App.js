import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import FavoritesPage from "./pages/favorites-page/FavoritesPage";
import background from "./assets/bacground.jpg";
import { useSelector } from "react-redux";
import { lightColor, darkColor } from "./utils/colors";

const App = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const bacgroundColor = darkModeOn ? darkColor : lightColor;
  return (
    <div
      className="root-div"
      style={{
        backgroundImage: `${bacgroundColor},url(${background})`,
        height: "100vh",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
