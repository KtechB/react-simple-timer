import React, { FC, useEffect, useState } from 'react';
import Time from "./time"
import "./timer.css"
const useCountdown = (limit: number): any => {
    const [leftSec, setLeftSec]: [number, any] = useState(limit);
    let [timerObj, setTimerObj]: [any, any] = useState("")
    const [active, setactive]: [boolean, any] = useState(false)

    const setCountdown = () => {
        if (!active) {
            setTimerObj(
                setInterval(() => {
                    setLeftSec((prev: number) => prev - 1);
                }, 1000)
            );
        }
    }
    const afterTimeup = (left: number): void => {
        if (left < 0) {
            alert('FINISHED');
            clearInterval(timerObj)
            setLeftSec(() => limit);
        }
    };
    const reset = () => {
        if (window.confirm('RESET TIMER?')) {
            clearInterval(timerObj)
            setLeftSec(limit);
            setactive(false)
        }
    };

    const stop = () => {
        setactive(false);
        clearInterval(timerObj);
    };
    const start = () => {
        if (!active) {
            clearInterval(timerObj);
            setCountdown();
            setactive(true);

        }
    };

    
    useEffect(() => {
        afterTimeup(leftSec);
    }, [leftSec])
    useEffect(()=>{
        clearInterval(timerObj)
    },[])

    return [[leftSec, active], [reset, stop, start]];
};

const Timer: FC = () => {
    const [[leftSec, active], [reset, stop, start]] = useCountdown(25 * 60)
    return (
        <div className="Timer">
            <Time sec={leftSec}></Time>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Timer
