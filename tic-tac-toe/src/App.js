import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {ACTION_TYPES, isWinnerSelector} from "./store";
import RenderField from "./RenderField";

function App (props) {
    const Win = props.isWinner;
    if (Win) {
            alert(Win + ' win');
            setTimeout(()=>{
                props.startNew();
            },2000);
        }

        return (
            <>
                <RenderField  />
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

function mapDispatchToProps(dispatch) {
    return {
        onClick: (id) => dispatch({type: ACTION_TYPES.TURN, payload: id}),
        startNew: () => dispatch({type: ACTION_TYPES.START_NEW})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
