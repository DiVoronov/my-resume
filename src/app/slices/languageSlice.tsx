import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: "en",
  reducers: {
    changeLanguage (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { changeLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;