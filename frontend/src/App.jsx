import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Fun from './components/Fun.jsx'

function App() {
  return (
 <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/fun" element={<Fun/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;