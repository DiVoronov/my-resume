import React, { useContext } from "react";
import { Box, Avatar } from "@mui/material";

import { LanguageContext } from '../../app/context/context';
import { ObjectLanguage } from "../componentsTypes";
import { useSelector } from "react-redux";
import { useGetAvatarByLoginQuery } from "../../app/avatar.api/avatar.api";
import { globalBorder, globalBackgroundDiv } from "../../GlobalStyle";
import { LoaderAvatar } from "./LoaderAvatar";

export default function PhotoHolder() {

  const languageFromSlice: string = useSelector( (state: any) => state.language);

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
        background: globalBackgroundDiv,
        m: 2,
        p: 2

      }}>
        { isLoading 
          ? <LoaderAvatar/>
          : data ? (
            <Avatar
              alt="Avatar"
              src={data.avatar_url}
              sx={{ width: {xs: "100px", md: "200px"}, height: {xs: "100px", md: "200px"}, m: 2 }}
            />
          ) : error && (
            <Avatar
              alt="Avatar"
              src={""}
              sx={{ width: {xs: "100px", md: "200px"}, height: {xs: "100px", md: "200px"}, m: 2 }}
            />
          )
        }
        <Box component="span" sx={{fontSize: "1rem", color: "#fff"}}>{contentPhotoHolder[languageFromSlice as keyof typeof contentPhotoHolder]}</Box>
    </Box>
  );
}