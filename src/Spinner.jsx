import React, { Component } from 'react';
const images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png",
    "images/image5.png",
    
]

class Spinner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image1: "images/image1.png",
            image2: "images/image2.png",
            image3: "images/image3.png",
            NumberHolder1: 0,
            NumberHolder2: 0,
            NumberHolder3: 0,
            credit: 10
        }

    }
    GenerateRandomNumber1 = () => {
        let RandomNumber = Math.floor(Math.random() * 5) + 1;
        this.setState({
            NumberHolder1: RandomNumber,
            image1: images[RandomNumber - 1]
        })
    }
    GenerateRandomNumber2 = () => {
        let RandomNumber = Math.floor(Math.random() * 5) + 1;
        this.setState({
            NumberHolder2: RandomNumber,
            image2: images[RandomNumber - 1]
        })
    }
    GenerateRandomNumber3 = () => {
        let RandomNumber = Math.floor(Math.random() * 5) + 1;

        this.setState({

            NumberHolder3: RandomNumber,
            image3: images[RandomNumber - 1]
        })
    }
    getLess = () => {
        const credit = this.state.credit;
        if (credit >= 1) {
            this.setState({credit: credit - 1})
        }  
    }

    playMore = () => {
        this.setState({credit: 10})
    }



    GenerateRandomNumber = () => {
        this.GenerateRandomNumber1();
        setTimeout(this.GenerateRandomNumber2, 300);
        setTimeout(this.GenerateRandomNumber3, 600);
        this.getLess();
        
        




    }
    
      

    render() {
        const credit = this.state.credit;
        return (
        <div className='Spinner'>
            <div>{
                (credit === 0)?
                ( <div className="game"> 
                <h2>GAME OVER </h2>
                <button onClick={this.playMore}>Play Again</button>
                </div>):(
                <div>
                <h2>Credits: {credit}</h2>  

                </div>)}
                <div>
                <img src={this.state.image1} alt="plop" />
                <img src={this.state.image2} alt="plop" />
                <img src={this.state.image3} alt="plop" />
                </div>
                
                <button onClick={this.GenerateRandomNumber}>Play</button>
                
                {this.state.NumberHolder1===this.state.NumberHolder2 && 
                this.state.NumberHolder1===this.state.NumberHolder3 && 
                this.state.NumberHolder2 === this.state.NumberHolder3? 
                <h2>You win</h2>: <h2>You lose</h2>
                }
            </div>
        </div>
        );
    }
}
export default Spinner;