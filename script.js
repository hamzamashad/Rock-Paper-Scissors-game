function computerPlay() {
    const randomSelector = Math.floor(Math.random() * 3);
    const gameOptions = ["rock", "paper", "scissors"];
    return gameOptions[randomSelector];
}
function playerInput() {
    while (true) {
        const playerInput = prompt("Player's Turn.\nEnter your choice (Rock, Paper, or Scissors)").toLowerCase();
        if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors") {
            return playerInput;
        }
        else {
            window.alert("Invalid input. Please type in your choice using correct spelling of the word.")
        }
    }
}
function playRound(playerSelection, computerSelection) {
    let roundResult;
    if (playerSelection == computerSelection) {
        roundResult = "tie";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        roundResult = "computer";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResult = "player";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResult = "player";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResult = "computer";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = "player";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = "computer";
    }
    return roundResult;
}
function game() {
    let playerScore = 0,
    computerScore = 0,
    tieScore = 0;
    for (let roundNo = 1; roundNo <= 5; roundNo++) {
        const playerChoice = playerInput(),
        computerChoice = computerPlay();
        const roundWinner = playRound(playerChoice, computerChoice);
        if (roundWinner == "computer") {
            window.alert(`Player played: ${playerChoice}\nComputer played: ${computerChoice}\n\nRound ${roundNo}'s winner is the Computer!`);
            computerScore++;
        }
        else if (roundWinner == "player") {
            window.alert(`Player played: ${playerChoice}\nComputer played: ${computerChoice}\n\nRound ${roundNo}'s winner is the Player!`);
            playerScore++;
        }
        else {
            window.alert(`Player played: ${playerChoice}\nComputer played: ${computerChoice}\n\nRound ${roundNo} is a Tie!`);
            tieScore++;
        }
    }

    let gameWinner;
    if (playerScore > computerScore) {
        gameWinner = "player";
    }
    else if (playerScore < computerScore) {
        gameWinner = "computer";
    }
    else {
        let roundNo = 6;
        while (true) {
            window.alert(`Rounds played: ${playerScore + computerScore + tieScore}\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}\nTies: ${tieScore}\n\nIt's a Tie! Extra round incoming`);
            const playerChoice = playerInput(),
            computerChoice = computerPlay();
            const extraRound = playRound(playerChoice, computerChoice);
            if (extraRound == "computer") {
                gameWinner = "computer";
                computerScore++;
                window.alert(`Player played: ${playerChoice}\nComputer played: ${computerChoice}\n\nRound ${roundNo}'s winner is the Computer!`);
                break;
            }
            else if (extraRound == "player") {
                gameWinner = "player";
                playerScore++;
                window.alert(`Player played: ${playerChoice}\nComputer played: ${computerChoice}\n\nRound ${roundNo}'s winner is the Player!`);
                break;
            }
            tieScore++;
            roundNo++;
        }
    }
    return [gameWinner, playerScore, computerScore, tieScore];
}

window.alert("Rock Paper Scissors game starting!\nThe game is played for 5 rounds. If the winner is not decided then, extra rounds are played.");
const [winner, playerScore, computerScore, tieScore] = game();
window.alert(`The winner is the ${winner}!\n\nRounds played: ${playerScore + computerScore + tieScore}\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}\nTies: ${tieScore}`);