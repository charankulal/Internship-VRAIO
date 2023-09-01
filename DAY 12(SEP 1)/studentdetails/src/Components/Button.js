import React from 'react'

export default function Button(props) {
  return (
   
      <button
            type={props.type}
            className={props.class}
            id={props.id}
            // onclick="submitAction()"
          >{props.text}</button>
    
  )
}
