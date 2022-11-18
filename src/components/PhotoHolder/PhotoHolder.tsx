import React, { useContext } from "react";
import { Box, Avatar } from "@mui/material";
import { LanguageContext } from "../../app/context/context";
import { ObjectLanguage } from "../componentsTypes";
import { useSelector } from "react-redux";
import { useGetAvatarByLoginQuery } from "../../app/avatar.api/avatar.api";
import { LoaderAvatar } from "./LoaderAvatar";
import logo from "../../bigAvatar.png";
import { RootState } from "../../app/store";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../app/context/themeContext/themeContext";
import { StyledPhotoHolder } from "./PhotoHolder.style";

export default function PhotoHolder() {

  const languageFromSlice: string = useSelector( (state: RootState) => state.language);

  const contentPhotoHolder: ObjectLanguage = useContext(LanguageContext).home.photoAndDescribe.headerPhoto;

  const { data, error, isLoading } = useGetAvatarByLoginQuery("DiVoronov");
  
  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return (
    <StyledPhotoHolder
      style={{
        border: `3px solid ${currentThemeColor.paletteFour}`,
        background: currentThemeColor.paletteTwo,
        boxShadow: `8px 8px 0px ${currentThemeColor.paletteThree}`,
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
                boxShadow: `8px 8px 0px ${currentThemeColor.paletteThree}`,
                border: `3px solid ${currentThemeColor.paletteFour}`,
                ["&::before"]: {background: currentThemeColor.accentColor},
              }}
            />
          ) : error && (
            <Avatar
              alt="Avatar"
              src={logo}
              sx={{ 
                width: {xs: "150px", md: "200px"}, height: {xs: "150px", md: "200px"}, m: 2, 
                boxShadow: `8px 8px 0px ${currentThemeColor.paletteThree}`,
                border: `3px solid ${currentThemeColor.paletteFour}`,
              }}
            />
          )
        }
        <Box component="span" sx={{
            fontSize: "1rem", 
            color: currentThemeColor.paletteFive,
            textAlign: "center"
          }}>{contentPhotoHolder[languageFromSlice as keyof typeof contentPhotoHolder]}</Box>
    </StyledPhotoHolder>
  );
};