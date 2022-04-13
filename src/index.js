import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Redux
import store from "./redux/store";
import { Provider } from "react-redux";

// Theme
import { ThemeProvider } from "@mui/styles";
import theme from "./theme";

import "./index.css";

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
