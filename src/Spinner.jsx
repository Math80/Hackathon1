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
            NumberHolder3: 0
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

    GenerateRandomNumber = () => {
        this.GenerateRandomNumber1();
        setTimeout(this.GenerateRandomNumber2, 300);
        setTimeout(this.GenerateRandomNumber3, 600)
    }
    win = () => {
        let RandomNumber = Math.floor(Math.random() * 5) + 1;
           
        this.setState({
            NumberHolder1: RandomNumber,
            NumberHolder2: RandomNumber,
            NumberHolder3: RandomNumber,
            image1: images[RandomNumber - 1],
            image2: images[RandomNumber - 1],
            image3: images[RandomNumber - 1]
        })
        
    }

    render() {

        return (
            <div className='Spinner'>
            <div>

            </div>
                <img src={this.state.image1} alt="plop" />
                <img src={this.state.image2} alt="plop" />
                <img src={this.state.image3} alt="plop" />
                <button onClick={this.GenerateRandomNumber}>Credit1</button>
                <button onClick={this.win}>Credit2</button>
                {this.state.NumberHolder1===this.state.NumberHolder2 && 
                this.state.NumberHolder1===this.state.NumberHolder3 && 
                this.state.NumberHolder2 === this.state.NumberHolder3? 
                <h2>You win</h2>: <h2>You lose</h2>
                }
            </div>
        );
    }
}
export default Spinner;