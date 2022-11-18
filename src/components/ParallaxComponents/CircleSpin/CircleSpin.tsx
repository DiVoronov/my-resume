import React from "react";
import { Parallax, ParallaxBanner, ParallaxBannerLayer, useParallax  } from "react-scroll-parallax";

import {
  paletteOne,
  paletteTwo,
  paletteThree,
  paletteFour,
  paletteFive,
  accentColor
} from "../../../app/context/themeContext/themeContext";
import { StyledSVG } from "./StyledSVG";

export function CircleSpin () {

  return (
    <Parallax style={{width: "50vh"}} 
      // translateX={["0%", "15%"]} 
      // translateY={["0%", "15%"]} 
      // scale={[0.9, 1.1]} 
    >
      <StyledSVG viewBox="0 0 70 70" width="90%">
        <defs>
          <path d="M35,35m -23, 0a23,23 0 1,1 46, 0a23,23 0 1,1 -46,0" fill={accentColor} id="textCircle"/>
        </defs>
          <path d="m51.109282,34.944234c0,8.820485 -7.150388,15.970874 -15.970874,15.970874c-8.820485,0 -15.970874,-7.150388 -15.970874,-15.970874c0,-8.820485 7.150388,-15.970874 15.970874,-15.970874c8.820485,0 15.970874,7.150388 15.970874,15.970874" fill={accentColor} />
          <text style={{font: "initial", fontSize: ".4rem", letterSpacing: "3px", fontWeight: "900"}} fill={paletteFive} >
            <textPath xlinkHref="#textCircle" startOffset="0%"> this is my Resume </textPath>
          </text>
      </StyledSVG>
    </Parallax>
  );
};