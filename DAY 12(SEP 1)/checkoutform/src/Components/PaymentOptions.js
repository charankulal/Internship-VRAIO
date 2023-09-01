import React from 'react'

export default function PaymentOptions(props) {
  return (
    <div className="custom-control custom-radio">
        <input
          id={props.info.id}
          name="paymentMethod"
          type="radio"
          className="custom-control-input"
          defaultChecked
          required
        />
        <label className="custom-control-label" htmlFor={props.info.id}>{props.info.name}</label>
      </div>
  )
}
