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

export function RunningString () {

  return (
    <Box sx={{position: "relative", 
    // background: paletteFive, 
    background: paletteThree, 
    width: "100%", 
    // boxShadow: "inset 0px 14px 28px #5c3d3e, inset 0px -14px 28px #fff3f8",
    // borderTop: `2px solid ${accentColor}`, 
    // borderBottom: `2px solid ${accentColor}`, 
    height: "1.5rem",
    }}>
      <Parallax 
        style={{position: "absolute", top: "10%", left: "0px"}}
        translateX={["-500px", "0px"]}
      >
        <span style={{fontSize: "1rem", color: paletteFour, fontWeight: "800", opacity: "0.8"}}> resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_</span>
      </Parallax>
      <Parallax 
        style={{position: "absolute", top: "10%", left: "0px"}}
        translateX={["0px", "-200px"]}
      >
        <span style={{fontSize: "1rem", color: paletteOne, fontWeight: "800", opacity: "0.8"}}> resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_resume_</span>
      </Parallax>
    </Box>
  );
};