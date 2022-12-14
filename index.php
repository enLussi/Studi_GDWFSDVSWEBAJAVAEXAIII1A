<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 
    Lien CDN Bootstrap 5.2.0
   -->
  <link 
    rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" 
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" 
    crossorigin="anonymous"
  >
  <link rel="stylesheet" href="/css/style.css">

  <!-- 
    Lien Polices Lato requises
      Gras 100, 300, 400, 700, 900 avec le style italic pour chaque épaisseur de graisse.
   -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link 
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" 
    rel="stylesheet"
  > 

  <title>Roll The Dice</title>

  <script src="/js/script.js" defer async></script>
</head>
<body>
  <header id="title">
    <h1>Roll The Dice</h1>
  </header>
  
  <main>
    <div id="rules">
      <button><img src="/images/rule.svg" alt="" width="20"></button>
      <div >
        <p>
          Le jeu comprend 2 joueurs sur un seul et même écran.<br>
          Chaque joueur possède un score temporaire et un score global.<br>
          À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le
          résultat d’un lancer est ajouté au ROUND.
        </p>
        <p>
          Lors de son tour, le joueur peut décider à tout moment de:
          <ul>
            <li>
              Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
              tour de l’autre joueur.
            </li>
            <li>
              Lancer le dé avec “Roll Dice”. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
            </li>
          </ul>
          Le premier joueur qui atteint les 100 points gagne le jeu.
        </p>
      </div>
    </div>
    <div id="gamePanel" class="container-fluid text-center">
      <div 
        id="battlefield" 
        class="row"
      >
        <!-- Chaque joueur a 
          son Nom avec l'indicateur de tour 
          son score Global et 
          son score de Tour 
        -->
        <div 
          id="player1"
          class="col d-flex flex-column align-items-center justify-content-between"
        >
          <!-- script.js insère les élément du joueur 1 ici -->
        </div>
        <div 
          id="player2"
          class="col d-flex flex-column align-items-center justify-content-between"
        >
          <!-- script.js insère les élément du joueur 2 ici -->
        </div>
      </div>
      <div id="actions">
        <div  
          class="d-flex flex-column align-items-center justify-content-between"
        >
          <div id="newGame" class="p-2">
            <button>
              <img src="/images/plus.svg" alt="" width="30">
              new game
            </button>
          </div>
          <div id="dice" class="p-2">
            <!-- script.js insère le résultat du dé ici -->
            <img src="/images/dice6.svg" alt="" width="120">
          </div>
          <div class="p-2 d-flex flex-column align-items-center">
            <div id="rollDice">
              <button>
                <img src="/images/roll.svg" alt="" width="30">
                roll dice
              </button>
            </div>
            <div id="hold">
              <button>
                <img src="/images/hold.svg" alt="" width="30">
                hold
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </main>
</body>
</html>