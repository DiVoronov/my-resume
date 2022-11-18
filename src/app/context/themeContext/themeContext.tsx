import React, { createContext } from "react";
// "#e5383b"
// "#ff686b"
export const themes = {
  dark: {
    globalBorder: "4px solid #191919",
    globalBackgroundDiv: "#212121",
    // globalAccentColor: "rgb(215, 136, 231)",
    globalAccentColor: "#ff686b",
    globalColor: "#fff",
    globalBoxShadow: "15px 15px 30px #191919, -15px -15px 30px #292929, inset 15px 15px 30px #191919, inset -15px -15px 30px #292929",
    globalBoxShadowActive: "inset 17px 17px 33px #dbdbdb, inset -17px -17px 33px #fff",
    globalRootColor: "#292929",
    shadowNavLink: "inset 15px 15px 30px #191919, inset -15px -15px 30px #292929"
  },
  light: {
    globalBorder: "4px solid #dbdbdb",
    globalBackgroundDiv: "#e0e0e0",
    // globalAccentColor: "rgb(178, 62, 199)",
    globalAccentColor: "#e5383b",
    globalColor: "#191919",
    globalBoxShadow: "15px 15px 30px #bebebe, -15px -15px 30px #fff, inset 15px 15px 30px #bebebe, inset -15px -15px 30px #fff",
    globalBoxShadowActive: "inset 17px 17px 33px #dbdbdb, inset -17px -17px 33px #fff",
    globalRootColor: "#e0e0e0",
    shadowNavLink: "inset 15px 15px 30px #fff, inset -15px -15px 30px #bebebe"
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

