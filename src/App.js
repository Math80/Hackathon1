import React, { Component } from 'react';


import './App.css';
import './Spinner.css';



import Spinner from "./Spinner";




class App extends Component {
  render() {
    return (
      <div className="App">
       
     
       <audio src="sons/son.mp3"  preload autoPlay loop ></audio>

        
         <Spinner />
      
        

      </div>
    );
  }
}

export default App;
