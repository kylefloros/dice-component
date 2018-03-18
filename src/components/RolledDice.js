import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const RolledDice = ({dice}) => {
    return (
        <div className="softBorder centerText">
            <div className="font1">d{dice.faces}</div>
            <div className="font2">{dice.roll}</div>
        </div>        
    )
};

export default RolledDice;