import React from 'react'

export default function Card(props) {
  return (
    
      <div className="col-md-4 d-flex" >
              <div className="card mb-4 shadow-sm">
                <img
                src={props.imageUrl}
                  className="card-img-top"
                  
                  alt="Thumbnail"
                />
                <div className="card-body">
                  <p className="card-text">
                    {props.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">{props.time}</small>
                  </div>
                </div>
              </div>
            </div>
    
  )
}
