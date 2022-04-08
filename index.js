
let init = document.getElementById('newGame')
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let btnRoll = document.getElementById('.Roll');
let img = document.querySelector('.imgD');


   

//---------------------  initialiser la partie ---------------------------//

newGame.addEventListener("click", ()  => { 

         player1 = prompt("joueur 1, quel est votre pseudo ?");
         player2 = prompt("joueur 2, quel est votre pseudo ?");
         if (confirm("nouvelle partie ?") == true) {  
         document.querySelector('.player1').innerHTML = player1;
         document.querySelector('.player2').innerHTML = player2;
         //blockPlayer.style.opacity = 1;
         blockPlayer.style.background= "white";
         scoreP1.textContent = "0";
         scoreP2.textContent = "0";
         current1.textContent = "0";
         current2.textContent = "0";
         result.innerHTML="";
         if(activePlayer == player1) {
            changePlayer();
         }
        } 
})
     

//---------------------------- au clic du bouton lancé le dé --------------------//

let current1 = document.getElementById('roundPlayerOne')
let current2 = document.getElementById('roundPlayerTwo')
let activePlayer = player1;

roll.addEventListener("click", () => {
   let diceFaces = [
      "imgDice/dice1.png",
      "imgDice/dice2.png",
      "imgDice/dice3.png",
      "imgDice/dice4.png",
      "imgDice/dice5.png",
      "imgDice/dice6.png"
   ];
   let ValueDice = Math.floor(Math.random() * diceFaces.length) + 1;
   let dice = diceFaces[ValueDice - 1];
   img.setAttribute('src', dice)
   if(ValueDice == 1) {
      if(activePlayer == player1 ) {
         current1.textContent = 0;
      } else {
         current2.textContent = 0;
      }
      changePlayer();
   } else  {
      if(activePlayer == player1) {
         current1.textContent = parseInt(current1.textContent) + ValueDice;
      } else {
         current2.textContent = parseInt(current2.textContent) + ValueDice;
      }
   }
});

// changement de joueur 

function  changePlayer() {
   if(activePlayer == "1") {
      blockPlayer.style.opacity = "1";
      blockPlayerTwo.style.opacity = "0";
   } else  {
      blockPlayer.style.opacity = "0";
      blockPlayerTwo.style.opacity = "1";
   }
}













// //   const changePlayer = () => {

// //     activePlayer.classList.remove("player1");
// //     activePlayer.classList.add("player2");
// //     activePlayer = activePlayer = player1 ? player2 : player1;
// //     activePlayer.classList.remove("player2");
// //     activePlayer.classList.add("player1");
    
    
// //   }


// // bouton pour stocker les points

// let scoreP1 = document.getElementById("totalP1");
// let scoreP2 = document.getElementById("totalP2");
// const holdDice = document.getElementById("hold");
// let result = document.querySelector('.result');

// const store = () => {
//    if(activePlayer == player1) {
//       scoreP1.textContent = parseInt(scoreP1.textContent) + parseInt(scoreP1.textContent);
//       current1.textContent = 0;
//       scoreP1.textContent >= 100 ? endGame : changePlayer();
//    } else {
//       scoreP2.textContent = parseInt(scoreP2.textContent) + parseInt(scoreP2.textContent);
//       current2.textContent = 0;
//       scoreP2.textContent >= 100 ? endGame : changePlayer();
//    }
// }

// // changement de joueur

// function nextRound() {
//    if(activePlayer === 1) {   
//       player1.style.opacity == "1";
//       player2.style.opacity == "0";
//     } else  {
//       player1.style.opacity == "0";
//       player2.style.opacity == "1";
//     }
// }

// //  fin du jeu
// let play = document.getElementById('blockplayer')
// const end = () => {
//    activePlayer = (activePlayer == player1) ? player1 : player2;
//    play.innerHTML =(activePlayer == player1 ? player1.id : player2.id ) + " a gagné !";

// }
// holdDice.addEventListener("click", store);

     



