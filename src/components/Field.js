import React from "react";
import {useSelector} from "react-redux";

export default function Field(props) {
    const squares = useSelector((state) => state.squares);
    const result = [];
    for(let i = 0; i < 9; i++){
        result.push(
            <div className="ttt-grid" onClick={() => props.OnClick(i)} data={i} data-testid={'Sq' + i}>
                {squares[i]}
            </div>
        );
        if (i % 3 === 2){
            result.push(<div className="clearfix"> </div>);
        }
    }
        return result;

    }








