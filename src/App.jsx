import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Contactpage from './pages/Contactpage'

import Projectpage from './pages/Projectpage'
import Aboutpage from './pages/Aboutpage'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/Contactpage' element={<Contactpage/>}/>
      <Route path='/Aboutpage' element={<Aboutpage/>}/>
      <Route path='/Projectpage' element={<Projectpage/>}/>

    </Routes>
  )
}

export default App
