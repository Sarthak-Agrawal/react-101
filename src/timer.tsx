import React from 'react';

interface ClockProps {
    date: Date
}

function Clock(props:ClockProps) {
    return (
        <div>
            <h3>Timer: </h3>
            <h4>{props.date.toLocaleTimeString()}</h4>
        </div>
    )
} 
 export default Clock