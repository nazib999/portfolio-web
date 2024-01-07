import React, { useState } from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Testmonial from './components/testimonial/Testmonial'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import './App.scss'
import Menu from './components/menu/Menu'

const App = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Testmonial/>
        <Works/>
        <Contact/>
      </div>
  
    </div>
  )
}

export default App