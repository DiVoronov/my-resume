import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {
    changeTheme (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;