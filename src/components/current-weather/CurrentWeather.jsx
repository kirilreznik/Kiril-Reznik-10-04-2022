import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWeather } from "../../redux/slices/weatherSlice";

const CurrentWeather = () => {
  const { currentCity, currentWeather } = useSelector((state) => state.weather);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getCurrentCity = async () => {
    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${currentCity.Key}?apikey=jn4VBK22GgPtrVMLU5ZKeDxWbRral6tq`
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
    if (currentCity.Key) {
      getCurrentCity();
    }
  }, [currentCity, dispatch]);

  return (
    <div>
      current weather is :{loading ? "loading" : currentWeather[0].WeatherText}
    </div>
  );
};

export default CurrentWeather;
