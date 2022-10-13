import React from "react";
import { globalBorder, globalBackgroundDiv } from "../GlobalStyle";

import { Box } from "@mui/material";
import { Contacts } from "../components/Contacts/Contacts";

export function ContactsPage () {

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
        My Contacts
        <Contacts/>
        </Box>
    </>
  )
};