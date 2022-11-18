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

export function HighBlock () {

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return (
    <>
    <Box component="div" sx={{display: "flex", justifyContent: "center", pb: 2}}>
      <CircleSpin/>
      <Box component="div" sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, mt: 2}}>
        <Parallax rotate={["40deg", "-10deg"]} style={{display: "flex", margin: "20% 1rem"}}>
          <Arrow/>
        </Parallax>
        <Parallax scale={[0.8, 1.3]} speed={10} style={{display: "flex", alignItems: "center", padding: "2rem"}}>
          <BigTextShared innerText={["About", "this APP"]}/>
        </Parallax>
      </Box>
    </Box>
    <RunningString/>
    <Box component="div" sx={{background: currentThemeColor.paletteTwo, ["& > div > div"]: {flexDirection: "row", gap: "1rem"}}}>
      <Parallax translateX={["-30%", "20%"]} style={{ padding: "1rem"}}>
        <BigTextShared innerText={["About", "Me"]}/>
      </Parallax>
    </Box>
    <RunningString/>
    </>
  );
};