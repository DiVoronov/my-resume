import React, { useContext } from "react";
import {
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import { LanguageContext } from "../../app/context/context";
import { ObjectLanguage } from "../../components/componentsTypes";
import { RootState } from "../../app/store";
import { NavLink } from "react-router-dom";
import { StyledWelcomePageDiv } from "./WelcomePage.style";
import { SharedWelcomeButton } from "./SharedWelcomeButton";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../app/context/themeContext/themeContext";

export function WelcomePage () {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentWelcomePage = useContext(LanguageContext).welcomePage;

  const firstTitle: ObjectLanguage = contentWelcomePage.firstTitle;
  const secondTitle: ObjectLanguage = contentWelcomePage.secondTitle;
  const thirdTitle: ObjectLanguage = contentWelcomePage.thirdTitle;
  const toCV: ObjectLanguage = contentWelcomePage.buttons.cv;
  const toAboutApp: ObjectLanguage = contentWelcomePage.buttons.about;
  const toContacts: ObjectLanguage = contentWelcomePage.buttons.contacts;
  const buttonsArray: ObjectLanguage[] = [toCV, toAboutApp, toContacts];

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return (
    <StyledWelcomePageDiv>
      <Box
        component="div"
        sx={{
          boxSizing: "border-box",
          justifyContent: "space-between",
          m: {xs: "10px", md: "20px"},
          p: {xs: "10px", md: "20px"},
          display: "flex",
          flexDirection: "column",
          borderRadius: "25px",
          color: currentThemeColor.paletteFive,
          boxShadow: `8px 8px 0px ${currentThemeColor.paletteThree}`,
          border: `1px solid ${currentThemeColor.paletteFour}`,
          alignItems: "center",
        }}
      >
        <Box component="h1" sx={{color: currentThemeColor.accentColor}}>{firstTitle[languageFromSlice as keyof typeof firstTitle]}</Box>
        <Box component="p">{secondTitle[languageFromSlice as keyof typeof secondTitle]}</Box>
        <Box component="h2">{thirdTitle[languageFromSlice as keyof typeof thirdTitle]}</Box>
        <Box 
          component="div" 
          sx={{
            display: "flex", 
            flexDirection: {xs: "column", md: "row"},
          }}
        >
          {buttonsArray.map( (buttonElement: ObjectLanguage, index: number) => (
            <SharedWelcomeButton key={index}>
              <NavLink to={
                `${buttonElement == toCV ? "/" : buttonElement == toAboutApp ? "/about" : "/contacts"}`
                }
              >{buttonElement[languageFromSlice as keyof typeof buttonElement]}</NavLink>
            </SharedWelcomeButton>
          ))}
        </Box>
      </Box>
    </StyledWelcomePageDiv>
  );
};