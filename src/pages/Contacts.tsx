import React, { useEffect } from "react";
import { globalCustomStyles } from "../GlobalStyle";

import { Box } from "@mui/material";
import { Contacts } from "../components/Contacts/Contacts";
import { useDispatch } from "react-redux";
import { hideWelcomePage } from "../app/slices/welcomeSlice";

export function ContactsPage () {

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
          m: 1, p: 1, mt: 3,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: globalCustomStyles.globalBackgroundDiv,
          borderRadius: "25px",
          color: globalCustomStyles.globalColor,
          boxShadow: globalCustomStyles.globalBoxShadow
        }}
      >
        <Contacts/>
      </Box>
  );
};