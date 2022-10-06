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

var Jeu = undefined;

newGame.onclick = () => {
  Jeu = new Partie(new Joueur("Player 1"), new Joueur("Player 2"));
}

rollDice.onclick = () => {
  Jeu.rollDice();
};

hold.onclick = () => {
  Jeu.hold();
}

class Joueur {
  constructor(nom) {
    this.nom = nom;
    this.global = 0;
    this.tour = 0;
  }

  setName(nom){
    this.nom = nom;
  }

  getName() {
    return this.nom;
  }

  addScoreToTurn(score) {
    this.tour += score;
  }

  resetTurnScore() {
    this.tour = 0;
  }

  addScoreToGlobal() {
    this.global += this.tour;
  }

  getTurnScore() {
    return this.tour;
  }

  getGlobalScore() {
    return this.global;
  }
}

class Partie {
  constructor(joueur1, joueur2) {
    this.joueurs = [joueur1, joueur2];
    this.actif = 0;
  }

  update() {

  }

  getActif() {
    return this.actif;
  }

  getJoueurs() {
    return this.joueurs;
  }

  rollDice() {
    score = Math.floor(Math.random() * 5 + 1);

    if(score === 1) {
      this.joueurs[this.actif].resetTurnScore();
      this.joueurs[this.actif].hold();
    } else {
      this.joueurs[this.actif].addScoreToTurn(score);
    }
  }

  hold() {
    this.joueurs[this.actif].addScoreToGlobal();
    this.actif +=1;
    if(this.actif > 1) this.actif = 0;
  }

}