const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let computerPlay = () => {  
  const randomNumber = Math.floor(Math.random() *3);
  return options[randomNumber];
}
let playerSelection = (`Enter a choice: ${options}`);
let computerSelectin = computerPlay();

const playRound = (playerSelection,computerSelection) => {  
  let compare = (`${playerSelection} vs ${computerSelection}`);
  
  if (playerSelection.toLowerCase() === computerSelection) {
    alert(`${compare} is a tie`);
    return;
  }
  if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection === "scissors") {
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
       } else {
        alert (`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
       }
  }
  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "paper") {
      alert(`You win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    } else {
      alert (`You lose! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
    }
  }   
  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      alert(`You win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    } else {
      alert (`You lose! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
    }
  }
}
const game = () => {
  for (let i=0; i < 5; i++) {    
      let playerSelection = window.prompt(`Enter a choice: ${options}`);
      console.log("PS:", playerSelection);
      let computerSelection = computerPlay();
      console.log("CS:", computerSelection);
      playRound(playerSelection, computerSelection);
      console.log("Player score", playerScore, "Computer score", computerScore);  
      if (i === 4) {
        if (playerScore === computerScore) {
          alert("It's a tie. PLAY AGAIN!")
        } else if (playerScore > computerScore) {
          alert("Player wins!")
        } else {
          alert ("Computer wins!")
        }
      }     
    }    
}
game();

