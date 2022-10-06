window.onload = () => {
  // n'affiche le contenu de la plage que lorsque tout à été chargé
  document.getElementsByTagName('body')[0].style.display = "block";
}


/**
 * Récupération des élément du DOM
 */
var gamePanel = document.getElementById('gamePanel');
var rules = document.getElementById('rules');
var battlefield = document.getElementById('battlefield');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var actions = document.getElementById('actions');
var newGame = document.getElementById('newGame');
var dice = document.getElementById('dice');
var rollDice = document.getElementById('rollDice');
var hold = document.getElementById('hold');
var title = document.getElementById('title');


/**
 * initialisation de la variable Jeu
 */
var Jeu = undefined;

/**
 * Initialisation de l'affichage des éléments
 * RollDice, Hold, et Dice
 */
rollDice.style.display = "none";
hold.style.display = "none";
dice.style.display = "none";

/**
 * Initialisation de la fenêtre des règles 
 */
var showRule = false;
rules.children[1].style.visibility = 'hidden';

rules.onclick = () => {
  showRule = !showRule;
  console.log(showRule);
  if(showRule) {
    rules.children[1].style.visibility = 'visible';
  } else {
    rules.children[1].style.visibility = 'hidden';
  }
}


/**
 * Initialisation des évènements des boutons 
 * New Game, Roll Dice et Hold
 */
newGame.onclick = () => {
  Jeu = new Partie(new Joueur("Player 1"), new Joueur("Player 2"), 100);

  rollDice.style.display = "block";
  hold.style.display = "block";
  dice.style.display = "block";

  rollDice.style.visibility = "visible";
  hold.style.visibility = "visible";
  dice.style.visibility = "visible";

  title.style.visibility = "hidden";

  Jeu.update();
}

rollDice.onclick = () => {
  if(!Jeu.over) {
    Jeu.rollDice();
  }
};

hold.onclick = () => {
  if(!Jeu.over) {
    Jeu.hold();
  }
}


/**
 * Classes Joueur 
 *  Attributs
 *  Nom, score global, score du tour, et affichage
 *  
 *  Méthodes
 *  setName, getName
 *  addScoreToTurn pour l'ajout de point dans le score du tour
 *  resetTurnScore pour réinitialiser les point du score du tour
 *  addScoreToGlobal pour l'ajout des points dans le score global
 *  getTurnScore, getGlobalScore
 */
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

/**
 * Classe Partie
 *  Attribut
 *  tableau de joueur, l'id du joueur actif, la valeur courante du dé, partie fini (bool), point max
 * 
 *  Méthodes
 *  update, rollDice (jet de dé), hold (fin de tour)
 *  
 */
class Partie {
  constructor(joueur1, joueur2, maxpoint) {
    this.joueurs = [joueur1, joueur2];
    this.actif = 0;
    this.dice = 1;

    this.over = false;
    this.maxpoint = maxpoint;
  }

  update() {
    this.joueurs.forEach(joueur => {
      joueur.html =     
        '<div><p class="nom">'+joueur.getName()+'</p>'+
        '<p class="score">'+joueur.getGlobalScore()+'</p></div>'+
        '<div class="scoretour"><p class="title">Current</p><p class="tour">'+joueur.getTurnScore()+'</p></div>';

      if(joueur.getGlobalScore() >= this.maxpoint) {
        this.over = true;
        joueur.html += "<p id=win>Winner</p>";

        player1.style.backgroundColor = "transparent";
        player2.style.backgroundColor = "transparent";

        rollDice.style.visibility = "hidden";
        hold.style.visibility = "hidden";
        dice.style.visibility = "hidden";

        title.style.visibility = "visible";


      }
    });
    player1.innerHTML = this.joueurs[0].html;
    player2.innerHTML = this.joueurs[1].html;

    if(this.actif === 0) {
      player1.style.backgroundColor = "#dbdbdb";
      player1.firstChild.firstChild.style.fontWeight = "400";

      player2.style.backgroundColor = "transparent";
      console.log('player 1 actif');
    } else {
      player2.style.backgroundColor = "#dbdbdb";
      player2.firstChild.firstChild.style.fontWeight = "400";

      player1.style.backgroundColor = "transparent";
      console.log('player 2 actif');
    }
    console.log('update')
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