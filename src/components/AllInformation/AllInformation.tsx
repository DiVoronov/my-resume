import React, { useState, useContext } from "react";
import { LanguageContext } from "../../app/context/context";
import { ObjectLanguage } from "../componentsTypes";
import { useSelector } from "react-redux";
import { Experience } from "./Experience/Experience";
import { Skills } from "./Skills/Skills";
import { AboutMe } from "./AboutMe/AboutMe";
import { StyledHeader } from "./AllInformation.style";
import { Box } from "@mui/material";
import { RootState } from "../../app/store";
import { Parallax } from "react-scroll-parallax";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../app/context/themeContext/themeContext";

export function AllInformation () { 

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentCardDescribe = useContext(LanguageContext).home.allInformation;

  const experience: ObjectLanguage = contentCardDescribe.workExperience.titleExperience;
  const aboutMe: ObjectLanguage = contentCardDescribe.aboutMe.titleAboutMe;

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  const [isVisibleHardSkills, setIsVisibleHardSkills] = useState(false);
  const [isVisibleAbout, setIsVisibleAbout] = useState(false);

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
        color: currentThemeColor.paletteFive,
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
          className="workExperience appearDiv" 
          sx={{
            border: `3px solid ${currentThemeColor.paletteFour}`,
            background: currentThemeColor.paletteTwo,
            boxShadow: `8px 8px 0px ${currentThemeColor.paletteThree}`,
            borderRadius: "25px",
            width: {lg: "50%"}, 
            m: {xs: "5px", md: "20px"},
            mb: {xs: "1rem", md: "2rem"},
            p: 2
          }}>
          <StyledHeader>{experience[languageFromSlice as keyof typeof experience]}</StyledHeader>
          <Experience/>
        </Box>
        <Parallax onEnter={() => setIsVisibleHardSkills(true)}>
          { isVisibleHardSkills && 
            <Box 
              component="div" 
              className="listSkills appearDiv" 
              sx={{
                m: {xs: "5px", md: "20px"}, 
                mb: {xs: "1rem", md: "2rem"},
              }}>
              <Skills/>
              
            </Box>
          }
        </Parallax>
      </Box>
      <Box
        component="div"
      >
        <Parallax onEnter={() => setIsVisibleAbout(true)}>
          { isVisibleAbout && 
            <Box 
              component="div" 
              className="aboutMe appearDiv" 
              sx={{
                border: `3px solid ${currentThemeColor.paletteFour}`,
                background: currentThemeColor.paletteTwo,
                boxShadow: `8px 8px 0px ${currentThemeColor.paletteThree}`,
                borderRadius: "25px", 
                m: {xs: "5px", md: "20px"},
                mb: {xs: "1rem", md: "2rem"},
                p: 2,
              }}
            >
              <StyledHeader>{aboutMe[languageFromSlice as keyof typeof aboutMe]}</StyledHeader>
              <AboutMe/>
            </Box>
          }
        </Parallax>
      </Box>
    </Box>
  );
};