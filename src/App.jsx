import React from 'react'
import './App.css'
import Mainpage from './components/Mainpage'
import Signinpage from './components/signinpage/Signinpage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/Mainpage" element={<Mainpage/>}></Route>
        <Route path= "/Signinpage" element={<Signinpage/>}></Route>
        </Routes>
      </BrowserRouter>
  )

}

export default App