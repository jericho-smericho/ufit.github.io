import {useState, useRef} from 'react';

export default function Timer() {
    const [curState, setCurState] = useState("");
    const [curTime, setCurTime] =useState(0);
    const intervalRef = useRef(null);

    const onStart= () => {
        if (curState === "Start") return;
            console.log("started");
            setCurState("Start");
            intervalRef.current = setInterval(() => {
                setCurTime((curTime) => curTime + 50)
            }, 50)
    }
    const onStop = () => {
        if (curState === "Stop") return;
        clearInterval(intervalRef.current);
    }
    const onReset = () => {
        if (curState === "Reset") return;
        setCurState("Reset");
        setCurTime(0);
    }

    const sec = Math.floor(curTime/1000);
    const min = Math.floor(sec/60);
    const hour = Math.floor(min/60);
    const mil = (curTime % 1000).toString();
    const secs = (sec % 60).toString();
    const mins = (min % 60).toString();
    const hrs = (hour % 24).toString();

    return (
        <div className="App">
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
            <button onClick={onReset}>Reset</button>
            <div className ="stopwatch">
                <span>{hrs}</span>:<span>{mins}</span>:<span>{secs}</span>:<span>{mil}</span>
            </div>
        </div>
    )
    }