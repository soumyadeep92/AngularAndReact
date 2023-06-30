import { useEffect, useRef, useState } from "react";

export const MutableRef=()=>{
    const [timer,setTimer]=useState(0);
    const inputValRef=useRef<number | null>(null);
    const stopTimer=()=>{
        if(inputValRef.current)
        window.clearInterval(inputValRef.current);
    }
    useEffect(()=>{
        inputValRef.current=window.setInterval(()=>{
            setTimer((timer)=>timer+1)
        },1000)
        return ()=>{ stopTimer }
    },[])
    return(
        <div>
            <div>Timer {timer}</div>
            <button onClick={()=>stopTimer()}>Stop Timer</button>
        </div>
    )
}