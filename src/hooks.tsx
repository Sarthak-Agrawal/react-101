import React,{ useState, useEffect } from "react";

function Counter() {
    const  [count, setCount]  = useState(0);

    useEffect(()=> {
        document.title = {count}.count + " clicks"; //{count} is a JSON object with id as count
    });

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count+1)}>
                Counter Click
            </button>
        </div>
    )
}

export default Counter;