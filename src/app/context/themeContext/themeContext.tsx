import React, { createContext } from "react";

export interface ICurrentThemesColor {
  paletteOne: string
  paletteTwo: string
  paletteThree: string
  paletteFour: string
  paletteFive: string
  accentColor: string
};

export interface IThemesColor {
  dark: ICurrentThemesColor
  light: ICurrentThemesColor
};

export const themes = {
  dark: {
    paletteOne: "#212529",
    paletteTwo: "#343a40",
    paletteThree: "#495057",
    paletteFour: "#6c757d",
    paletteFive: "#dee2e6",
    accentColor: "#e63946",
  },
  light: {
    paletteOne: "#f1faee",
    paletteTwo: "#bde0fe",
    paletteThree: "#a8dadc",
    paletteFour: "#457b9d",
    paletteFive: "#1d3557",
    accentColor: "#e63946",
  }
};

export const ThemeContext = createContext(themes);

// export const paletteOne = "#FFCDB2";
// export const paletteTwo = "#FFB4A2";
// export const paletteThree = "#E5989B";
// export const paletteFour = "#B5838D";
// export const paletteFive = "#6D6875";
// export const accentColor = "#ff686b";

export const paletteOne = "#f1faee";
export const paletteTwo = "#bde0fe";
export const paletteThree = "#a8dadc";
export const paletteFour = "#457b9d";
export const paletteFive = "#1d3557";
export const accentColor = "#e63946";

// export const paletteOne = "#eaac8b";
// export const paletteTwo = "#e56b6f";
// export const paletteThree = "#b56576";
// export const paletteFour = "#6d597a";
// export const paletteFive = "#355070";
// export const accentColor = "#ff686b";

// export const paletteOne = "#212529";
// export const paletteTwo = "#343a40";
// export const paletteThree = "#495057";
// export const paletteFour = "#6c757d";
// export const paletteFive = "#dee2e6";
// export const accentColor = "#e63946";

