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


function game(){
    let PlayerScore = 0;
    let ComputerScore = 0;
    resume = true;
    while(resume){
        
        if(round()==1){
            PlayerScore +=1;
            console.log("player Score: " + PlayerScore);
        }else if(round()=2){
            ComputerScore +=1;
            console.log("Computer Score: " + ComputerScore);
        }else if(round()==0){
            i--;
            console.log("Draw");
        }

        if(playerScore = 5){
            console.log("player Wins");
            resume = false;
        }else if(ComputerScore  = 5){
            console.log("computer wins");
            resume = false;
        }
    }

    
}
console.log("Hello World")
console.log(Round("scissor",getcomputerChoice().toLowerCase()));