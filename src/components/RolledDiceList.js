import React from 'react';
import RolledDice from './RolledDice';
import uuid from 'uuid/v4'

const RolledDiceList = ({rolledDice}) =>{
    const renderList = () => {
        return rolledDice.map((dice) => {
            return (
                <RolledDice 
                    key={uuid()}
                    dice={dice} />
            )
        });
    }
       
    return (
        <div className="selectedDie centerText">
            {renderList()}
        </div>
    )
}

export default RolledDiceList;