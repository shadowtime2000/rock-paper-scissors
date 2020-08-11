import React, {useState} from 'react';
import './App.css';

import Game from './Game/Game';
import PreviousGame from './PreviousGame/PreviousGame';
import Stats from './Stats/Stats';

// I think putting so much logic inside the App component is a bad idea
function App() {
  const emptyArr: any[] = [];
  const [previousGames, setPreviousGames] = useState(emptyArr);

  const onGame = (w: number, p: number, c: number, t: string) => {
    let newArr = previousGames.slice();
    newArr.push({whoWon: w, playerChoice: p, computerChoice: c, time: t});
    newArr.reverse();
    setPreviousGames(newArr);
  };

  const clearGames = () => {
    setPreviousGames(emptyArr);
  };

  return (
    <div className="App container">
      <h1>Rock, Paper, Scissors</h1>
      <Game onGameEnd={onGame}/>
      <div className="btn btn-primary" onClick={clearGames}>Clear Games</div>
      <Stats games={previousGames} />
      {previousGames.map((e, index) => <PreviousGame key={index} whoWon={e.whoWon} playerChoice={e.playerChoice} computerChoice={e.computerChoice} time={e.time} />)}
    </div>
  );
}
export default App;
