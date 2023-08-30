import React from 'react'
import Button from "./Button";

function  Header(props) {
  
    return (
      
        <div className="container">
        <h1 className="jumbotron-heading p-5">{props.title}</h1>
        <p className="lead text-muted" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          libero aspernatur exercitationem alias quo maiores magni corporis
          distinctio sint in impedit, sapiente incidunt quaerat?
        </p>
        <p className='d-inline-flex' style={{width:"30%"}}>
          <Button  buttonName="Main Call to Action" ColorAttr="btn-primary"/>
          <Button  buttonName="Secondary Action" ColorAttr="btn-secondary"/>
          
        </p>
      </div>
      
    )
  }


export default Header
