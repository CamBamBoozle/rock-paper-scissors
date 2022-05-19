
//function to return Rock, Paper, or Scissors in the form of a string
function computerPlay() {

    //randomly produces numbers 0 through 2
    let sign = Math.floor(3 * (Math.random()));
    //console.log(sign);

    //prints what was selected by the computer based off of what number was produced
    //0 for rock, 1 for paper, and 2 for scissors
    switch (sign) {
        case 0:
            sign = 'ROCK';
            break;

        case 1:
            sign = 'PAPER';
            break;

        case 2:
            sign = 'SCISSORS';
            break;

        default:
            sign = 'ERROR';
            break;
    }
    //console.log(sign);
    return sign;
}


//function to simulate playing a game of RPS with the computer.
function playRound(computerSelection, playerSelection) {

    //body of webpage
    const body = document.querySelector('body');

    //rock/paper/scissors buttons at top of the webpage
    const buttons = document.querySelectorAll('.btn');

    //section of webpage that displays who won/loses
    const outcome = document.querySelector('.outcome');

    //will display the outcome of each game
    const results = document.createElement('p');

    //user and computer scores on webpage display
    const user = document.querySelector('.user > .count');
    const computer = document.querySelector('.computer > .count');

    //user and computer scores in js file
    let userScore = user.textContent;
    let computerScore = computer.textContent;

    //print error message and exit if a string is not inputted into 
    //playerSelection. Otherwise, converts the string to all upper case
    if (typeof playerSelection !== "string") {
        results.innerText = ('Please input "ROCK", "PAPER", or "SCISSORS"');
        outcome.prepend(results);
    }
    else {
        playerSelection = playerSelection.toUpperCase();
    }

    //print error message if computerSelection is reurns ERROR or if the
    //playerSelection is not equal to rock, paper, or scissors
    if (computerSelection === 'ERROR' || (playerSelection !== 'ROCK' &&
    playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS')) {
        results.innerText = ('There was an error with the selections');
        outcome.prepend(results);
        return;
    }


    //Prints that there's a tie if the computerSelection is equal to the 
    //playerSelection
    if (computerSelection === playerSelection) {
        results.innerText = ("It's a tie!");
        outcome.prepend(results);
        return;
    }

    //if the computer wins, display "you lose"
    else if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) {

        results.innerText = (`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        computer.innerHTML = computerScore;
        outcome.prepend(results);

        if (computerScore == 5) {
            results.innerText = ('Sorry! The Computer Wins!\n\n');
            outcome.prepend(results);

            //deletes buttons from top of webpage
            buttons.forEach((button) => {
                body.removeChild(button)
            });
        }
    }

    //if the player wins, display "you win"
    else {
        results.innerText = (`You Win! ${playerSelection} beats ${computerSelection}`);
        userScore++;
        user.innerHTML = userScore;
        outcome.prepend(results);

        if (userScore == 5) {
            results.innerText = ('Congrats! You Win!\n\n');
            outcome.prepend(results);
            
            //deletes buttons from top of webpage
            buttons.forEach((button) => {
                body.removeChild(button)
            });
        }
    }    
}


//uses buttons in the html file as input
const btn = document.querySelectorAll('button');

btn.forEach((button) => {

    button.addEventListener('click', (e) => {
        playRound(computerPlay(), button.id)
    });
});