
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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let hC=humanChoice.toLowerCase();
    if(hC === computerChoice){
        alert(`Empateeee! es un empate: computador = ${computerChoice}, usuario = ${humanChoice}`)
    }
    if(hC === "piedra" && computerChoice === "papel" ){
        computerScore++; 
    }else if(hC === "piedra" && computerChoice === "tijera"){
        humanChoice++; 
    }

    if(hC === "papel" && computerChoice === "tijera" ){
        computerScore++; 
    }else if(hC === "papel" && computerChoice === "piedra"){
        humanChoice++; 
    }

    if(hC === "tijera" && computerChoice === "piedra" ){
        computerScore++; 
    }else if(hC === "tijera" && computerChoice === "papel"){
        humanChoice++; 
    }
}

