import React from 'react'

export default function Button() {
  return (
    <div>
      <button
            type="button"
            className="btn btn-success"
            id="submit"
            onclick="submitAction()"
          ></button>
    </div>
  )
}
