import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box } from "@mui/material";
import { CV } from './pages/CV';
import { ContactsPage } from './pages/Contacts';
import { SkillsPage } from './pages/Skills';
import { GlobalStyle } from "./GlobalStyle";

export function App() {
  return (
    <Box component="div" sx={{p: 1}}>
      <GlobalStyle/>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<CV/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
          <Route path="/skills" element={<SkillsPage/>} />
        </Routes>
      </BrowserRouter>
      
    </Box>
  );
}

export default App;
