import React from 'react'


export default function Input(props) {
  return (
    <div>
      <input
            type="text"
            autoComplete="off"
            className="form-control"
            id={props.id}
            // onKeyPress={props.onkeypress}
            // onKeyDown={props.onkeydown}
          />
    </div>
  )
}
