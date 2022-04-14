import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { setCurrentWeather } from "../../redux/slices/weatherSlice";
import { setError } from "../../redux/slices/errorsSlice";
import IconDispenser from "../../utils/IconDispenser";
import { CurrentWeatheContainer } from "./CurrentWeather.styled";

const darkStyle = { backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white" };
const lightStyle = { backgroundColor: "rgba(255,255,255, 0.6)" };

const DEFAULT_CITY = "215854";

export const CurrentWeather = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const { currentCity, currentWeather, tempUnit } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  const getCurrentCity = async () => {
    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${
        currentCity.Key || DEFAULT_CITY
      }?apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        dispatch(setCurrentWeather(data));
      })
      .catch((err) => {
        if (err.statusText !== "OK") {
          dispatch(setError("Something went wrong while fetching your data"));
        }
      });
  };

  useEffect(() => {
    getCurrentCity();
  }, [currentCity, dispatch]);

  return (
    <CurrentWeatheContainer
      elevation={2}
      style={darkModeOn ? darkStyle : lightStyle}
    >
      <Typography variant="h5">{currentCity?.LocalizedName}</Typography>
      <IconDispenser iconNumber={currentWeather[0]?.WeatherIcon} />
      <Typography variant="h5">
        {currentWeather[0]
          ? currentWeather[0].Temperature[tempUnit].Value
          : null}
        {tempUnit === "Metric" ? "C" : "F"}
      </Typography>
      <Typography variant="subtitle1" fontSize="20px">
        {currentWeather[0]?.WeatherText}
      </Typography>
    </CurrentWeatheContainer>
  );
};

export default CurrentWeather;
