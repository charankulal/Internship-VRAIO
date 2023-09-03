import React from "react";
import Button from "./Button";

export default function Table() {
  return (
    <table className="table ">
      <tr>
        <td colSpan="4">
          <div className="col-md-12">
            <input
              type="number"
              className="form-control"
              placeholder="Enter numbers"
              readOnly
            />
          </div>
        </td>
      </tr>

      <tr className="py-2">
        <td colSpan="2">
          <Button id="AllClear" class="btn btn-danger col-12 m-2 " text="AC" />
        </td>

        <td>
          <Button id="divide" class="btn btn-outline-secondary col-12 mx-2 my-2  "
            text="/"
          />
        </td>
        <td>
          <Button
            id="multiply"
            class="btn btn-outline-secondary col-12 mx-2 my-2  "
            text="*"
          />
        </td>
      </tr>

      <tr>
        <td>
          <Button
            id="seven"
            class="btn btn-outline-primary col-12 m-2  "
            text="7"
          />
        </td>
        <td>
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
          />
        </td>
        <td>
          <Button
            text="."
            id="dot"
            class="btn btn-outline-primary col-12 m-2  "
          />
        </td>
      </tr>
    </table>
  );
}
