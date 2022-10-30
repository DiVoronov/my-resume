import React, { useContext } from "react";
import {
  Box,
} from "@mui/material";
import { StyledNavLink } from "./NavBar.style";
import { useSelector } from "react-redux";
import { LanguageContext } from "../../app/context/context";
import { ObjectLanguage } from "../componentsTypes";
import { globalCustomStyles } from "../../GlobalStyle";
import { RootState } from "../../app/store";
import { NavLink } from "react-router-dom";

export function NavBarListPath ( { styleBox }: any ) {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);
  const currentTheme = useSelector( (state: RootState) => state.theme);

  const contentNavbar = useContext(LanguageContext).navbar;

  const navCV: ObjectLanguage = contentNavbar.navCV;
  const navAboutApp: ObjectLanguage = contentNavbar.navAboutApp;
  const navContacts: ObjectLanguage = contentNavbar.navContacts;
  const navBarArray: ObjectLanguage[] = [navCV, navAboutApp, navContacts];

  return (
    <Box sx={styleBox}>

      {navBarArray.map( (navBarElement: ObjectLanguage, index: number) => {
        return (
          <StyledNavLink key={index}>
            <Box 
              sx={{
                ["&:hover"]: {boxShadow: globalCustomStyles.shadowNavLink},
                ["& a"]: {color: globalCustomStyles.globalColor},
                ["& a:hover"]: {color: globalCustomStyles.globalAccentColor},
              }}
            >
              <NavLink to={
                `${navBarElement == navCV ? "/home" : navBarElement == navAboutApp ? "/about" : "/contacts"}`
                }> {navBarElement[languageFromSlice as keyof typeof navBarElement]}
              </NavLink>
            </Box>
          </StyledNavLink>
        )
      })}
    </Box>
  );
};