import React, { useContext } from "react";
import { StyledExperienceComponent } from "./experience.styles";
import RemoveIcon from "@mui/icons-material/Remove";

import { LanguageContext } from "../../../app/context/context";
import { ObjectLanguageArrayOfObjects, ComplexParagraphs } from "../../componentsTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../../app/context/themeContext/themeContext";

export function Experience() {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentExperience: ObjectLanguageArrayOfObjects = useContext(LanguageContext).home.allInformation.workExperience.listExperience;

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return(
    <StyledExperienceComponent>
        {contentExperience[languageFromSlice as keyof typeof contentExperience].map( (paragraph: ComplexParagraphs) => {
          return (
            <div key={paragraph.index}>
              {paragraph.type === "h" && <h3 style={{color: currentThemeColor.accentColor}}>{paragraph.value}</h3>}
              {paragraph.type === "p" && <span>{paragraph.value}</span>}
              {paragraph.type === "li" && <span><RemoveIcon color={currentTheme === "dark" ? "error" : "info"}/>{paragraph.value}</span>}
            </div>
          )
        })}
    </StyledExperienceComponent>
  );
};