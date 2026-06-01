import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Footer(){
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <footer className="site-footer">
      <div className="container">
        {isHome ? '© 2026 Neil Christopher Reloza' : 'reloza.work@gmail.com'}
      </div>
    </footer>
  )
}
