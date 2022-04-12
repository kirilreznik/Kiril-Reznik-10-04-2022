import { useEffect, useState } from "react";
import LiveSearch from "../../components/live-search/LiveSearch";
import { useDispatch, useSelector } from "react-redux";
import CurrentWeather from "../../components/current-weather/CurrentWeather";
import Forecast from "../../components/forecast/Forecast";
import { Grid, Paper } from "@mui/material";
import Header from "../../components/header/Header";
import "./HomePage.css";
import API_KEY from "../../utils/constants";
import DarkSwitch from "../../components/Switch/DarkSwitch";
import TempSwitch from "../../components/Switch/TempSwitch";
import FavoritesSwitch from "../../components/Switch/FavoritesSwitch";
import { setCurrentCity } from "../../redux/slices/weatherSlice";
import { setError } from "../../redux/slices/errorsSlice";

const darkStyle = { backgroundColor: "rgba(0, 0, 0, 0.6)" };
const lightStyle = { backgroundColor: "rgba(255,255,255, 0.6)" };

const HomePage = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const { currentCity } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentCity.Key) {
      fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=tel aviv`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          dispatch(setCurrentCity(data[0]));
          setLoading(false);
        })
        .catch((err) => {
          if (err.statusText !== "OK") {
            dispatch(setError("Something went wrong while fetching your data"));
            setLoading(false);
          }
        });
    }
  }, []);

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
            <TempSwitch />
            <DarkSwitch />
            <FavoritesSwitch />
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
