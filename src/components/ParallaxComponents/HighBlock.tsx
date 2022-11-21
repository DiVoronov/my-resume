import React, { useContext } from "react";
import { CircleSpin } from "./CircleSpin/CircleSpin";
import { BigTextShared } from "./BigText/BigText";
import { Box } from "@mui/material";
import { Arrow } from "./BigText/Arrow";
import { Parallax } from "react-scroll-parallax";
import { RunningString } from "./RunningString/RunningString";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../app/context/themeContext/themeContext";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { LanguageContext } from "../../app/context/context";

export function HighBlock () {

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);
  const contentHighBlock = useContext(LanguageContext).parallaxArticles;
  const firstBigText: string[] = contentHighBlock.aboutApp[languageFromSlice as keyof typeof contentHighBlock.aboutApp];
  const secondBigText: string[] = contentHighBlock.aboutMe[languageFromSlice as keyof typeof contentHighBlock.aboutMe];
  const runningStringText: string = contentHighBlock.runningString[languageFromSlice as keyof typeof contentHighBlock.runningString];

  return (
    <>
    <Box component="div" sx={{display: "flex", justifyContent: "center", alignItems: "center", pb: 2, flexDirection: {xs: "column", sm: "row"}}}>
      <CircleSpin/>
      <Box component="div" sx={{display: {xs: "none", md: "flex"}, mt: 2, flexDirection: {xs: "column", md: "row"}}}>
        <Parallax rotate={["40deg", "-10deg"]} style={{display: "flex", margin: "20% 1rem"}}>
          <Arrow/>
        </Parallax>
        <Parallax scale={[0.8, 1.3]} speed={10} style={{display: "flex", alignItems: "center", padding: "2rem", maxWidth: "70%"}}>
          <BigTextShared innerText={firstBigText}/>
        </Parallax>
      </Box>
    </Box>
    <RunningString runningStringText={runningStringText}/>
    <Box component="div" sx={{background: currentThemeColor.paletteTwo, ["& > div > div"]: {flexDirection: "row", gap: "1rem"}}}>
      <Parallax translateX={["-40%", "30%"]} style={{ padding: "1rem"}}>
        <BigTextShared innerText={secondBigText}/>
      </Parallax>
    </Box>
    <RunningString runningStringText={runningStringText}/>
    </>
  );
};