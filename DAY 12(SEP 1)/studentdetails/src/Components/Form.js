import React from 'react'
import styles from './Form.module.css'
import Label from './Label'

export default function Form() {
  return (
    <div className={styles.row}>
      <h1 className="mx-5">Student Details Form</h1>
      <form className="w-100" id="myForm" onsubmit="">
        <div
         className="col-12">
            <Label  labelfor="username" displayText="Name"/>

          <input
            type="text"
            autocomplete="off"
            className="form-control"
            id="username"
            onkeypress="disableWarning_userName()"
            onkeydown="Warning_userName();return /[a-zA-Z\s\v\t]/i.test(event.key)"
          />
        </div>
        <div className="mb-3">
          <span className="text-danger" id="userNameWarning"></span>
        </div>

        <div className="col-12">
          <label for="regNo" className="form-label"
            >Registration Number <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            autocomplete="off"
            className="form-control"
            id="regNo"
            onkeypress="disableWarning_regNo()"
          />
        </div>
        <div className="mb-3">
          <span className="text-danger" id="regNoWarning"></span>
        </div>
        <div className="col-12">
          <label for="grade" className="form-label"
            >Grade <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            autocomplete="off"
            className="form-control"
            id="grade"
            onkeypress="disableWarning_grade();"
            min="0"
            max="100"
          />
        </div>
        <div className="mb-3">
          <span className="text-danger" id="gradeWarning"></span>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="btn btn-success"
            id="submit"
            onclick="submitAction()"
          >
            Submit
          </button>
          <button type="reset" className="btn btn-danger m-2" id="reset_btn">
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}
