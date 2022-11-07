function getComputerChoice(){
    let br = Math.floor(Math.random()*3);
    switch(br){
        case 0: return "Scissors"; break;
        case 1: return "Rock"; break;
        case 2: return "Paper"; break;
    }
}
let scoreComputer=0, scorePlayer=0, rounds=0;

function playRound(choice){
    let computerSelection = getComputerChoice();
    let playerSelection = choice;

    //Rock
    if(playerSelection == "Rock"){
        if(computerSelection=="Rock"){

            document.getElementById("currentround").innerHTML = "It's a tie! Rock ties with Rock";
            checkScore();

        } else if(computerSelection == "Paper"){

            document.getElementById("currentround").innerHTML = "You lose! Paper beats Rock.";
            scoreComputer++;
            document.getElementById("results").innerHTML = `player score: ${scorePlayer} computer score: ${scoreComputer} `;
            checkScore();

        } else if(computerSelection == "Scissors"){

            document.getElementById("currentround").innerHTML = "You win! Rock beats Scissors.";
            scorePlayer++;
            document.getElementById("results").innerHTML = `player score: ${scorePlayer} computer score: ${scoreComputer} `;
            checkScore();

        }
    }
    //Paper
    if(playerSelection == "Paper"){
        if(computerSelection == "Rock"){

            document.getElementById("currentround").innerHTML = "You win! Paper beats Rock";
            scorePlayer++;
            document.getElementById("results").innerHTML = `player score: ${scorePlayer} computer score: ${scoreComputer} `;
            checkScore();

        } else if(computerSelection == "Paper"){

            document.getElementById("currentround").innerHTML = "It's a tie! Paper ties with Paper.";
            checkScore();

        } else if(computerSelection == "Scissors"){

            document.getElementById("currentround").innerHTML = "You lose! Scissors beat Paper.";
            scoreComputer++;
            document.getElementById("results").innerHTML = `player score: ${scorePlayer} computer score: ${scoreComputer} `;
            checkScore();
            
        }
    }
    //Scissors
    if(playerSelection == "Scissors"){
        if(computerSelection == "Rock"){

            document.getElementById("currentround").innerHTML = "You lose! Rock beats Scissors.";
            scoreComputer++;
            document.getElementById("results").innerHTML = `player score: ${scorePlayer} computer score: ${scoreComputer} `;
            checkScore();

        } else if(computerSelection == "Paper"){

            document.getElementById("currentround").innerHTML = "You win! Scissors beat Paper.";
            scorePlayer++;
            document.getElementById("results").innerHTML = `player score: ${scorePlayer} computer score: ${scoreComputer} `;
            checkScore();


        } else if(computerSelection == "Scissors"){

            document.getElementById("currentround").innerHTML = "It's a tie! Scissors tie with Scissors.";
            checkScore();

        }
    }
}

function checkScore(){
    if(rounds==5){
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
}
const btnr = document.getElementById("rock");
const btnp = document.getElementById("paper");
const btns = document.getElementById("scissors");

btnr.addEventListener("click", function(){rounds++; playRound("Rock");});
btnp.addEventListener("click", function(){rounds++; playRound("Paper");});
btns.addEventListener("click", function(){rounds++; playRound("Scissors");});
