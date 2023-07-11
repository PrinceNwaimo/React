
// import React, { useState } from 'react';
import './Tac.css';
import {useState} from "react";

function Toe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState('X');

    function handleSquareClick(index) {
        const newBoard = [...board];
        if (newBoard[index] === null) {
            newBoard[index] = player;
            setBoard(newBoard);
            setPlayer(player === 'X' ? 'O' : 'X');
        }
    }

    function innerSquare(index) {
        return (
            <button className="square" onClick={() => handleSquareClick(index)}>
                {board[index]}
            </button>
        );
    }

    function getWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    const winner = getWinner();
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (board.every((square) => square !== null)) {
        status = 'Draw';
    } else {
        status = `Player's turn: ${player}`;
    }

    function handleResetClick() {
        setBoard(Array(9).fill(null));
        setPlayer('X');
    }

    return (
        <main className="background">
            <section className="title">
                <hi>Tic Tac Toe</hi>
            </section>
            <section className="display">
                Player turn <span className="display-player playerX">X</span>
            </section>
            <section className="container">
                <div className="tile">{innerSquare(0)}</div>
                <div className="tile">{innerSquare(1)}</div>
                <div className="tile">{innerSquare(2)}</div>
                <div className="tile">{innerSquare(3)}</div>
                <div className="tile">{innerSquare(4)}</div>
                <div className="tile">{innerSquare(5)}</div>
                <div className="tile">{innerSquare(6)}</div>
                <div className="tile">{innerSquare(7)}</div>
                <div className="tile">{innerSquare(8)}</div>

            </section>
            <section className="display announcer hide"></section>
            <section className="controls">
                {/*<button id="reset">Reset</button>*/}
                <button className="reset" onClick={handleResetClick}>
                                Reset
                             </button>
            </section>
        </main>


    // <React.Fragment>
    //     <div className="game">
    //         <div className="board">
    //             <div className="status">{status}</div>
    //             <div className="row">
    //                 {innerSquare(0)}
    //                 {innerSquare(1)}
    //                 {innerSquare(2)}
    //             </div>
    //             <div className="row">
    //                 {innerSquare(3)}
    //                 {innerSquare(4)}
    //                 {innerSquare(5)}
    //             </div>
    //             <div className="row">
    //                 {innerSquare(6)}
    //                 {innerSquare(7)}
    //                 {innerSquare(8)}
    //             </div>
    //         </div>
    //         <button className="reset" onClick={handleResetClick}>
    //             Reset
    //         </button>
    //     </div>
    //     </React.Fragment>
    );
}
 export default Toe;
