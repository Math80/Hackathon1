import React, {Component} from "react";


class Credit extends Component{
    constructor(props){
        super(props);
        this.state={
            credit: 10
        }
    }

    getLess = () => {
        this.setState({credit:this.state.credit - 1})

            if (this.state.credit <= 0) {
                alert("GAME OVER!!!")  
                this.setState({credit:10})
            }
            
    }

    render(){
        return(
            <div className="Credit">
                
                <h2>Credits: {this.state.credit}</h2>
                <button onClick={this.getLess}>less</button>


            </div>

            

        )
    }
}
export default Credit;