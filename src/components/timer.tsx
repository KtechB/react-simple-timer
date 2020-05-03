import React, { FC, useEffect, useState } from "react";
import Time from "./time";
import "./timer.css";
import useAudio from "./useAudio"
const useCountdown = (limit: number): any => {
  const [audio,playing, currentTime, play, pause, jump] = useAudio(audioUrl);
  const [Autoreset, setAutoreset] = useState(true)
  const [leftSec, setLeftSec]: [number, any] = useState(limit);
  const [Count, setCount]: [number, any] = useState(0);
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
      
      audio.play();
      setCount((count:number)=> count +1)
      clearInterval(timerObj);
      setLeftSec(Count%2===1 ?limit:5 * 60);
      setactive(false);

    }
  };
  const reset = () => {
      clearInterval(timerObj);
      setLeftSec(limit);
      setactive(false);
      
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
  const autoreset = () => {
    setAutoreset((a:boolean)=>!a)
  }

  useEffect(() => {
    afterTimeup(leftSec);
  }, [leftSec]);
  useEffect(() => {
    clearInterval(timerObj);
  }, []);

  return [
    [leftSec, active,Count,Autoreset],
    [reset, stop, start, add_one_minute, reduce_one_minute, autoreset],
  ];
};

const audioUrl = "https://on-jin.com/sound/ag/s74f90/se/e/ani_ge_suzume01.mp3";
const Timer: FC = () => {

  const [playing, currentTime, play, pause, jump] = useAudio(audioUrl);
  const [
    [leftSec, active,Count, Autoreset],
    [reset, stop, start, add_one_minute, reduce_one_minute,autoreset_change],
  ] = useCountdown(25 * 60);

  return (
    <div className="Timer">
      <Time sec={leftSec}></Time>
      <button onClick={active?stop:start}>{active?"stop":"start"}</button>
      <button onClick={reset}>reset</button>
      <button onClick={add_one_minute}>+1</button>
      <button onClick={reduce_one_minute}>-1</button>
      <button onClick={autoreset_change}>{Autoreset?"auto":"manual"}</button>
      <p>{Count}</p>
      
    </div>
  );
};

export default Timer;
