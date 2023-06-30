import React, { useReducer } from 'react'
const initialState={firstcounter:0,secondcounter:10};
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'increment':
            return {...state,firstcounter:state.firstcounter+action.value}
        case 'decrement':
            return {...state,firstcounter:state.firstcounter-action.value}
        case 'increment1':
            return {...state,secondcounter:state.secondcounter+action.value}
        case 'decrement1':
            return {...state,secondcounter:state.secondcounter-action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}
function CounterTwo() {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <div>Counter One - {count.firstcounter}</div>
        <div>Counter Two - {count.secondcounter}</div>
        <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
        <button onClick={()=>dispatch({type:'increment1',value:1})}>Increment Second</button>
        <button onClick={()=>dispatch({type:'decrement1',value:1})}>Decrement Second</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        <button onClick={()=>dispatch({type:'increment',value:5})}>Increment 5</button>
        <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement 5</button>
    </div>
  )
}

export default CounterTwo;