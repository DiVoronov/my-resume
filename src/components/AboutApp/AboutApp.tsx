import React, { useContext } from "react";
import { StyledAboutApp } from "./AboutApp.syle";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import { LanguageContext } from "../../app/context/context";
import { ObjectLanguage, ObjectLanguageParagraph } from "../componentsTypes";
import { RootState } from "../../app/store";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../app/context/themeContext/themeContext";

export function AboutApp () {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentAboutApp = useContext(LanguageContext).about;

  const aboutTitle: ObjectLanguage = contentAboutApp.title;
  const aboutText: ObjectLanguageParagraph = contentAboutApp.text;

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return (
    <StyledAboutApp>
      <h1 style={{color: currentThemeColor.accentColor}}>{aboutTitle[languageFromSlice as keyof typeof aboutTitle]}</h1>
      {aboutText[languageFromSlice as keyof typeof aboutText].map((paragraph: string, index: number) => {
        return (<span key={index}><RemoveIcon color={currentTheme === "dark" ? "error" : "info"}/> { paragraph } </span>)
      })}
    </StyledAboutApp>
  );
};

