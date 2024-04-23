import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
    };
    const decrement = () => {
        setCount((prev) => prev - 1);
    };


    return (
        <div>
            <div>
                Count: <h3 data-testid="count" >{count}</h3>
                <input onChange={(e) => setInputValue(e.target.value)} data-testid="inp" /><button onClick={() => setCount(inputValue)}>Set</button>
            </div>
            <div>
                <button onClick={increment}> Increment</button>
                <button onClick={decrement}> Decrement</button>

            </div>
            {/* for mocking function in testing */}
            <div>
                <button onClick={() => props?.restart()}> Restart</button>
                <button onClick={() => props?.switchSigns()}> Switch Signs</button>
            </div>
        </div>
    );
}

export default Counter;