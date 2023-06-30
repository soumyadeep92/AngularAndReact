export type ProfileProps={
    name:string
}
export const Profile=({name}:ProfileProps)=>{
    return(<div>Private profile page Name is {name}</div>)
}