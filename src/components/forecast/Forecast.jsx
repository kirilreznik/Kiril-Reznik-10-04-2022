import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFiveDayForecast } from "../../redux/slices/weatherSlice";

const Forecast = () => {
  const { currentCity, tempUnit, fiveDayForecast } = useSelector(
    (state) => state.weather
  );
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getForecast = async () => {
    const metricEndpoint = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${currentCity.Key}?apikey=jn4VBK22GgPtrVMLU5ZKeDxWbRral6tq&metric=true`;
    const imperialEndpoint = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${currentCity.Key}?apikey=jn4VBK22GgPtrVMLU5ZKeDxWbRral6tq`;
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
  }, [currentCity, tempUnit, dispatch]);

  return (
    <div>
      {fiveDayForecast.DailyForecasts.map((day) => {
        return <div>{day.Temperature.Minimum.Value}</div>;
      })}
    </div>
  );
};

export default Forecast;
