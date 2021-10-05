import React from 'react'
import { useState} from 'react';
import "./Clock.css"

function Clock() {
    const time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    setInterval(() => {
        const newTime = new Date().toLocaleTimeString();
        setCurrentTime(newTime);
    }, 1000);
    return (
        <div className="Timer">
            <p>Digital Clock - IST</p>
            <h1>{currentTime}</h1>
        </div>
    )
}

export default Clock
