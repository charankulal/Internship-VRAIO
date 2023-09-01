import React from 'react'
import Items from './Items'

export default function Cart() {
  const itemDetails=[
    {
      name:"Product Name",
      desc:"Brief description",
      cost:"$12"
    },
    {
      name:"Second Product",
      desc:"Brief description",
      cost:"$8"
    },
    {
      name:"Third Item",
      desc:"Brief description",
      cost:"$5"
    },
  ]
  return (
    <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            {itemDetails.map((data)=>{
              return(
                <Items info={data}/>
              )
            })}
      
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div>
  )
}
