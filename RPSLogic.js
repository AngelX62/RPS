

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

// Intialize user and computer score
let humanScore = 0, computerScore = 0;
// Function for Rock paper Scissor logic
function playRound(humanChoice, compChoice) {
    if (humanChoice === "rock" && compChoice === "paper") {
        message.textContent = "You lose! Paper beats Rock.";
        computerScore++;
    
    } else if (humanChoice === "paper" && compChoice === "rock") {
        message.textContent = "You win! Paper beats Rock.";
        humanScore++;
   
    } else if (humanChoice === "paper" && compChoice === "scissor") {
        message.textContent = "You lose! Scissor beats Paper";
        computerScore++;
    
    } else if (humanChoice === "scissor" && compChoice === "paper") {
        message.textContent = "You win! Scissor beats Paper.";
        humanScore++;
    
    } else if (humanChoice === "rock" && compChoice === "scissor") {
        message.textContent = "You win! Rock beats Scissor.";
        humanScore++;

    } else if (humanChoice === "scissor" && compChoice === "rock") {
        message.textContent = "You lose! Rock beats Scissor.";
        computerScore++;
    
    } else if (humanChoice === compChoice) {
        message.textContent = "It's a tie!";
    }

    res.textContent = "Your score: " + humanScore + " Computer Score: " + computerScore;

    if (humanScore == 5) {
        message.textContent = "You won the game!";
        humanScore = 0;
        computerScore = 0;
        disable();
    }

    if (computerScore == 5) {
        message.textContent = "You lost the game!";
        humanScore = 0;
        computerScore = 0;
        disable();
    }

    function disable() {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
    }
}

// Create three buttons (rock, paper, scissor)
// Add event listener to the buttons that call playRound function
const buttonDiv = document.querySelector("#buttons");

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";

const scissorButton = document.createElement("button");
scissorButton.textContent = "Scissor";
// Add node to the end of the list of children of the parent node
buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorButton);

// Results
const res = document.createElement("div");
const resDiv = document.querySelector('#results');
resDiv.appendChild(res);

// Message
const message = document.createElement("p");
const messagePara = document.querySelector("#message");
messagePara.appendChild(message);


rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

scissorButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissor", computerChoice);
});


