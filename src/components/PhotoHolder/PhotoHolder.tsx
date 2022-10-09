import * as React from "react";
import { Box, Avatar } from "@mui/material";

export default function PhotoHolder() {
  return (
    <Box
      component="div"
      sx={{
        width: "30%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "25px",
        border: "3px solid rgba(255, 255, 255, 0.473)",
        m: 5,
        p: 5

      }}>
        <Avatar
          alt="Avatar"
          src="./avatar.png"
          sx={{ width: 100, height: 100 }}
        />
        <Box component="span" sx={{fontSize: "1rem", color: "#fff"}}>Frontend React Developer </Box>
    </Box>
  );
}