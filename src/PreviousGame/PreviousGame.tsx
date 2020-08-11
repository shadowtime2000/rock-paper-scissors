import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PreviousGame.css';

type PreviousGameProps = {
  whoWon: number,
  playerChoice: number,
  computerChoice: number,
  key: number,
  time: string,
}

function PreviousGame(props: PreviousGameProps) {
  const options: string[] = ["Rock", "Paper", "Scissors"];

  return (
    <div className="card">
      <h5 className="card-header">{props.whoWon === 2 ? "Tie!" : (props.whoWon === 0 ? "You Won!" : "Computer Won!")}</h5>
      <p className="card-body">
        You: <b>{options[props.playerChoice]}</b><br/>
        Computer: <b>{options[props.computerChoice]}</b><br/>
        <b>{props.time}</b><br/>
      </p>
    </div>
  )
}

export default PreviousGame;
