import React, { Component } from 'react'

import './CoinFlip.css'

import Coin from './Coin'

class CoinFlip extends Component{
  static defaultProps = {
    options: ['heads', 'tails'],
  }
  constructor(props){
    super(props)
    this.state = {totalCount: 0, headCount: 0, tailCount: 0, option: 'heads'}
    this.handleClick = this.handleClick.bind(this)
  }
  generateRandNum(){
    return Math.floor(Math.random() * 2)
  }
  handleClick(){
    console.log(this.props.options[this.generateRandNum()])
    this.setState = {option: this.props.options[this.generateRandNum()]}
  }
  render(){
    return (
      <div className="CoinFlip">
        <h1>Coin Flip Game</h1>
        <Coin coin={this.state.option} className="CoinFlip-coin"/>
        <p>Out of {this.state.totalCount}, there have been {this.state.headCount} heads and {this.state.tailCount} tails </p>
        <button onClick={this.handleClick} className="CoinFlip-button">Flip</button>
      </div>
    )
  }
}

export default CoinFlip