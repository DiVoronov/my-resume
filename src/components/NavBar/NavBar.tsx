import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent
} from "@mui/material";
import { StyledNavLink } from "./NavBar.style";
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from "../../app/slices/languageSlice";

import { LanguageContext } from '../../app/context/context';
import { ObjectLanguage } from "../componentsTypes";
import { globalBorder, globalAccentColor } from "../../GlobalStyle";

export function NavBar () {

  const [language, setLanguage] = React.useState("en");

  const dispatch = useDispatch();
  const useHandleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    dispatch(changeLanguage(event.target.value));
  };

  const languageFromSlice: string = useSelector( (state: any) => state.language);

  const contentNavbar = useContext(LanguageContext).navbar;

  const navCV: ObjectLanguage = contentNavbar.navCV;
  const navSkills: ObjectLanguage = contentNavbar.navSkills;
  const navContacts: ObjectLanguage = contentNavbar.navContacts;

  return (

    <AppBar position="static" sx={{borderRadius: "25px", background: "none", mt: 0}}>
      <Container 
        maxWidth="xl" 
        sx={{
          borderRadius: "25px", 
          border: globalBorder,
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}>
        <Toolbar disableGutters>
          <Box sx={{display: {xs: "none", sm: "flex"}}}>
            <StyledNavLink to={"/"}>VORONOV</StyledNavLink>
          </Box>
          
          <Box sx={{ 
            flexGrow: 10, 
            display: "flex",
            justifyContent: "right"
          }}>
            <StyledNavLink to={"/"}>{navCV[languageFromSlice as keyof typeof navCV]}</StyledNavLink>
            <StyledNavLink to={"/skills"}>{navSkills[languageFromSlice as keyof typeof navSkills]}</StyledNavLink>
            <StyledNavLink to={"/contacts"}>{navContacts[languageFromSlice as keyof typeof navContacts]}</StyledNavLink>
          </Box>

          <Box sx={{ 
            flexGrow: 1, 
            display: "flex",
            justifyContent: "right"
          }}>
            <FormControl size="small" color="secondary">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                onChange={useHandleChangeLanguage}
                sx={{fontWeight: "bold", fontSize: "1rem", color: "#fff", border: "1px solid #fff"}}
              >
                <MenuItem  value={"en"}>EN</MenuItem>
                <MenuItem value={"ua"}>UA</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

