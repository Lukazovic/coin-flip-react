import React, { Component } from 'react'

import './Coin.css'

class Coin extends Component{
  render(){
    return (
      <div className="Coin-container">
        <img src={this.props.info.imgSrc} alt={this.props.info.side} className="Coin-image"/>
      </div>
    )
  }
}

export default Coin