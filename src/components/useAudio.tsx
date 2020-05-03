import React from "react";
//cite from https://qiita.com/kazumicho/items/53572ae56bb70b2e20d0

const useAudio = (url:string) => {
  // create audio only once
  const [audio] = React.useState(new Audio(url));

  // same as React.Component.forceUpdate
  const [, _forceUpdate] = React.useState(false);
  const forceUpdate = () => _forceUpdate(prevState => !prevState);

  React.useEffect(() => {
    //audio.play();

    audio.addEventListener("play", forceUpdate);
    audio.addEventListener("pause", forceUpdate);
    audio.addEventListener("ended", forceUpdate);
    audio.addEventListener("timeupdate", forceUpdate);

    return () => {
      audio.removeEventListener("play", forceUpdate);
      audio.removeEventListener("pause", forceUpdate);
      audio.removeEventListener("ended", forceUpdate);
      audio.addEventListener("timeupdate", forceUpdate);
    };

    /**
     * about useEffect's second argument
     *    give nothing        => same as componentDidUpdate
     *audjio    give an empty array => same as componentWillMount
     */
  }, []);

  const play:any= () => audio.play();
  const pause:any = () => audio.pause();
  const jump = (value:number) => (audio.currentTime += value);

  return [audio,!audio.paused, audio.currentTime, play, pause, jump];
};

export default useAudio;