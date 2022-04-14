import { useDispatch, useSelector } from "react-redux";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import { toggleDarkMode } from "../../redux/slices/darkModeSlice";

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
        control={<Switch defaultChecked />}
        label={darkModeOn ? "Ligt Mode" : "Dark Mode"}
        style={{ color: darkModeOn ? "white" : "black" }}
      />
    </FormGroup>
  );
};
export default DarkSwitch;
