import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Game.css';

type GameProps = {
  onGameEnd: any
}

function Game(props: GameProps) {
  const options: string[] = ["Rock", "Paper", "Scissors"];
  const [computerChoice, setComputerChoice] = useState(0);

  const winning: any = {
    "Rock": {},
    "Paper": {},
    "Scissors": {}
  };

  winning["Rock"]["Paper"] = 1;
  winning["Paper"]["Rock"] = 0;

  winning["Scissors"]["Rock"] = 1;
  winning["Rock"]["Scissors"] = 0;

  winning["Paper"]["Scissors"] = 1;
  winning["Scissors"]["Paper"] = 0;

  winning["Scissors"]["Scissors"] = 2;
  winning["Paper"]["Paper"] = 2;
  winning["Rock"]["Rock"] = 2;

  const checkWhoWon = (pc: number, cc: number) => {
    return winning[options[pc]][options[cc]];
  }

  const Rock = () => {
    setComputerChoice(Math.floor(Math.random() * options.length));
    props.onGameEnd(checkWhoWon(0, computerChoice), 0, computerChoice, new Date().toLocaleString());
  }

  const Paper = () => {
    setComputerChoice(Math.floor(Math.random() * options.length));
    props.onGameEnd(checkWhoWon(1, computerChoice), 1, computerChoice, new Date().toLocaleString());
  }

  const Scissors = () => {
    setComputerChoice(Math.floor(Math.random() * options.length));
    props.onGameEnd(checkWhoWon(2, computerChoice), 2, computerChoice, new Date().toLocaleString());
  }

  return (
    <div className="game">
      <h1 className="header">Rock, Paper, Scissors</h1>
      <div className="game-body">
        <div className="game-button btn btn-primary" onClick={Rock}>Rock!</div>
        <div className="game-button btn btn-primary" onClick={Paper}>Paper!</div>
        <div className="game-button btn btn-primary" onClick={Scissors}>Scissors!</div>
      </div>
    </div>
  )
}

export default Game;
