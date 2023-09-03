import React from "react";

export default function Button(props) {
    
  return (
    <button
      type="button"
      name={props.text}
      id={props.id}
      className={props.class}
      style={{ height: props.height }}
      
      
      
    >
      {props.text}
    </button>

    
  );
}
