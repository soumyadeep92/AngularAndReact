import React,{useState} from 'react'

function HookCounterThree()
{
  const [name,setName]=useState({firstName:'',lastName:''});
  return (
    <div>
        <input type='text' defaultValue={name.firstName} onChange={(e)=>setName({firstName:e.target.value,lastName:name.lastName})}/>
        <p>FirstName: {name.firstName}</p>
        <input type='text' defaultValue={name.lastName} onChange={(e)=>setName({firstName:name.firstName,lastName:e.target.value})}/>
        <p>LastName: {name.lastName}</p>
    </div>
  )
}

export default HookCounterThree