import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LiveSearch from "../../components/live-search/LiveSearch";
import { useDispatch } from "react-redux";
import CurrentWeather from "../../components/current-weather/CurrentWeather";
import Forecast from "../../components/forecast/Forecast";
import { toggleTempUnit } from "../../redux/slices/weatherSlice";
import { Button } from "@mui/material";
import Header from "../../components/header/Header";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
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
    </>
  );
};

export default HomePage;
