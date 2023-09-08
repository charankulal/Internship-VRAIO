import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react';

export default function Data() {
    const [post, setPost] = useState({});

useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);
  return (
    <div>
      <p>
Data
{

// post.map((ele) => {
//         return(
//         <li>{ele.name}</li>
//         )
//     })

            
        
   
        
   
}
        
      </p>
    </div>
  )
}
