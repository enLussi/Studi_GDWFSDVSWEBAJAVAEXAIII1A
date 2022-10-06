window.onload = () => {
  // n'affiche le contenu de la plage que lorsque tout à été chargé
  document.getElementsByTagName('body')[0].style.display = "block";
}

var gamePanel = document.getElementById('gamePanel');
var battlefield = document.getElementById('battlefield');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var newGame = document.getElementById('newGame');
var dice = document.getElementById('dice');
var rollDice = document.getElementById('rollDice');
var hold = document.getElementById('hold');