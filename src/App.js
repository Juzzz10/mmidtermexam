import React, { useState } from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('10 Things That Require Zero Talent');

    const messages = {
        '1': 'Being On Time',
        '2': 'Making An Effort',
        '3': 'Being High Energy',
        '4': 'Having A Positive Attitude',
        '5': 'Being Passionate',
        '6': 'Using Good Body Language',
        '7': 'Being Coachable',
        '8': 'Doing A Little Extra',
        '9': 'Being Prepared',
        '0': 'Having A Strong Work Ethic'
    };

    const displayMessage = (key) => {
        setMessage(messages[key] || '');
    };

    const resetDisplay = () => {
        setMessage('10 Things That Require Zero Talent');
    };

    const displayName = () => {
        setMessage('Justine Jay A. Enriquez');
    };

    return (
        <div className="App">
            <h1>Justine Jay A. Enriquez - IT3A</h1>
            <h2>{message}</h2>
            <div>
                {[...Array(9).keys()].map(num => (
                    <button key={num} onClick={() => displayMessage((num + 1).toString())}>
                        {num + 1}
                    </button>
                ))}
                <button onClick={() => displayMessage('9')}>9</button>
                <button onClick={() => displayMessage('0')}>0</button>
                <button onClick={resetDisplay}>RESET</button>
                <button onClick={displayName}>NAME</button>
            </div>
        </div>
    );
}

export default App;