import React, { Component } from 'react'

import './CoinFlip.css'

import Coin from './Coin'
import {choice} from './Helpers'

class CoinFlip extends Component{
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'},
      { side: 'tails', imgSrc: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'}
    ]
  }
  constructor(props){
    super(props)
    this.state = {
      totalCount: 0, 
      headCount: 0, 
      tailCount: 0, 
      currentCoin: null}
    this.handleClick = this.handleClick.bind(this)
  }
  flipCoin(){
    const newCoin = choice(this.props.coins)
    this.setState(oldState => {
      return {
        currentCoin: newCoin,
        totalCount: oldState.totalCount + 1,
        headCount: oldState.headCount + (newCoin.side === 'heads' ? 1 : 0),
        tailCount: oldState.tailCount + (newCoin.side === 'tails' ? 1 : 0)
      }
    })
  }
  handleClick(event){
    this.flipCoin()
  }
  render(){
    return (
      <div className="CoinFlip">
        <h1>Coin Flip Game</h1>
        {this.state.currentCoin && <Coin info={this.state.currentCoin} className="CoinFlip-coin"/>}
        <p>Out of {this.state.totalCount}, there have been {this.state.headCount} heads and {this.state.tailCount} tails </p>
        <button onClick={this.handleClick} className="CoinFlip-button">Flip</button>
      </div>
    )
  }
}

export default CoinFlip