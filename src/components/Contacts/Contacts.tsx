import React, { useContext } from "react";
import { StyledContactDiv } from "./Contacts.style";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { LanguageContext } from "../../app/context/context";
import { ObjectLanguage } from "../componentsTypes";
import { RootState } from "../../app/store";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../app/context/themeContext/themeContext";

export function Contacts () {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentContact: ObjectLanguage = useContext(LanguageContext).contacts;

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return (
    <StyledContactDiv>
      <Box 
        component="div" 
        sx={{
          color: currentThemeColor.paletteFive,
          ["& a"]: {color: currentThemeColor.paletteFive},
          ["& a:hover"]: {color: currentThemeColor.accentColor},
          ["& a:active"]: {color: currentThemeColor.accentColor}
        }}
      >
        <h1>{contentContact[languageFromSlice as keyof typeof contentContact]}</h1>
        <div><span>E-mail:</span> <a>devdivoron@gmail.com</a></div>
        <div><span>GitHub:</span> <a href="https://github.com/DiVoronov" target="_blank">https://github.com/DiVoronov</a></div>
        <div><span>LinkedIN:</span> <a href="https://www.linkedin.com/in/dmytro-voronov-frontend-dev/" target="_blank">https://www.linkedin.com/in/dmytro-voronov-frontend-dev/</a></div>
      </Box>
      
    </StyledContactDiv>
  );
};