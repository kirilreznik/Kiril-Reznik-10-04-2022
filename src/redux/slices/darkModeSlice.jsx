import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  darkModeOn: false,
};
const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: initialAppState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkModeOn = !state.darkModeOn;
    },
  },
});
export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
