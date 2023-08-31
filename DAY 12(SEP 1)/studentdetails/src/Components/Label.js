import React from 'react'

export default function Label(props) {
  return (
    <div>
      <label for={props.labelfor} className="form-label"
            >{props.displayText} <span className="text-danger">*</span>
          </label>
    </div>
  )
}
