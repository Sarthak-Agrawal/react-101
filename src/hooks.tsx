import React,{ useState, useEffect } from "react";

function Counter(props: {initial_count: string}) {
    const  [count, setCount]  = useState(props.initial_count);

    useEffect(()=> {
        document.title = {count}.count + " clicks"; //{count} is a JSON object with id as count
    });

    return (
        <div>
            <p>You clicked {count} times.</p>
            <p>Number  needs to be mentioned in curly braces as &#123;1&#125; while string can  be passed directly.</p>
            <button onClick={() => setCount(count+1)}>
                Counter Click
            </button>
        </div>
    )
}

export default Counter;