
   let init = document.getElementById('newGame')
   let player1 = document.querySelector('.player1');
   let player2 = document.querySelector('.player2');
   let btnRoll = document.getElementById('.Roll');
   let img = document.querySelector('.imgD');
   
   let activePlayer = player1;
   let games;
   



//  initialiser la partie
 newGame.addEventListener("click", ()  => { 
         player1 = prompt("joueur 1, quel est votre pseudo ?");
         player2 = prompt("joueur 2, quel est votre pseudo ?");
         if (confirm("nouvelle partie ?") == true) {  
         document.querySelector('.player1').innerHTML = player1;
         document.querySelector('.player2').innerHTML = player2;
         blockPlayer.style.opacity = 1;
         blockPlayer.style.background= "white";
         roundPlayerOne.textContent = "0";
         roundPlayerTwo.textContent = "0";
         totalP1.textContent = "0";
         totalP2.textContent = "0";
         games = true;
         result.innerHTML="";
        } 
     })

//  au clic du bouton lancé le dé

roll.addEventListener("click", () => {
   let diceFaces = [
      "imgDice/dice1.png",
      "imgDice/dice2.png",
      "imgDice/dice3.png",
      "imgDice/dice4.png",
      "imgDice/dice5.png",
      "imgDice/dice6.png"
   ];
   
   //img.style.visibility = "visible";
   let ValueDice = Math.floor(Math.random() * diceFaces.length) + 1;
   let dice = diceFaces[ValueDice - 1];
   img.setAttribute('src', dice)
  if(ValueDice == 1) {
      if(activePlayer == player1 ) {
         roundPlayerOne.textContent = 0;
      } else {
         roundPlayerTwo.textContent = 0;
      }
      changePlayer();
   } else  {
      if(activePlayer == player1) {
         roundPlayerOne.textContent = parseInt(roundPlayerOne.textContent) + ValueDice;
      } else {
         roundPlayerTwo.textContent = parseInt(roundPlayerTwo.textContent) + ValueDice;
      }
   }
})
const changePlayer = () => {
   activePlayer.classList.remove("on");
   activePlayer.classList.add("off");
   activePlayer = activePlayer = player1 ? player2 : player1;
   activePlayer.classList.remove("off");
   activePlayer.classList.add("on");
}


// bouton pou stocker les points
let scoreP1 = document.getElementById("totalP1");
let scoreP2 = document.getElementById("totalP2");
const holdDice = document.getElementById("hold");
let result = document.querySelector('.result');

const store = () => {
   if(activePlayer == player1) {
      scoreP1.textContent = parseInt(scoreP1.textContent) + parseInt(roundPlayerOne.textContent);
      roundPlayerOne.textContent = 0;
      scoreP1.textContent >= 100 ? endGame : changePlayer();
   } else {
      scoreP2.textContent = parseInt(scoreP2.textContent) + parseInt(roundPlayerTwo.textContent);
      roundPlayerTwo.textContent = 0;
      scoreP2.textContent >= 100 ? endGame : changePlayer();
   }
}

//  fin du jeu


     



