import React from 'react';

const SelectedDice = ({dice, uniqueId, callback}) => { 
    return (
        <div
            className="softBorder pointer centerText noSelect borderHover font1"
            onClick={() => callback(uniqueId)}>
            d{dice.faces}
        </div>        
    )
};

export default SelectedDice;

//without curly, need dice.dice.faces