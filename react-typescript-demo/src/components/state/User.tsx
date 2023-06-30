import { useState } from "react"
type AuthUser={
    name:string,
    email:string
}
export const LoggedIn=()=>{
    const [user,setUser]=useState<AuthUser>({} as AuthUser);
    const handleLogin=()=>{
        setUser({
            name:'Soumya',
            email:'soumyatechno2011@gmail.com'
        })
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>Username: {user.name}</div>
            <div>Email: {user.email}</div>
        </div>
    )
}