
function getComputerChoice(){
    //Math.random() genera un número aleatorio >=0 y <1 

    let numAleatorio = Math.random();

    if(numAleatorio < 0.33){
        return "piedra";
    }else if (numAleatorio < 0.66){
        return "papel";
    }
    return "tijera";
}

function getHumanChoice(){
    // prompt devuelve lo que el usuario haya escrito como un "string" (texto)
    let choice = prompt("Elije una jugada: piedra, papel o tijera");
    return choice;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        let hC=humanChoice.toLowerCase();

        if(hC == computerChoice){
            console.log(`Empate: computador = ${computerChoice} usuario = ${hC}`); 
        }

        if(hC == "piedra" && computerChoice == "papel" ){
            computerScore++; 
            console.log(`Ganador: COMPUTADOR = ${computerChoice} usuario = ${hC}`); 
        }else if(hC == "piedra" && computerChoice == "tijera"){
            humanScore++; 
            console.log(`Ganador: computador = ${computerChoice} USUARIO = ${hC}`); 
        }

        if(hC == "papel" && computerChoice == "tijera" ){
            computerScore++; 
            console.log(`Ganador: COMPUTADOR = ${computerChoice} usuario = ${hC}`); 
        }else if(hC == "papel" && computerChoice == "piedra"){
            humanScore++; 
            console.log(`Ganador: computador = ${computerChoice} USUARIO = ${hC}`); 
        }

        if(hC == "tijera" && computerChoice == "piedra" ){
            computerScore++; 
            console.log(`Ganador: COMPUTADOR = ${computerChoice} usuario = ${hC}`); 
        }else if(hC == "tijera" && computerChoice == "papel"){
            humanScore++; 
            console.log(`Ganador: computador = ${computerChoice} USUARIO = ${hC}`); 
        }
    }
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore === computerScore){
        alert(`Empateeee! es un empate: computador = ${computerScore} ganadas, usuario = ${humanScore} ganadas`);
    }else if(humanScore > computerScore){
        alert(`El ganador es elusuario = ${humanScore} ganadas`)
    }else{
        alert(`El ganador es el computador = ${computerScore} ganadas`)       
    }

}

console.log(playGame()); 