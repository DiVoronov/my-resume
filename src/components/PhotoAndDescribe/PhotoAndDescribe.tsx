import React, { useContext } from "react";
import PhotoHolder from "../PhotoHolder/PhotoHolder";
import { LanguageContext } from "../../app/context/context";
import { ObjectLanguageArrayOfObjects, ComplexParagraphs } from "../componentsTypes";
import { globalCustomStyles } from "../../GlobalStyle";

import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export function PhotoAndDescribe () {
  
  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentCardDescribe: ObjectLanguageArrayOfObjects = useContext(LanguageContext).home.photoAndDescribe.cardDescribe;
  
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
          color: globalCustomStyles.globalColor, 
          borderRadius: "25px",
          background: globalCustomStyles.globalBackgroundDiv,
          boxShadow: globalCustomStyles.globalBoxShadow,
          border: globalCustomStyles.globalBorder,
          m: 2, p: 2,
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