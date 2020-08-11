import React from 'react';

type StatsProps = {
  games: any[]
}

function Stats(props: StatsProps) {
  var winCount: number = 0; // This is probably bad code
  const totalGames: number = props.games.length;
  for (var i: number = 0; i < props.games.length; i++) { // Same with this loop I guess
    if (props.games[i].whoWon === 0) {
      winCount = winCount + 1;
    }
  }

  return (
    <div className="stats">
      Win Percentage: <b>{isNaN(Math.round((winCount/totalGames)*100)) ? "0" : Math.round((winCount/totalGames)*100)}%</b><br/>
      Total Wins: <b>{winCount}</b><br/>
      Total Games: <b>{totalGames}</b><br/>
    </div>
  )
}

export default Stats;
