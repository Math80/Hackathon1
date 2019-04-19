import React, { Component } from 'react';


import './App.css';



import Spinner from "./Spinner";




class App extends Component {
  render() {
    return (
      <div className="App">
       
     
       

        
         <Spinner />
         <audio src="sons/son.mp3"  preload autoPlay loop ></audio>
         

      </div>
    );
  }
}

export default App;
