import React, { useContext } from "react";
import { StyledHeadDiv, StyledTextDiv } from "./AboutMe.style";

import { LanguageContext } from "../../../app/context/context";
import { ObjectLanguageArrayOfObjects, ComplexParagraphs } from "../../componentsTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { globalCustomStyles } from "../../../GlobalStyle";

export function AboutMe () {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentAboutMe: ObjectLanguageArrayOfObjects = useContext(LanguageContext).home.allInformation.aboutMe.textAboutMe;

  return (
    <div>
      {contentAboutMe[languageFromSlice as keyof typeof contentAboutMe].map( (paragraph: ComplexParagraphs) => {
        return (
          paragraph.type === "h"
            ? <StyledHeadDiv key={paragraph.index}><p style={{color: globalCustomStyles.globalAccentColor}}>{paragraph.value}</p></StyledHeadDiv>
            : <StyledTextDiv key={paragraph.index}>{paragraph.value}</StyledTextDiv>
        )
      })
      }
    </div>
  );
};