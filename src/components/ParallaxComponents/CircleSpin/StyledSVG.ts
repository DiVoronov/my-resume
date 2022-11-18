import React from "react";
import styled from "styled-components";

export const StyledSVG = styled.svg`
animation: rotatedText 5s linear infinite 0s;

&:hover {
  cursor: pointer;
  animation: pulsar 2s ease-in-out infinite 0s;
}

@keyframes rotatedText {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
  
}

@keyframes pulsar {
  0% {
    scale: 1;
    transform: rotate(0turn);
  }
  50% {
    scale: 1.3;
  }
  100% {
    scale: 1;
    transform: rotate(1turn);
  }
  
}

`