import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Navbar/>}/>
          </Routes>
        </div>
      </></Router>
  )
}

export default App
