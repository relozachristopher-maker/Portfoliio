import React, { useRef } from 'react'

export default function Home(){
  const carouselRef = useRef(null)
  const pauseCarousel = ()=>{
    carouselRef.current?.classList.add('paused')
  }
  const resumeCarousel = ()=>{
    carouselRef.current?.classList.remove('paused')
  }

  return (
    <main className="container">
      <section className="hero">
      <div className="hero-content">
        <h2>Hello,</h2>
        <h1>I'm Neil Christopher <span className="last-name">Reloza</span></h1>
        <h3>Programmer & Web Developer</h3>
        <p className="lead">I am an IT student at STI College studying programming, databases, networking and web development. I enjoy building websites and learning modern tools to turn my ideas into reality.</p>
        <div className="hero-actions">
          <a className="btn primary" href="/Reloza_Resume.pdf" target="_blank" rel="noopener noreferrer">See Resume</a>
        </div>

        <h4>Languages</h4>
        <div className="languages-carousel-container">
          <div ref={carouselRef} className="languages-carousel" onMouseEnter={pauseCarousel} onMouseLeave={resumeCarousel}>
            <div className="carousel-item">
              <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" alt="Java logo"/></a>
              <div className="lang-label">Java</div>
            </div>
            <div className="carousel-item">
              <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="Python logo"/></a>
              <div className="lang-label">Python</div>
            </div>
            <div className="carousel-item">
              <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript logo"/></a>
              <div className="lang-label">JavaScript</div>
            </div>
            <div className="carousel-item">
              <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML logo"/></a>
              <div className="lang-label">HTML</div>
            </div>
            <div className="carousel-item">
              <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/100/css3.png" alt="CSS logo"/></a>
              <div className="lang-label">CSS</div>
            </div>
          </div>
        </div>
      </div>

      <aside className="image">
        <img src="/img/pic.jpg" alt="Neil" className="profile" />
      </aside>
    </section>

    <section className="details-section">
      <div className="details-grid">
        <article className="info-card about-card">
          <h4>About</h4>
          <p>Hello! My name is Christopher, and I am currently a college student working toward building a career in the field of technology. One of my goals after graduation is to work abroad, where I can gain experience, expand my knowledge, and contribute my skills in a professional environment.</p>
        </article>
        <article className="info-card contacts-card">
          <h4>Contacts</h4>
          <p>📞 <strong>0906-705-4404</strong></p>
          <p><img src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png" alt="Gmail"/> <strong><a href="mailto:reloza.work@gmail.com">reloza.work@gmail.com</a></strong></p>
        </article>
        <article className="info-card socials-card">
          <h4>Socials</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/neil.chrstpr" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook logo"/>Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram logo"/>Instagram</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluency/48/github.png" alt="GitHub logo"/>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  </main>
  )
}
