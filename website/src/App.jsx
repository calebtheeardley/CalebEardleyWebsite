import './App.css';
import Main from './Pages/Home.js'
import CV from './Pages/CV.js'
import Links from './Pages/Links';
import Research from './Pages/Research';
import Projects from './Pages/Projects';
import Layout from './Pages/Layout.js'
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Redux from './Pages/ProjectPages/Redux.js';


// function App() {
//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           <Main>
//           </Main>
//         </header>
//       </div>
//     </>
     
//   );
// }
// function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   return (
//     <div>
//       <button onClick={() => setCurrentPage('home')}>Home</button>
//       <button onClick={() => setCurrentPage('cv')}>About</button>

//       {currentPage === 'home' && <Main/>}
//       {currentPage === 'cv' && <CV/>}
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Main />} />
          <Route path="cv" element={<CV />} />
          <Route path="research" element={<Research />} />
          <Route path="projects" element={<Projects />}/>
          <Route path="projects/redux" element={<Redux />}/>
          <Route path="links" element={<Links />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
