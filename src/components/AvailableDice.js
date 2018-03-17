import React from 'react';

const AvailableDice = ({dice, callback}) => {
    return (
        <li 
            className="list-group-item die"
            onClick={() => callback(dice)}>
            d{dice.faces}
        </li>
    )
};

export default AvailableDice;    