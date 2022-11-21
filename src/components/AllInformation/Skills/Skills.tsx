import React, { useContext, useRef } from "react";
import { StyledSkillsDiv } from "./Skills.style";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/material";

import { useSelector } from "react-redux";
import { LanguageContext } from "../../../app/context/context";
import { ObjectLanguage, ObjectLanguageParagraph } from "../../componentsTypes";
import { RootState } from "../../../app/store";

import { changeSoftSkills } from "../../../app/slices/appearSlice";
import { useAppearForElement } from "../../../app/hooks";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../../app/context/themeContext/themeContext";

export function Skills () {

  const refELement = useRef(null);

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);
  const isVisibleFromSlice: boolean = useSelector( (state: RootState) => state.appear.softSkills);

  useAppearForElement(refELement, changeSoftSkills, isVisibleFromSlice);

  const contentSkills = useContext(LanguageContext).home.allInformation.listSkills;

  const titleProgrammingLang: ObjectLanguage = contentSkills.titleProgrammingLang;
  const titleLang: ObjectLanguage = contentSkills.titleLang;
  const ukrainian: ObjectLanguage = contentSkills.ukrainian;
  const titleStack: ObjectLanguage = contentSkills.titleStack;
  const softSkills: ObjectLanguageParagraph = contentSkills.softSkills;
  
  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  function LeftIcon () {
    return <RemoveIcon color={currentTheme === "dark" ? "error" : "info"}/>
  }

  return (
    <StyledSkillsDiv>
      <Box
        component="div"
        sx={{
          border: `3px solid ${currentThemeColor.paletteFour}`,
          background: currentThemeColor.paletteTwo,
          boxShadow: `8px 8px 0px ${currentThemeColor.paletteThree}`,
          ["& div"]: {color: currentThemeColor.accentColor}
        }}
      >
          <Box component="h2">Hard Skills</Box>
            <ul>
              <li>
                <div style={{marginBottom: "1rem"}}>{titleProgrammingLang[languageFromSlice as keyof typeof titleProgrammingLang]}</div>
                <ul>
                  <li><span><LeftIcon/>TypeScript</span></li>
                  <li><span><LeftIcon/>JavaScript (ES6+)</span></li>
                </ul>
              </li>
              <li>
                <div style={{marginBottom: "1rem"}}>{titleStack[languageFromSlice as keyof typeof titleStack]}</div>
                <ul>
                  <li><span><LeftIcon/>React</span></li>
                  <li><span><LeftIcon/>Redux</span></li>
                  <li><span><LeftIcon/>Git/Github</span></li>
                  <li><span><LeftIcon/>SASS/SCSS</span></li>
                  <li><span><LeftIcon/>Redux Toolkit ( + RTK Query)</span></li>
                  <li><span><LeftIcon/>React Router</span></li>
                  <li><span><LeftIcon/>react-scroll-parallax</span></li>
                  <li><span><LeftIcon/>react-transition-group</span></li>
                  <li><span><LeftIcon/>React hooks: (useState, useEffect, useContext, useReduser, useRef, useMemo, useCallback)</span></li>
                  <li><span><LeftIcon/>Intersection Observer</span></li>
                  <li><span><LeftIcon/>Styled Components</span></li>
                  <li><span><LeftIcon/>Material UI</span></li>
                  <li><span><LeftIcon/>Bootstrap</span></li>
                  <li><span><LeftIcon/>Tailwind CSS</span></li>
                  <li><span><LeftIcon/>Materialize CSS</span></li>
                </ul>
              </li>
              <li>
                <div style={{marginBottom: "1rem"}}>{titleLang[languageFromSlice as keyof typeof titleLang]}</div>
                <ul>
                  <li><span><LeftIcon/>English - B1</span></li>
                  <li><span><LeftIcon/>Українська - {ukrainian[languageFromSlice as keyof typeof ukrainian]}</span></li>
                </ul>
              </li>
            </ul>
        </Box>
        <p ref={refELement}></p>
        { isVisibleFromSlice && 
          <Box
          component="div"
          sx={{
            border: `3px solid ${currentThemeColor.paletteFour}`,
            background: currentThemeColor.paletteTwo,
            boxShadow: `8px 8px 0px ${currentThemeColor.paletteThree}`,
          }}
          >
            <h2>Soft Skills:</h2>
            <ul>
              {softSkills[languageFromSlice as keyof typeof softSkills].map( (paragraph: string, index: number) => {
                return (<li key={index}><span><LeftIcon/>{paragraph}</span></li>);
              })}
            </ul>
          </Box>
        }
      
    </StyledSkillsDiv>
  );
};