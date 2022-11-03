import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const welcomeSlice = createSlice({
  name: "welcome",
  initialState: true,
  reducers: {
    hideWelcomePage (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { hideWelcomePage } = welcomeSlice.actions;
export const welcomeReducer = welcomeSlice.reducer;