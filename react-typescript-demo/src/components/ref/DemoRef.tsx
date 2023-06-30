import { useEffect, useRef } from "react"

export const DemoRef=()=>{
    const inputRef=useRef<HTMLInputElement>(null!)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return(
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}