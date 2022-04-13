import { Grid } from "@mui/material";
import TempSwitch from "../Switch/TempSwitch";
import DarkSwitch from "../Switch/DarkSwitch";
import FavoritesSwitch from "../Switch/FavoritesSwitch";
import { useSelector } from "react-redux";
import "./MobileSwitches.css";
import { useLocation } from "react-router";

const darkStyle = { backgroundColor: "rgba(0, 0, 0, 0.6)" };
const lightStyle = { backgroundColor: "rgba(255,255,255, 0.6)" };

const MobileSwitches = () => {
  const location = useLocation();
  const { darkModeOn } = useSelector((state) => state.darkMode);

  return (
    <Grid
      item
      className="mobile-switch-container"
      style={darkModeOn ? darkStyle : lightStyle}
    >
      <TempSwitch />
      {location.pathname === "/" && <FavoritesSwitch />}
      <DarkSwitch />
    </Grid>
  );
};

export default MobileSwitches;
