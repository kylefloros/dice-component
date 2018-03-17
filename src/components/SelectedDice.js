import React from 'react';

const SelectedDice = ({dice, uniqueId, callback}) => { //without curly, need dice.dice.faces
    return (
        <div
            className="list-group-item die pointer"
            onClick={() => callback(uniqueId)}>
            d{dice.faces}
        </div>
        
    )
};

export default SelectedDice;