import React from 'react';
import HistoryEntry from './HistoryEntry';
import uuid from 'uuid/v4'

const HistoryList = ({history}) => {
    //console.log(history);
    const renderList = () => {
        return history.map((historyEntry) => {
            return (
                <HistoryEntry
                    key={uuid()} //TODO
                    historyEntry={historyEntry}
                />
            )
        });
    }

    return (
        <div >
            {renderList()}
        </div>
    )
}

export default HistoryList;