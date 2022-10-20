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

let computerSelection = getComputerChoice();

console.log(computerSelection);

let playerSelection = getPlayerChoice();

console.log(playerSelection);