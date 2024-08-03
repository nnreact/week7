import { useState } from "react";

function StringCopy() {

    const [inputData, setInputData] = useState("");

    return (
        <>
            <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
            <h1>{inputData}</h1>
        </>
    )
}

export default StringCopy