import React from 'react';
import RollHistoryEntry from './RollHistoryEntry';
import uuid from 'uuid/v4'

const RollHistoryList = ({rollHistory}) => {
    const renderList = () => {
        return rollHistory.map((roll) => {
            return (
                <RollHistoryEntry
                    key={uuid()} //TODO
                    roll={roll}
                />
            )
        });
    }

    return (
        <div >
            <ul>
                {renderList()}
            </ul>
        </div>
    )
}

export default RollHistoryList;