import { Grid, Paper, SvgIcon, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWeather } from "../../redux/slices/weatherSlice";
import "./CurrentWeather.css";
import API_KEY from "../../utils/constants";
const darkStyle = { backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white" };
const lightStyle = { backgroundColor: "rgba(255,255,255, 0.6)" };

const CurrentWeather = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const { currentCity, currentWeather, tempUnit } = useSelector(
    (state) => state.weather
  );

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getCurrentCity = async () => {
    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${
        currentCity.Key ? currentCity.Key : "215854"
      }?apikey=${API_KEY}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => dispatch(setCurrentWeather(data)))
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        if (err.statusText !== "OK") {
          setLoading(false);
        }
      });
  };
  useEffect(() => {
    getCurrentCity();
  }, [currentCity, dispatch]);

  return (
    <Paper
      className="current-weather-container"
      elevation={2}
      style={darkModeOn ? darkStyle : lightStyle}
    >
      <Typography variant="h5">
        {currentCity.Key ? currentCity.LocalizedName : null}
      </Typography>
      <img
        className="current-weather-svg"
        src={
          currentWeather[0]
            ? `https://www.accuweather.com/images/weathericons/${currentWeather[0].WeatherIcon}.svg`
            : null
        }
      />
      <Typography variant="h5">
        {currentWeather[0]
          ? currentWeather[0].Temperature[tempUnit].Value
          : null}
        {tempUnit === "Metric" ? "C" : "F"}
      </Typography>
      <Typography variant="subtitle1" fontSize="20px">
        {currentWeather[0] ? currentWeather[0].WeatherText : null}
      </Typography>
    </Paper>
  );
};

export default CurrentWeather;
