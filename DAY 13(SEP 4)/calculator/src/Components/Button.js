import React from "react";

export default function Button(props) {
    
  return (
    <input
      type="button"
      value={props.text}
      
      className={props.class}
      style={{ height: props.height }}
      
      
      
    >
     
    </input>

    
  );
}
