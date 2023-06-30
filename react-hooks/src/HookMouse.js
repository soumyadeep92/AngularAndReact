import React,{useEffect, useState} from 'react'

function HookMouse(){
  const [x,setX]=useState(0);
  const [y,setY]=useState(0);
  const logMousePosition=(e)=>{
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect((e)=>{
    window.addEventListener('mousemove',logMousePosition)
    return ()=>{
      window.removeEventListener('mousemove',logMousePosition)
    }
  },[])
  return (
    <div>
        <p>X - {x}</p>
        <p>Y - {y}</p>
    </div>
  )
}

export default HookMouse;