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
  console.log('Nouvelle Partie');
  console.log(Jeu.getJoueurs());
  Jeu.update();
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
    this.html = "";
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
    this.dice = 6;
    this.over = false;
  }

  update() {
    this.joueurs.forEach(joueur => {
      joueur.html =     
        '<div><p class="nom">'+joueur.getName()+'</p>'+
        '<p class="score">'+joueur.getGlobalScore()+'</p></div>'+
        '<div class="scoretour"><p class="title">Current</p><p class="tour">'+joueur.getTurnScore()+'</p></div>';

      if(joueur.getGlobalScore() >= 100) {
        this.over = true;
        joueur.html += "<p>Winner</p>";
      }
    });
    player1.innerHTML = this.joueurs[0].html;
    player2.innerHTML = this.joueurs[1].html;

    if(this.actif === 0) {
      player1.style.backgroundColor = "#b6b6b6";
      player2.style.backgroundColor = "transparent";
      console.log('player 1 actif');
    } else {
      player2.style.backgroundColor = "#b6b6b6";
      player1.style.backgroundColor = "transparent";
      console.log('player 2 actif');
    }
    console.log('update')
  }

  getActif() {
    return this.actif;
  }

  getJoueurs() {
    return this.joueurs;
  }

  rollDice() {
    this.dice = Math.floor(Math.random() * 5 + 1);

    dice.children[0].src = "/images/dice"+this.dice+".svg";

    if(this.dice === 1) {
      this.joueurs[this.actif].resetTurnScore();
      this.hold();
    } else {
      this.joueurs[this.actif].addScoreToTurn(this.dice);
      this.update();
    }

    console.log(this.dice);  
  }

  hold() {
    this.joueurs[this.actif].addScoreToGlobal();
    this.joueurs[this.actif].resetTurnScore();
    this.actif +=1;
    if(this.actif > 1) this.actif = 0;
    this.update();
  }

}