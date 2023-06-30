import React, { useContext } from 'react'
import { context } from './ComponentContextA'

function ComponentContextB() {
  const contextB=useContext(context)
  return (
    <div>
        <div>Compoennt B - {contextB.countState}</div>
        <button onClick={()=>contextB.countDispatch('increment')}>Increment</button>
        <button onClick={()=>contextB.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>contextB.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentContextB