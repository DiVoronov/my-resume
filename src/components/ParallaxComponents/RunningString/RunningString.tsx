import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../../app/context/themeContext/themeContext";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

interface IPropsForRunningString {
  runningStringText: string
}

export function RunningString ( runningStringText: IPropsForRunningString) {

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];
  
  return (
    <Box sx={{position: "relative", 
      background: currentThemeColor.paletteThree, 
      width: "100%", 
      height: "1.5rem",
    }}>
      <Parallax 
        style={{position: "absolute", top: "10%", left: "0px"}}
        translateX={["-500px", "0px"]}
      >
        {/* <span style={{fontSize: "1rem", color: currentThemeColor.paletteFive, fontWeight: "900", letterSpacing: "2px", fontFamily: "Yanone Kaffeesatz", opacity: "0.8"}}> {runningStringText.runningStringText}</span> */}
      </Parallax>
      <Parallax 
        style={{position: "absolute", top: "10%", left: "0px"}}
        translateX={["0px", "-500px"]}
      >
        <span style={{fontSize: "1rem", color: currentThemeColor.paletteFive, fontWeight: "900", letterSpacing: "2px", fontFamily: "Yanone Kaffeesatz", opacity: "0.8"}}> {runningStringText.runningStringText}</span>
      </Parallax>
    </Box>
  );
};