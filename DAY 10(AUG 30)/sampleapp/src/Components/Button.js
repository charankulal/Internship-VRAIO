import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className={`btn  my-2 mx-3 ${props.ColorAttr}`}>{
        props.buttonName
      }</button>
    </div>
  );
}
