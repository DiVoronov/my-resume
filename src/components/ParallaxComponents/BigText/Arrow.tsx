import React, { useContext } from "react";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../../app/context/themeContext/themeContext";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Box } from "@mui/material";

export function Arrow () {

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return (
    <Box component="svg" sx={{transform: {xs: "rotate(90deg)", sm: "rotate(0deg)"}, width: {xs: "15vh", sm: "20vh"}}} width="20vh" viewBox="0 0 409 227" fill={currentThemeColor.paletteThree} xmlns="http://www.w3.org/2000/svg">
      <path d="M1 116.5L115.5 0.5L88.5 69.5H407L362 116.5L407 159.5H88.5L115.5 226.5L1 116.5Z" stroke="none"/>
    </Box>
  );
};


