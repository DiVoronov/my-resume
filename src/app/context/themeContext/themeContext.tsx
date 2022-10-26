import React, { createContext } from "react";

export const themes = {
  dark: {
    globalBorder: "4px solid #191919",
    globalBackgroundDiv: "#212121",
    globalAccentColor: "rgb(215, 136, 231)",
    globalColor: "#fff",
    globalBoxShadow: "15px 15px 30px #191919, -15px -15px 30px #292929, inset 15px 15px 30px #191919, inset -15px -15px 30px #292929",
    globalBoxShadowActive: "inset 17px 17px 33px #dbdbdb, inset -17px -17px 33px #fff",
    globalRootColor: "#292929",
    shadowNavLink: "inset 15px 15px 30px #191919, inset -15px -15px 30px #292929"
  },
  light: {
    globalBorder: "4px solid #dbdbdb",
    globalBackgroundDiv: "#e0e0e0",
    globalAccentColor: "rgb(178, 62, 199)",
    globalColor: "#191919",
    globalBoxShadow: "15px 15px 30px #bebebe, -15px -15px 30px #fff, inset 15px 15px 30px #bebebe, inset -15px -15px 30px #fff",
    globalBoxShadowActive: "inset 17px 17px 33px #dbdbdb, inset -17px -17px 33px #fff",
    globalRootColor: "#e0e0e0",
    shadowNavLink: "inset 15px 15px 30px #fff, inset -15px -15px 30px #bebebe"
  }
};

export const ThemeContext = createContext(themes);
