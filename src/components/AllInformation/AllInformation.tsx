import React from "react";

import {
  Box
} from "@mui/material";

export function AllInformation () {

  return(
    <Box 
      component="div" 
      className="allInfo" 
      sx={{
        border: "3px solid rgba(255, 255, 255, 0.473)", 
        m: 5, 
        p: 5,
        display: "flex",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: "25px",
        color: "#fff"
      }}
    >
      <Box component="div" className="workExperiense" sx={{border: "3px solid rgba(255, 255, 255, 0.473)", borderRadius: "25px", m: 5, p: 5}}>Work Experiense</Box>
      <Box component="div" className="listSkills" sx={{border: "3px solid rgba(255, 255, 255, 0.473)", borderRadius: "25px", m: 5, p: 5}}>list Skills</Box>
      <Box component="div" className="aboutMe" sx={{border: "3px solid rgba(255, 255, 255, 0.473)", borderRadius: "25px", m: 5, p: 5}}>about Me</Box>
    </Box>
  )
};