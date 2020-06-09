import React from 'react';

interface ClockState {
    date: Date
}

class Clock extends React.Component<{}, ClockState> {
    constructor (props: {}) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <div>
                <h3>Timer: </h3>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}

// function Clock(props:ClockProps) {
//     return (
//         <div>
//             <h3>Timer: </h3>
//             <h4>{props.date.toLocaleTimeString()}</h4>
//         </div>
//     )
// } 
 export default Clock