import React, { useState, useEffect } from 'react';

export default function WhoIsWinner({ text }) {
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsShow(false);
        }, 3000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='message'>
            {isShow && <label data-testid='msg'>{text}</label>}
        </div>
    );
}