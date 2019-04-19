import React, {Component} from 'react';
import Egg from './Egg';
import EasterEgg from './EasterEgg';
import './Eggs.css';


const eggsRandom = Array.from({length: 20}).map(egg => 
  { 
  return {
  minShow: Math.floor(Math.random() * (10000 - 1)) + 1,
  maxShow: Math.floor(Math.random() * (120000 - 35000)) + 35000,
  minHide: Math.floor(Math.random() * (750 - 500)) + 500,
  maxHide: Math.floor(Math.random() * (1250 - 1000)) + 1000,
  coordX: Math.floor(Math.random() * (1500 - 50)) + 50,
  coordY: Math.floor(Math.random() * (700 - 50)) + 50,
  img: `images/egg${Math.floor(Math.random() * (9 - 1)) + 1}.png`
}
})

const goldenEgg = {
  coordX: 1000,
  coordY: 500,
  img: "images/goldenEgg.png"
}

/*

{
  minShow,
  maxShow,
  minHide,
  maxHide,
  coordX,
  coordY
}

*/

class Eggs extends Component{
  render() {
    return(
      <div className="Eggs"> 
      <EasterEgg egg={goldenEgg}/>
        {
          eggsRandom.map((egg, index) => <Egg key={index} egg={egg} id={index + 1} />)
        }
        
      </div>
    )
  }
}

export default Eggs;