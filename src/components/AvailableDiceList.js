import React, { Component } from 'react';
import AvailableDice from './AvailableDice';
import 'bootstrap/dist/css/bootstrap.css';

class AvailableDiceList extends Component {      
    constructor(props) {
        super(props);

        this.state = { 
            available_dice: [],
            currentRoll: 0
        };
    }

    renderList() {
        return this.props.available_dice.map((die) => {
            return (
                <AvailableDice key={die} sides={die} handleRoll={(die) => this.setState({ currentRoll: Math.floor(Math.random()*(die)+1) }) } />   
            )
        });
    }
    
    render(){
        return (
            <div className="container">
                <ul className="list-group centerText">
                    {this.renderList()}
                </ul>
                <div className="bigFont centerText">{this.state.currentRoll}</div>
            </div>
        )
    }
}

export default AvailableDiceList;
//<AvailableDice sides={die} handleRoll={ (die) => this.setState({ currentRoll: Math.floor(Math.random()*(die)+1)} )} />