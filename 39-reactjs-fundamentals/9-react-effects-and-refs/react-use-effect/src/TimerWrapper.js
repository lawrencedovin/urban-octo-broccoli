import React, { useState } from 'react';
import CleanTimer from './CleanTimer';

const TimerWrapper = () => {
    const [timerVisible, setTimerVisible] = useState(true);

    const toggleTimer = () => {
        setTimerVisible(!timerVisible);
    }

    return (
        <div>
            <button onClick={toggleTimer}>Toggle Timer</button>
            {timerVisible && <CleanTimer />}
        </div>
    );
}

export default TimerWrapper;