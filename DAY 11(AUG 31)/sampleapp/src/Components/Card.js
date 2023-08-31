import React from 'react'
import './Card.css'
import styles from './Button.module.css'

export default function Card(props) {
  let backgroundofText=props.time<=5?"lightblue":"white"
  

  // if (props.time<=5)
  // {
  //   backgroundofText="lightblue";
  // }
  // else
  // {
  //   backgroundofText="white"
  // }

  return (
    

    
      <div className="col-md-4 d-flex" >
              <div className="card mb-4 shadow-sm">
                <img
                src={props.imageUrl}
                  className="card-img-top"
                  
                  alt="Thumbnail"
                />
                {/* style={{backgroundColor:props.background1}} */}
                <div className={`card-body ${backgroundofText}`}  >
                  <p className="card-text" >
                    {props.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className={`btn btn-sm btn-primary`}
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className={`btn btn-sm ${styles.btnsecondary}`}
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">{props.time} mins</small>
                  </div>
                </div>
              </div>
            </div>
    
  )
}
