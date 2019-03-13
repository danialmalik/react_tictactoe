import React from "react";
import Board from "../Board/Board";
import MovesHistory from "../MovesHistory/MovesHistory";


import { calculateWinner, getGameStatus } from "./helper";

import "./Game.css";


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const status = getGameStatus(this.state.history, this.state.stepNumber, this.state.xIsNext);
        const { squares } = this.state.history[this.state.stepNumber];
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={squares}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <MovesHistory
                        onClickHandler={move => this.jumpTo(move)}
                        history={this.state.history} />
                </div>
            </div>
        );
    }
}

export default Game;
