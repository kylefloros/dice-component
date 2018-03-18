import React from 'react';
import AvailableDice from './AvailableDice';
import uuid from 'uuid/v4'
import 'bootstrap/dist/css/bootstrap.css';

const AvailableDiceList = ({availableDice, onAvailableDiceSelect}) => {
    const renderList = () => {
        return availableDice.map((dice) => {
            return (
                <AvailableDice 
                    key={uuid()}//key={`d${dice.face}_${index}`} 
                    dice={dice} 
                    callback={onAvailableDiceSelect} />   
            )
        });
    }

    return (
        <div 
            className="grid_availableList softBorder centerText">
            {renderList()}
        </div>
    )
}

export default AvailableDiceList;