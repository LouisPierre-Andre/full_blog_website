import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Project from './pages/Project'
import Header from './components/Header'

    
function App() {
  return (
    <BrowserRouter>
      <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/projects' element={<Project />} />

          </Routes>
      </BrowserRouter>
      
  )
}

export default App