import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import "./tailwind-fix.css";
import App from './App.jsx';
import Matricula from './components/Matricula.jsx';
import Cursos from './components/Cursos.jsx';
import SobreNos from './components/SobreNos.jsx';
import Depoimentos from './components/Depoimentos.jsx';
import Contato from './components/Contato.jsx';
import { NextUISetup } from './nextui-setup.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUISetup>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/matricula" element={<Matricula />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </NextUISetup>
  </React.StrictMode>,
);
