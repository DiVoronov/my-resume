import React, { useContext } from "react";
import { Box, Avatar } from "@mui/material";

import { LanguageContext } from "../../app/context/context";
import { ObjectLanguage } from "../componentsTypes";
import { useSelector } from "react-redux";
import { useGetAvatarByLoginQuery } from "../../app/avatar.api/avatar.api";
import { globalCustomStyles } from "../../GlobalStyle";
import { LoaderAvatar } from "./LoaderAvatar";
import logo from "../../bigAvatar.png";
import { RootState } from "../../app/store";

export default function PhotoHolder() {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentPhotoHolder: ObjectLanguage = useContext(LanguageContext).home.photoAndDescribe.headerPhoto;

  const { data, error, isLoading } = useGetAvatarByLoginQuery("DiVoronov");

  return (
    <Box
      component="div"
      sx={{
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        flexShrink: "5",
        alignItems: "center",
        borderRadius: "25px",
        background: globalCustomStyles.globalBackgroundDiv,
        boxShadow: globalCustomStyles.globalBoxShadow,
        border: globalCustomStyles.globalBorder,
        m: 2, p: 2
      }}>
        { isLoading 
          ? <LoaderAvatar/>
          : data ? (
            <Avatar
              alt="Avatar"
              src={data.avatar_url}
              sx={{ width: {xs: "150px", md: "200px"}, height: {xs: "150px", md: "200px"}, m: 2, boxShadow: globalCustomStyles.globalBoxShadow, border: globalCustomStyles.globalBorder}}
            />
          ) : error && (
            <Avatar
              alt="Avatar"
              src={logo}
              sx={{ width: {xs: "150px", md: "200px"}, height: {xs: "150px", md: "200px"}, m: 2, boxShadow: globalCustomStyles.globalBoxShadow, border: globalCustomStyles.globalBorder }}
            />
          )
        }
        <Box component="span" sx={{fontSize: "1rem", color: globalCustomStyles.globalColor, textAlign: "center"}}>{contentPhotoHolder[languageFromSlice as keyof typeof contentPhotoHolder]}</Box>
    </Box>
  );
};