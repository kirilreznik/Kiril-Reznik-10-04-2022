import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFiveDayForecast } from "../../redux/slices/weatherSlice";
import ForecastElement from "../forecast-element/ForecastElement";
import API_KEY from "../../utils/constants";
const Forecast = () => {
  const { currentWeather, currentCity, tempUnit, fiveDayForecast } =
    useSelector((state) => state.weather);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getForecast = async () => {
    const metricEndpoint = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${currentCity.Key}?apikey=${API_KEY}&metric=true`;
    const imperialEndpoint = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${currentCity.Key}?apikey=${API_KEY}`;
    const endpointToFetch =
      tempUnit === "Metric" ? metricEndpoint : imperialEndpoint;

    fetch(endpointToFetch)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => dispatch(setFiveDayForecast(data)))
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
    if (currentCity.Key) {
      getForecast();
    }
  }, [currentWeather, tempUnit, dispatch]);

  return loading
    ? "loading"
    : fiveDayForecast.DailyForecasts.map((day, index) => {
        return (
          <ForecastElement
            key={index}
            iconNum={day.Day.Icon}
            day={day.Date}
            minTemp={day.Temperature.Minimum.Value}
            maxTemp={day.Temperature.Maximum.Value}
            unit={day.Temperature.Minimum.Unit}
          />
        );
      });
};

export default Forecast;
