import React from 'react'
import styles from '../Styles/Form.module.css'
import Label from './Label'
import Input from './Input'
import Span from './Span'
import Button from './Button'
import {submitAction,disableWarning_userName} from '../scripts'



const regNoWarning = document.getElementById("regNoWarning");
const gradeWarning = document.getElementById("gradeWarning");


//   function disableWarning_userName() {
//     if(!document.getElementById("username").blur())
//     document.getElementById("userNameWarning").innerText =
//           "";
//           document.getElementById("username").focus()
//   }
  
  function disableWarning_regNo() {
    regNoWarning.innerHTML = "";
  }
  function disableWarning_grade() {
  
    gradeWarning.innerHTML = "";
    
  }

export default function Form() {
  return (
    <div className={styles.row}>
      <h1 className="mx-5">Student Details Form</h1>
      <form className="w-100" id="myForm" onsubmit="">
        <div
         className="col-12">
            <Label  labelfor="username" displayText="Name"/>
            <Input id="username" onkeypress={disableWarning_userName} />
        </div>
        <Span id="userNameWarning"/>

        <div className="col-12">
        <Label  labelfor="regNo" displayText="Registration Number "/>
        <Input id="regNo" onkeypress={disableWarning_regNo} />
          </div>
       
            <Span id="regNoWarning"/>

        <div className="col-12">
        <Label  labelfor="grade" displayText="Grade"/>
          <Input id="grade" onkeypress={disableWarning_grade}/>
          
        </div>
        <Span id="gradeWarning"/>

        <div className="buttons">
            <Button class="btn btn-success"
            id="submit"
            onclick={submitAction()} text="Submit"/>
        

          
          <button type="reset" className="btn btn-danger m-2" id="reset_btn">
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}
