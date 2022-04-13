import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  error: "",
};

const errorsSlice = createSlice({
  name: "errors",
  initialState: initialAppState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = "";
    },
  },
});

export const { setError, clearError } = errorsSlice.actions;

export default errorsSlice.reducer;
