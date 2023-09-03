import React from 'react'
// import { Button } from 'react-bootstrap'

export default function Calculator() {
  return (
    
      <div className="container w-25 h-25 bg-light my-5" style={{fontSize:"2.5rem"}}>
        <h3 className="text-center"> My Calculator</h3>
        <table className="table ">
            <tr>

                <td colSpan="4" >
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Enter numbers"/>
                    </div>
                </td>
            </tr>


            <tr className='py-2'>
                <td colSpan="2" ><button variant="danger" type="button" id="AllClear" className="btn btn-danger col-12 m-2  ">AC</button></td>

                <td>
                {/* <Button variant="primary" className="btn-primary">Primary</Button> */}
                    <button type="button" id="divide" className="btn btn-outline-secondary col-12 mx-2 my-2  ">/</button>
                    </td>
                <td><button type="button" id="multiply" className="btn btn-outline-secondary col-12 mx-2 my-2  ">*</button>
                </td>

            </tr>


            <tr>
                <td><button type="button" id="seven" className="btn btn-outline-primary col-12 m-2  ">7</button></td>
                <td><button type="button" id="eight" className="btn btn-outline-primary col-12 m-2  ">8</button></td>
                <td><button type="button" id="nine" className="btn btn-outline-primary col-12 m-2  ">9</button></td>
                <td><button type="button" id="minus" className="btn btn-outline-secondary col-12 m-2  ">-</button></td>
            </tr>


            <tr>
                <td><button type="button" id="four" className="btn btn-outline-primary col-12 m-2  ">4</button></td>
                <td> <button type="button" id="five" className="btn btn-outline-primary col-12 m-2  ">5</button>
                </td>
                <td> <button type="button" id="six" className="btn btn-outline-primary col-12 m-2  ">6</button>
                </td>
                <td> <button type="button" id="plus" className="btn btn-outline-secondary col-12 m-2  ">+</button>
                </td>

            </tr>


            <tr>
                <td><button type="button" id="one" className="btn btn-outline-primary col-12 m-2  ">1</button></td>
                <td> <button type="button" id="two" className="btn btn-outline-primary col-12 m-2  ">2</button></td>
                <td> <button type="button" id="three" className="btn btn-outline-primary col-12 m-2  ">3</button></td>

                <td rowSpan="2"><button type="button" id="equal" className="btn btn-outline-success col-12 m-2  "
                        style={{height: "130px"}}>=</button></td>

            </tr>

            <tr>
                <td colSpan="2">
                    <button type="button" id="zero" className="btn btn-outline-primary col-12 m-2  ">0</button>
                </td>
                <td>
                    <button type="button" id="dot" className="btn btn-outline-primary col-12 m-2  ">.</button>
                </td>
            </tr>

    
    </table>
    </div>
    
  )
}
