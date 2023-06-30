import {CounterTwoProps} from './counterTwo.types'
export function counterTwo(props:CounterTwoProps)
{
    return(
        <>
            <h1>Counter Two</h1>
            <h2>{props.count}</h2>
            {props.handleIncrement && (<button onClick={props.handleIncrement}>Increment</button>)}
            {props.handleDecrement && (<button onClick={props.handleDecrement}>Decrement</button>)}
        </>
    )
}