import React, { useContext } from "react";
import { StyledBigText } from "./StyledBigText";
import { Box } from "@mui/material";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../../app/context/themeContext/themeContext";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

interface IBigTextProps {
  innerText: string[],
}

export function BigTextShared ( { innerText }: IBigTextProps ) {

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return (
    <StyledBigText>
      <Box component="span" sx={{color: currentThemeColor.paletteFour, textShadow: `3px 3px 0px ${currentThemeColor.paletteFive}`}}>{innerText[0]}</Box>
      <Box component="span" sx={{color: currentThemeColor.paletteFour, textShadow: `3px 3px 0px ${currentThemeColor.paletteFive}`}}>{innerText[1]}</Box>
    </StyledBigText>
  );
};