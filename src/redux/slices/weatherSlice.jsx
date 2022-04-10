import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  currentCountry: {},
  currentWeather: {},
  tempUnit: "Metric",
  fiveDayForecast: [],
  favoriteCities: [],
};
const weatherSlice = createSlice({
  name: "weather",
  initialState: initialAppState,
  reducers: {
    setCurrentCountry: (state, action) => {
      state.currentCountry = action.payload;
    },
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
    },
    setFiveDayForecast: (state, action) => {
      state.fiveDayForecast = action.payload;
    },
    addFavoriteCity: (state, action) => {
      state.favoriteCities.push({
        citiy: action.payload,
      });
    },
    removeFavoriteCity: (state, action) => {
      state.favoriteCities.splice(
        state.favoriteCities.findIndex((city) => {
          return city.name === action.payload.name;
        })
      );
    },
    toggleTempUnit: (state) => {
      state.tempUnit = state.tempUnit === "Metric" ? "Imperial" : "Metric";
    },
  },
});
export const {
  setCurrentCountry,
  setCurrentWeather,
  setFiveDayForecast,
  addFavoriteCity,
  removeFavoriteCity,
  toggleTempUnit,
} = weatherSlice.actions;

export default weatherSlice.reducer;
