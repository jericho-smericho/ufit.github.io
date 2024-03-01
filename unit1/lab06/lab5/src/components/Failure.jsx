import React, {useState } from "react";

export default function FailureEx({exercise, setMenuScreen}) {
    const [count, setCount] = useState(0);
    const [highestRepList, setHighestRepList] = useState([]);
    //let hiRepList = [];
    const grabRep = () => {
        if (count === 0) return;
        console.log("pushed");
        console.log(count);

        setHighestRepList((prevList) => [...prevList, count]);
        setCount(0);
        
    };
    /*const postList = () => {
        if (setcount === 0) return;
    };
        count.map((element, index) => <li key={index}>{element}</li>)*/
      
    return (
        
        <div>
            <p>{exercise.name}</p>
            <p style={{ fontSize: "5em" }}>{count}</p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
    <button onClick={() => grabRep()}>Reset</button>
            
            <div>
                <p>Highest Rep</p>
                <ul>
                    {highestRepList.sort((a,b) => a - b).reverse().map((rep, index) => (
                        <li key={index}>{rep}</li>
                    ))}
                </ul>
            </div>

            <br></br>
            <button onClick={setMenuScreen}>Return</button>
      </div>
    )
}