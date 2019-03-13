import React from "react";
import Button from "./Button";


const MovesHistory = ({history, onClickHandler}) => {
    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        
        return (
            <li key={move}>
                <Button 
                onClickHandler={()=>onClickHandler(move)}
                move={move}
                desc={desc}
                />
            </li>
        );
    });
    return moves;
}

export default MovesHistory;
