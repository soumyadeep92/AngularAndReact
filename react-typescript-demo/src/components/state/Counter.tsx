import {useReducer} from 'react';
type CounterState={
    count:number
}
type CounterAction={
    type:'INCREMENT' | "DECREMENT" | "RESET",
    payload?:number
}
const initialState={count:0}
function reducer(state:CounterState,action:CounterAction){
    switch(action.type)
    {
        case 'INCREMENT':
            return ({count:state.count+(action.payload || 0)});
        case 'DECREMENT':
            return ({count:state.count-(action.payload || 0)});
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}
export const Counter=()=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    return(
        <>
            <div>
                <p>Count: {state.count}</p>
                <p>Increment by 10</p>
                <button onClick={()=>dispatch({type:'INCREMENT',payload:10})}>Increment</button>
                <p>Decrement by 10</p>
                <button onClick={()=>dispatch({type:'DECREMENT',payload:10})}>Decrement</button>
                <p>Reset Counter</p>
                <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
            </div>
        </>
    )
}