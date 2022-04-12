import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { toggleTempUnit } from "../../redux/slices/weatherSlice";
const TempSwitch = () => {
  const { tempUnit } = useSelector((state) => state.weather);
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  return (
    <FormGroup
      onClick={() => {
        dispatch(toggleTempUnit());
      }}
    >
      <FormControlLabel
        labelPlacement="top"
        control={<Switch defaultChecked />}
        label={tempUnit === "Metric" ? "Celcius" : "Farenheit"}
        style={{ color: darkModeOn ? "white" : "black" }}
      />
    </FormGroup>
  );
};
export default TempSwitch;
