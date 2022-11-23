let ROCK = document.querySelector('.rock');
let PAPER = document.querySelector('.paper');
let SCISSORS = document.querySelector('.scissor');


ROCK.addEventListener("click",()=>{
  alert('You chose Rock!');
  playRound('ROCK',getComputerChoice());
})

PAPER.addEventListener("click",()=>{
  alert('You chose paper!');
  playRound('PAPER',getComputerChoice())
})

SCISSORS.addEventListener("click",()=>{
  alert('You chose scissors!');
  playRound('SCISSORS',getComputerChoice())
})


//A function to generate random ROCK , Paper , Scissor
function getComputerChoice() {
  // let random = ["rock", "paper" , "Scissor"];
  // return random[~~(Math.random() * random.length)];

  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    random = "ROCK";
  } else if (random === 1) {
    random = "PAPER";
  } else if (random === 2) {
    random = "SCISSORS";
  }
  return random;
}

//This is where the magic is made , here we are taking inputs from user and parsing them with the random values of the previous function so with the rules after that we can get the winner

function playRound(playerSelection, computerSelection) {
  // let user = prompt("What's the choice?");
  // playerSelection = user.toUpperCase();
  if ((playerSelection === 'ROCK') ||
    (playerSelection === 'SCISSORS') ||
    (playerSelection === 'PAPER')) {
    // console.log("Your choice is :" + playerSelection);
    computerSelection = getComputerChoice();
    // console.log("computer choice is :" + computerSelection);

    if (playerSelection === computerSelection) {
      alert('WoW! you and computer chose the same thing') ;
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      alert('Player Wins!!');
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      alert("Computer Wins!!")
    }
  }
  // else {
  //   alert = playerSelection.alert('Please select "rock" or "paper" or "scissors"');
  //   return alert;
  // }
}

// function game(){
//   let choices = [];
//   for (let i = 0 ; i<5 ; i++){
//   choices =playRound();
//   }
// }

// function RockSelect(){

// }
