import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation(){
  const loc = useLocation()
  return (
    <nav>
      <div className="nav-inner">
        <ul className="nav-center">
          <li><Link to="/" className={loc.pathname==='/'? 'active':''}>Home</Link></li>
          <li><Link to="/projects" className={loc.pathname==='/projects'? 'active':''}>Projects</Link></li>
        </ul>
      </div>
    </nav>
  )
}
