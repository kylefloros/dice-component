import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const RolledDice = ({dice}) => {
    return (
        <div className="list-group-item die rolledDice textCenter">
            <div>d{dice.faces}</div>
            <div className="bigFont">{dice.roll}</div>
        </div>        
    )
};

export default RolledDice;