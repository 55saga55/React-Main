import React from 'react'
import Home from "./Home"
import About from './About'
import Contact from './Contact'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom"
export default function RouterMain() {
  return (
    <div>
        <BrowserRouter>
            <Link to="/" className='mx-2' >Home</Link>
            <Link to="/About" className='mx-2' >About</Link>
            <Link to="/Contact" className='mx-2' >Contact</Link>
        <Routes>
           
        <Route path='/' element={<Home />} />
        <Route path='/About' element={ <About />} />
        <Route path='/Contact' element={<Contact />} />
       
        
        </Routes>
        </BrowserRouter>
    </div>
  )
}
