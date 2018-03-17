import React, { Component } from 'react';
import moment from 'moment';
import '../styles/DiceRoller.css';

import AvailableDiceList from './AvailableDiceList';
import SelectedDiceList from './SelectedDiceList';
import RolledDiceList from './RolledDiceList';
import HistoryList from './HistoryList';

document.body.style.backgroundColor = "#f5f7fa";

class DiceRoller extends Component {
    state = {
      availableDice: [{faces: 4}, {faces: 6}, {faces: 8}, {faces: 10}, {faces: 12}, {faces: 20}],
      selectedDice: [],
      rolledDice: [],
      history: [] // { tag: 'Roll', timestamp: xxxxx, message: xxxxxx } 
    }

  onAvailableDiceSelect = dice => this.setState({selectedDice: [...this.state.selectedDice, dice]});  

  // Remove clicked dice from selected dice array TODO: fix state mutation?
  onSelectedDiceClick = index => {
    let array = this.state.selectedDice;
    array.splice(index, 1);    
    this.setState({selectedDice: array});
  }

  // Reset state for a new roll
  onClearClick = () => {
    this.setState({rolledDice: [], selectedDice: [], total: 0, possible: 0});
  }

  onRollClick = () => {
    // Create new array of dice objects that include roll value by iterating over array of selected die
    // Notes: (1) Spread for object props / Object.assign() 
    const rolledDice = this.state.selectedDice.map(function(dice) {
      return {...dice, roll: Math.floor(Math.random()*(dice.faces)+1)}
    });

    // History entry: Get timestamp with moment.js TODO: make it local
    const timestamp = moment().format('ddd, M/D/YY, HH:mm');

    // History entry: Create message string by iterating over array of rolled dice objects and capturing face and roll value
    // E.g., [d10: 2] [d10: 8] [d10: 10] [d10: 4]
    const message = rolledDice.map((dice) => `[d${dice.faces}: ${dice.roll}]  `);

    // History entry: Create new history array with new entry on top followed by existing entries from state
    // Notes: (2) ES6 shorthand when prop name and variable are the same
    const history = [{tag: 'Roll', timestamp, message},...this.state.history]; 

    this.setState({rolledDice, history}); 
  }

  render() {
    //console.log('Roller', this.state.history);
    return (
      <div className="masterContainer">
        <div></div>
        <div></div>
        <div>
        </div>
        
        <div className="comp">
          <AvailableDiceList 
            availableDice={this.state.availableDice} 
            onAvailableDiceSelect={this.onAvailableDiceSelect} />
        </div>
        <div className="comp">
          <SelectedDiceList 
            selectedDice={this.state.selectedDice}
            onSelectedDiceClick={this.onSelectedDiceClick} />
        </div>
        <div className="comp">
          <RolledDiceList rolledDice={this.state.rolledDice} />
        </div>

        <div></div>
        <div className="buttons">
          <button 
            onClick={this.onRollClick}
            className="btn btn-primary pad5">Roll!</button>
          <button 
            onClick={this.onClearClick}
            className="btn btn-danger pad5">Clear</button>
        </div>
       <div>

          {/* Calculate total of all rolled die */}
          <div>Total: {this.state.rolledDice.reduce((a, dice)=>(a+dice.roll), 0)}</div>

          {/* Calculate max possible roll of all die */}
          <div>Possible: {this.state.rolledDice.reduce((a, dice)=>(a+dice.faces), 0)}</div>

          <br />
          <HistoryList history={this.state.history} />
        </div>
       <div></div>
      </div>
    );
  }
}

export default DiceRoller;

// (1) 

  // The ...dice spread captures current properties of of the object, then the roll property is added

  // let rolledDie = this.state.selectedDice.map(function(dice) {
  //   return {...dice, roll: Math.floor(Math.random()*(dice.faces)+1)}
  // });

  // array = array.map(function(dice) {
  //   return Object.assign(dice, {roll: Math.floor(Math.random()*(dice.faces)+1)});
  // });

  // array = array.map(function(dice) {
  //   return({faces: dice.faces, roll: Math.floor(Math.random()*(dice.faces)+1)});
  // });

// (2) 
  // ES6 shorthand when prop name and variable are the same
  
  // const timestamp = blahblah;
  // const message = blahblah;

  // This... 
  // let historyArray = [{tag: 'Roll', timestamp: timestamp, message: message},...this.state.history]; 

  // Can be shortened to...
  // let historyArray = [{tag: 'Roll', timestamp, message},...this.state.history]; 