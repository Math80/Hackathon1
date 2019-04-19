import React, { Component } from 'react';

import Egg from './Eggs/Egg';
import EasterEgg from './Eggs/EasterEgg';
import './Eggs/Eggs.css';

import './Spinner.css';

const images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png",
    "images/image5.png"
]
const eggsRandom = Array.from({ length: 20 }).map(egg => {
    return {
        minShow: Math.floor(Math.random() * (5000 - 1)) + 1,
        maxShow: Math.floor(Math.random() * (120000 - 20000)) + 35000,
        minHide: Math.floor(Math.random() * (1000 - 750)) + 750,
        maxHide: Math.floor(Math.random() * (1750 - 1500)) + 1500,
        coordX: Math.floor(Math.random() * (90 - 10)) + 10,
        coordY: Math.floor(Math.random() * (40 - 10)) + 10,
        img: `images/egg${Math.floor(Math.random() * (9 - 1)) + 1}.png`
    }
})

const goldenEgg = {
    coordX: 0,
    coordY: 0,
    img: "images/goldenEgg.png"
}


class Spinner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image1: "images/image1.png",
            image2: "images/image2.png",
            image3: "images/image3.png",
            NumberHolder1: -1,
            NumberHolder2: -2,
            NumberHolder3: -3,
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
            this.setState({ credit: credit - 1 })
        }
    }

    playMore = () => {
        this.setState({ credit: 10 })
    }

    moreCredit = () => {
        this.setState({credit: this.state.credit + 1})
    }

    GenerateRandomNumber = () => {
        this.GenerateRandomNumber1();
        setTimeout(this.GenerateRandomNumber2, 300);
        setTimeout(this.GenerateRandomNumber3, 600);
        this.getLess();






    }
    win = () => {

        this.setState({credit: this.state.credit === 10})
    }

    render() {
        const credit = this.state.credit;
        let displayResult;
        if (this.state.NumberHolder1 === -1) {
            displayResult = <h2> </h2>
        } else if (
            this.state.NumberHolder1 === this.state.NumberHolder2 &&
            this.state.NumberHolder1 === this.state.NumberHolder3 &&
            this.state.NumberHolder2 === this.state.NumberHolder3) {
                displayResult = <h2>You win !</h2>
         } else if (
            this.state.NumberHolder1 !== this.state.NumberHolder2 ||
            this.state.NumberHolder1 !== this.state.NumberHolder3 ||
            this.state.NumberHolder2 !== this.state.NumberHolder3){
             displayResult = <h2>You lose</h2>
         }
         let displayBtn;
         credit <= 0 ? displayBtn = <p></p> : displayBtn = <button onClick={this.GenerateRandomNumber}>Play</button>
        return (

            

            <div className='Spinner'>
                <div className="Eggs">
                {
                    eggsRandom.map((egg, index) => <Egg moreCredit={this.moreCredit} key={index} egg={egg} id={index + 1} />)
                }
                <EasterEgg egg={goldenEgg} />
                </div>



                <div>{
                    (credit === 0) ?
                        (<div className="game">
                            <h2>GAME OVER </h2>
                            <button onClick={this.playMore}>Play Again</button>
                        </div>) : (
                            <div>
                                <h2>Credits: {credit}</h2>

                            </div>)}
                    <div >
                        <img className='pict' src={this.state.image1} alt="plop" />
                        <img className='pict' src={this.state.image2} alt="plop" />
                        <img className='pict' src={this.state.image3} alt="plop" />
                    </div>

                    {displayBtn}
                    {displayResult}
                </div>
            </div>
        );
    }
}
export default Spinner;