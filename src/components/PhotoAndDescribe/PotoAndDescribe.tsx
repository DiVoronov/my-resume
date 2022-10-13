import React, { useContext } from "react";
import PhotoHolder from "../PhotoHolder/PhotoHolder";
import { LanguageContext } from '../../app/context/context';
import { ObjectLanguage } from "../componentsTypes";
import { globalBorder, globalBackgroundDiv } from "../../GlobalStyle";

import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export function PhotoAndDescribe () {
  
  const languageFromSlice: string = useSelector( (state: any) => state.language);

  const contentCardDescribe = useContext(LanguageContext).home.photoAndDescribe.cardDescribe;

  const titleCity: ObjectLanguage = contentCardDescribe.city.titleCity;
  const infoCity: ObjectLanguage = contentCardDescribe.city.infoCity;
  const titleName: ObjectLanguage = contentCardDescribe.name.titleName;
  const infoName: ObjectLanguage = contentCardDescribe.name.infoName;
  const titlePurpose: ObjectLanguage = contentCardDescribe.purpose.titlePurpose;
  const infoPurpose: ObjectLanguage = contentCardDescribe.purpose.infoPurpose;
  
  return(
    <Box 
      component="div" 
      className="photoAndDescribe" 
      sx={{
        border: globalBorder, 
        m: 2, 
        p: 2,
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        background: globalBackgroundDiv,
        borderRadius: "25px",
        justifyContent: "space-between",
        alignItems: {xs: "stretch", md: "center"},
      }}
    >
      <PhotoHolder/>
      <Box 
        component="div" 
        className="describe" 
        sx={{
          color: "#fff", 
          border: globalBorder, 
          borderRadius: "25px",
          background: globalBackgroundDiv,
          m: 2, 
          p: 2,
          flexGrow: "5"
        }}
      >
        <Box component="span" >
          <h2>{titleName[languageFromSlice as keyof typeof titleName]}</h2> <p>{infoName[languageFromSlice as keyof typeof infoName]}</p>
        </Box>
        <Box component="span">
          <h2>{titleCity[languageFromSlice as keyof typeof titleCity]}</h2> <p>{infoCity[languageFromSlice as keyof typeof infoCity]}</p>
        </Box>
        <Box component="span">
          <h2>{titlePurpose[languageFromSlice as keyof typeof titlePurpose]}</h2> <p>{infoPurpose[languageFromSlice as keyof typeof infoPurpose]}</p>
        </Box>
      </Box>
    </Box>
  )
};