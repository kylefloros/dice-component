import React from 'react';
import HistoryEntry from './HistoryEntry';
import uuid from 'uuid/v4'

const HistoryList = ({history}) => {
    
    const renderList = () => {
        // Limit number of displayed history entries
        // Set loop upper bound to limit or history array length if less than limit
        const entriesToDisplay = 7;
        let upperBound = history.length > entriesToDisplay ? entriesToDisplay : history.length;
        
        // Iterate over history array and capture top n enteries in separate array
        let historyTop5 = [];
        for (let i = 0; i < upperBound; i++) {
            historyTop5.push(history[i]);
        }
                
        return historyTop5.map((historyEntry) => {
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