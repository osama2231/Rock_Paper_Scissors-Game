// this function randomly returns one of the three elements inside an array
function computerPlay(){
    const arr = ['Rock', 'Paper', 'Scissors'];

    let randomly = arr[Math.floor(Math.random() * arr.length)];
    return randomly; 
}

// this function returns the winner between the user and the computer of single round
function playRound(playerSelection, computerSelection) {
    let userWon = 0, computerWon = 0;

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Tie";
    }
    else if((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper")){
        computerWon++;
        return "You Lost!!! Paper beats the Rock";
    }
    else if((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock")){
        userWon++;
        return "You Won!!! Paper beats the Rock";
    }
    else if((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissors" || computerSelection.toLowerCase() === "scissor")){
        userWon++;
        return "You Won!!!  Rock beats the Scissors";
    }
    else if((playerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "rock")){
        computerWon++;
        return "You Lost!!!  Rock beats the Scissors";
    }
    else if((playerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "paper")){
        userWon++;
        return "You Won!!!  Scissors cuts the Paper";
    }
    else if((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "scissor")){
        computerWon++;
        return "You Lost!!!  Rock beats the Scissors";
    }
    else{
        return "You have entered a wrong string. You should enter one of the followings \'Rock\', \'Paper\' or \'Scissors\'. You can type them as captial letters or small letters.";
    }
}

// this function returns 1 "if u won" or 0 "if u lost". Otherwise, it returns -1.
// it helps me decide who won the most rounds.
function winnersOfOneRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return -1;
    }
    else if((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock")){
        return 1;
    }
    else if((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper")){
        return 0;
    }
    else if((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissors" || computerSelection.toLowerCase() === "scissor")){
        return 1;
    }
    else if((playerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "rock")){
        return 0;
    }
    else if((playerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "paper")){
        return 1;
    }
    else if((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "scissor")){
        return 0;
    }
    else{
        return -1;
    }
}

// this function has a loop that plays 5 round games and in each round displays who won. 
// at last it displays who won the most rounds.
function game(){
    let userWon = 0, computerWon = 0;

    for(let i = 0; i < 5; i++){
        let input = prompt("Whats your choice?");
        let playerSelection = input;
        let computerSelection = computerPlay();
        let winner = winnersOfOneRound(playerSelection, computerSelection);
        if(winner === 1){
            userWon++;
        }
        else if(winner === 0){
            computerWon++;
        }
        console.log(playRound(playerSelection, computerSelection));
    }
    if(userWon > computerWon){
        console.log("You Won!!!");
    }
    else if(userWon < computerWon){
        console.log("You Lost!!!");
    }
    else{
        console.log("Draw");
    }
}

game();