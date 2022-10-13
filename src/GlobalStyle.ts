import { createGlobalStyle } from "styled-components";

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

  #root {
    background: rgba(0, 0, 0, 0.87);
  }

  li {
    margin-left: 1rem;
  }
`;

export const globalBorder = "3px solid rgba(255, 255, 255, 0.5)";
export const globalBackgroundDiv = "linear-gradient(150deg, rgba(255, 255, 255, 0.356), rgba(245, 245, 245, 0), rgba(245, 245, 245, 0),rgba(245, 245, 245, 0))";
export const globalAccentColor = "rgb(215, 136, 231)";
