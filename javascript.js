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

let scoreComputer=0, scorePlayer=0;

function playRound(choice){
    let computerSelection = getComputerChoice();
    let playerSelection = choice;

    //Rock
    if(playerSelection == "Rock"){
        if(computerSelection=="Rock"){

            document.getElementById("currentround").innerHTML = "It's a tie! Rock ties with Rock";

        } else if(computerSelection == "Paper"){

            document.getElementById("currentround").innerHTML = "You lose! Paper beats Rock.";
            scoreComputer++;

        } else if(computerSelection == "Scissors"){

            document.getElementById("currentround").innerHTML = "You win! Rock beats Scissors.";
            scorePlayer++;

        }
    }
    //Paper
    if(playerSelection == "Paper"){
        if(computerSelection == "Rock"){

            document.getElementById("currentround").innerHTML = "You win! Paper beats Rock";
            scorePlayer++;

        } else if(computerSelection == "Paper"){

            document.getElementById("currentround").innerHTML = "It's a tie! Paper ties with Paper.";

        } else if(computerSelection == "Scissors"){

            document.getElementById("currentround").innerHTML = "You lose! Scissors beat Paper.";
            scoreComputer++;
            
        }
    }
    //Scissors
    if(playerSelection == "Scissors"){
        if(computerSelection == "Rock"){

            document.getElementById("currentround").innerHTML = "You lose! Rock beats Scissors.";
            scoreComputer++;

        } else if(computerSelection == "Paper"){

            document.getElementById("currentround").innerHTML = "You win! Scissors beat Paper.";
            scorePlayer++;

        } else if(computerSelection == "Scissors"){

            document.getElementById("currentround").innerHTML = "It's a tie! Scissors tie with Scissors.";

        }
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        playRound();
    }
    if(scoreComputer>scorePlayer){
        console.log("5 rounds have passed. You lose, the computer has more points!");
    }
    if(scorePlayer>scoreComputer){
        console.log("5 rounds have passed. You win, the player has more points!")
    }
    if(scoreComputer==scorePlayer){
        console.log("5 rounds have passed. It's a tie!")
    }
}
const btnr = document.getElementById("rock");
const btnp = document.getElementById("paper");
const btns = document.getElementById("scissors");

btnr.addEventListener("click", function(){playRound("Rock");});
btnp.addEventListener("click", function(){playRound("Paper");});
btns.addEventListener("click", function(){playRound("Scissors");});
