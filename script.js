let PlayerScore = 0;
let ComputerScore = 0;
let count = 0
resume = true;

function getcomputerChoice(){
    let str = ["Rock","Paper","scissor"]
    let rndm = str[Math.floor(Math.random() * 3)]
    return rndm;
}

function Round(playerSelection,computerSelection){
    let result = "";
    if(playerSelection==computerSelection){
        result = 2;
    }else if((playerSelection=="scissor" && computerSelection=="paper") ||(
        playerSelection=="paper" && computerSelection=="rock") ||
        (playerSelection=="rock" && computerSelection=="scissor")){
        result = 1;
    }else if((computerSelection=="scissor" && playerSelection=="paper") ||
            (computerSelection=="paper" && playerSelection=="rock") ||
            (computerSelection=="rock" && playerSelection=="scissor")){
        result = 0;
    }
    return result;
}


function game(PlayerS){
    
    if(!resume){
        PlayerScore = 0;
        ComputerScore = 0;
        count = 0
        document.getElementById("player-score").innerHTML = "0";
        document.getElementById("computer-score").innerHTML = "0";
        document.getElementById("round-res").innerHTML = "0";
        resume = true;
    }
    count+= 1;
    if(Round(PlayerS,getcomputerChoice()) == 1){
        PlayerScore +=1;
        document.getElementById("player-score").innerHTML = PlayerScore;
        document.getElementById("round-res").innerHTML = "Player wins Round " + count + "!  ;)";
    }else if(Round(PlayerS,getcomputerChoice()) == 2){
        ComputerScore +=1;
        document.getElementById("computer-score").innerHTML = ComputerScore;
        document.getElementById("round-res").innerHTML = "Computer wins Round " + count + "!   [:])";
    }else if(Round(PlayerS,getcomputerChoice()) == 0){
        document.getElementById("round-res").innerHTML = "Round "+ count + " is a draw :(";
    }

    if(PlayerScore == 5){
        document.getElementById("round-res").innerHTML = "<strong> PLAYER WINS <strong>"
        resume = false;
    }else if(ComputerScore == 5){
        document.getElementById("round-res").innerHTML = "<strong> COMPUTER WINS <strong>"
        resume = false;
    }

    
}
console.log("Hello World")
