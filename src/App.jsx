import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App(){
  useEffect(()=>{
    const handleClick = (e)=>{
      const ignore = e.target.closest('a, button, .btn, .project-card, .carousel-item, nav, .contact, .languages-carousel, input, textarea, select')
      if(ignore) return
      const effect = document.createElement('span')
      effect.className = 'background-click-effect'
      effect.style.left = `${e.pageX}px`
      effect.style.top = `${e.pageY}px`
      document.body.appendChild(effect)
      setTimeout(()=>effect.remove(), 900)
    }

    document.addEventListener('click', handleClick)
    return ()=> document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      <Footer />
    </div>
  )
}
