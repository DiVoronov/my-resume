import React from "react";
import { createGlobalStyle } from "styled-components";
import { globalStyles } from "./app/context/themeContext/themeFunctionProvider"

export const globalCustomStyles = globalStyles;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html, body, #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

  body {
    padding-right: 0px !important;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  #root {
    font-size: 1rem;
    font-weight: 450;
  }

  @media screen and (max-width: 450px) {
    #root {
      font-size: 0.8rem;
    }
  }

  span {
    animation: .7s appearHead ease-in;
  }

  .appearDiv {
    animation: .7s appearDiv ease-in;
  }

  span::selection, 
  h1::selection, 
  h2::selection, 
  h3::selection,
  a::selection,
  div::selection, 
  p::selection {
    background: rgba(215, 136, 231, 0.2);
  }

  @keyframes appearHead {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes appearDiv {
    0% {
      opacity: 0;
      box-shadow: none;
    }

    100% {
      opacity: 1;
    }
  }
`;