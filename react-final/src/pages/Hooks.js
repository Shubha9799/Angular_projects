
import React, { useState } from 'react';
export default function Hooks() {
    const [count, setCount] = useState(1);
    const [age, setMyAge] = useState(18);

    return (
        <div>
            <b>I am in hooks page</b>
            <p>{count} </p>
            <button onClick={() => setCount(count + 1)}>
                Click Here
            </button>

            <br></br>
            <br></br>

            
        </div>

    )

}

 