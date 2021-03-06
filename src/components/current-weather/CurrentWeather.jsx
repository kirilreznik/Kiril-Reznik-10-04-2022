import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { setCurrentWeather } from "../../redux/slices/weatherSlice";
import { setError } from "../../redux/slices/errorsSlice";
import IconDispenser from "../../utils/IconDispenser";
import { CurrentWeatheContainer } from "./CurrentWeather.styled";

const DEFAULT_CITY = "215854";

export const CurrentWeather = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const { currentCity, currentWeather, tempUnit } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  const getCurrentCity = async () => {
    fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${
        currentCity.Key || DEFAULT_CITY
      }?apikey=mokei0h3nlv4AhzkRaaFigkfLEHVOFpn`
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
    <CurrentWeatheContainer elevation={2} darkModeOn={darkModeOn}>
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
