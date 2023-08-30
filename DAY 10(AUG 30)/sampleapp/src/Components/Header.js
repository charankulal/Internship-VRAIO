import React from 'react'

function  Header(props) {
  
    return (
      
        <div className="container">
        <h1 className="jumbotron-heading p-5">{props.title}</h1>
        <p className="lead text-muted" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          libero aspernatur exercitationem alias quo maiores magni corporis
          distinctio sint in impedit, sapiente incidunt quaerat?
        </p>
        <p>
          <button className="btn btn-primary my-2 mx-3">Main call to action</button>
          <button className="btn btn-secondary my-2">Secondary action</button>
        </p>
      </div>
      
    )
  }


export default Header
