import React, { useState } from 'react';
import answers from './answers';
import './EightBall.css';

const choice = (arr) => {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
};

const EightBall = () => {
    const [msg, setMsg] = useState("Think of a question.")
    const [color, setColor] = useState("black")

    const reset = () => {
        setMsg("Think of a question.")
        setColor("black")
    }

    const handleClick = () => {
        const { msg, color } = choice(answers);
        setMsg(msg);
        setColor(color);
    }
    
    return (
        <div className="EightBall">
            <button 
                className="EightBall-ball"
                onClick={handleClick}
                style={{ backgroundColor: color }}>
                    <b>{msg}</b>
            </button>
            <button 
                className="EightBall-reset"
                onClick={reset}>
                    Reset
            </button>
        </div>

    )
};

export default EightBall;