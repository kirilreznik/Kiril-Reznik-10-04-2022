import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Header,
  Favorite,
  DarkSwitch,
  TempSwitch,
  MobileSwitches,
} from "../../components";
import {
  SwitchesContainer,
  SwitchesPaper,
  FavoritesContainer,
} from "./FavoritesPage.styled";
import { setError } from "../../redux/slices/errorsSlice";
import { lightStyle, darkStyle } from "../home-page/HomePage";

const FavoritesPage = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const { favoriteCities, tempUnit } = useSelector((state) => state.weather);
  const [favoritesWeather, setFavoritesWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const promises = await favoriteCities.map(({ city }) =>
          fetch(
            `http://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${process.env.REACT_APP_API_KEY}`
          ).then((response) => response.json())
        );

        const results = await Promise.allSettled(promises);
        const data = results
          ?.filter(({ status }) => status === "fulfilled")
          .map((item) => item.value[0]);

        setFavoritesWeather(data);
        setLoading(false);
      } catch (e) {
        dispatch(setError("Something went wrong please try again later"));
      }
    };

    getWeatherData();
  }, []);

  return (
    <div>
      <Header />
      <MobileSwitches />
      <SwitchesContainer container>
        <SwitchesPaper background={darkModeOn ? darkStyle : lightStyle}>
          <TempSwitch />
          <DarkSwitch />
        </SwitchesPaper>
      </SwitchesContainer>

      <FavoritesContainer container>
        {loading ? (
          <span>Loading</span>
        ) : (
          favoriteCities.map(({ city }, index) => (
            <Favorite
              key={city.LocalizedName}
              data={favoritesWeather[index]}
              cityName={city.LocalizedName}
              iconNum={favoritesWeather[index].WeatherIcon}
              temp={favoritesWeather[index].Temperature[tempUnit].Value}
              tempUnit={tempUnit}
              text={favoritesWeather[index].WeatherText}
              city={city}
            />
          ))
        )}
      </FavoritesContainer>
    </div>
  );
};

export default FavoritesPage;
