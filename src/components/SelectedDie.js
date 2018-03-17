import React, { Component } from 'react';
import SelectedDice from './SelectedDice';
import uuid from 'uuid/v4'

const SelectedDie = ({selectedDie, onSelectedDiceSelect}) => {
    const renderList = () => {
        return selectedDie.map((dice, index) => {
            return (
                <SelectedDice 
                    key={uuid()}
                    dice={dice} 
                    uniqueId={uuid()} 
                    callback={onSelectedDiceSelect} />
            )
        });
    }   

    return (
        <div className="selectedDie centerText">
            {renderList()}
        </div>
    )
    
}

export default SelectedDie;