
import React, { useState } from 'react';
export default function Hooks() {
    const [count, setCount] = useState(1);
    const [age, setMyAge] = useState(18);

    return (
        <div>
            <b>I am in hooks page</b>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Here
            </button>

            <br></br>
            <br></br>

            <p><b>Age-- </b>{age} </p>

            <button onClick={() => setMyAge(age + 1)}>
                Click to set the age
            </button>
        </div>

    )

}

 