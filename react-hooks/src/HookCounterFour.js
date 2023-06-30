import React,{useState} from 'react'

function HookCounterFour(){
  const [items,setItems]=useState([]);
  return (
    <div>
        <button onClick={()=>setItems([...items,parseInt(Math.random()*10+1)])}>Generate Num</button>
        <p>{items[items.length-1]}</p>
        <ul>
            {items.map((item,id)=>(<li key={id}>{item}</li>))}
        </ul>
    </div>
  )
}

export default HookCounterFour