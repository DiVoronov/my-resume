import React, { useContext, useState } from "react";
import { LanguageContext } from '../../app/context/context';
import { ObjectLanguage } from "../componentsTypes";
import { useSelector } from "react-redux";
import { Experiense } from "./Experiense/Experiense";
import { Skills } from './Skills/Skills';
import { AboutMe } from "./AboutMe/AboutMe";
import { globalBorder, globalBackgroundDiv } from "../../GlobalStyle";

import {
  Box
} from "@mui/material";

export function AllInformation () {

  const languageFromSlice: string = useSelector( (state: any) => state.language);

  const contentCardDescribe = useContext(LanguageContext).home.allInformation;

  const experiense: ObjectLanguage = contentCardDescribe.workExperiense;
  const skills: ObjectLanguage = contentCardDescribe.listSkills;
  const aboutMe: ObjectLanguage = contentCardDescribe.aboutMe;

  const [offset, setOffset] = useState(0);


  return(
    <Box 
      component="div" 
      className="allInfo" 
      sx={{
        border: globalBorder,
        boxSizing: "border-box",
        justifyContent: "space-between",
        m: 2,
        display: "flex",
        flexDirection: "column",
        borderRadius: "25px",
        color: "#fff"
      }}
    >
      <Box 
        component="div" 
        sx={{
          display: "flex", 
          flexDirection: {xs: "column", lg: "row"},
          justifyContent: "space-between",
        }}>
        <Box 
          component="div" 
          className="workExperiense" 
          sx={{
            border: globalBorder,
            background: globalBackgroundDiv,
            borderRadius: "25px",
            width: {lg: "50%"}, 
            m: 2, p: 2
          }}>
          <h1>{experiense[languageFromSlice as keyof typeof experiense]}</h1>
          <Experiense/>
        </Box>
        <Box 
          component="div" 
          className="listSkills" 
          sx={{
            border: globalBorder,
            background: globalBackgroundDiv,
            borderRadius: "25px",
            width: {lg: "50%"}, 
            m: 2, p: 2
          }}>
          <h1>{skills[languageFromSlice as keyof typeof skills]}</h1>
          <Skills/>
        </Box>
      </Box>
      
      <Box 
        component="div" 
        className="aboutMe" 
        sx={{
          border: globalBorder,
          background: globalBackgroundDiv,
          borderRadius: "25px", 
          m: 2, p: 2
        }}>
        <h1>{aboutMe[languageFromSlice as keyof typeof aboutMe]}</h1>
        <AboutMe/>
        </Box>
    </Box>
  )
};