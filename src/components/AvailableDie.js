import React from 'react';
import AvailableDice from './AvailableDice';
import uuid from 'uuid/v4'
import 'bootstrap/dist/css/bootstrap.css';

const AvailableDie = ({availableDie, onAvailableDiceSelect}) => {
    const renderList = () => {
        return availableDie.map((dice) => {
            return (
                <AvailableDice 
                    key={uuid()}//key={`d${dice.face}_${index}`} 
                    dice={dice} 
                    callback={onAvailableDiceSelect} />   
            )
        });
    }

    return (
        <div className="pad20">
            <ul className="list-group centerText">
                {renderList()}
            </ul>
        </div>
    )
}

export default AvailableDie;
//<AvailableDice sides={die} handleRoll={ (die) => this.setState({ currentRoll: Math.floor(Math.random()*(die)+1)} )} />


///{ currentRoll: Math.floor(Math.random()*(die)+1) }