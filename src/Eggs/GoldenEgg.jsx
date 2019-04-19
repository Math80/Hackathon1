import React, {Component} from 'react';
import './Egg.css'

class GoldenEgg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    }
  }
  onClickPiece = () => {
    this.setState({
      display: false,
    });
  }
  render() {
    return (
      <div>
        <a  className={`Egg ${this.state.display ? "affiche-on" : "affiche-off"}`}
      onClick={this.onClickPiece}
      style={{left: this.props.egg.coordX, top: this.props.egg.coordY}}
          
        >
          <img src={this.props.egg.img} alt=""/>
        </a>
      </div>
    )
  }
}

export default GoldenEgg;