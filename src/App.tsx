import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import {
  Container,
  Box
} from "@mui/material";
import { CV } from './pages/CV';
import { Contacts } from './pages/Contacts';
import { Skills } from './pages/Skills';

export function App() {
  return (
    <Container sx={{p: 1, width: "100%"}}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<CV/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
      </BrowserRouter>
      
    </Container>
  );
}

export default App;
