import React, { useContext } from "react";
import { StyledContactDiv } from "./Contacts.style";
import { Box } from "@mui/material";

import { useSelector } from "react-redux";
import { LanguageContext } from "../../app/context/context";
import { ObjectLanguage } from "../componentsTypes";
import { RootState } from "../../app/store";
import { globalCustomStyles } from "../../GlobalStyle";

export function Contacts () {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentContact: ObjectLanguage = useContext(LanguageContext).contacts;

  return (
    <StyledContactDiv>
      <Box 
        component="div" 
        sx={{
          color: globalCustomStyles.globalAccentColor, 
          ["& a"]: {color: globalCustomStyles.globalColor},
          ["& a:hover"]: {color: globalCustomStyles.globalAccentColor},
          ["& a:active"]: {color: globalCustomStyles.globalAccentColor}
        }}
      >
        <h1>{contentContact[languageFromSlice as keyof typeof contentContact]}</h1>
        <div><span>E-mail:</span> <a>devdivoron@gmail.com</a></div>
        <div><span>GitHub:</span> <a href="https://github.com/DiVoronov" target="_blank">https://github.com/DiVoronov</a></div>
        <div><span>LinkedIN:</span> <a href="https://www.linkedin.com/in/dmytro-voronov-1711a1251/" target="_blank">https://www.linkedin.com/in/dmytro-voronov-1711a1251/</a></div>
      </Box>
      
    </StyledContactDiv>
  );
};