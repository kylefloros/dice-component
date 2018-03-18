import React from 'react';
import SelectedDice from './SelectedDice';
import uuid from 'uuid/v4'

const SelectedDiceList = ({selectedDice, onSelectedDiceClick}) => {
    const renderList = () => {
        return selectedDice.map((dice, index) => {
            return (
                <SelectedDice 
                    key={uuid()}
                    dice={dice} 
                    uniqueId={uuid()} 
                    callback={onSelectedDiceClick} />
            )
        });
    }   

    return (
        <div 
            className="grid_selectedList softBorder">
            {renderList()}
        </div>
    )
    
}

export default SelectedDiceList;