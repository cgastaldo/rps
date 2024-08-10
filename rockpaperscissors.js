
/* Function to generate number between 0 and 1.
Associate with one of three choices for computer.*/
function getComputerChoice() {
    choice = Math.random();
    if (choice < 0.333){
        return "rock";
    }
    else if (choice<0.666){
        return "paper";
    }
    else {
        return "scissors";
    }
}

/*Function to obtain player choice. */
function getHumanChoice() {
    let hchoice = prompt("Enter Rock, Paper, or Scissors");
    return hchoice;
}

let humanScore = 0;
let computerScore = 0;

/*Function to determine winner and increment score. */
function playRound(humanChoice, computerChoice){
    if ((humanChoice.toLowerCase() == "rock" && computerChoice == "scissors") ||
       (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") ||
       (humanChoice.toLowerCase() == "paper" && computerChoice == "rock")){
        humanScore++;
        console.log("You win! You played " + humanChoice + 
            " and computer played " + computerChoice);
    }
    else if ((humanChoice.toLowerCase() == "rock" && computerChoice == "paper") ||
        (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock") ||
        (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors")){
        computerScore++;   
        console.log("Computer wins. Try again! You played " + humanChoice + 
            " and computer played " + computerChoice);
    }
    else if ((humanChoice.toLowerCase() == "rock" && computerChoice == "rock") ||
        (humanChoice.toLowerCase() == "paper" && computerChoice == "paper") ||
        (humanChoice.toLowerCase() == "scissors" && computerChoice == "scissors")){
        console.log("It's a tie! You both played " + humanChoice);
    }
    else {
        console.log("Please enter valid entry!");
    }
    console.log("Player Score: " + String(humanScore) + 
        " - Computer score: " + String(computerScore));
}

/* Function to play best out of 5 games and announce the winner.*/
function playGame(){
    let i = 0;
    while (i<5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }
    console.log(humanScore, computerScore);
    console.log("The winner of the best out of 5 game championship is....");
    if (humanScore == computerScore){
        console.log("No one! erm, I mean everyone is a winner! It's a tie");
    }
    else if (humanScore>computerScore){
        console.log("You did it! You won!");
    }
    else{
        console.log("The computer! Better luck next time.");
    }
}

playGame();


