const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const computerPlay = () => {  
  const randomNumber = Math.floor(Math.random() *3);
  return options[randomNumber];
}
const playerPlay = () => {
  let userInput = prompt("Enter a choice: rock, paper, scissors").trim().toLowerCase();
  if (userInput !== "rock" && userInput !== "paper" && userInput !=="scissors") 
      {
      alert("Input invalid! Please choose rock, paper or scissors");      
      return playerPlay();
     } 
     return userInput;
}

const playRound = (playerSelection,computerSelection) => {  
  let compare = (`${playerSelection} vs ${computerSelection}`);
  
  if (playerSelection === computerSelection) {
    alert(`${compare} is a tie`);
    return;
  }
  if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
       } else {
        alert (`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
       }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      alert(`You win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    } else {
      alert (`You lose! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
    }
  }   
  if (playerSelection === "paper") {
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
      let playerSelection = playerPlay();
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

