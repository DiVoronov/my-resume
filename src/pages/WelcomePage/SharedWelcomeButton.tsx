import React from "react";
import {
  Box,
} from "@mui/material";
import { globalCustomStyles } from "../../GlobalStyle";

export function SharedWelcomeButton ( { children }: any ) {
  return (
    <Box 
      component="div" 
      className="animatedNavLink"
      sx={{
        borderRadius: "25px",
        border: `4px solid ${globalCustomStyles.globalAccentColor}`,
        color: globalCustomStyles.globalAccentColor,
        margin: {xs: "10px 0px", md: "0px 10px"}, 
        p: 3,
        width: "100%",
        fontWeight: "600",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      { children }
    </Box>
  );
};