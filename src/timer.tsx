import React from 'react';

interface ClockState {
    date: Date,
}

class Clock extends React.Component<{}, ClockState> {
    timerId: number; // This is neither a prop nor a state. Its just an additional field used to set the timer

    constructor (props: {}) {
        super(props);
        this.timerId = 0;
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        // this.timerId = window.setInterval(() => {
        //     this.setState({
        //         date: new Date()
        //     })
        // }, 1000);

        this.timerId = window.setInterval( () => this.tick(), 1000); // Arrow function required to access the setState method
        console.log(this.timerId);
    }

    componentWillUnmount() {
        window.clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
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