import React, {Component} from "react";
import "./Credit.css"


class Credit extends Component{
    constructor(props){
        super(props);
        this.state={
            credit: 10
        }
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

    render(){
        const credit = this.state.credit;
        return(
            <div className="Credit">
                {
                    (credit === 0)
                    ? (
                    <div className="game"> 
                        <h2>GAME OVER </h2>
                        <button onClick={this.playMore}>Play Again</button>
                    </div>
                       )

                    : (
                        <div> 
                            <h2>Credits: {credit}</h2>
                            <button onClick={this.getLess}>less</button>
                        </div>
                    )
                }
                
                

            </div>

            

        )
    }
}
export default Credit;