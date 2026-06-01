import React, { useEffect, useRef } from 'react'
export default function SkillBar({label,value=60}){
  const bar = useRef()
  useEffect(()=>{
    const el = bar.current
    el.style.width = '0%'
    setTimeout(()=> el.style.width = value + '%',120)
  },[value])
  return (
    <div style={{marginBottom:8}}>
      <div style={{display:'flex',justifyContent:'space-between',fontWeight:700,marginBottom:6}}><div>{label}</div><div>{value}%</div></div>
      <div style={{background:'#f1f5f9',height:10,borderRadius:8,overflow:'hidden'}}>
        <div ref={bar} style={{height:'100%',background:'var(--accent)',width:'0%',transition:'width 900ms ease'}}></div>
      </div>
    </div>
  )
}
