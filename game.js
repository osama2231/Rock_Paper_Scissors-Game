/*
    As you see, I've made a couple of changes in my code from the last time.

    When you see the word "Edited:" in the other comments that I'm gonna comment down.
    That means that I've added something or changed something.

    Wish me a good luck in my career. :)
*/

// Edited: I have added those DOM methods to manipulate some of the elements in
// the webpage.
const allButtons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const content = document.createElement('div');
const whoWon = document.createElement('div');

content.classList.add('content');
whoWon.classList.add('finalResult');

let playerWon = 0, computerWon = 0;
let resetButton;

// this function randomly returns one of the three elements inside an array
function computerPlay(){
    const arr = ['Rock', 'Paper', 'Scissors'];

    let randomly = arr[Math.floor(Math.random() * arr.length)];
    return randomly; 
}

// Edited: Here this function does the samething than before. But here as u see
// I added the texts to the content element that I've created up. And 
// in each round the player or the computer won, I've incremented one of the two vars
// I've declared up and append it to the "results" container.
function playRound(playerSelection, computerSelection) {

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
        content.textContent = "Tie";

    else if((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper"))
        content.textContent = "You Lost!!! Paper beats the Rock. Computer won " + ++computerWon + " times";

    else if((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock"))
        content.textContent = "You Won!!! Paper beats the Rock. You won " + ++playerWon + " times";

    else if((playerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "rock"))
        content.textContent = "You Lost!!!  Rock beats the Scissors. Computer won " + ++computerWon + " times";

    else if((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissors" || computerSelection.toLowerCase() === "scissor"))
        content.textContent = "You Won!!!  Rock beats the Scissors. You won " + ++playerWon + " times";

    else if((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "scissor"))
        content.textContent = "You Lost!!!  Scissors cuts the Paper. Computer won " + ++computerWon + " times";

    else if((playerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "paper"))
        content.textContent = "You Won!!!  Scissors cuts the Paper. You won " + ++playerWon + " times";

    results.appendChild(content);
}

// Edited: in this function I've removed the loop that I've wrote before. 
// And just checked if the player won the game, then I congratulate him and
// set the game over. But if the computer won, I offer my condolences to the player
// and set the game over.
function game(){
    if(playerWon === 5){
        whoWon.textContent = 'CONGRATULATIONS!!!! You won against the PC. The door is now open. You can exit now.';
        whoWon.style.background = 'green';
        results.appendChild(whoWon);
        setGameOver();
    }
    else if(computerWon === 5){
        whoWon.textContent = 'Oooops!! You lost. You are gonna die now. See you in the afterlife.';
        whoWon.style.background = 'red';
        results.appendChild(whoWon);
        setGameOver();
    }
}

// Edited: This new forEach funtion, that I've newly added, simply loops
// through all the buttons found in the webpage.
// If anyone of them has been clicked, then the addEventListener will work.
allButtons.forEach((button) => {
    button.addEventListener('click', function(ev) { 
      let computerSelection = computerPlay();
      playRound(ev.target.value, computerSelection);
      game();
    });
});

// Edited: I've added this new setGameOver funtion. Its job is simply to 
// end the game and call the resetGame funtion to do its job.
function setGameOver(){
    allButtons.disabled = true;
    resetButton = document.createElement('button');
    resetButton.classList.add('restart');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

// Edited: I've added this new resetGame function. Its job is simply to
// reset the whole game.
function resetGame(){
    playerWon = 0;
    computerWon = 0;

    const theResults = document.querySelectorAll('.results div');
    for(const reset of theResults){
        reset.textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);

    allButtons.disabled = false;
    
    whoWon.textContent = '';
    whoWon.style.background = 'white';
}