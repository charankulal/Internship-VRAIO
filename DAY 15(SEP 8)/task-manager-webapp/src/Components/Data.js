import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react';

export default function Data() {
    const [post, setPost] = useState({});

useEffect(() => {
      axios.get("https://api.mockfly.dev/mocks/63b02fc0-cf1c-4dc8-ab4c-4602d7edc021/tasks").then((data) => {
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
