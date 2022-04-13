import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import TempSwitch from "../Switch/TempSwitch";
import DarkSwitch from "../Switch/DarkSwitch";
import FavoritesSwitch from "../Switch/FavoritesSwitch";
import "./MobileSwitches.css";

const darkStyle = { backgroundColor: "rgba(0, 0, 0, 0.6)" };
const lightStyle = { backgroundColor: "rgba(255,255,255, 0.6)" };

export const MobileSwitches = () => {
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
