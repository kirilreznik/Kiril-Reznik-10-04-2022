import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#D5E6FF",
    },
    secondary: {
      main: "#FFB462",
    },
    error: {
      main: "#F97575",
    },
  },
  typography: {
    h5: {
      fontFamily: ["Roboto Condensed", "cursive"].join(","),
      fontWeight: "400",
    },
    h6: {
      fontFamily: ["Roboto Condensed", "cursive"].join(","),
      fontWeight: "400",
    },
    subtitle1: {
      fontFamily: ["Roboto Condensed", "cursive"].join(","),
      fontWeight: "400",
    },
  },
});

export default theme;
