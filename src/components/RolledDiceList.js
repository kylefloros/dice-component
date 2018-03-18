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
        <div 
            className="grid_rolledList softBorder">
            {renderList()}
        </div>
    )
}

export default RolledDiceList;