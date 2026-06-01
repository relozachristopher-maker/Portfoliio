import React, { useState } from 'react'

export default function Projects(){
  const [notice, setNotice] = useState('')

  const showNotice = (message) => {
    setNotice(message)
    window.clearTimeout(window.__projectNoticeTimeout)
    window.__projectNoticeTimeout = window.setTimeout(()=> setNotice(''), 1800)
  }

  return (
    <section className="projects-page">
      <h1>My Projects</h1>
      <p className="lead">A few projects that I'm currently working on.</p>

      <div className="projects-grid">
        <a className="project-card" href="/" target="_blank" rel="noopener noreferrer">
          <img src="/img/portfolio.png" alt="Portfolio Website" />
          <div className="project-name">Portfolio Website</div>
        </a>
        <div className="project-card in-progress" aria-hidden="true" onClick={(e)=>{ e.preventDefault(); showNotice('This project is in progress.') }}>
          <img src="https://thumbs.dreamstime.com/b/progress-sticker-progress-rounded-isolated-sign-progress-progress-sticker-158772794.jpg" alt="Weather Website" />
          <div className="project-name">Weather Website (in progress)</div>
        </div>
        <div className="project-card in-progress" aria-hidden="true" onClick={(e)=>{ e.preventDefault(); showNotice('This project is in progress.') }}>
          <img src="https://thumbs.dreamstime.com/b/progress-sticker-progress-rounded-isolated-sign-progress-progress-sticker-158772794.jpg" alt="School Website" />
          <div className="project-name">School Website (in progress)</div>
        </div>
      </div>

      {notice && <div className="progress-message">{notice}</div>}
    </section>
  )
}
