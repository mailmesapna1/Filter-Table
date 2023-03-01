import React from "react";
import { useEffect ,useState} from 'react';
// import { useState } from "react";
const Data = () =>{
  const[data, setData] =useState([])
  const [query, setQuery] = useState("");

  // console.log(item.filter((item) => item.name.toLowerCase().includes("s")));
  
  useEffect(()=>{
    const url= "https://jsonplaceholder.typicode.com/comments"
    fetch(url)
    .then(response =>response.json()).then(json =>{
        console.log("jsonnn",json)
        setData(json)
    }).catch(e => {
      console.log("e",e)
    })
  },[])
  
  return( 
    <div className="container">
        <input
        type="text"
        placeholder="enter name"
        onChange={(e) => setQuery(e.target.value)}
      />
      <table className="table-info bordered">
        <thead>
          <tr>
            <th>Post id</th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        </thead>
        {/* <tbody>{Items}</tbody> */}
      </table>
        {
          
            data.filter((item) => item.name.toLowerCase().includes(query)).map(item => {
                return(
                    <>
                        <div>{item.postId}</div>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.email}</div>
                        <div>{item.body}</div>
                    </>
                )
            })
        }
    </div>
  )
}

export default Data;