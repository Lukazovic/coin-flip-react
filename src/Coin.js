import React, { Component } from 'react'

import './Coin.css'

class Coin extends Component{
  render(){
    const headsCoinUrl = "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"
    const tailsCoinUrl = "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"
    return (
      <div className="Coin-container">
        <img src={this.props.coin === 'tails' ?  tailsCoinUrl : headsCoinUrl} alt="Coin" className="Coin-image"/>
      </div>
    )
  }
}

export default Coin