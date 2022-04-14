import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControlLabel, Switch } from "@mui/material";
import {
  addCityToFavorites,
  removeCityFromFavorites,
} from "../../redux/slices/weatherSlice";

export const FavoritesSwitch = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const { currentCity, favoriteCities } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const isFavorite = useMemo(
    () => favoriteCities.some(({ city }) => city.Key === currentCity.Key),
    [favoriteCities, currentCity]
  );

  const handleAddToFavorites = () => {
    if (!isFavorite) {
      dispatch(addCityToFavorites(currentCity));
    } else {
      dispatch(removeCityFromFavorites(currentCity));
    }
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isFavorite}
          onChange={handleAddToFavorites}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      labelPlacement="top"
      label={isFavorite ? "Remove favorite " : "Add favorite "}
      style={{ color: darkModeOn ? "white" : "black" }}
    />
  );
};

export default FavoritesSwitch;
