
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

    //print error message and exit if a string is not inputted into 
    //playerSelection. Otherwise, converts the string to all upper case
    if (typeof playerSelection !== "string") {
        console.log('Please input "ROCK", "PAPER", or "SCISSORS"');
        return;
    }
    else {
        playerSelection = playerSelection.toUpperCase();
    }

    //print error message if computerSelection is reurns ERROR or if the
    //playerSelection is not equal to rock, paper, or scissors
    if (computerSelection === 'ERROR' || (playerSelection !== 'ROCK' &&
    playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS')) {
        console.log('There was an error with the selections');
    }

    //Prints that there's a tie if the computerSelection is equal to the 
    //playerSelection
    else if (computerSelection === playerSelection) {
        console.log("It's a tie!");
        return;
    }

    //if the computer wins, display "you lose"
    else if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) {

            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return;
    }

    //if the player wins, display "you win"
    else {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return;
    }
}


//execute
//for loop to play five games of RPS agianst the user
//for(i=0;i<5;i++) {

//uses the computerPlay function for the computer's choice and prompts
//the user to enter a value
const btn = document.querySelectorAll('button');

btn.forEach((button) => {

    button.addEventListener('click', (e) => {
        playRound(computerPlay(), button.id)
    });
});