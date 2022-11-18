import React, { useContext } from "react";
import { StyledHeadDiv, StyledTextDiv } from "./AboutMe.style";
import { LanguageContext } from "../../../app/context/context";
import { ObjectLanguageArrayOfObjects, ComplexParagraphs } from "../../componentsTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../../app/context/themeContext/themeContext";

export function AboutMe () {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentAboutMe: ObjectLanguageArrayOfObjects = useContext(LanguageContext).home.allInformation.aboutMe.textAboutMe;

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return (
    <div>
      {contentAboutMe[languageFromSlice as keyof typeof contentAboutMe].map( (paragraph: ComplexParagraphs) => {
        return (
          paragraph.type === "h"
            ? <StyledHeadDiv key={paragraph.index}><p style={{color: currentThemeColor.accentColor}}>{paragraph.value}</p></StyledHeadDiv>
            : <StyledTextDiv key={paragraph.index}>{paragraph.value}</StyledTextDiv>
        )
      })
      }
    </div>
  );
};