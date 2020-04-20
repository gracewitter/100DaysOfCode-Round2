const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else{
    console.log('Hmm something went wrong, try entering that again');
  }
};

const getComputerChoice = function() {
  let compChoice = Math.floor(Math.random() * 3);
  switch (compChoice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return "The computer won 😢";
    } else {
      return "You won! 🎉";
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return "The computer won 😢";
    } else {
      return "You won! 🎉";
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return "The computer won 😢";
    } else {
      return "You won! 🎉";
    }
  } else{
    return "You won! 💣"
  }
}

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  console.log(`user choice: ${userChoice}`);

  let computerChoice = getComputerChoice();
  console.log(`computer choice: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
