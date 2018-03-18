import React from 'react';

const AvailableDice = ({dice, callback}) => {
    return (
        <div 
            className="softBorder pointer noSelect borderHover font1"
            onClick={() => callback(dice)}>
            d{dice.faces}
        </div>
    )
};

export default AvailableDice;    