import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Typography, Paper } from "@mui/material";
import { setCurrentWeather } from "../../redux/slices/weatherSlice";
import { setCurrentCity } from "../../redux/slices/weatherSlice";
import IconDispenser from "../../utils/IconDispenser";
import { FavoritePaper } from "./Favorite.styled";

const darkStyle = {
  backgroundColor: "rgba(0,0,0, 0.95)",
  color: "white",
};

export const Favorite = ({
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
    <FavoritePaper
      style={darkModeOn ? darkStyle : null}
      onClick={handleFavoriteClick}
    >
      <Typography variant="h5">{cityName}</Typography>
      <IconDispenser iconNumber={iconNum} />
      <Typography variant="subtitle1">
        {temp} {tempUnit === "Metric" ? "C" : "F"}
      </Typography>
      <Typography variant="subtitle1">{text}</Typography>
    </FavoritePaper>
  );
};

export default Favorite;
