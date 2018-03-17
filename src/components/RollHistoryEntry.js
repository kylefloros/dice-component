import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import uuid from 'uuid/v4'

const RollHistoryEntry = ({roll}) => {
    const renderList = () => {
        return roll.map((dice) => {
            return (
                <div 
                    key={uuid()}>
                    {`d${dice.faces}: ${dice.roll}`} 
                </div>                   
                
            )
        });
    }

    return (
        <div className="history">{renderList()}</div>
    )
}

export default RollHistoryEntry;