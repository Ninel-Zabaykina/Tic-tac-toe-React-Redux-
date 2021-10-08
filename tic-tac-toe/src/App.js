import React from 'react';
import './App.css';
import {connect, useDispatch} from "react-redux";
import {ACTION_TYPES, isWinnerSelector} from "./store";
import Field from "./Field";

function App(props) {
    const dispatch = useDispatch();
    const win = props.isWinner;
    console.log(win);
    if (win) {
        alert(win + ' win');
        dispatch()
        setTimeout(() => {
            startNew();
        }, 2000);
    }

    function onClick(id) {
        dispatch({type: ACTION_TYPES.TURN, payload: id});
    }

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
            <Field OnClick={onClick}/>
        </>
    );

}

function mapStateToProps(state) {
    return {
        squares: state.squares,
        count: state.count,
        isWinner: isWinnerSelector(state),
        win_o: state.win_o,
        win_y: state.win_y
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
