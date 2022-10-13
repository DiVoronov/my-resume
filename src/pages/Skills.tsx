import React from "react";
import { Skills } from "../components/AllInformation/Skills/Skills";
import { globalBorder, globalBackgroundDiv } from "../GlobalStyle";
import { Box } from "@mui/material";

export function SkillsPage () {

  return (
    <>
      <Box 
        component="div" 
        className="allInfo" 
        sx={{
          border: globalBorder, 
          m: 5, 
          p: 5,
          display: "flex",
          flexDirection: "column",
          background: globalBackgroundDiv,
          borderRadius: "25px",
          color: "#fff"
        }}
      >
        <Skills/>
        </Box>
    </>
  )
};