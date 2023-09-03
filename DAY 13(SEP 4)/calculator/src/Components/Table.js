import React, { useState } from "react";
import Button from "./Button";
import "./Calculator";

export default function Table() {
    var expr="";
  var [result, setResult] = useState("");

  const Clear = () => {
    setResult("");
  };
  const deleteOneByOne = () => {
    if (result.length > 1) {
      setResult(result.slice(0, -1));
    } else {
      setResult("");
    }
  };

  const handleButtonClick = (e) => {
    setResult(result.concat(e.target.name));
    expr.concat(e.target.name)
    console.log(eval(expr))
  };

  return (
    <table className="table ">
      <tr>
        <td colSpan="4">
          <div className="col-md-12">
            <input
              type="number"
              className="form-control"
              placeholder="Enter numbers"
              value={result}
              readOnly
            />
          </div>
        </td>
      </tr>

      <tr className="py-2">
        <td>
          <Button
            id="AllClear"
            class="btn btn-danger col-12 m-2 "
            text="AC"
            handleClick={Clear}
          />
        </td>
        <td>
          <Button
            id="delete"
            class="btn btn-warning col-12 m-2 "
            text="C"
            onClick={deleteOneByOne}
          />
        </td>

        <td>
          {/* <button
            type="button"
            className="btn btn-outline-secondary col-12 mx-2 my-2"
            id="divide"
            name="/"
            onClick={handleButtonClick}
          >
            /
          </button> */}
          <Button
            id="divide"
            class="btn btn-outline-secondary col-12 mx-2 my-2  "
            text="/"
            onClick={handleButtonClick}
          />
        </td>
        <td>
          <Button
            id="multiply"
            class="btn btn-outline-secondary col-12 mx-2 my-2  "
            text="*"
            // onClick={handleButtonClick()}
          />
        </td>
      </tr>

      <tr>
        <td>
        {/* <button
            type="button"
            className="btn btn-outline-secondary col-12 mx-2 my-2"
            id="seven"
            name="7"
            onClick={handleButtonClick}
          >
            7
          </button> */}
          <Button
            id="seven"
            class="btn btn-outline-primary col-12 m-2  "
            text="7"
          />
        </td>
        <td>
        {/* <button
            type="button"
            className="btn btn-outline-secondary col-12 mx-2 my-2"
            id="eight"
            name="8"
            onClick={handleButtonClick}
          >
            8
          </button> */}
          <Button
            id="eight"
            class="btn btn-outline-primary col-12 m-2  "
            text="8"
          />
        </td>
        <td>
          <Button
            id="nine"
            class="btn btn-outline-primary col-12 m-2  "
            text="9"
          />
        </td>
        <td>
          <Button
            text="-"
            id="minus"
            class="btn btn-outline-secondary col-12 m-2  "
          />
        </td>
      </tr>

      <tr>
        <td>
          <Button
            id="four"
            class="btn btn-outline-primary col-12 m-2  "
            text="4"
          />
        </td>
        <td>
          <Button
            id="five"
            class="btn btn-outline-primary col-12 m-2  "
            text="5"
          />
        </td>
        <td>
          <Button
            id="six"
            class="btn btn-outline-primary col-12 m-2  "
            text="6"
          />
        </td>
        <td>
          {" "}
          <Button
            text="+"
            id="plus"
            class="btn btn-outline-secondary col-12 m-2  "
          />
        </td>
      </tr>

      <tr>
        <td>
          <Button
            id="one"
            class="btn btn-outline-primary col-12 m-2  "
            text="1"
          />
        </td>
        <td>
          <Button
            id="two"
            class="btn btn-outline-primary col-12 m-2  "
            text="2"
          />
        </td>
        <td>
          <Button
            id="three"
            class="btn btn-outline-primary col-12 m-2  "
            text="3"
          />
        </td>

        <td rowSpan="2">
          <Button
            id="equal"
            class="btn btn-outline-success col-12 m-2  "
            // onClick={handleButtonClick()}
            text="="
            height="130px"
          />
        </td>
      </tr>

      <tr>
        <td colSpan="2">
          <Button
            text="0"
            id="zero"
            class="btn btn-outline-primary col-12 m-2  "
            // onClick={handleButtonClick()}
          />
        </td>
        <td>
          <Button
            text="."
            id="dot"
            class="btn btn-outline-primary col-12 m-2  "
            // onClick={handleButtonClick()}
          />
        </td>
      </tr>
    </table>
  );
}
