import React from "react";
import {
  paletteOne,
  paletteTwo,
  paletteThree,
  paletteFour,
  paletteFive,
  accentColor
} from "../../../app/context/themeContext/themeContext";

export function Arrow () {

  return (
    <svg width="20vh" viewBox="0 0 409 227" fill={paletteThree} xmlns="http://www.w3.org/2000/svg">
      <path d="M1 116.5L115.5 0.5L88.5 69.5H407L362 116.5L407 159.5H88.5L115.5 226.5L1 116.5Z" stroke="none"/>
    </svg>
  );
};


