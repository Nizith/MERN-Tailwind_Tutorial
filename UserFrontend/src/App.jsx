import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {

  return (
    <Router>
      <>
        <div className='App flex flex-col min-h-screen'>
          <Routes>
            <Route path='/' element={< SignUp />}/>
          </Routes>
        </div>
      </>
    </Router>
  )
}

export default App
