import React from 'react';
import { buyCake } from '.././redux/cakes/cakeAction.js';
import {useDispatch, useSelector} from 'react-redux';
export default function HooksCakeContainer(){
    const numOfCakes=useSelector(state=>state.numOfCakes);
    const dispatch=useDispatch();
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={()=>{dispatch(buyCake())}}>Buy Cake</button>
        </div>
    )
}