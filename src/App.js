import React, { Component } from 'react';
import Credit from "./Credit/Credit"
import './App.css';
import Spinner from "./Spinner";

class App extends Component {
  render() {
    return (
      <div className="App">

         <Credit />

       <Spinner />

        
      </div>
    );
  }
}

export default App;
