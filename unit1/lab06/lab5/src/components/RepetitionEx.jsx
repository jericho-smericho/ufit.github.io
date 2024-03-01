import React, {useState } from "react";

export default function RepetitionEx({ exercise, setMenuScreen }) {
    let [count, setCount] = useState(0);
    return (
      <div>
        <p>{exercise.name}</p>
        <p style={{ fontSize: "5em" }}>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <br></br>
        <button onClick={setMenuScreen}>Return</button>
      </div>
    );
  }