import React, { Component } from 'react';


import './App.css';



import Spinner from "./Spinner";




class App extends Component {
  render() {
    return (
      <div className="App">
       
     
       <audio  preload autoPlay loop src="sons/son.mp3"></audio>

        
         <Spinner />
      
        

      </div>
    );
  }
}

export default App;
