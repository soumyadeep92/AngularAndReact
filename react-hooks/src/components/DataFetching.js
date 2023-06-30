import React, { useEffect,useState } from 'react'
import axios from 'axios';
function DataFetching(){
  const [posts,setPosts]=useState({});
  const [id,setId]=useState(1);
  const [name,setName]=useState('');
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>setPosts(res.data))
    .catch((err)=>console.log(err))
  },[posts])
  return (
    <div>
        <input type='text' value={id} onChange={(e)=>setId(e.target.value)}/>
        <button onClick={()=>setName(posts.name)}>Click</button>
        <p>
            {name}
        </p>
    </div>
  )
}

export default DataFetching