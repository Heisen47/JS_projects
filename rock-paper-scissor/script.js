let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let textBox = document.querySelector('.textBox')

// let rock_event = rock.addEventListener('click',(e)=>{
//   let print =console.log('Pressed rock!');
//   e.target.innerText =textBox;
// })


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
  let user = prompt("What's the choice?");
  playerSelection = user.toUpperCase();
  if (playerSelection === 'ROCK' || 'PAPER' || 'SCISSORS') {
    console.log("Your choice is :" + playerSelection);
    computerSelection = getComputerChoice();
    console.log("computer choice is :" + computerSelection);

    if (playerSelection === computerSelection) {
      return 'tie'
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      return 'Player Wins!!'
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      return "Computer Wins!!"
    }
  }
  else {
    alert = playerSelection.alert('Please select "rock" or "paper" or "scissors"');
    return alert;
  }
}

// function game(){
//   let choices = [];
//   for (let i = 0 ; i<5 ; i++){
//   choices =playRound();
//   }
// }


