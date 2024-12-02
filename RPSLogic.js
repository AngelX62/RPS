

function getComputerChoice() {
    // Get the computer choice
    let compChoice = Math.floor(Math.random() * 3) + 1;

    if (compChoice === 1) {
        return "rock";
    } else if (compChoice === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    // Get the human choice
    let humanChoice = prompt("Enter your choice (rock, paper, or scissor)");

    if (humanChoice.toLowerCase() != "rock" && humanChoice.toLowerCase() != "scissor"
        && humanChoice.toLowerCase() != "paper") {
            return "Invalid input";
    } else {
        return humanChoice.toLowerCase();
    }
}
// Intialize user and computer score
let humanScore = 0, computerScore = 0;
// Function for Rock paper Scissor logic
function playRound(humanChoice, compChoice) {
    if (humanChoice === "rock" && compChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
        console.log("Your score: " + humanScore + " Computer Score: " + computerScore);
    
    } else if (humanChoice === "paper" && compChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
        console.log("Your score: " + humanScore + " Computer Score: " + computerScore);
   
    } else if (humanChoice === "paper" && compChoice === "scissor") {
        console.log("You lose! Scissor beats Paper");
        computerScore++;
        console.log("Your score: " + humanScore + " Computer Score: " + computerScore);
    
    } else if (humanChoice === "scissor" && compChoice === "paper") {
        console.log("You win! Scissor beats Paper.");
        humanScore++;
        console.log("Your score: " + humanScore + " Computer Score: " + computerScore);
    
    } else if (humanChoice === "rock" && compChoice === "scissor") {
        console.log("You win! Rock beats Scissor.");
        humanScore++;
        console.log("Your score: " + humanScore + " Computer Score: " + computerScore);

    } else if (humanChoice === "scissor" && compChoice === "rock") {
        console.log("You lose! Rock beats Scissor.");
        computerScore++;
        console.log("Your score: " + humanScore + " Computer Score: " + computerScore);
    
    } else if (humanChoice === compChoice) {
        console.log("It's a tie!");
        console.log("Your score: " + humanScore + " Computer Score: " + computerScore);
    
    } else {
        console.log("Invalid input. Choose rock, paper, or scissor.");
    }
}

// Play the entire game
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        // Print message
        if (humanScore > computerScore) {
            console.log("You win the game!");
        } else {
            console.log("You lose!");
        }
    }
}

