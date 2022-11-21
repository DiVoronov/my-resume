import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const menuCloseSlice = createSlice({
  name: "language",
  initialState: false,
  reducers: {
    openMenu (state, action) {
      state = action.payload;
      return state;
    },
    closeMenu (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { openMenu, closeMenu } = menuCloseSlice.actions;
export const menuCloseReducer = menuCloseSlice.reducer;