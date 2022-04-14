import { useDispatch, useSelector } from "react-redux";
import { FormGroup, FormControlLabel } from "@mui/material";
import { toggleDarkMode } from "../../redux/slices/darkModeSlice";
import { StyledSwitch } from "./Switch.styled";

export const DarkSwitch = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <FormGroup
      onClick={() => {
        dispatch(toggleDarkMode());
      }}
    >
      <FormControlLabel
        labelPlacement="top"
        control={<StyledSwitch defaultChecked />}
        label={darkModeOn ? "Light Mode" : "Dark Mode"}
        style={{ color: darkModeOn ? "white" : "black" }}
      />
    </FormGroup>
  );
};
export default DarkSwitch;
