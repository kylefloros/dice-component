import React, { Component } from 'react';
import '../styles/DiceRoller.css';
import AvailableDie from './AvailableDie';
import SelectedDie from './SelectedDie';
import RolledDie from './RolledDie';
import RollHistoryList from './RollHistoryList';

document.body.style.backgroundColor = "#f5f7fa";

class DiceRoller extends Component {
    state = {
      availableDie: [{faces: 4}, {faces: 6}, {faces: 8}, {faces: 10}, {faces: 12}, {faces: 20}, {faces: 100}],
      selectedDie: [],
      rolledDie: [],
      total: 0,
      possible: 0,
      rollHistory: []
    }

  onAvailableDiceSelect = selectedDice => this.setState({selectedDie: [...this.state.selectedDie, selectedDice]});  

  onSelectedDiceSelect = index => {
    let array = this.state.selectedDie;
    array.splice(index, 1);    
    this.setState({selectedDie: array});
  }

  onRollClick = () => {
    let selectedArr = this.state.selectedDie;

    // Add prop with roll result
    // Okay when using map... returns new array
    selectedArr = selectedArr.map(function(dice) {
      return {...dice, roll: Math.floor(Math.random()*(dice.faces)+1)}
    });

    const total = selectedArr.reduce((a, dice)=>(a+dice.roll), 0);
    const possible = selectedArr.reduce((a, dice)=>(a+dice.faces), 0);

    // Enter record into roll history
    let rollHistoryArr = [selectedArr, ...this.state.rollHistory];

    this.setState({rolledDie: selectedArr, total, possible, rollHistory: rollHistoryArr}); 
  }

  onClearClick = () => {
    this.setState({rolledDie: [], selectedDie: [], total: 0, possible: 0});
  }

  render() {
    console.log(this.state.rollHistory);
    return (
      <div className="masterContainer">
        <div></div>
        <div></div>
        <div>
          <div>Total: {this.state.total}</div>
          <div>Possible: {this.state.possible}</div>
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
       <div><RollHistoryList rollHistory={this.state.rollHistory} /></div>
       <div></div>
      </div>
    );
  }
}

export default DiceRoller;



    
    // array = array.map(function(dice) {
    //   return({faces: dice.faces, roll: Math.floor(Math.random()*(dice.faces)+1)});
    // });

    // array = array.map(function(dice) {
    //   return Object.assign(dice,{roll: Math.floor(Math.random()*(dice.faces)+1)});
    // });


    // onAvailableDiceSelect = this.onAvailableDiceSelect.bind(this);
    // onSelectedDiceSelect = this.onSelectedDiceSelect.bind(this);
    // this.onRollClick = this.onRollClick.bind(this);
    // this.onClearClick = this.onClearClick.bind(this);



    //equivalent to: this.setState({rolledDie: array, total: total, possible: possible}); 