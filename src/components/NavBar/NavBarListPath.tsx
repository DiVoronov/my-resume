import React, { useContext } from "react";
import {
  Box,
} from "@mui/material";
import { StyledNavLink } from "./NavBar.style";
import { useSelector } from "react-redux";
import { LanguageContext } from "../../app/context/context";
import { ObjectLanguage } from "../componentsTypes";
import { RootState } from "../../app/store";
import { NavLink } from "react-router-dom";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../app/context/themeContext/themeContext";

export function NavBarListPath ( { styleBox }: any ) {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentNavbar = useContext(LanguageContext).navbar;

  const navCV: ObjectLanguage = contentNavbar.navCV;
  const navAboutApp: ObjectLanguage = contentNavbar.navAboutApp;
  const navContacts: ObjectLanguage = contentNavbar.navContacts;
  const navBarArray: ObjectLanguage[] = [navCV, navAboutApp, navContacts];

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return (
    <Box sx={styleBox}>

      {navBarArray.map( (navBarElement: ObjectLanguage, index: number) => {
        return (
          <StyledNavLink key={index}>
            <Box 
              sx={{
                ["&:hover"]: {boxShadow: `5px 5px 0px ${currentThemeColor.paletteThree}`, border: `1px solid ${currentThemeColor.paletteThree}`, color: currentThemeColor.paletteThree},
                ["& a"]: {color: currentThemeColor.paletteFour},
                ["& a:hover"]: {color: currentThemeColor.paletteThree},
              }}
            >
              <NavLink style={{fontFamily: "'Yanone Kaffeesatz', sans-serif", letterSpacing: "2px", color: currentThemeColor.paletteFive, minWidth: "2rem", fontSize: "4vh"}} to={
                `${navBarElement == navCV ? "/" : navBarElement == navAboutApp ? "/about" : "/contacts"}`
                }> {navBarElement[languageFromSlice as keyof typeof navBarElement]}
              </NavLink>
            </Box>
          </StyledNavLink>
        )
      })}
    </Box>
  );
};