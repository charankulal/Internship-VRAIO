import React from 'react'

export default function Card() {
  return (
    
      <div className="col-md-4 d-flex" >
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  src={require("./Thumbnail.jpg")}
                  alt="Thumbnail"
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    soluta, explicabo molestias pariatur reprehenderit eligendi
                    placeat maxime adipisci hic rem nemo officia ab libero!
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
    
  )
}
