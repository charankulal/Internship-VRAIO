import React from "react";
import PaymentOptions from "./PaymentOptions";

export default function Payment() {
  const options = [
    {
      id: "debit",
      name: "Debit Card",
    },
    {
      id: "credit",
      name: "Credit Card",
    },
    {
      id: "paypal",
      name: "PayPal",
    },
  ];
  return (
    <>
      <h4 className="mb-3">Payment</h4>

      <div className="d-block my-3">
        {options.map((element) => {
          return <PaymentOptions info={element} />;
        })}
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="cc-name">Name on card</label>
          <input
            type="text"
            className="form-control"
            id="cc-name"
            placeholder=""
            required
          />
          <small className="text-muted">Full name as displayed on card</small>
          <div className="invalid-feedback">Name on card is required</div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="cc-number">Credit card number</label>
          <input
            type="text"
            className="form-control"
            id="cc-number"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 mb-3">
          <label htmlFor="cc-expiration">Expiration</label>
          <input
            type="text"
            className="form-control"
            id="cc-expiration"
            placeholder=""
            required
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="cc-cvv">CVV</label>
          <input
            type="text"
            className="form-control"
            id="cc-cvv"
            placeholder=""
            required
          />
        </div>
      </div>
      <hr className="mb-4" />
      <button className="btn btn-primary btn-lg btn-block" type="submit">
        Continue to checkout
      </button>
    </>
  );
}
