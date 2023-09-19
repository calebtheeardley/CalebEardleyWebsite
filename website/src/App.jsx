import './App.css';
import Main from './Pages/Home.js'
import CV from './Pages/CV.js'
import Links from './Pages/Links';
import Research from './Pages/Research';
import Projects from './Pages/Projects';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Redux from './Pages/ProjectPages/Redux.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Main />} />
          <Route path="cv" element={<CV />} />
          <Route path="research" element={<Research />} />
          <Route path="projects" element={<Projects />}/>
          <Route path="projects/redux" element={<Redux />}/>
          <Route path="links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
