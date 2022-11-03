import React, { useContext } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import { CV } from "./pages/CV";
import { ContactsPage } from "./pages/Contacts";
import { AboutPage } from "./pages/AboutPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeFunctionProvider } from "./app/context/themeContext/themeFunctionProvider";
import { ThemeContext } from "./app/context/themeContext/themeContext";

import { useSelector } from "react-redux";
import { RootState } from './app/store';
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";


export function App() {
  const currentTheme = useSelector( (state: RootState) => state.theme);
  const isRenderWelcome = useSelector( (state: RootState)=> state.welcomePage);
  const themes = useContext(ThemeContext);
  const globalRootColor = themes[currentTheme as keyof typeof themes].globalRootColor

  return (
    <Box component="div" sx={{p: 1, background: globalRootColor}}>
      <GlobalStyle/>
      <ThemeFunctionProvider/>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<CV/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="*" element={<></>} />
        </Routes>
        { isRenderWelcome && <WelcomePage/> }
      </BrowserRouter>
    </Box>
  );
};

export default App;
