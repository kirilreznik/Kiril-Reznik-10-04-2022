import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSlice";
import darkmodeReducer from "./slices/darkModeSlice";
import errorReducer from "./slices/errorsSlice";

export default configureStore({
  reducer: {
    weather: weatherReducer,
    darkMode: darkmodeReducer,
    error: errorReducer,
  },
});
