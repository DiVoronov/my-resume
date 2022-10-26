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

import { globalCustomStyles } from "../../../GlobalStyle";

export function Skills () {

  const refELement = useRef(null);

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);
  const isVisibleFromSlice: boolean = useSelector( (state: RootState) => state.appear.softSkills);
  const currentTheme = useSelector( (state: RootState) => state.theme);

  useAppearForElement(refELement, changeSoftSkills, isVisibleFromSlice);

  const contentSkills = useContext(LanguageContext).home.allInformation.listSkills;

  const titleProgrammingLang: ObjectLanguage = contentSkills.titleProgrammingLang;
  const titleLang: ObjectLanguage = contentSkills.titleLang;
  const titleStack: ObjectLanguage = contentSkills.titleStack;
  const softSkills: ObjectLanguageParagraph = contentSkills.softSkills;
  
  return (
    <StyledSkillsDiv>
      <Box
        component="div"
        sx={{
          border: globalCustomStyles.globalBorder,
          background: globalCustomStyles.globalBackgroundDiv,
          boxShadow: globalCustomStyles.globalBoxShadow,
          ["& div"]: {color: globalCustomStyles.globalAccentColor}
        }}
      >
          <Box component="h2">Hard Skills</Box>
            <ul>
              <li>
                <div>{titleProgrammingLang[languageFromSlice as keyof typeof titleProgrammingLang]}</div>
                <ul>
                  <li><span><RemoveIcon color="secondary"/>TypeScript</span></li>
                  <li><span><RemoveIcon color="secondary"/>JavaScript (ES6+)</span></li>
                </ul>
              </li>
              <li>
                <div>{titleStack[languageFromSlice as keyof typeof titleStack]}</div>
                <ul>
                  <li><span><RemoveIcon color="secondary"/>React</span></li>
                  <li><span><RemoveIcon color="secondary"/>Redux</span></li>
                  <li><span><RemoveIcon color="secondary"/>Git/Github</span></li>
                  <li><span><RemoveIcon color="secondary"/>SASS/SCSS</span></li>
                  <li><span><RemoveIcon color="secondary"/>Redux Toolkit ( + RTK Query)</span></li>
                  <li><span><RemoveIcon color="secondary"/>React Router DOM</span></li>
                  <li><span><RemoveIcon color="secondary"/>React Transition Group</span></li>
                  <li><span><RemoveIcon color="secondary"/>React hooks: (useState, useEffect, useContext, useReduser, useRef, useMemo, useCallback)</span></li>
                  <li><span><RemoveIcon color="secondary"/>Intersection Observer</span></li>
                  <li><span><RemoveIcon color="secondary"/>Material UI</span></li>
                  <li><span><RemoveIcon color="secondary"/>Bootstrap</span></li>
                  <li><span><RemoveIcon color="secondary"/>Materialize CSS</span></li>
                  <li><span><RemoveIcon color="secondary"/>Styled Components</span></li>
                </ul>
              </li>
              <li>
                <div>{titleLang[languageFromSlice as keyof typeof titleLang]}</div>
                <ul>
                  <li><span><RemoveIcon color="secondary"/>English - B1</span></li>
                  <li><span><RemoveIcon color="secondary"/>Українська - рідна</span></li>
                </ul>
              </li>
            </ul>
        </Box>
        <p ref={refELement}></p>
        { isVisibleFromSlice && 
          <Box
          component="div"
          sx={{
            border: globalCustomStyles.globalBorder,
            background: globalCustomStyles.globalBackgroundDiv,
            boxShadow: globalCustomStyles.globalBoxShadow,
          }}
          >
            <h2>Soft Skills:</h2>
            <ul>
              {softSkills[languageFromSlice as keyof typeof softSkills].map( (paragraph: string, index: number) => {
                return (<li key={index}><span><RemoveIcon color="secondary"/>{paragraph}</span></li>);
              })}
            </ul>
          </Box>
        }
      
    </StyledSkillsDiv>
  );
};