import { useState } from "react";
import Cell from "./cell.jsx";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";

function Grid() {
  const [xPlay, setxPlay] = useState(true);
  const [board, setboard] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (board[i] || getWin(board)) {
      return;
    }
    const newBoard = board.slice();
    if (xPlay) {
      newBoard[i] = "X";
    } else {
      newBoard[i] = "O";
    }

    setboard(newBoard);
    setxPlay(!xPlay);
  }

  function getWin(board) {
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
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return xPlay ? "Joueur 2" : "Joueur 1";
      }
    }
    return null;
  }
  function reset() {
    setboard(Array(9).fill(null));
    setxPlay(true);
  }
  const winner = getWin(board);

  let playingState = "Au tour de: X";
  if (winner) {
    playingState = winner + " a gagné !";
  } else {
    playingState = "Au tour du : " + (xPlay ? "Joueur 1" : "Joueur 2");
  }

  return (
    <>
      <h2>{playingState}</h2>
      <div className="grid">
        <Cell
          className="cell1"
          value={board[0]}
          onCellClick={() => handleClick(0)}
        />
        <Cell
          className="cell2"
          value={board[1]}
          onCellClick={() => handleClick(1)}
        />
        <Cell
          className="cell3"
          value={board[2]}
          onCellClick={() => handleClick(2)}
        />
        <Cell
          className="cell4"
          value={board[3]}
          onCellClick={() => handleClick(3)}
        />
        <Cell
          className="cell5"
          value={board[4]}
          onCellClick={() => handleClick(4)}
        />
        <Cell
          className="cell6"
          value={board[5]}
          onCellClick={() => handleClick(5)}
        />
        <Cell
          className="cell7"
          value={board[6]}
          onCellClick={() => handleClick(6)}
        />
        <Cell
          className="cell8"
          value={board[7]}
          onCellClick={() => handleClick(7)}
        />
        <Cell
          className="cell9"
          value={board[8]}
          onCellClick={() => handleClick(8)}
        />
      </div>
      {/*BOUTON RESET appel la function reset et je lui met le bail en vide et les X peuvent jouer après*/}
      <button onClick={reset} className="BtnReset">Réinitialiser</button>
    </>
  );
}

export default Grid;
