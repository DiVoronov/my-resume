import React, { useContext } from "react";
import { StyledExperienseComponent } from "./experiense.styles";
import RemoveIcon from "@mui/icons-material/Remove";

import { LanguageContext } from "../../../app/context/context";
import { ObjectLanguageArrayOfObjects, ComplexParagraphs } from "../../componentsTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { globalCustomStyles } from "../../../GlobalStyle";

export function Experiense() {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentExperiense: ObjectLanguageArrayOfObjects = useContext(LanguageContext).home.allInformation.workExperiense.listExperiense;

  return(
    <StyledExperienseComponent>
        {contentExperiense[languageFromSlice as keyof typeof contentExperiense].map( (paragraph: ComplexParagraphs) => {
          return (
            <div key={paragraph.index}>
              {paragraph.type === "h" && <h3 style={{color: globalCustomStyles.globalAccentColor}}>{paragraph.value}</h3>}
              {paragraph.type === "p" && <span>{paragraph.value}</span>}
              {paragraph.type === "li" && <span><RemoveIcon color="secondary"/>{paragraph.value}</span>}
            </div>
          )
        })}
    </StyledExperienseComponent>
  );
};