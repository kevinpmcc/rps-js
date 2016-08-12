var ACTIONS = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
var BULES = { rock: { beats: ['scissors', 'lizard']},
  paper: { beats: ['rock', 'spock']},
  scissors: { beats: ['paper', 'lizard']},
  lizard: { beats: ['spock', 'paper']},
  spock: { beats: ['scissors', 'rock']} 
};
var RULES = { rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'] 
};


var wins = 0;
var losses = 0;
var ties = 0;
var NUMBEROFACTIONS = 5;
var self = this;

function updateScreen() {
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("ties").innerHTML = ties;
}

function gameTick(playerAction) {
  playerChoice(playerAction);
  var computerAction = computerChoice();
  results(playerAction, computerAction);
}

function playerWins() {
  wins += 1;
}

function playerLoses() {
  losses += 1;
}

function playerTies() {
  ties +=1;
}

function playerChoice(action){
  document.getElementById("chosenAction").innerHTML = action;
}

function computerChoice(){
  var computerAction = randomChoice();
  document.getElementById("computerAction").innerHTML = computerAction ;
  return computerAction;
}

function randomChoice() {
  var randNumber = Math.floor((Math.random() * 10) + 1) % NUMBEROFACTIONS;
  return ACTIONS[randNumber]  ;
}

function results(player, computer) {
  if( player == computer ) {
    playerTies();
  }
  else if ( RULES[player].indexOf(computer) > -1 ) {
    playerWins()  ;
  } 
  else {
    playerLoses();
  }
  updateScreen();
  setTimeout(winner, 50);
}

function winner() {
  if (wins === 2) {
    playerWinsGame();
  } else if (losses === 2) {
    computerWinsGame();
  }

}
function playerWinsGame(){
  document.getElementById("result").innerHTML= "You Won 2:"+ losses;
  gameOver();
}
function computerWinsGame(){
  document.getElementById("result").innerHTML= "You Lost 2:"+ wins;
  gameOver();
}


function gameOver() {
  document.getElementById("game-over").style.width = "100%";
}

function restartGame() {
  document.getElementById("game-over").style.width = "0";
  ties = 0;
  wins = 0;
  losses = 0;
  updateScreen();
}  
