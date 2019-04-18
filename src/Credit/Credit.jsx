import React, {Component} from "react";


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

            // this.state.credit === 0 ? {"GAME OVER"} : {this.state.credit}
            //  /* if (this.state.credit <= 0) {
            //     alert("GAME OVER!!!")   
            //     this.setState({credit:10}) */
            // }
            
    }

    render(){
        const credit = this.state.credit;
        return(
            <div className="Credit">
                {
                    (credit === 0)
                    ? (<div>Game Over</div>)
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