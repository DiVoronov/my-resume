import React, { useContext } from "react";
import PhotoHolder from "../PhotoHolder/PhotoHolder";
import { LanguageContext } from '../../app/context/context';

import {
  Box
} from "@mui/material";
import { useSelector } from "react-redux";

type ObjectLanguage = {
  en: string,
  ua: string
}

export function PhotoAndDescribe () {
  
  const languageFromSlice: string = useSelector( (state: any) => state.language);

  const contentCardDescribe = useContext(LanguageContext).home.photoAndDescribe.cardDescribe;
  const contentheaderPhoto = useContext(LanguageContext).home.photoAndDescribe.headerPhoto;

  /*
   ** const contentElementTranslateNAMEinfo: ObjectLanguage = content.home.photoAndDescribe.cardDescribe.name.infoName;
   ** type ObjectLanguageKeyNAMEvalue = keyof typeof contentElementTranslateNAMEinfo;
   ** const currentLanguageValueNAMEinfo = languageFromSlice as ObjectLanguageKeyNAMEvalue;
  */
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
        border: "3px solid rgba(255, 255, 255, 0.473)", 
        m: 5, 
        p: 5,
        display: "flex",

        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: "25px"
      }}>
      {/* <Box component="div" className="photo">PHOTO</Box> */}
      <PhotoHolder/>
      <Box component="div" className="describe" sx={{color: "#fff", border: "3px solid rgba(255, 255, 255, 0.473)", borderRadius: "25px", m: 5, p: 5}}>
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