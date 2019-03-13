import React from "react";
import Square from "../Square/Square";

import './Board.css';


class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        let boardMatrix = [];
        let squareNum = 0;
        for (let rowNum = 0; rowNum < 3; rowNum++) {
            let row = [];
            for (let colNum = 0; colNum < 3; colNum++) {
                row.push(
                    this.renderSquare( squareNum++ )
                );
            }
            boardMatrix.push(
                <div key={squareNum} className="board-row">
                    {row}
                </div>
            );
        }
        return (
            <div>
                {boardMatrix}
            </div>
        );
    }
}

export default Board;
