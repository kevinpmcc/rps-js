var ACTIONS = ['rock', 'paper', 'scissors'];
var RULES = { rock: 'scissors',
  paper: 'rock',
  scissors: 'paper' 
};

var wins = 0;
var losses = 0;
var ties = 0;

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
  var randNumber = Math.floor((Math.random() * 10) + 1) % 3  ;
  return ACTIONS[randNumber]  ;
}

function results(player, computer) {
  if( player == computer ) {
    playerTies();
  }
  else if ( RULES[player] == computer) {
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
  location.reload();
}  
