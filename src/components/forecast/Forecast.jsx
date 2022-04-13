import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFiveDayForecast } from "../../redux/slices/weatherSlice";
import ForecastElement from "../forecast-element/ForecastElement";
import { setError } from "../../redux/slices/errorsSlice";

export const Forecast = () => {
  const { currentWeather, currentCity, tempUnit, fiveDayForecast } =
    useSelector((state) => state.weather);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getForecast = async () => {
    const metricEndpoint = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${currentCity.Key}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`;
    const imperialEndpoint = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${currentCity.Key}?apikey=${process.env.REACT_APP_API_KEY}`;
    const endpointToFetch =
      tempUnit === "Metric" ? metricEndpoint : imperialEndpoint;

    fetch(endpointToFetch)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        dispatch(setFiveDayForecast(data));
        setLoading(false);
      })
      .catch((err) => {
        if (err.statusText !== "OK") {
          dispatch(setError("Something went wrong while fetching your data"));
          setLoading(false);
        }
      });
  };
  useEffect(() => {
    if (currentCity.Key) {
      getForecast();
    }
  }, [currentWeather, tempUnit, dispatch]);

  return loading
    ? "loading"
    : fiveDayForecast.DailyForecasts.map(
        ({ Day, Date, Temperature }, index) => {
          return (
            <ForecastElement
              key={index}
              iconNum={Day.Icon}
              day={Date}
              minTemp={Temperature.Minimum.Value}
              maxTemp={Temperature.Maximum.Value}
              unit={Temperature.Minimum.Unit}
            />
          );
        }
      );
};

export default Forecast;
