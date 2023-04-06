const team = {
    _players: [
      {firstName: 'VLadimir', lastName: 'Borovikov', age: 35},
    {firstName: 'Polina', lastName: 'Deruga', age: 22}, 
    {firstName: 'Lucya', lastName: 'Koroleva', age: 33}
    ],
    _games: [
      {opponent: 'Vika', teamPoints: 3, opponentPoints: 2}, 
      {opponent: 'Anton', teamPoints: 1, opponentPoints: 4}, 
      {opponent: 'Jamie', teamPoints: 0, opponentPoints: 100}
      ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      }
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      }
      this._games.push(game);
    }
  };
  
  team.addPlayer('Vladimir', 'Putin', 89);
  console.log(team._players);
  team.addGame('Petr', 3, 254);
  console.log(team._games);