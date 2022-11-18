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

import {
  paletteOne,
  paletteTwo,
  paletteThree,
  paletteFour,
  paletteFive
} from "../../app/context/themeContext/themeContext";
import { StyledPhotoHolder } from "./PhotoHolder.style";

export default function PhotoHolder() {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentPhotoHolder: ObjectLanguage = useContext(LanguageContext).home.photoAndDescribe.headerPhoto;

  const { data, error, isLoading } = useGetAvatarByLoginQuery("DiVoronov");

  return (
    <StyledPhotoHolder
      style={{
        // background: globalCustomStyles.globalBackgroundDiv,
        // boxShadow: globalCustomStyles.globalBoxShadow,
        // border: globalCustomStyles.globalBorder,
        border: `3px solid ${paletteFour}`,
        background: paletteTwo,
        boxShadow: `8px 8px 0px ${paletteThree}`,
      }}>
        { isLoading 
          ? <LoaderAvatar/>
          : data ? (
            <Avatar
              alt="Avatar"
              className="avatarAPI"
              src={data.avatar_url}
              sx={{ 
                width: {xs: "150px", md: "200px"}, height: {xs: "150px", md: "200px"}, m: 2, 
                // boxShadow: globalCustomStyles.globalBoxShadow, 
                // border: globalCustomStyles.globalBorder
                boxShadow: `8px 8px 0px ${paletteThree}`,
                border: `3px solid ${paletteFour}`,
              }}
            />
          ) : error && (
            <Avatar
              alt="Avatar"
              src={logo}
              sx={{ 
                width: {xs: "150px", md: "200px"}, height: {xs: "150px", md: "200px"}, m: 2, 
                // boxShadow: globalCustomStyles.globalBoxShadow, 
                // border: globalCustomStyles.globalBorder 
                boxShadow: `8px 8px 0px ${paletteThree}`,
                border: `3px solid ${paletteFour}`,
              }}
            />
          )
        }
        <Box component="span" sx={{
            fontSize: "1rem", 
            // color: globalCustomStyles.globalColor,
            color: paletteFive,
            textAlign: "center"
          }}>{contentPhotoHolder[languageFromSlice as keyof typeof contentPhotoHolder]}</Box>
    </StyledPhotoHolder>
  );
};