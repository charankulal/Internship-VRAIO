import React from 'react'
import Payment from './Payment'

export default function Billing() {
  return (
    <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  
                  required
                />
                
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  
                  required
                />
                
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  required
                />
                
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email"
                >Email <span className="text-muted">(Optional)</span></label
              >
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
              
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                required
              />
              
            </div>

            <div className="mb-3">
              <label htmlFor="address2"
                >Address 2 <span className="text-muted">(Optional)</span></label
              >
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="Apartment or suite"
              />
            </div>
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select
                  className="form-select d-block w-100"
                  id="country"
                  required
                >
                  <option >Choose...</option>
                  <option>India</option>
                </select>
                
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select className="form-select d-block w-100" id="state" required>
                  <option >Choose...</option>
                  <option>Karnataka</option>
                </select>
                
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                
              </div>
            </div>
            <hr className="mb-4" />
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="same-address"
              />
              <label className="custom-control-label" htmlFor="same-address"
                >Shipping address is the same as my billing address</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="save-info"
              />
              <label className="custom-control-label" htmlFor="save-info"
                >Save this information for next time</label>
            </div>
            <hr className="mb-4" />

           <Payment/>
          </form>
        </div>
  )
}
