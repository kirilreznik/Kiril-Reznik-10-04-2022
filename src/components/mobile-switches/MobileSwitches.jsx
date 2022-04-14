import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import TempSwitch from "../Switch/TempSwitch";
import DarkSwitch from "../Switch/DarkSwitch";
import FavoritesSwitch from "../Switch/FavoritesSwitch";
import { MobileSwitchContainer } from "./MobileSwitches.styled";

export const MobileSwitches = () => {
  const location = useLocation();
  const { darkModeOn } = useSelector((state) => state.darkMode);

  return (
    <MobileSwitchContainer item darkModeOn={darkModeOn}>
      <TempSwitch />
      {location.pathname === "/" && <FavoritesSwitch />}
      <DarkSwitch />
    </MobileSwitchContainer>
  );
};

export default MobileSwitches;
