import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <>
        <div className='App'>
          <Navbar/>
          <Routes>
          </Routes>
          <Footer/>
        </div>
      </></Router>
  )
}

export default App
