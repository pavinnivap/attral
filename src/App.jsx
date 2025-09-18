import React from 'react'
import './App.css'
import Signuppage from './components//signuppage/Signuppage'
import Signinpage from './components/signinpage/Signinpage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './components/role/dashboard/Dashboard'
import Samplepage from './components/role/foruser/Samplepage'


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/Signuppage" element={<Signuppage/>}></Route>
        <Route path= "/Signinpage" element={<Signinpage/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/Samplepage" element={<Samplepage/>}></Route>
        </Routes>
      </BrowserRouter>
      
  )

}

export default App