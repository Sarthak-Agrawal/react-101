import * as React from 'react';

interface CounterProps {
    initialCount: string
}

const Counter :React.FC<CounterProps> = (props: CounterProps) => {
    const  [count, setCount]  = React.useState(props.initialCount); // The only argument to useState is the initial state.

    React.useEffect(()=> {
        document.title = {count}.count + " clicks"; //{count} is a JSON object with id as count
    });

    return (
        <div>
            <p>You clicked {count} times.</p>
            <p>Number needs to be mentioned in curly braces as &#123;1&#125; while string can  be passed directly.</p>
            <button onClick={() => setCount(count+1)}>
                Counter Click
            </button>
        </div>
    )
}

export default Counter;