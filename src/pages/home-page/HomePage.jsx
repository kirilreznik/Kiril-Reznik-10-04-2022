import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LiveSearch from "../../components/live-search/LiveSearch";
import { useDispatch } from "react-redux";
import CurrentWeather from "../../components/current-weather/CurrentWeather";
import Forecast from "../../components/forecast/Forecast";
import { toggleTempUnit } from "../../redux/slices/weatherSlice";
import { Button } from "@mui/material";
const HomePage = () => {
  const { currentCity } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentCity) {
      console.log(currentCity);
    }
  }, [currentCity, dispatch]);
  return (
    <div>
      <LiveSearch />
      <CurrentWeather />
      <Forecast />
      <Button
        onClick={() => {
          dispatch(toggleTempUnit());
        }}
      >
        clcik
      </Button>
    </div>
  );
};

export default HomePage;
