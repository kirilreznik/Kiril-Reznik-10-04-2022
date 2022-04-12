import Header from "../../components/header/Header";
import MobileMenu from "../../components/mobile-menu/MobileMenu";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import API_KEY from "../../utils/constants";
const FavoritesPage = () => {
  const { favoriteCities } = useSelector((state) => state.weather);
  const [favoritesWeather, setFavoritesWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  let data = [];
  const retriveAll = async () => {
    let promises = await favoriteCities.map((city) =>
      fetch(
        `http://dataservice.accuweather.com/currentconditions/v1/${city.city.Key}?apikey=${API_KEY}`
      ).then((resp) => resp.json())
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
      <MobileMenu />
      {loading
        ? "Loading"
        : favoriteCities.map((city, index) => {
            return (
              <>
                <div>{city.city.LocalizedName}</div>
                <div>{favoritesWeather[index].WeatherText}</div>
              </>
            );
          })}
    </div>
  );
};

export default FavoritesPage;
