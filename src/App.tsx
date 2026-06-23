
// import { Route, Routes } from 'react-router-dom'
// import React from "react";
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import { Route, Routes } from 'react-router-dom'
import Safty from './pages/safty/Safty'
import Wdriver from './pages/wdriver/Wdriver'
import Driverassist from './pages/driverassist/Driverassist'
import Technology from './pages/technology/Technology'
import Carouselslide from './pages/carouselslide/Carouselslide'
// import Accordin  from './pages/accordin/Accordin'
// import Map from './compnents/map/Map'

function App(){
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/safty' element={<Safty/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/wdriver' element={<Wdriver/>}/>
      <Route path='/driverassist' element={<Driverassist/>}/>
      <Route path='/carouselslide'  element={<Carouselslide/>}/>
      {/* <Route path='/map' element={<Map/>}/> */}
    </Routes>
    
   
    
    </>

  )
}
export default App