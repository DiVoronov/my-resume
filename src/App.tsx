import React, { useContext } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import { CV } from "./pages/CV";
import { ContactsPage } from "./pages/Contacts";
import { AboutPage } from "./pages/AboutPage";
import { GlobalStyle } from "./GlobalStyle";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from './app/store';
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { IThemesColor, ThemeContext, ICurrentThemesColor } from "./app/context/themeContext/themeContext";
import { closeMenu, openMenu } from "./app/slices/menuCloseSlice";

export function App() {

  const isRenderWelcome = useSelector( (state: RootState)=> state.welcomePage);

  const currentTheme: string = useSelector( (state: RootState) => state.theme);
  const themeColor: IThemesColor = useContext(ThemeContext);
  const currentThemeColor: ICurrentThemesColor = themeColor[currentTheme as keyof typeof themeColor];

  const dispatch = useDispatch();
  const isMenuOpenFromSlice: boolean = useSelector( (state: RootState) => state.closeMenu);
  const closeMenuInApp = (action: boolean) => {
    isMenuOpenFromSlice && dispatch(closeMenu(action));
  };
  const rootContainer = document.getElementById("root")!;
  rootContainer.style.background = currentThemeColor.paletteOne;

  return (
    <Box 
      component="div" 
      onClick={() => closeMenuInApp(false)}
      sx={{
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
