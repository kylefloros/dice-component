import React from 'react';
import HistoryEntry from './HistoryEntry';
import uuid from 'uuid/v4'

const HistoryList = ({history}) => {
    
    const renderList = () => {
        // Limit number of displayed history entries
        let entriesToDisplay = history.length > 7 ? 7 : history.length;
                        
        return history.slice(0, entriesToDisplay).map((historyEntry) => {
            return (
                <HistoryEntry
                    key={uuid()}
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