import React, { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledNavLink } from "./NavBar.style";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../app/slices/languageSlice";

import { LanguageContext } from "../../app/context/context";
import { ObjectLanguage } from "../componentsTypes";
import { globalCustomStyles } from "../../GlobalStyle";
import { RootState } from "../../app/store";
import { NavLink } from "react-router-dom";
import { NavBarListPath } from "./NavBarListPath";

import CustomizedSwitches from "./SwitchTheme";

import logo from "../../logoBig.png";

import {
  paletteOne,
  paletteTwo,
  paletteThree,
  paletteFour,
  paletteFive
} from "../../app/context/themeContext/themeContext";

export function NavBar () {

  const [language, setLanguage] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const useHandleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    dispatch(changeLanguage(event.target.value));
  };

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);
  const currentTheme = useSelector( (state: RootState) => state.theme);

  const contentNavbar = useContext(LanguageContext).navbar;

  const stylePathXS = {
    display: "flex",
    position: "fixed",
    left: "1rem", top: "4rem",
    zIndex: "1301",
    ["& > div"]: {m: 1},
    // background: globalCustomStyles.globalBackgroundDiv,
    // border: globalCustomStyles.globalBorder,
    // borderRadius: "20px",
    // boxShadow: globalCustomStyles.globalBoxShadow,
    boxShadow: `8px 8px 0px ${paletteThree}`,
    background: paletteOne,
    border: `1px solid ${paletteFour}`,

    flexDirection: {xs: "column", sm:"none"},
    justifyContent: {xs: "center", sm:"right"},
    alignContent: "center",
    alignItems: "center",
  };
  const stylePathSM = {
    display: {xs: "none", sm:"flex"},
    flexDirection: {xs: "column", sm:"row"},
    justifyContent: {xs: "center", sm:"right"},
    alignContent: "center",
    alignItems: "center",
  };

  return (
    <AppBar position="static" sx={{
      // borderRadius: "25px", 
      background: "none", 
      boxShadow: "none",
      mt: 0,
      mb: 2
      }}>
      <Box 
        component="div" 
        sx={{
          // borderRadius: "25px", 
          // border: globalCustomStyles.globalBorder,
          // boxShadow: globalCustomStyles.globalBoxShadow,
          // background: globalCustomStyles.globalBackgroundDiv,
          boxShadow: `8px 8px 0px ${paletteThree}`,
          background: paletteOne,
          borderBottom: `3px solid ${paletteFour}`,
          
          fontWeight: {xs: "normal", sm: "bold"},
          pr: 1, pl: 1
        }}>

        <Toolbar disableGutters sx={{display: "flex", justifyContent: {xs: "space-around", sm: "space-between"}, width: "100%"}}>
          <Box sx={{display: {xs: "none", sm: "flex"}}}>
            <StyledNavLink>
              <NavLink to={"/"}><img src={logo} style={{border: `1px solid ${paletteFour}`, borderRadius: "50%"}} alt="logo"/></NavLink>
            </StyledNavLink>
          </Box>
          
          <Box sx={{display: {xs: "flex", sm: "none"}}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: "flex", flexDirection: "column" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon color="secondary" />
              { isMenuOpen && <NavBarListPath styleBox={stylePathXS}/> }
            </IconButton>
          </Box>

          <Box component="div" sx={{display: "flex", justifyContent: {xs: "center", sm: "space-between"}}}>
            <NavBarListPath styleBox={stylePathSM}/>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Box sx={{ 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center"
              }}>
                <CustomizedSwitches/>
              </Box>

              <Box sx={{ 
                flexGrow: 1, 
                display: "flex",
                justifyContent: "right",
                alignItems: "center"
              }}>
                <FormControl size="small" color="secondary" fullWidth onChange={(event) => event.preventDefault()}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    onChange={useHandleChangeLanguage}
                    sx={{
                      fontWeight: "bold", 
                      // boxShadow: globalCustomStyles.globalBoxShadow, 
                      // color: globalCustomStyles.globalColor, 
                      // border: "1px solid #fff"
                      color: paletteFive, 
                      
                      border: `1px solid ${paletteTwo}`
                    }}
                  >
                    <MenuItem value={"en"}>EN</MenuItem>
                    <MenuItem value={"ua"}>UA</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            
          </Box>
          
        </Toolbar>
      </Box>
    </AppBar>
  );
};

