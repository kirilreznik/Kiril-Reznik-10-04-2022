import { useDispatch, useSelector } from "react-redux";
import { toggleTempUnit } from "../../redux/slices/weatherSlice";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";

export const TempSwitch = () => {
  const { tempUnit } = useSelector((state) => state.weather);
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const handleTempSwitch = () => {
    dispatch(toggleTempUnit());
  };

  return (
    <FormGroup>
      <FormControlLabel
        labelPlacement="top"
        control={<Switch defaultChecked onChange={handleTempSwitch} />}
        label={tempUnit === "Metric" ? "Farenheit" : "Celcius"}
        style={{ color: darkModeOn ? "white" : "black" }}
      />
    </FormGroup>
  );
};
export default TempSwitch;
