import React from 'react'


export default function Button(props) {
  return (
    <button type="button" id={props.id} className={props.class} style={{height:props.height}}>{props.text}</button>
  )
}
