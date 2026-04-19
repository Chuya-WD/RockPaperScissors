console.log(getHumanChoice()); 

function getComputerChoice(){
    //Math.random() genera un número aleatorio >=0 y <1 

    let numAleatorio = Math.random();

    if(numAleatorio < 0.33){
        return "Piedra";
    }else if (numAleatorio < 0.66){
        return "Papel";
    }
    return "Tijera";
}

function getHumanChoice(){
    // prompt devuelve lo que el usuario haya escrito como un "string" (texto)
    let choice = prompt("Elije una jugada: piedra, papel o tijera");
    return choice;
}

let humanScore = 0;
let computerScore = 0;