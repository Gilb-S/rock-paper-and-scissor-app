const choices = ['rock','paper','scissors'];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById('result');
const scores = document.getElementById("scores");
const comscore = document.getElementById("comscore");


var icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");

}

let playerScore = 0;
let ComputerScore = 0;



function playGame(choice){

  const computerDisplay = choices[Math.floor(Math.random()* 3)];

  let results = " ";

  if(choice === computerDisplay){
      results = "It's a tie!"
  }
  else{
    switch(choice){
      case "rock":
        results = (computerDisplay === "scissors") ? "You win" : "You lose";
        break;
      case "paper":
        results = (computerDisplay === "rock") ? "You win" : "You lose";
        break;
      case "scissors":
        results = (computerDisplay === "paper") ? "You win " : "You lose";
        break;
     }
  
  }
  playerChoice.textContent = `PLAYER: ${choice}`;
  computerChoice.textContent = `COMPUTER: ${computerDisplay}`;
  result.textContent = results;

  switch(results){
    case "You win":
      playerScore++;
      scores.textContent = playerScore;
      break;
    case "You lose":
      ComputerScore++;
      comscore.textContent = ComputerScore;
      break;
  }

  
}

