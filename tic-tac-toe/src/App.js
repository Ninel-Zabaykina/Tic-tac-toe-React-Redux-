import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {ACTION_TYPES, isWinnerSelector} from "./store";

class App extends Component {
    constructor(props) {
        super(props);
    }


    renderField() {
        const result = [];
        for(let i = 0; i < 9; i++){
            result.push(
                <div className="ttt-grid" onClick={() => this.props.onClick(i)} data={i} data-testid={'Sq' + i}>
                    {this.props.squares[i]}
                </div>
            );
        }
        return result;
    }

    render() {
        if (this.props.isWinner) {
            alert(this.props.isWinner + ' win');
            setTimeout(()=>{
                this.props.startNew();
            },2000);
        }

        return (
            <div className="tic-tac-toe">
                {this.renderField()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        squares: state.squares,
        count: state.count,
        isWinner: isWinnerSelector(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: (id) => dispatch({type: ACTION_TYPES.TURN, payload: id}),
        startNew: () => dispatch({type: ACTION_TYPES.START_NEW})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
