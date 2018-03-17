import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import uuid from 'uuid/v4'

const HistoryEntry = ({historyEntry}) => {
    return (
        <div className="">
            <span className="bold">[{historyEntry.timestamp}] </span>
            <span className="bold">{historyEntry.tag}: </span>
            <span>{historyEntry.message}</span>
        </div>
    )
}

export default HistoryEntry;