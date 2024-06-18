import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import AddUser from './components/AddUser';
import ProfileUser from './components/ProfileUser';

function App() {

  return (
    <Router>
      <>
        <div className='App flex flex-col min-h-screen'>
          <Routes>
            <Route path='/' element={< Welcome />}/>
            <Route path='/signup' element={< SignUp />}/>
            <Route path='/signin' element={< SignIn />} />
            <Route path='/adduser' element={ < AddUser/>} />
            <Route path='/profile' element={ < ProfileUser />} />
          </Routes>
        </div>
      </>
    </Router>
  )
}

export default App
