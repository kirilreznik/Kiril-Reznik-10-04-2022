import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "./redux/slices/errorsSlice";
import { AppContainer } from "./App.styled";
import routes from "./routes";

const App = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const { error } = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(clearError());
  };

  return (
    <AppContainer darkModeOn={darkModeOn}>
      <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            {routes.map(({ component, path }) => {
              return <Route key={path} path={path} element={component} />;
            })}
          </Routes>
        </Suspense>

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
    </AppContainer>
  );
};

export default App;
