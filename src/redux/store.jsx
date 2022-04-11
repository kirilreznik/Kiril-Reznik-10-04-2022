import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSlice";
import darkmodeReducer from "./slices/darkModeSlice";

export default configureStore({
  reducer: { weather: weatherReducer, darkMode: darkmodeReducer },
});
