import Switch from "@mui/material/Switch";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCityToFavorites } from "../../redux/slices/weatherSlice";

const FavoritesSwitch = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const { currentCity, favoriteCities } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  let isInFavorites;
  const handleAddToFavorites = async () => {
    isInFavorites = await favoriteCities.find(
      (city) => city.city.Key === currentCity.Key
    );
    if (!isInFavorites) {
      dispatch(addCityToFavorites(currentCity));
    }
  };
  console.log(isInFavorites);
  const handleChange = (event) => {
    handleAddToFavorites();
  };

  useEffect(() => {}, []);
  return (
    <Switch
      checked={isInFavorites}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
export default FavoritesSwitch;
