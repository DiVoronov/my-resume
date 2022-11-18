import React from "react";
import { StyledBigText } from "./StyledBigText";
import { Box } from "@mui/material";
import { paletteFour, paletteFive } from "../../../app/context/themeContext/themeContext";
import { Parallax } from "react-scroll-parallax";

interface IBigTextProps {
  innerText: string[],
}

export function BigTextShared ( { innerText }: IBigTextProps ) {

  return (
    <StyledBigText>
      <Box component="span" sx={{color: paletteFour, textShadow: `3px 3px 0px ${paletteFive}`}}>{innerText[0]}</Box>
      <Box component="span" sx={{color: paletteFour, textShadow: `3px 3px 0px ${paletteFive}`}}>{innerText[1]}</Box>
    </StyledBigText>
  );
};