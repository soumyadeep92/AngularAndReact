import React ,{ useContext } from 'react'
import { context } from './ComponentContextA'
function ComponentContextC() {
    const contextC=useContext(context)
    return (
      <div>
          <div>Compoennt C - {contextC.countState}</div>
          <button onClick={()=>contextC.countDispatch('increment')}>Increment</button>
          <button onClick={()=>contextC.countDispatch('decrement')}>Decrement</button>
          <button onClick={()=>contextC.countDispatch('reset')}>Reset</button>
      </div>
    )
}

export default ComponentContextC