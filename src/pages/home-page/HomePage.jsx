import React, { useEffect, useState } from "react";
import LiveSearch from "../../components/live-search/LiveSearch";
import { useDispatch, useSelector } from "react-redux";
import CurrentWeather from "../../components/current-weather/CurrentWeather";
import Forecast from "../../components/forecast/Forecast";
import { toggleTempUnit } from "../../redux/slices/weatherSlice";
import { Button, Grid, Paper } from "@mui/material";
import Header from "../../components/header/Header";
import { setCurrentCity } from "../../redux/slices/weatherSlice";
import "./HomePage.css";
import { toggleDarkMode } from "../../redux/slices/darkModeSlice";

const darkStyle = { backgroundColor: "rgba(0, 0, 0, 0.6)" };
const lightStyle = { backgroundColor: "rgba(255,255,255, 0.6)" };

const HomePage = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=aR2iuaS0PfCfXKi0JGe0AizWFi9GpjA4&q=tel aviv`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => dispatch(setCurrentCity(data[0])))
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        if (err.statusText !== "OK") {
          setLoading(false);
        }
      });
  });
  return (
    <>
      <Header />
      <Grid container className="main-layout">
        <Grid item className="layout-top" display={"flex"}>
          <CurrentWeather />
          <LiveSearch />
          <Paper
            className="buttons-paper"
            style={darkModeOn ? darkStyle : lightStyle}
          >
            <Button
              onClick={() => {
                dispatch(toggleTempUnit());
              }}
            >
              clcik
            </Button>
            <Button
              onClick={() => {
                dispatch(toggleDarkMode());
              }}
            >
              clcik
            </Button>
          </Paper>
        </Grid>
        <Grid item className="layout-bottom">
          <Forecast />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
