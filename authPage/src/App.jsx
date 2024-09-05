import React from 'react'
import Signin from './components/Signin'
import Signup from './components/SignUp'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>

      <Routes>

        <Route path='/Signup' element={<Signup />} />
        <Route path='/Signin' element={<Signin />} />

      </Routes>

    </Router>
  )
}

export default App
