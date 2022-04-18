const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
      return userInput;
    }
    else {
      return 'Please enter with a valid choice'
    }
  };
  
  const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3)
    if (random === 0) {
      return 'rock'
    }
    else if (random === 1) {
      return 'paper'
    }
    else {
      return 'scissors'
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a draw'
    }
    else {
        if (userChoice === 'bomb') {
            return 'Human wins'
          }
        else {
          if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
              return 'Computer wins'
            }
            else {
              return 'Human wins'
            }
            }
            else if (userChoice === 'paper') {
              if (computerChoice === 'scissors') {
                return 'Computer wins'
              }
              else {
                return 'Human wins'
              }
            }
            else {
              if (computerChoice === 'rock') {
                return 'Computer wins'
              }
              else {
                return 'Human wins'
              }
            }   
        }
    }

  }
  
  function playGame() {
    let userChoice = getUserChoice('Rock');
    let computerChoice = getComputerChoice();
    console.log(`Human: ${userChoice} and computer: ${computerChoice}, `)
    return determineWinner(userChoice, computerChoice)
  }
  
  // determineWinner(userChoice, computerChoice)
  console.log(playGame())