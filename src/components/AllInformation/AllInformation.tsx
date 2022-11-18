import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../app/context/context";
import { ObjectLanguage } from "../componentsTypes";
import { useSelector } from "react-redux";
import { Experiense } from "./Experiense/Experiense";
import { Skills } from "./Skills/Skills";
import { AboutMe } from "./AboutMe/AboutMe";
import { globalCustomStyles } from "../../GlobalStyle";
import { StyledHeader } from "./AllInformation.style";
import { Box } from "@mui/material";
import { RootState } from "../../app/store";

import { changeHardSkills, changeAbout } from "../../app/slices/appearSlice";
import { useAppearForElement, AppearObject } from "../../app/hooks";

import {
  paletteOne,
  paletteTwo,
  paletteThree,
  paletteFour,
  paletteFive
} from "../../app/context/themeContext/themeContext";

export function AllInformation () {

  // const refELementHardSkills = useRef(null);
  // const refELementAbout = useRef(null);

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);
  const isVisibleFromSlice: AppearObject = useSelector( (state: RootState) => state.appear);
  const isVisibleHardSkills: boolean = isVisibleFromSlice.hardSkills;
  const isVisibleAbout: boolean = isVisibleFromSlice.about;

  // useAppearForElement(refELementHardSkills, changeHardSkills, isVisibleHardSkills);
  // useAppearForElement(refELementAbout, changeAbout, isVisibleAbout);

  const contentCardDescribe = useContext(LanguageContext).home.allInformation;

  const experiense: ObjectLanguage = contentCardDescribe.workExperiense.titleExperiense;
  const aboutMe: ObjectLanguage = contentCardDescribe.aboutMe.titleAboutMe;

  const currentTheme = useSelector( (state: RootState) => state.theme);

  return(
    <Box 
      component="div"
      className="allInfo" 
      sx={{
        boxSizing: "border-box",
        justifyContent: "space-between",
        mt: 2, mb: 2,
        p: {xs: "5px", lg: "20px"},
        display: "flex",
        flexDirection: "column",
        borderRadius: "25px",
        // color: globalCustomStyles.globalColor,
        color: paletteFive,

      }}
    >
      <Box 
        component="div" 
        sx={{
          display: "flex", 
          flexDirection: {xs: "column", md: "row"},
          justifyContent: "space-between",
        }}>
        <Box 
          component="div" 
          className="workExperiense appearDiv" 
          sx={{
            // border: globalCustomStyles.globalBorder,
            // background: globalCustomStyles.globalBackgroundDiv,
            // boxShadow: globalCustomStyles.globalBoxShadow,
            border: `3px solid ${paletteFour}`,
            background: paletteTwo,
            boxShadow: `8px 8px 0px ${paletteThree}`,
            borderRadius: "25px",
            width: {lg: "50%"}, 
            m: {xs: "5px", md: "20px"}, 
            p: 2
          }}>
          <StyledHeader>{experiense[languageFromSlice as keyof typeof experiense]}</StyledHeader>
          <Experiense/>
        </Box>
        {/* <div ref={refELementHardSkills}></div> */}
        {/* { isVisibleHardSkills &&  */}
          <Box 
            component="div" 
            className="listSkills appearDiv" 
            sx={{
              borderRadius: "25px",
              width: {lg: "50%"}, 
              m: {xs: "5px", md: "20px"}, 
            }}>
            <Skills/>
            
          </Box>
        {/* } */}
      </Box>
      <Box
        component="div"
      >
        {/* <div ref={refELementAbout}></div> */}
        {/* { isVisibleAbout &&  */}
          <Box 
            component="div" 
            className="aboutMe appearDiv" 
            sx={{
              // border: globalCustomStyles.globalBorder,
              // background: globalCustomStyles.globalBackgroundDiv,
              // boxShadow: globalCustomStyles.globalBoxShadow,
              border: `3px solid ${paletteFour}`,
              background: paletteTwo,
              boxShadow: `8px 8px 0px ${paletteThree}`,
              borderRadius: "25px", 
              m: {xs: "5px", md: "20px"}, 
              p: 2
            }}
          >
            <StyledHeader>{aboutMe[languageFromSlice as keyof typeof aboutMe]}</StyledHeader>
            <AboutMe/>
          </Box>
        {/* } */}
      </Box>
    </Box>
  );
};