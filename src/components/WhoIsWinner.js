import React, { useState, useEffect } from 'react';
import {useSelector} from "react-redux";
import {isWinnerSelector} from "../store";

export default function WhoIsWinner({ text }) {
    const [isShow, setIsShow] = useState(true);
    const isWin = useSelector(isWinnerSelector);

  /*  useEffect(() => {
        const timer = setInterval(() => {
            setIsShow(false);
        }, 3000);
        return () => {
            clearInterval(timer);
        };
    }, []);*/

    return (
        <div className='message'>
            {isWin && <label data-testid='msg'>{text}</label>}
        </div>
    );
}