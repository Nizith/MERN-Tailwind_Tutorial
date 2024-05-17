import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {

  return (
    <Router>
      <>
        <Navbar />
        <div className='App flex flex-col min-h-screen'>
          <Routes>
            <Route path='/' element={< Home />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  )
}

export default App
