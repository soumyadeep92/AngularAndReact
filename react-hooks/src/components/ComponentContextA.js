import React, { createContext, useReducer } from 'react'
import ComponentContextB from './ComponentContextB';
import ComponentContextC from './ComponentContextC';
import ComponentContextD from './ComponentContextD';
export const context=createContext(); 
const initialState=0
const reducer=(state=initialState,action)=>{
    switch(action)
    {
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function ComponentContextA() {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <context.Provider value={{countState:count,countDispatch:dispatch}}>
        <div>
            <div>Count - {count}</div>
            <ComponentContextB/>
            <ComponentContextC/>
            <ComponentContextD/>
        </div>
    </context.Provider>
  )
}
export default ComponentContextA; 