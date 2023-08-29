// import React, { Component } from "react";
// import {
//   Link, //Link is used to navigate between pages in react router
// } from "react-router-dom";

function App() {
  let imageUrl="https://github.com/charankulal/Internship-VRAIO/blob/master/DAY%203(AUG%2017)/Assignment%202/Thumbnail.jpg";
  return (
    
    
    <div className="App">
      
        
      <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading p-5">Album example</h1>
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
    </section>
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" src={require('./Thumbnail.jpg')} alt="Thumbnail" />
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
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" src={require('./Thumbnail.jpg')} alt="Thumbnail" />
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
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" src={require('./Thumbnail.jpg')} alt="Thumbnail" />
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

          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" src={require('./Thumbnail.jpg')} alt="Thumbnail" />
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
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" src={require('./Thumbnail.jpg')} alt="Thumbnail" />
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
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" src={require('./Thumbnail.jpg')} alt="Thumbnail" />
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

          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" src={require('./Thumbnail.jpg')} alt="Thumbnail" />
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
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" src={require('./Thumbnail.jpg')} alt="Thumbnail" />
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
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" src={require('./Thumbnail.jpg')} alt="Thumbnail" />
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
        </div>
      </div>
    
    </div>
    </div>
    
  );
}

export default App;
