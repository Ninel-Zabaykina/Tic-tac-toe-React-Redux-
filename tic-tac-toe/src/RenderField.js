import React from "react";

export default function RenderField(props) {
    const result = [];
    for(let i = 0; i < 9; i++){
        result.push(
            <div className="ttt-grid" onClick={() => props.onClick(i)} data={i} data-testid={'Sq' + i}>
                {() => props.squares(i)}
            </div>
        );
}
    return result;}

