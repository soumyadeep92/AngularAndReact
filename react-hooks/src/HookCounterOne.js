import React, { useEffect,useState } from 'react'

function HookCounterOne(){
  const [count,setCount]=useState(0);
  const [name,setName]=useState('');
  useEffect(()=>{
    console.log('useEffect');
    console.log(`Clicked ${count} times`);
  },[count]);
  return (
    <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Increase Hooks One</button>
    </div>
  )
}

export default HookCounterOne