import React from "react";
import "./ForecastElement.css";
import { Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import moment from "moment";

const darkStyle = {
  backgroundColor: "rgba(0,0,0, 0.95)",
  opacity: "0.8",
  color: "white",
};

const ForecastElement = ({ day, iconNum, minTemp, maxTemp, unit }) => {
  const { darkModeOn } = useSelector((state) => state.darkMode);

  return (
    <Paper
      className="forecast-paper"
      elevation={5}
      style={darkModeOn ? darkStyle : null}
    >
      <Typography variant="h5">{moment(day).format("dddd")}</Typography>
      <img
        className="forecast-icon"
        src={`https://www.accuweather.com/images/weathericons/${iconNum}.svg`}
        alt="icon"
      ></img>
      <Typography variant="subtitle1">
        {minTemp}-{maxTemp} {unit}
      </Typography>
    </Paper>
  );
};

export default ForecastElement;
