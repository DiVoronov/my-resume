import React, { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { AboutApp } from "../components/AboutApp/AboutApp";
import { useDispatch } from "react-redux";
import { hideWelcomePage } from "../app/slices/welcomeSlice";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../app/context/themeContext/themeContext";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export function AboutPage () {

  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(hideWelcomePage(false));
  }, []);

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return (
      <Box 
        component="div" 
        className="allInfo appearDiv" 
        sx={{
          m: {xs: 1, sm: 3, md: 5}, 
          p: {xs: 1, sm: 3, md: 5},
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          borderRadius: "25px",
          color: currentThemeColor.paletteFive,
          boxShadow: `8px 8px 0px ${currentThemeColor.paletteThree}`,
          background: currentThemeColor.paletteOne,
          border: `1px solid ${currentThemeColor.paletteFour}`,
        }}
      >
        <AboutApp/>
      </Box>
  );
};