import React, { Component } from 'react';
import './Egg.css'

class Egg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      clicked: false,
      
    }
    this.displayMs = Math.floor(Math.random() * (props.egg.maxShow - props.egg.minShow)) + props.egg.minShow;
    this.hideMs = Math.floor(Math.random() * (props.egg.maxHide - props.egg.minHide)) + props.egg.minHide;
    console.log(this.displayMs, this.hideMs);
  }

  componentDidMount() {
    setTimeout(() => {
      this.affichePiece();
    }, this.displayMs);
  }

  affichePiece = () => {
    this.setState({
      display: !this.state.display
    }, () => {
      if (!this.state.clicked) {
        const ms = (this.state.display) ? this.hideMs : this.displayMs;
        this.timeOutToggle = setTimeout(() => {
            this.affichePiece();
        }, ms);
      }
    })
  }

  onClickPiece = () => {
    clearTimeout(this.timeOutToggle);
    this.setState({
      clicked: !this.state.clicked,
      display: false,
      
    })
    ;
  }

  render() {
    return (
      <div>
        <a 
          className={`Egg ${this.props.id} ${this.state.display ? "affiche-on" : "affiche-off"}`}
          onClick={this.onClickPiece}
          style={{left: this.props.egg.coordX, top: this.props.egg.coordY}}
        >
          <img src={this.props.egg.img} alt=""/>
        </a>
      </div>
    )
  }
}

export default Egg;