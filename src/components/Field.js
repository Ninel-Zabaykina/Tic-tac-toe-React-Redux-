import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {ACTION_TYPES} from "../store";

export default function Field() {
    const dispatch = useDispatch();

    function onClick(id) {
        dispatch({type: ACTION_TYPES.TURN, payload: id});
    }

    const squares = useSelector((state) => state.squares);
    const result = [];
    for (let i = 0; i < squares.length; i++) {
        result.push(
            <div className="ttt-grid" onClick={() => onClick(i)} data={i} data-testid={'Sq' + i}>
                {squares[i]}
            </div>
        );
        if (i % 3 === 2) {
            result.push(<div className="clearfix"></div>);
        }
    }
    return result;

}








