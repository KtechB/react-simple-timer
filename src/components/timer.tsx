import React, { FC, useEffect, useState } from "react";
import Time ,{secToMMSS}from "./time";
import "./timer.css";
import useAudio from "./useAudio"
import {Helmet} from "react-helmet"
import  Sound from "react-sound"
const useCountdown = (limit: number): any => {
  const [audio,playing, currentTime, play, pause, jump] = useAudio(audioUrl);
  const [Autoreset, setAutoreset] = useState(true)
  const [leftSec, setLeftSec]: [number, any] = useState(limit);
  const [Count, setCount]: [number, any] = useState(0);
  let [timerObj, setTimerObj]: [any, any] = useState("");
  const [active, setactive]: [boolean, any] = useState(false);
  const [soundstatus, setSoundstateus] = useState("STOPPING")
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
      
      setSoundstateus("PLAYING")
      audio.play();
      setCount((count:number)=> count +1)
      if(Autoreset){
          setLeftSec(Count%2===1 ?limit:5 * 60);

      }
      else{
      
      clearInterval(timerObj);
      setLeftSec(Count%2===1 ?limit:5 * 60);
      

      setactive(false);}
      
      

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
  const load =() =>{
    audio.play()
  }
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
  }, [leftSec,timerObj]);
  useEffect(() => {
    clearInterval(timerObj);
  }, []);

  return [
    [leftSec, active,Count,Autoreset, soundstatus],
    [reset, stop, start, add_one_minute, reduce_one_minute, autoreset,setSoundstateus],
  ];
};

const audioUrl ="https://on-jin.com/sound/ag/s87651b/se/b/hito_ge_kuchibue01.mp3";
const Timer: FC = () => {

  const [
    [leftSec, active,Count, Autoreset, soundstatus],
    [reset, stop, start, add_one_minute, reduce_one_minute,autoreset_change,setSoundstateus],
  ] = useCountdown(25 * 60);
  

  return (
    <div className="Timer">
      
      <Helmet><title>Fox Timer</title></Helmet>
      <Sound url={audioUrl} playStatus={"STOPPED"} onFinishedPlaying={()=> setSoundstateus("STOPPED")} ></Sound>
      <Time sec={leftSec}></Time>
      <button onClick={active?stop:start}>{active?"stop":"start"}</button>
      <button onClick={reset}>reset</button>
      <button onClick={add_one_minute}>+1</button>
      <button onClick={reduce_one_minute}>-1</button>
      
      <button onClick={autoreset_change}>{Autoreset?"auto":"manual"}</button>
      <p>{Math.floor(Count/2)} cycle</p>
      
    </div>
  );
};

export default Timer;
