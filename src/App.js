import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import FavoritesPage from "./pages/favorites-page/FavoritesPage";
import background from "./assets/bacground.jpg";
import { useSelector } from "react-redux";
import { lightColor, darkColor } from "./utils/colors";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearError } from "./redux/slices/errorsSlice";

const App = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const { error } = useSelector((state) => state.error);
  const bacgroundColor = darkModeOn ? darkColor : lightColor;
  const dispatch = useDispatch();

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(clearError());
  };

  return (
    <div
      className="root-div"
      style={{
        backgroundImage: `${bacgroundColor},url(${background})`,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        {error && (
          <Snackbar
            open={error}
            autoHideDuration={5000}
            onClose={handleErrorClose}
          >
            <Alert severity="error">{error}</Alert>
          </Snackbar>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
