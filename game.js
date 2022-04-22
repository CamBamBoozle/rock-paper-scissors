
//function to return Rock, Paper, or Scissors in the form of a string
function computerPlay() {

    //randomly produces numbers 0 through 2
    let sign = Math.floor(3 * (Math.random()));
    console.log(sign);

    switch (sign) {
        case 0:
            sign = 'Rock';
            break;

        case 1:
            sign = 'Paper';
            break;

        case 2:
            sign = 'Scissors';
            break;

        default:
            sign = 'Error';
            break;
    }

    console.log(sign);
}

//execute
computerPlay();