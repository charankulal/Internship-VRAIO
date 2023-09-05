import React from 'react'


const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {
        document.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("equalbtn").click();
          }
        });
  return (
    <>
    <tr>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        ^
      </button>
      </td>
      <td><button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        (
      </button></td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        )
      </button>
      </td>
      <td><button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        √
      </button></td>
      <td><button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        x<sup>2</sup>
      </button></td>
      </tr>
      <tr>
      <td><button className="btn btn-primary col-12 mx-1" onClick={clearInput}>
        AC
      </button></td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={backspace}>
        ⌫
      </button>
      </td>
      <td><button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        log
      </button></td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        ÷
      </button>
      </td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        %
      </button>
      </td>
      </tr>
      <tr>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        7
      </button>
      </td>
      <td><button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        8
      </button></td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        9
      </button>
      </td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        x
      </button>
      </td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        x<sup>3</sup>
      </button>
      </td>
      </tr>
      <tr>
      <td><button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        4
      </button></td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        5
      </button>
      </td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        6
      </button>
      </td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        -
      </button>
      </td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        <sup>3</sup>√
      </button>
      </td>
      </tr>
      <tr>
      <td><button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        1
      </button></td>
      <td><button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        2
      </button></td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        3
      </button>
      </td>
      <td><button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        +
      </button></td>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        !
      </button>
      </td>
      </tr>
      <tr>
      <td>
      <button className="btn btn-primary col-12 mx-1" onClick={changePlusMinus}>
        ±
      </button>
      </td>
      <td><button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        0
      </button></td>
      <td><button className="btn btn-primary col-12 mx-1" onClick={inputHandler}>
        .
      </button></td>
      <td colSpan={2}><button className="btn btn-success col-12 mx-1" id="equalbtn" onClick={calculateAns}>
        =
      </button></td>
      </tr>
    
    </>
  )
}

export default Buttons;
