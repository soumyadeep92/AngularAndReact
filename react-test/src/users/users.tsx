import { useState,useEffect } from "react";

export default function Users()
{
    const [users,setUsers]=useState<string[]>([]);
    const [errors,setErrors]=useState<string | null>(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>
            setUsers(data.map((user:{name:string})=>user.name))).catch(()=>setErrors('Error occured'));
    },[])
    return(
        <>
            <h1>Users</h1>
            {errors && <p>{errors}</p>}
            <div>
                <ul>
                    {users.map((user)=>
                        <li key={user}>{user}</li>
                    )}
                </ul>
            </div>
        </>
    )
}
