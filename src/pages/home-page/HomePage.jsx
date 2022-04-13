import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper } from "@mui/material";
import {
  setCurrentCity,
  setFavoritesFromStorage,
} from "../../redux/slices/weatherSlice";
import { setError } from "../../redux/slices/errorsSlice";
import {
  LiveSearch,
  CurrentWeather,
  Forecast,
  Header,
  DarkSwitch,
  TempSwitch,
  FavoritesSwitch,
  MobileSwitches,
} from "../../components";
import {
  HomeLayoutGrid,
  ButtonsPaper,
  BottomLayout,
  MainLayoutContainer,
} from "./HomePage.styled";

export const darkStyle = "rgba(0, 0, 0, 0.6)";
export const lightStyle = "rgba(255,255,255, 0.6)";

const HomePage = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const { currentCity } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentCity.Key) {
      fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=tel aviv`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          dispatch(setCurrentCity(data[0]));
          const favoritesFromStorage = JSON.parse(
            localStorage.getItem("favorites")
          );
          if (favoritesFromStorage) {
            dispatch(setFavoritesFromStorage(favoritesFromStorage));
          }
        })
        .catch((err) => {
          if (err.statusText !== "OK") {
            dispatch(setError("Something went wrong while fetching your data"));
          }
        });
    }
  }, []);

  return (
    <>
      <Header />
      <MobileSwitches />

      <MainLayoutContainer container>
        <HomeLayoutGrid item display="flex">
          <CurrentWeather />
          <LiveSearch />
          <ButtonsPaper background={darkModeOn ? darkStyle : lightStyle}>
            <TempSwitch />
            <DarkSwitch />
            <FavoritesSwitch />
          </ButtonsPaper>
        </HomeLayoutGrid>

        <BottomLayout item>
          <Forecast />
        </BottomLayout>
      </MainLayoutContainer>
    </>
  );
};

export default HomePage;
