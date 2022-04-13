import Switch from "@mui/material/Switch";
import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import {
  addCityToFavorites,
  removeCityFromFavorites,
} from "../../redux/slices/weatherSlice";
import { FormControlLabel } from "@mui/material";
const FavoritesSwitch = () => {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const { currentCity, favoriteCities } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const location = useLocation();
  const handleAddToFavorites = () => {
    if (!isFavorite) {
      dispatch(addCityToFavorites(currentCity));
    } else {
      dispatch(removeCityFromFavorites(currentCity));
    }
  };
  useEffect(() => {
    setIsFavorite(
      () => favoriteCities.some((city) => city.city.Key === currentCity.Key),
      [favoriteCities]
    );
  }, [currentCity, favoriteCities]);

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
