import React from "react";
import { Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setCurrentWeather } from "../../redux/slices/weatherSlice";
import { setCurrentCity } from "../../redux/slices/weatherSlice";
import "./FavoritesElement.css";

const darkStyle = {
  backgroundColor: "rgba(0,0,0, 0.95)",
  color: "white",
};

const FavoritesElement = ({
  cityName,
  iconNum,
  temp,
  text,
  tempUnit,
  data,
  city,
}) => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFavoriteClick = () => {
    dispatch(setCurrentWeather(data));
    dispatch(setCurrentCity(city));
    navigate("/");
  };

  return (
    <Paper
      style={darkModeOn ? darkStyle : null}
      onClick={(e) => {
        handleFavoriteClick(e);
      }}
      className="favorites-paper"
    >
      <Typography variant="h5">{cityName}</Typography>
      <img
        className="forecast-icon"
        src={`https://www.accuweather.com/images/weathericons/${iconNum}.svg`}
        alt="icon"
      ></img>
      <Typography variant="subtitle1">
        {temp} {tempUnit === "Metric" ? "C" : "F"}
      </Typography>
      <Typography variant="subtitle1">{text}</Typography>
    </Paper>
  );
};

export default FavoritesElement;
