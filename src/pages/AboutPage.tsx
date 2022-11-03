import React, { useEffect } from "react";
import { globalCustomStyles } from "../GlobalStyle";
import { Box } from "@mui/material";
import { AboutApp } from "../components/AboutApp/AboutApp";
import { useDispatch } from "react-redux";
import { hideWelcomePage } from "../app/slices/welcomeSlice";

export function AboutPage () {

  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(hideWelcomePage(false));
  }, []);

  return (
      <Box 
        component="div" 
        className="allInfo appearDiv" 
        sx={{
          border: globalCustomStyles.globalBorder, 
          m: {xs: 1, sm: 3, md: 5}, 
          p: {xs: 1, sm: 3, md: 5},
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: globalCustomStyles.globalBackgroundDiv,
          borderRadius: "25px",
          color: globalCustomStyles.globalColor,
          boxShadow: globalCustomStyles.globalBoxShadow
        }}
      >
        <AboutApp/>
      </Box>
  );
};