import React, { useContext, useState, useEffect } from "react";
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
import { RootState } from "../../app/store";
import { NavLink } from "react-router-dom";
import { NavBarListPath } from "./NavBarListPath";

import CustomizedSwitches from "./SwitchTheme";

import logo from "../../logoBig.png";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../app/context/themeContext/themeContext";
import { useToggleMenu } from "../../app/hooks";
import { closeMenu, openMenu } from "../../app/slices/menuCloseSlice";

export function NavBar () {

  const [language, setLanguage] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const useHandleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    dispatch(changeLanguage(event.target.value));
  };

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);
  const contentNavbar = useContext(LanguageContext).navbar;

  const isMenuOpenFromSlice: boolean = useSelector( (state: RootState) => state.closeMenu);
  const toggleMenu = (action: boolean) => {
    action === false ? dispatch(closeMenu(false)) : dispatch(openMenu(true));
  };

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  const stylePathXS = {
    display: "flex",
    position: "fixed",
    left: "1rem", 
    top: "4rem",
    zIndex: "1301",
    ["& > div"]: {m: 1},
    boxShadow: `8px 8px 0px ${currentThemeColor.paletteThree}`,
    background: currentThemeColor.paletteOne,
    border: `1px solid ${currentThemeColor.paletteFour}`,

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
      background: "none", 
      boxShadow: "none",
      mt: 0,
      mb: 2
      }}>
      <Box 
        component="div" 
        sx={{
          boxShadow: `8px 8px 0px ${currentThemeColor.paletteThree}`,
          background: currentThemeColor.paletteOne,
          borderBottom: `3px solid ${currentThemeColor.paletteFour}`,
          
          fontWeight: {xs: "normal", sm: "bold"},
          pr: 1.5, pl: 1.5
        }}>

        <Toolbar disableGutters sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
          <Box sx={{display: {xs: "none", sm: "flex"}}}>
            <StyledNavLink>
              <NavLink to={"/"}><img src={logo} style={{border: `1px solid ${currentThemeColor.paletteFour}`, borderRadius: "50%"}} alt="logo"/></NavLink>
            </StyledNavLink>
          </Box>
          
          <Box sx={{display: {xs: "flex", sm: "none"}}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: "flex", flexDirection: "column" }}
              onClick={(event) => {
                event.preventDefault();
                toggleMenu(!isMenuOpenFromSlice);
              }}
              
            >
              <MenuIcon color={currentTheme === "dark" ? "inherit" : "info"} />
              { isMenuOpenFromSlice && <NavBarListPath styleBox={stylePathXS}/> }
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
                <FormControl size="small" color={currentTheme === "dark" ? "error" : "info"} fullWidth onChange={(event) => event.preventDefault()}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    onChange={useHandleChangeLanguage}
                    sx={{
                      fontWeight: "bold", 
                      color: currentThemeColor.paletteFive, 
                      
                      border: `1px solid ${currentThemeColor.paletteTwo}`
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

