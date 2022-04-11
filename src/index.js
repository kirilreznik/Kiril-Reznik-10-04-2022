import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    h5: {
      fontFamily: ["Roboto Condensed", "cursive"].join(","),
      fontWeight: "400",
    },
    subtitle1: {
      fontFamily: ["Roboto Condensed", "cursive"].join(","),
      fontWeight: "400",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
