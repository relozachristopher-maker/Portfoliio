import React from 'react'
export default function ProjectModal({project,onClose}){
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(2,6,23,0.6)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:50}} onClick={onClose}>
      <div style={{background:'#fff',padding:20,borderRadius:12,maxWidth:720,width:'94%',boxShadow:'0 20px 60px rgba(2,6,23,0.2)'}} onClick={e=>e.stopPropagation()}>
        <h3 style={{marginTop:0}}>{project.title}</h3>
        <img src={project.img} alt={project.title} style={{width:'100%',height:220,objectFit:'cover',borderRadius:8}} />
        <p style={{marginTop:12}}>{project.desc}</p>
        <div style={{textAlign:'right'}}>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}
