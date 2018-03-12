import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DiceRoller from './components/DiceRoller';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DiceRoller />, document.getElementById('root'));
registerServiceWorker();
