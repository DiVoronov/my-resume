import React, { useContext } from "react";
import { Parallax } from "react-scroll-parallax";
import { StyledSVG } from "./StyledSVG";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "../../../app/context/themeContext/themeContext";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { NavLink } from "react-router-dom";

export function CircleSpin () {

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];
  
  return (
    <Parallax style={{width: "40vw", display: "flex", justifyContent: "center"}}>
      <NavLink to="/about" style={{width: "40vw", display: "flex", justifyContent: "center", textDecoration: "none"}}>
        <StyledSVG viewBox="0 0 70 70" width="90%" >
          <defs>
            <path d="M35,35m -23, 0a23,23 0 1,1 46, 0a23,23 0 1,1 -46,0" fill={currentThemeColor.accentColor} id="textCircle"/>
          </defs>
          <path d="m51.109282,34.944234c0,8.820485 -7.150388,15.970874 -15.970874,15.970874c-8.820485,0 -15.970874,-7.150388 -15.970874,-15.970874c0,-8.820485 7.150388,-15.970874 15.970874,-15.970874c8.820485,0 15.970874,7.150388 15.970874,15.970874" fill={currentThemeColor.accentColor} />
          <text style={{font: "initial", fontSize: ".24rem", letterSpacing: "2px", fontWeight: "900"}} fill={currentThemeColor.paletteFive} >
            <textPath xlinkHref="#textCircle" startOffset="0%"> - this is my Resume - це моє резюме </textPath>
          </text>
        </StyledSVG>
      </NavLink>
    </Parallax>
  );
};