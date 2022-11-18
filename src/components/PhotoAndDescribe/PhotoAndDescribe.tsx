import React, { useContext } from "react";
import PhotoHolder from "../PhotoHolder/PhotoHolder";
import { LanguageContext } from "../../app/context/context";
import { ObjectLanguageArrayOfObjects, ComplexParagraphs } from "../componentsTypes";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../app/context/themeContext/themeContext";

export function PhotoAndDescribe () {
  
  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentCardDescribe: ObjectLanguageArrayOfObjects = useContext(LanguageContext).home.photoAndDescribe.cardDescribe;

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return(
    <Box 
      component="div" 
      className="photoAndDescribe" 
      sx={{
        mt: 2, mb: 2, p: 1,
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        borderRadius: "25px",
        justifyContent: "center",
        alignItems: {xs: "stretch", md: "center"},
      }}
    >
      <PhotoHolder/>
      <Box 
      component="div" 
      className="describe"
      sx={{
        color: currentThemeColor.paletteFive, 
        borderRadius: "25px",
        border: `3px solid ${currentThemeColor.paletteFour}`,
        background: currentThemeColor.paletteTwo,
        boxShadow: `8px 8px 0px ${currentThemeColor.paletteThree}`,
        margin: "1rem", padding: "2rem",
        flexGrow: "5"
      }}
    >
      {contentCardDescribe[languageFromSlice as keyof typeof contentCardDescribe].map( (paragraph: ComplexParagraphs) => {
        return (
          <Box component="span" sx={{display: "flex", flexDirection: "column", flexWrap: "wrap", textAlign: {xs: "center", md: "justify"}}} key={paragraph.index}>
            { paragraph.type === "h" 
              ? (<h3>{paragraph.value}</h3>)
              : (<Box component="span" sx={{ml: {xs: 0, md: 2}, mb: 1}}>{paragraph.value}</Box>)
            }
          </Box>
        );
      })}
      </Box>
    </Box>
  );
};