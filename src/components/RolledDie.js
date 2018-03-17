import React, { Component } from 'react';
import RolledDice from './RolledDice';
import uuid from 'uuid/v4'

const RolledDie = ({rolledDie}) =>{
    const renderList = () => {
        return rolledDie.map((dice) => {
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

export default RolledDie;