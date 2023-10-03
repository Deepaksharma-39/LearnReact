import { useEffect, useRef, useState } from "react";

function Timer(){

    const fixTime=(time)=>(time<10 ? `0`+time :time);
    
    const formatTimeToString=(time)=>{
        const seconds=time%60;
        const min= Math.floor(time/60)%60;
        return `00.${fixTime(min)}.${fixTime(seconds)}`
    }

    const[time,settime]=useState(0);
    const ref= useRef(null);

    // start timer
    const startTimer=()=>{
        if(ref.current!==null)return;
        ref.current=setInterval(()=>{
            settime((time)=>time+1);
        },1000)
    }

    // Stop timer

    const stopTimer=()=>{

        clearInterval(ref.current);
        ref.current=null;
    }

    // reset Timer

    const resetTimer=()=>{
        stopTimer();
        settime(0);
    }
    // if we change pages the timer should stop to prevent memory leak
    useEffect(()=>{
        return()=>{stopTimer();}
    },[])

    return(
        <div>
            <h1>Timer</h1>
            <h3>{formatTimeToString(time)}</h3>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>stop</button>
            <button onClick={resetTimer}>reset</button>
        </div>
    )
}

export default Timer;