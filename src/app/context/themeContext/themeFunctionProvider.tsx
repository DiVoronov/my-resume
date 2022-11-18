import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const globalStyles = {
  globalBorder: "4px solid #191919",
  globalBackgroundDiv: "#212121",
  globalAccentColor: "rgb(215, 136, 231)",
  globalColor: "#fff",
  globalBoxShadow: "15px 15px 30px #191919, -15px -15px 30px #292929, inset 15px 15px 30px #191919, inset -15px -15px 30px #292929",
  globalBoxShadowActive: "inset 17px 17px 33px #dbdbdb, inset -17px -17px 33px #ffffff",
  globalRootColor: "#292929",
  shadowNavLink: "inset 15px 15px 30px #191919, inset -15px -15px 30px #292929"
};

// export function ThemeFunctionProvider() {

//   const themes = useContext(ThemeContext);
//   const currentTheme = useSelector( (state: RootState) => state.theme);

//   globalStyles.globalBorder = themes[currentTheme as keyof typeof themes].globalBorder;
//   globalStyles.globalBackgroundDiv =  themes[currentTheme as keyof typeof themes].globalBackgroundDiv;
//   globalStyles.globalAccentColor =  themes[currentTheme as keyof typeof themes].globalAccentColor;
//   globalStyles.globalColor = themes[currentTheme as keyof typeof themes].globalColor;
//   globalStyles.globalBoxShadow =  themes[currentTheme as keyof typeof themes].globalBoxShadow;
//   globalStyles.globalBoxShadowActive =  themes[currentTheme as keyof typeof themes].globalBoxShadowActive;
//   globalStyles.globalRootColor =  themes[currentTheme as keyof typeof themes].globalRootColor;
//   globalStyles.shadowNavLink =  themes[currentTheme as keyof typeof themes].shadowNavLink;

//   return (<></>);
// };