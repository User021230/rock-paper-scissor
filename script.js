function getcomputerChoice(){
    let str = ["Rock","Paper","scissor"]
    let rndm = str[Math.floor(Math.random() * 3)]
    return rndm;
}

function Round(playerSelection,computerSelection){
    var result = "";
    if(playerSelection==computerSelection){
        result = 2;
    }else if((playerSelection=="scissors" && computerSelection=="paper") ||(
        playerSelection=="paper" && computerSelection=="rock") ||
        (playerSelection=="rock" && computerSelection=="scissor")){
        result = 1;
    }else if((computerSelection=="scissors" && playerSelection=="paper") ||
            (computerSelection=="paper" && playerSelection=="rock") ||
            (computerSelection=="rock" && playerSelection=="scissor")){
        result = 0;
    }
    return result;
}


function game(){
    let PlayerScore = 0;
    let ComputerScore = 0;
    for(i = 0;i < 5; i++){
        if(round()==1){
            PlayerScore +=1; 
        }else if(round()=2){
            ComputerScore +=1;
        }else if(round()==0){
            i--;
        }
    }

    
}
console.log("Hello World")
console.log(Round("scissor",getcomputerChoice().toLowerCase()));