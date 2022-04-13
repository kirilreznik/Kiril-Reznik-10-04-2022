import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  currentCity: {},
  currentWeather: {},
  tempUnit: "Metric",
  fiveDayForecast: [],
  favoriteCities: [],
};
const weatherSlice = createSlice({
  name: "weather",
  initialState: initialAppState,
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
    },
    setFiveDayForecast: (state, action) => {
      state.fiveDayForecast = action.payload;
    },
    addCityToFavorites: (state, action) => {
      state.favoriteCities.push({
        city: action.payload,
      });
      localStorage.setItem("favorites", JSON.stringify(state.favoriteCities));
    },
    removeCityFromFavorites: (state, action) => {
      state.favoriteCities.splice(
        state.favoriteCities.findIndex((city) => {
          return city.name === action.payload.name;
        })
      );
      localStorage.setItem("favorites", JSON.stringify(state.favoriteCities));
    },
    setFavoritesFromStorage: (state, action) => {
      state.favoriteCities = action.payload;
    },
    toggleTempUnit: (state) => {
      state.tempUnit = state.tempUnit === "Metric" ? "Imperial" : "Metric";
    },
  },
});
export const {
  setCurrentCity,
  setCurrentWeather,
  setFiveDayForecast,
  addCityToFavorites,
  removeCityFromFavorites,
  toggleTempUnit,
  setFavoritesFromStorage,
} = weatherSlice.actions;

export default weatherSlice.reducer;
