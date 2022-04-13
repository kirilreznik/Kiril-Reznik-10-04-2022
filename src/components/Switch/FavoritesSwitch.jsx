import Switch from "@mui/material/Switch";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCityToFavorites,
  removeCityFromFavorites,
} from "../../redux/slices/weatherSlice";
import { FormControlLabel } from "@mui/material";

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
