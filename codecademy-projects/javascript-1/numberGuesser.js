let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const checkHumanInput = (humanGuessInput) => {
  if (humanGuessInput > 9 || humanGuessInput < 0){
    alert("Please enter a valid number between 0 and 9");
    return
  }
}


const getAbsoluteDistance = (guess, target) => {
 return Math.abs(guess - target)
}

const compareGuesses = (currentHumanGuess, computerGuess, generateTarget) => {
  checkHumanInput(currentHumanGuess);
  let humanToTarget = getAbsoluteDistance(currentHumanGuess,  generateTarget);
  console.log(humanToTarget);
  let computerToTarget = getAbsoluteDistance(computerGuess, generateTarget);
  console.log(computerToTarget);

  if (humanToTarget === computerToTarget){
    return true
  } else if (humanToTarget < computerToTarget){
    return true
  } else if (humanToTarget > computerToTarget){
    return false
  }
}

compareGuesses(6,8,5);


const updateScore = (winner) => {
  if (winner === 'human'){
    ++humanScore;
  } else if (winner === 'computer'){
    ++computerScore;
  }
}

const advanceRound = () => {
  ++currentRoundNumber;
}
