import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from "@mui/material";
import { StyledNavLink } from "./NavBar.style";
import { useDispatch } from 'react-redux';
import { changeLanguage } from "../../app/slices/languageSlice";

export function NavBar () {

  const [language, setLanguage] = React.useState("en");

  const dispatch = useDispatch();
  const useHandleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    dispatch(changeLanguage(event.target.value));
  };


  return (

    <AppBar position="static" sx={{borderRadius: "25px", background: "none", mt: 0}}>
      <Container maxWidth="xl" sx={{background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", borderRadius: "25px"}}>
        <Toolbar disableGutters >
          <StyledNavLink to={"/"}>VORONOV</StyledNavLink>

          <Box sx={{ 
              flexGrow: 10, 
              display: "flex",
              justifyContent: "right"
            }}>
            <StyledNavLink to={"/"}>CV</StyledNavLink>
            <StyledNavLink to={"/contacts"}>Contacts</StyledNavLink>
            <StyledNavLink to={"/skills"}>My skills</StyledNavLink>
          </Box>

          <Box sx={{ 
              flexGrow: 1, 
              display: "flex",
              justifyContent: "right"
            }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={language}
                  label="Language"
                  onChange={useHandleChangeLanguage}
                >
                  <MenuItem value={"en"}>EN</MenuItem>
                  <MenuItem value={"ua"}>UA</MenuItem>
                </Select>
              </FormControl>
            </Box>
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

