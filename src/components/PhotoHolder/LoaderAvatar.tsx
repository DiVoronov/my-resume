import React from "react";
import { Skeleton } from "@mui/material";

export function LoaderAvatar () {

  return (
    <Skeleton variant="circular" sx={{width: {xs: "100px", md: "200px"}, height: {xs: "100px", md: "200px"}}}/>
  )
}