// Our const team will store players and game stats
const team = {
    _player: [{
        firstName: 'Bruno',
        lastName: 'Henrique',
        age: 30
    }, {
        firstName: 'Giorgian',
        lastName: 'de Arrascaeta',
        age: 27
    }, {
        firstName: 'Everton',
        lastName: 'Ribeiro',
        age: 33
    }],
    _games: [{
        opponent: 'Universidad Catolica',
        teamGoals: 3,
        opponentGoals: 2
    }, {
        opponent: 'Talleres',
        teamGoals: 3,
        opponentGoals: 1
    }, {
        opponent: 'Sporting Cristal',
        teamGoals: 2,
        opponentGoals: 0
    }],

    // Here, we add two getters

    get players() {
        return this._player
    },
    get games() {
        return this._games
    },

    //The methods below are factory functions and we'll use then to add new players and games
    
    addPlayer(newFirstName, newLastName, newAge) {
        newPlayer = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        }
        return this._player.push(newPlayer);
    },

    addGame(newOpponent, newTeamGoals, newopponentGoals) {
        newGame = {
            opponent: newOpponent,
            teamGoals: newTeamGoals,
            opponentGoals: newopponentGoals
        }

        return this.games.push(newGame);
    }
}

// Now let´s use the methods created
team.addPlayer("Gabriel", "Barbosa", 25);
team.addGame("Palmeiras", 0, 0);

// To make sure it works, we log the new stats
console.log(team.players);
console.log(team.games);
