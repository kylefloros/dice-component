import React, { Component } from 'react';
import '../styles/DiceRoller.css';
import AvailableDiceList from './AvailableDiceList'

document.body.style.backgroundColor = "#f5f7fa";
class DiceRoller extends Component {
  render() {
    return (
      <div className="masterContainer">
        <div></div>
        <div></div>
        <div></div>

        <div></div>
        <div className="comp"><AvailableDiceList available_dice={[4, 6, 8, 10, 12, 20, 100]} /></div>
        <div></div>
        
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default DiceRoller;
