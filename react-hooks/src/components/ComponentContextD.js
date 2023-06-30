import React ,{ useContext } from 'react'
import { context } from './ComponentContextA'
function ComponentContextD() {
    const contextD=useContext(context)
    return (
      <div>
          <div>Compoennt D - {contextD.countState}</div>
          <button onClick={()=>contextD.countDispatch('increment')}>Increment</button>
          <button onClick={()=>contextD.countDispatch('decrement')}>Decrement</button>
          <button onClick={()=>contextD.countDispatch('reset')}>Reset</button>
      </div>
    )
}

export default ComponentContextD