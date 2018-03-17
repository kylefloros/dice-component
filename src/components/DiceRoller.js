import React, { Component } from 'react';
import moment from 'moment';
import '../styles/DiceRoller.css';

import AvailableDie from './AvailableDie';
import SelectedDie from './SelectedDie';
import RolledDie from './RolledDie';
import HistoryList from './HistoryList';

document.body.style.backgroundColor = "#f5f7fa";

class DiceRoller extends Component {
    state = {
      availableDie: [{faces: 4}, {faces: 6}, {faces: 8}, {faces: 10}, {faces: 12}, {faces: 20}],
      selectedDie: [],
      rolledDie: [],
      history: [] // { tag: 'Roll', timestamp: xxxxx, message: xxxxxx } 
    }

  onAvailableDiceSelect = selectedDice => this.setState({selectedDie: [...this.state.selectedDie, selectedDice]});  

  onSelectedDiceSelect = index => {
    let array = this.state.selectedDie;
    array.splice(index, 1);    
    this.setState({selectedDie: array});
  }

  onRollClick = () => {
    // Create new array of dice objects that include roll value by iterating over array of selected die
    // Notes: (1) Spread for object props / Object.assign() 
    let rolledDie = this.state.selectedDie.map(function(dice) {
      return {...dice, roll: Math.floor(Math.random()*(dice.faces)+1)}
    });

    // ROLL HISTORY   
    // Loop through each 
    const message = rolledDie.map((rolledDice)=>`[d${rolledDice.faces}: ${rolledDice.roll}]  `);

    // Get timestamp with moment.js 
    // TODO: make it local
    const timestamp = moment().format('ddd, M/D/YY, HH:mm');

    // Create new history array with new entry on top followed by existing entries from state
    let historyArray = [{tag: 'Roll', timestamp: timestamp, message: message},...this.state.history];

    // Set 
    this.setState({rolledDie: rolledDie, history: historyArray}); 
  }

  onClearClick = () => {
    this.setState({rolledDie: [], selectedDie: [], total: 0, possible: 0});
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
          <AvailableDie 
            availableDie={this.state.availableDie} 
            onAvailableDiceSelect={this.onAvailableDiceSelect} />
        </div>
        <div className="comp">
          <SelectedDie 
            selectedDie={this.state.selectedDie}
            onSelectedDiceSelect={this.onSelectedDiceSelect} />
        </div>
        <div className="comp">
          <RolledDie rolledDie={this.state.rolledDie} />
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
          <div>Total: {this.state.rolledDie.reduce((a, dice)=>(a+dice.roll), 0)}</div>
          {/* Calculate max possible roll of all die */}
          <div>Possible: {this.state.rolledDie.reduce((a, dice)=>(a+dice.faces), 0)}</div>
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

  // let rolledDie = this.state.selectedDie.map(function(dice) {
  //   return {...dice, roll: Math.floor(Math.random()*(dice.faces)+1)}
  // });

  // array = array.map(function(dice) {
  //   return Object.assign(dice, {roll: Math.floor(Math.random()*(dice.faces)+1)});
  // });

  // array = array.map(function(dice) {
  //   return({faces: dice.faces, roll: Math.floor(Math.random()*(dice.faces)+1)});
  // });









// onAvailableDiceSelect = this.onAvailableDiceSelect.bind(this);
// onSelectedDiceSelect = this.onSelectedDiceSelect.bind(this);
// this.onRollClick = this.onRollClick.bind(this);
// this.onClearClick = this.onClearClick.bind(this);



//equivalent to: this.setState({rolledDie: array, total: total, possible: possible}); 