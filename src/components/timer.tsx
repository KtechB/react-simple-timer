import React, { FC, useEffect, useState } from "react";
import Time from "./time";
import "./timer.css";
const useCountdown = (limit: number): any => {
  const [leftSec, setLeftSec]: [number, any] = useState(limit);
  let [timerObj, setTimerObj]: [any, any] = useState("");
  const [active, setactive]: [boolean, any] = useState(false);

  const setCountdown = () => {
    if (!active) {
      setTimerObj(
        setInterval(() => {
          setLeftSec((prev: number) => prev - 1);
        }, 1000)
      );
    }
  };
  const afterTimeup = (left: number): void => {
    if (left < 0) {
      alert("FINISHED");
      clearInterval(timerObj);
      setLeftSec(limit);
      setactive(false);
    }
  };
  const reset = () => {
    if (window.confirm("RESET TIMER?")) {
      clearInterval(timerObj);
      setLeftSec(limit);
      setactive(false);
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
  const add_one_minute = () => {
    setLeftSec((sec: number) => sec + 1 * 60);
  };
  const reduce_one_minute = () => {
    setLeftSec((sec: number) => sec - 1 * 60);
  };

  useEffect(() => {
    afterTimeup(leftSec);
  }, [leftSec]);
  useEffect(() => {
    clearInterval(timerObj);
  }, []);

  return [
    [leftSec, active],
    [reset, stop, start, add_one_minute, reduce_one_minute],
  ];
};

const Timer: FC = () => {
  const [
    [leftSec, active],
    [reset, stop, start, add_one_minute, reduce_one_minute],
  ] = useCountdown(25 * 60);
  return (
    <div className="Timer">
      <Time sec={leftSec}></Time>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
      <button onClick={add_one_minute}>+1</button>
      <button onClick={reduce_one_minute}>-1</button>
    </div>
  );
};

export default Timer;
