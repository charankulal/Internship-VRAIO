import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";


function App() {
  
    return (
    <div className="App">
      <section className="jumbotron text-center">
        <Header title="Album example"/>
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

