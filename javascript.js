function getComputerChoice(){
    let br = Math.floor(Math.random()*3);
    switch(br){
        case 0: return "Scissors"; break;
        case 1: return "Rock"; break;
        case 2: return "Paper"; break;
    }
}
function getPlayerChoice(){
    let final;
    do{
    let choice = prompt("Rock, paper or scissors?", "type here");
    choice = choice.toLowerCase();
    final = choice.charAt(0).toUpperCase() + choice.slice(1);
    }while(!(final == "Scissors" ||final == "Paper"||final == "Rock"));
    return final;
}

function playRound(){
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    //Rock
    if(playerSelection == "Rock"){
        if(computerSelection=="Rock"){

            console.log("It's a tie! Rock ties with Rock");

        } else if(computerSelection == "Paper"){

            console.log("You lose! Paper beats Rock.");

        } else if(computerSelection == "Scissors"){

            console.log("You win! Rock beats Scissors.");

        }
    }
    //Paper
    if(playerSelection == "Paper"){
        if(computerSelection == "Rock"){

            console.log("You win! Paper beats Rock");

        } else if(computerSelection == "Paper"){

            console.log("It's a tie! Paper ties with Paper.");

        } else if(computerSelection == "Scissors"){

            console.log("You lose! Scissors beat Paper.");
            
        }
    }
    //Scissors
    if(playerSelection == "Scissors"){
        if(computerSelection == "Rock"){

            console.log("You lose! Rock beats Scissors.");

        } else if(computerSelection == "Paper"){

            console.log("You win! Scissors beat Paper.");

        } else if(computerSelection == "Scissors"){

            console.log("It's a tie! Scissors tie with Scissors.");

        }
    }
}

playRound();