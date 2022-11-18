import React from "react";
import { Box } from "@mui/material";
import { Parallax } from 'react-scroll-parallax';

import {
  paletteOne,
  paletteTwo,
  paletteThree,
  paletteFour,
  paletteFive,
  accentColor
} from "../../../app/context/themeContext/themeContext";

export function Welcome () {

  const ColorBox = () => (<div style={{width: "30%", height: "0.5rem", background: accentColor, margin: "0.1rem"}}></div>);
  
  return (
    <Parallax scale={[0.8, 1.5]} speed={10}>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <ColorBox/>
        <ColorBox/>
        <Box sx={{color: paletteThree}}> Welcome! </Box>
        <ColorBox/>
        <ColorBox/>
      </Box>
    </Parallax>
  );
};