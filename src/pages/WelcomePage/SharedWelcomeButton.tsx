import React, { useContext } from "react";
import {
  Box,
} from "@mui/material";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../app/context/themeContext/themeContext";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export function SharedWelcomeButton ( { children }: any ) {

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return (
    <Box 
      component="div" 
      className="animatedNavLink"
      sx={{
        borderRadius: "25px",
        color: currentThemeColor.paletteFive,
        border: `1px solid ${currentThemeColor.paletteFour}`,
        margin: {xs: "10px 0px", md: "0px 10px"}, 
        p: 3,
        width: "100%",
        fontWeight: "600",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      { children }
    </Box>
  );
};