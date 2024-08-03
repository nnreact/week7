import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0);

    // var count = 0;

    const handleCounterClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p style={{ fontSize: "100px" }}>{count}</p>
            <button onClick={handleCounterClick} >Increment</button>
        </div>
    )
}

export default Counter