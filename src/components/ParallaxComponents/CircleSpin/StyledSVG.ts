import React from "react";
import styled from "styled-components";

export const StyledSVG = styled.svg`
transform: rotate(0.5turn);
animation: rotatedText 5s linear infinite 0s;

@keyframes rotatedText {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
  
}
`