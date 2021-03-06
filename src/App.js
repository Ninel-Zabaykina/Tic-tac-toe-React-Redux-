import React, { useEffect } from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {ACTION_TYPES, isWinnerSelector} from "./store";
import Field from "./components/Field";
import CountWin from "./components/CountWin";

function App() {
    const dispatch = useDispatch();
    const win = useSelector(isWinnerSelector);
    console.log(win);
    useEffect(()=> {
        if (win) {
            setTimeout(() => {
                startNew();
            }, 2000);
        }
        if (win === 'X'){
            winX();
        } else if (win === 'O') {
            winO();
        }
    }, [win]);




    function startNew() {
        dispatch({type: ACTION_TYPES.START_NEW});
    }

    function winX() {
        dispatch({type: ACTION_TYPES.INCREMENT_X});
    }

    function winO() {
        dispatch({type: ACTION_TYPES.INCREMENT_O});
    }

    return (
        <>
            <Field />
            <CountWin />
        </>
    );

}

export default App;
