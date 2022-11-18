import React from "react";
import { CircleSpin } from "./CircleSpin/CircleSpin";
import { BigTextShared } from "./BigText/BigText";
import { Box } from "@mui/material";
import { Arrow } from "./BigText/Arrow";
import { Parallax } from 'react-scroll-parallax';
import { RunningString } from "./RunningString/RunningString";
import { Welcome } from "./Welcome/Welcome";

import {
  paletteOne,
  paletteTwo,
  paletteThree,
  paletteFour,
  paletteFive,
  accentColor
} from "../../app/context/themeContext/themeContext";

export function HighBlock () {

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
    <Box component="div" sx={{background: paletteTwo, ["& > div > div"]: {flexDirection: "row", gap: "1rem"}}}>
      <Parallax translateX={["-30%", "20%"]} style={{ padding: "1rem"}}>
        <BigTextShared innerText={["About", "Me"]}/>
      </Parallax>
    </Box>
    <RunningString/>
    </>
  );
};