import React, { useContext } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import { CV } from "./pages/CV";
import { ContactsPage } from "./pages/Contacts";
import { AboutPage } from "./pages/AboutPage";
import { GlobalStyle } from "./GlobalStyle";

import { useSelector } from "react-redux";
import { RootState } from './app/store';
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "./app/context/themeContext/themeContext";

export function App() {

  const isRenderWelcome = useSelector( (state: RootState)=> state.welcomePage);

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  return (
    <Box component="div" sx={{
      background: currentThemeColor.paletteOne,
      }}>
      <GlobalStyle/>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
