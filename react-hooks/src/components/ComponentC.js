import React,{useContext} from 'react'
import { ContextOne,ContextTwo } from './ComponentA'
function ComponentC() {
  const user=useContext(ContextOne)
  const comp=useContext(ContextTwo)
  return (
    <div>User-{user}  Company-{comp}</div>
  )
}

export default ComponentC