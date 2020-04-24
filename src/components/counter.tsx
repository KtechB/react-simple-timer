
import React, {FC, useEffect, useState} from 'react';

const Counter:FC = () => {
    const [ count, setCount ] = useState(0);

    /* 
  * useEffectは、第一引数にcallbackを入れて、第二引数に依存する値の配列を入れる
  * 依存する値が変更される度にcallbackが実行される
  */
    //console.log("function component used")
    useEffect(
        () => {
            const time = setInterval(() => {
                setCount(prevCount => prevCount+ 1);
            }, 1000);
            console.log("used effect")
            
            return () => clearInterval(time);// 終わったら止める
        },[]// マウント時のみ実行
    );

    return (
        <div>
            <p>{count}</p>
        </div>
    );
};

export default Counter