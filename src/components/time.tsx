import React from "react"

import moment from 'moment';
import { render } from "@testing-library/react";

const secToMMSS = (sec: number): string =>
  moment.utc(sec * 1000).format('mm:ss');

type TimeProps = {
    sec:number
}
const Time:React.FC<TimeProps> = (props) =>{
    const time = secToMMSS(props.sec)
    return(
        <div style={{ fontSize:100}}>{time}</div>
    )
}


export default Time;