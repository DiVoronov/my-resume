import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const appearSlice = createSlice({
  name: "appear",
  initialState: {
    allInformation: false,
    hardSkills: false,
    softSkills: false,
    about: false
  },
  reducers: {
    changeAllInformation (state, action) {
      state.allInformation = true;
      return state;
    },
    changeHardSkills (state, action) {
      state.hardSkills = true;
      return state;
    },
    changeSoftSkills (state, action) {
      state.softSkills = true;
      return state;
    },
    changeAbout (state, action) {
      state.about = true;
      return state;
    }
  }
});

export const { changeAllInformation, changeHardSkills, changeSoftSkills, changeAbout } = appearSlice.actions;
export const appearReducer = appearSlice.reducer;