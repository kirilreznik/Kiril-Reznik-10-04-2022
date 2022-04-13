import Header from "../../components/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setError } from "../../redux/slices/errorsSlice";
import API_KEY from "../../utils/constants";
import MobileSwitches from "../../components/mobile-switches/MobileSwitches";
import { Grid, Paper } from "@mui/material";
import "./FavoritesPage.css";
import FavoritesElement from "../../components/favorites-element/FavoritesElement";
import DarkSwitch from "../../components/Switch/DarkSwitch";
import FavoritesSwitch from "../../components/Switch/FavoritesSwitch";
import TempSwitch from "../../components/Switch/TempSwitch";
import { lightStyle, darkStyle } from "../home-page/HomePage";
import { useLocation } from "react-router";

const FavoritesPage = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const { favoriteCities, tempUnit } = useSelector((state) => state.weather);
  const [favoritesWeather, setFavoritesWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  let data = [];
  const retriveAll = async () => {
    let promises = await favoriteCities.map((city) =>
      fetch(
        `http://dataservice.accuweather.com/currentconditions/v1/${city.city.Key}?apikey=${API_KEY}`
      )
        .then((resp) => resp.json())
        .catch((error) => {
          dispatch(setError("Something went wrong while fetching your data"));
        })
    );
    let results = await Promise.all(promises);
    data = await results.map((array) => array[0]);
    setFavoritesWeather(data);
    setLoading(false);
  };
  useEffect(() => {
    retriveAll();
  }, []);

  return (
    <div>
      <Header />
      <MobileSwitches />
      <Grid container mb={"20px"} className="switches-container">
        <Paper
          className="switches-paper"
          style={darkModeOn ? darkStyle : lightStyle}
        >
          <TempSwitch />
          {location.pathname === "/" && <FavoritesSwitch />}
          <DarkSwitch />
        </Paper>
      </Grid>
      <Grid container className="favorites-container">
        {loading
          ? "Loading"
          : favoriteCities.map((city, index) => {
              return (
                <>
                  <FavoritesElement
                    data={favoritesWeather[index]}
                    cityName={city.city.LocalizedName}
                    iconNum={favoritesWeather[index].WeatherIcon}
                    temp={favoritesWeather[index].Temperature[tempUnit].Value}
                    tempUnit={tempUnit}
                    text={favoritesWeather[index].WeatherText}
                    city={city.city}
                  />
                </>
              );
            })}
      </Grid>
    </div>
  );
};

export default FavoritesPage;
